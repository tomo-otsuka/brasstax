import {
  FilingStatusEnum,
  DeductionTypeEnum,
  JurisdictionEnum,
} from "./constants.js";
import {
  STANDARD_DEDUCTION_AMOUNTS,
  FILING_STATUS_TO_LONG_TERM_BRACKETS,
  STATE_TAX_DATA,
  FEDERAL_INCOME_TAX_BRACKETS,
} from "./data/taxData.js";

const JURISDICTIONS_THAT_TREAT_LONG_TERM_CAPITAL_GAINS_AS_ORDINARY_INCOME =
  new Set([JurisdictionEnum.CALIFORNIA.name]);

/**
 * Main tax calculation entry point.
 * Uses Parameter Object pattern for extensibility.
 */
export function calculateTax({
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains = 0,
  longTermCapitalGains = 0,
  deductionType = DeductionTypeEnum.STANDARD.name,
  itemizedDeduction = 0,
  taxCredits = 0,
  stateJurisdiction = null,
}) {
  // Handle ordinaryIncome as either a single number or an object of earners
  const earners =
    typeof ordinaryIncome === "object"
      ? Object.values(ordinaryIncome)
      : [Number(ordinaryIncome)];
  const totalOrdinaryIncome = earners.reduce((a, b) => a + b, 0);

  const [adjOrdinaryIncome, adjShortTermCapitalGains, adjLongTermCapitalGains] =
    adjustIncomes({
      jurisdiction,
      filingStatus,
      ordinaryIncome: totalOrdinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
      deductionType,
      itemizedDeduction,
    });

  const taxBreakdown = {};

  // Federal Income Tax
  taxBreakdown["Federal Income Tax"] = calculateIncomeTax({
    jurisdiction,
    filingStatus,
    ordinaryIncome: adjOrdinaryIncome,
    shortTermCapitalGains: adjShortTermCapitalGains,
    longTermCapitalGains: adjLongTermCapitalGains,
  });

  // LTCG Tax
  taxBreakdown["LTCG Tax"] = calculateLongTermCapitalGainsTax({
    jurisdiction,
    filingStatus,
    ordinaryIncome: adjOrdinaryIncome,
    shortTermCapitalGains: adjShortTermCapitalGains,
    longTermCapitalGains: adjLongTermCapitalGains,
  });

  // Specific Federal Taxes
  if (jurisdiction === JurisdictionEnum.FEDERAL.name) {
    taxBreakdown["Additional Medicare Tax"] = calculateAdditionalMedicareTax(
      filingStatus,
      totalOrdinaryIncome,
    );
    taxBreakdown["NIIT"] = calculateNetInvestmentIncomeTax(
      filingStatus,
      adjOrdinaryIncome,
      adjShortTermCapitalGains + adjLongTermCapitalGains,
    );
    taxBreakdown["Medicare Tax"] = totalOrdinaryIncome * 0.0145;
    taxBreakdown["Social Security Tax"] = earners.reduce(
      (sum, income) => sum + calculateSocialSecurityTax(income),
      0,
    );
  }

  // State Income Tax if applicable
  if (stateJurisdiction) {
    const [
      adjStateOrdinaryIncome,
      adjStateShortTermCapitalGains,
      adjStateLongTermCapitalGains,
    ] = adjustIncomes({
      jurisdiction: stateJurisdiction,
      filingStatus,
      ordinaryIncome: totalOrdinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
      deductionType,
      itemizedDeduction,
    });

    taxBreakdown["State Income Tax"] = calculateIncomeTax({
      jurisdiction: stateJurisdiction,
      filingStatus,
      ordinaryIncome: adjStateOrdinaryIncome,
      shortTermCapitalGains: adjStateShortTermCapitalGains,
      longTermCapitalGains: adjStateLongTermCapitalGains,
    });
  }

  // Calculate Finals
  let totalTax = Object.values(taxBreakdown).reduce((sum, tax) => sum + tax, 0);
  totalTax -= taxCredits || 0;
  totalTax = Math.max(0, totalTax);

  taxBreakdown["Total Tax"] = totalTax;

  return taxBreakdown;
}

/**
 * Adjusts incomes for deductions and capital loss carryovers.
 */
export function adjustIncomes({
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains = 0,
  longTermCapitalGains = 0,
  deductionType = DeductionTypeEnum.STANDARD.name,
  itemizedDeduction = 0,
}) {
  let adjSTCG = shortTermCapitalGains;
  let adjLTCG = longTermCapitalGains;
  let adjOrdinary = ordinaryIncome;

  if (adjLTCG < 0) {
    adjSTCG += adjLTCG;
    adjLTCG = 0;
  }
  if (adjSTCG < 0) {
    adjOrdinary += Math.max(adjSTCG, -3000);
    adjSTCG = 0;
  }

  let deduction = calculateDeduction({
    jurisdiction,
    filingStatus,
    deductionType,
    itemizedDeduction,
  });

  adjOrdinary -= deduction;
  if (adjOrdinary < 0) {
    adjSTCG += adjOrdinary;
  }
  if (adjSTCG < 0) {
    adjLTCG += adjSTCG;
  }

  return [Math.max(0, adjOrdinary), Math.max(0, adjSTCG), Math.max(0, adjLTCG)];
}

