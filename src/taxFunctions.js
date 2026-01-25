import {
  FilingStatusEnum,
  DeductionTypeEnum,
  JurisdictionEnum,
} from "./constants.js";
import {
  FEDERAL_STANDARD_DEDUCTIONS,
  FEDERAL_INCOME_TAX_BRACKETS,
  FILING_STATUS_TO_LONG_TERM_BRACKETS,
} from "./data/federalTaxData.js";
import {
  STATE_TAX_DATA,
  STATE_STANDARD_DEDUCTION_AMOUNTS,
} from "./data/stateTaxData.js";
import {
  MEDICARE_RATE,
  SOCIAL_SECURITY_RATE,
  SOCIAL_SECURITY_WAGE_BASE_LIMIT,
  ADDITIONAL_MEDICARE_RATE,
  ADDITIONAL_MEDICARE_THRESHOLD_JOINT,
  ADDITIONAL_MEDICARE_THRESHOLD_SINGLE,
  NIIT_RATE,
  NIIT_THRESHOLD_SINGLE,
  NIIT_THRESHOLD_JOINT,
  NIIT_THRESHOLD_SEPARATE,
} from "./constants/taxRates.js";

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
  // Validate inputs
  if (ordinaryIncome < 0) ordinaryIncome = 0;
  if (shortTermCapitalGains < 0) shortTermCapitalGains = 0;
  if (longTermCapitalGains < 0) longTermCapitalGains = 0;

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

  // Primary Income Tax (could be Federal or a State depending on 'jurisdiction')
  const isFederal = jurisdiction === JurisdictionEnum.FEDERAL.name;
  const primaryTaxKey = isFederal
    ? "Federal Income Tax"
    : `${jurisdiction} Income Tax`;

  taxBreakdown[primaryTaxKey] = calculateIncomeTax({
    jurisdiction,
    filingStatus,
    ordinaryIncome: adjOrdinaryIncome,
    shortTermCapitalGains: adjShortTermCapitalGains,
    longTermCapitalGains: adjLongTermCapitalGains,
  });

  // LTCG Tax (Usually Federal only in this app's context, but logic is generic)
  taxBreakdown["LTCG Tax"] = calculateLongTermCapitalGainsTax({
    jurisdiction,
    filingStatus,
    ordinaryIncome: adjOrdinaryIncome,
    shortTermCapitalGains: adjShortTermCapitalGains,
    longTermCapitalGains: adjLongTermCapitalGains,
  });

  // Specific Federal payroll/investment taxes
  if (isFederal) {
    taxBreakdown["Additional Medicare Tax"] = calculateAdditionalMedicareTax(
      filingStatus,
      totalOrdinaryIncome,
    );
    taxBreakdown["NIIT"] = calculateNetInvestmentIncomeTax(
      filingStatus,
      adjOrdinaryIncome,
      adjShortTermCapitalGains + adjLongTermCapitalGains,
    );
    taxBreakdown["Medicare Tax"] = totalOrdinaryIncome * MEDICARE_RATE;
    taxBreakdown["Social Security Tax"] = earners.reduce(
      (sum, income) => sum + calculateSocialSecurityTax(income),
      0,
    );
  }

  // State Income Tax if calculated ALONG with Federal
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

    taxBreakdown[`${stateJurisdiction} Income Tax`] = calculateIncomeTax({
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
  if (jurisdiction === JurisdictionEnum.FEDERAL.name) {
    return FEDERAL_STANDARD_DEDUCTIONS[filingStatus] || 0;
  }
  const jurisdictionDeductions = STATE_STANDARD_DEDUCTION_AMOUNTS[jurisdiction];
  if (!jurisdictionDeductions) {
    return 0;
  }
  return jurisdictionDeductions[filingStatus] || 0;
}

/**
 * Generic helper to calculate tax from a set of brackets.
 */
export function calculateTaxFromBrackets(income, brackets) {
  let totalTax = 0;
  let remainingIncome = income;

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
 * Core bracket-based income tax calculation.
 */
export function calculateIncomeTax({
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains = 0,
  longTermCapitalGains = 0,
}) {
  const isFederal = jurisdiction === JurisdictionEnum.FEDERAL.name;
  const bracketsConfig = isFederal
    ? FEDERAL_INCOME_TAX_BRACKETS
    : STATE_TAX_DATA[jurisdiction]?.income_tax_brackets;

  if (!bracketsConfig) {
    return 0;
  }
  const brackets = bracketsConfig[filingStatus];
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

  return calculateTaxFromBrackets(applicableIncome, brackets);
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
    jurisdiction !== JurisdictionEnum.FEDERAL.name ||
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
  const applicableIncome = Math.min(
    ordinaryIncome,
    SOCIAL_SECURITY_WAGE_BASE_LIMIT,
  );
  return applicableIncome * SOCIAL_SECURITY_RATE;
}

export function calculateMedicareTax(filingStatus, ordinaryIncome) {
  const additionalTax = calculateAdditionalMedicareTax(
    filingStatus,
    ordinaryIncome,
  );
  return ordinaryIncome * MEDICARE_RATE + additionalTax;
}

export function calculateAdditionalMedicareTax(filingStatus, ordinaryIncome) {
  const additionalTaxThreshold =
    filingStatus === FilingStatusEnum.MARRIED_FILING_JOINTLY.name
      ? ADDITIONAL_MEDICARE_THRESHOLD_JOINT
      : ADDITIONAL_MEDICARE_THRESHOLD_SINGLE;
  const additionalTaxApplicableIncome = Math.max(
    0,
    ordinaryIncome - additionalTaxThreshold,
  );
  return additionalTaxApplicableIncome * ADDITIONAL_MEDICARE_RATE;
}

export function calculateNetInvestmentIncomeTax(
  filingStatus,
  ordinaryIncome,
  capitalGains,
) {
  const thresholds = {
    [FilingStatusEnum.SINGLE.name]: NIIT_THRESHOLD_SINGLE,
    [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: NIIT_THRESHOLD_JOINT,
    [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: NIIT_THRESHOLD_SEPARATE,
    [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: NIIT_THRESHOLD_SINGLE,
  };
  const threshold = thresholds[filingStatus];
  const applicableIncome = Math.max(
    0,
    Math.min(ordinaryIncome + capitalGains - threshold, capitalGains),
  );
  return applicableIncome * NIIT_RATE;
}