/**
 * Calculates deduction based on type and jurisdiction data.
 */
export function calculateDeduction({
  jurisdiction,
  filingStatus,
  deductionType = DeductionTypeEnum.STANDARD.name,
  itemizedDeduction = 0,
}) {
  if (deductionType === DeductionTypeEnum.STANDARD.name) {
    return _getStandardDeduction(jurisdiction, filingStatus);
  }
  if (deductionType === DeductionTypeEnum.ITEMIZED.name) {
    return itemizedDeduction;
  }
  return 0;
}

function _getStandardDeduction(jurisdiction, filingStatus) {
  const jurisdictionDeductions = STANDARD_DEDUCTION_AMOUNTS[jurisdiction];
  if (!jurisdictionDeductions) {
    return 0;
  }
  return jurisdictionDeductions[filingStatus] || 0;
}

/**
 * Core bracket-based income tax calculation.
 */
export function calculateIncomeTax({
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains = 0,
  longTermCapitalGains = 0,
}) {
  const jurisdictionData =
    jurisdiction === JurisdictionEnum.FEDERAL.name
      ? { income_tax_brackets: FEDERAL_INCOME_TAX_BRACKETS }
      : STATE_TAX_DATA[jurisdiction];

  if (!jurisdictionData || !jurisdictionData.income_tax_brackets) {
    return 0;
  }
  const brackets = jurisdictionData.income_tax_brackets[filingStatus];
  if (!brackets) {
    return 0;
  }

  let applicableIncome = ordinaryIncome + shortTermCapitalGains;
  if (
    JURISDICTIONS_THAT_TREAT_LONG_TERM_CAPITAL_GAINS_AS_ORDINARY_INCOME.has(
      jurisdiction,
    )
  ) {
    applicableIncome += longTermCapitalGains;
  }

  let totalTax = 0;
  let remainingIncome = applicableIncome;

  // Brackets are assumed to be sorted Start descending or we process from Start ascending
  // The current logic processes from Start descending effectively by loop and subtraction
  for (const bracket of brackets) {
    if (remainingIncome > bracket.bracketStart) {
      const taxableInBracket = remainingIncome - bracket.bracketStart;
      totalTax += taxableInBracket * bracket.rate;
      remainingIncome = bracket.bracketStart;
    }
  }

  return totalTax;
}

/**
 * Dedicated LTCG tax calculation for jurisdictions that distinguish it (e.g. Federal).
 */
export function calculateLongTermCapitalGainsTax({
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains = 0,
  longTermCapitalGains = 0,
}) {
  if (
    JURISDICTIONS_THAT_TREAT_LONG_TERM_CAPITAL_GAINS_AS_ORDINARY_INCOME.has(
      jurisdiction,
    )
  ) {
    return 0;
  }
  const taxBrackets = FILING_STATUS_TO_LONG_TERM_BRACKETS[filingStatus];
  let accountedIncome = ordinaryIncome + shortTermCapitalGains;
  let longTermCapitalGainsTax = 0;
  let unaccountedLongTermCapitalGains = longTermCapitalGains;

  for (const taxBracket of taxBrackets) {
    if (taxBracket.bracketEnd < ordinaryIncome + shortTermCapitalGains) {
      continue;
    }

    const gainsInBracket = Math.min(
      unaccountedLongTermCapitalGains,
      taxBracket.bracketEnd - accountedIncome,
    );

    longTermCapitalGainsTax += gainsInBracket * taxBracket.rate;
    unaccountedLongTermCapitalGains -= gainsInBracket;
    accountedIncome += gainsInBracket;
  }
  return longTermCapitalGainsTax;
}

export function calculateSocialSecurityTax(ordinaryIncome) {
  const applicableIncome = Math.min(ordinaryIncome, 147000);
  return applicableIncome * 0.062;
}

export function calculateMedicareTax(filingStatus, ordinaryIncome) {
  const additionalTax = calculateAdditionalMedicareTax(
    filingStatus,
    ordinaryIncome,
  );
  return ordinaryIncome * 0.0145 + additionalTax;
}

export function calculateAdditionalMedicareTax(filingStatus, ordinaryIncome) {
  const additionalTaxThreshold =
    filingStatus === FilingStatusEnum.MARRIED_FILING_JOINTLY.name
      ? 250000
      : 200000;
  const additionalTaxApplicableIncome = Math.max(
    0,
    ordinaryIncome - additionalTaxThreshold,
  );
  return additionalTaxApplicableIncome * 0.009;
}

export function calculateNetInvestmentIncomeTax(
  filingStatus,
  ordinaryIncome,
  capitalGains,
) {
  const thresholds = {
    [FilingStatusEnum.SINGLE.name]: 200000,
    [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 250000,
    [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 125000,
    [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 200000,
  };
  const threshold = thresholds[filingStatus];
  const applicableIncome = Math.max(
    0,
    Math.min(ordinaryIncome + capitalGains - threshold, capitalGains),
  );
  return applicableIncome * 0.038;
}
