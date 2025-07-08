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

export function calculateTax(
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains,
  longTermCapitalGains,
  deductionType,
  itemizedDeduction,
  taxCredits,
  stateJurisdiction,
) {
  const [adjOrdinaryIncome, adjShortTermCapitalGains, adjLongTermCapitalGains] =
    adjustIncomes(
      jurisdiction,
      filingStatus,
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
      deductionType,
      itemizedDeduction,
    );

  const taxBreakdown = {};

  taxBreakdown["Federal Income Tax"] = calculateIncomeTax(
    jurisdiction,
    filingStatus,
    adjOrdinaryIncome,
    adjShortTermCapitalGains,
    adjLongTermCapitalGains,
  );

  taxBreakdown["LTCG Tax"] = calculateLongTermCapitalGainsTax(
    jurisdiction,
    filingStatus,
    adjOrdinaryIncome,
    adjShortTermCapitalGains,
    adjLongTermCapitalGains,
  );

  if (jurisdiction === JurisdictionEnum.FEDERAL.name) {
    taxBreakdown["Additional Medicare Tax"] = calculateAdditionalMedicareTax(
      filingStatus,
      adjOrdinaryIncome,
    );
    taxBreakdown["NIIT"] = calculateNetInvestmentIncomeTax(
      filingStatus,
      adjOrdinaryIncome,
      adjShortTermCapitalGains + adjLongTermCapitalGains,
    );
    taxBreakdown["Medicare Tax"] = calculateMedicareTax(
      filingStatus,
      ordinaryIncome,
    );
    taxBreakdown["Social Security Tax"] =
      calculateSocialSecurityTax(ordinaryIncome);
  }

  if (stateJurisdiction) {
    const [
      adjStateOrdinaryIncome,
      adjStateShortTermCapitalGains,
      adjStateLongTermCapitalGains,
    ] = adjustIncomes(
      stateJurisdiction,
      filingStatus,
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
      deductionType,
      itemizedDeduction,
    );
    taxBreakdown["State Income Tax"] = calculateIncomeTax(
      stateJurisdiction,
      filingStatus,
      adjStateOrdinaryIncome,
      adjStateShortTermCapitalGains,
      adjStateLongTermCapitalGains,
    );
  }

  let totalTax = Object.values(taxBreakdown).reduce((sum, tax) => sum + tax, 0);
  totalTax -= taxCredits || 0;
  totalTax = Math.max(0, totalTax);

  taxBreakdown["Total Tax"] = totalTax;

  return taxBreakdown;
}

export function adjustIncomes(
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains,
  longTermCapitalGains,
  deductionType,
  itemizedDeduction,
) {
  if (longTermCapitalGains < 0) {
    shortTermCapitalGains += longTermCapitalGains;
    longTermCapitalGains = 0;
  }
  if (shortTermCapitalGains < 0) {
    ordinaryIncome += Math.max(shortTermCapitalGains, -3000);
    shortTermCapitalGains = 0;
  }

  let deduction = calculateDeduction(
    jurisdiction,
    filingStatus,
    deductionType,
    itemizedDeduction,
  );

  ordinaryIncome -= deduction;
  if (ordinaryIncome < 0) {
    shortTermCapitalGains += ordinaryIncome;
  }
  if (shortTermCapitalGains < 0) {
    longTermCapitalGains += shortTermCapitalGains;
  }
  ordinaryIncome = Math.max(0, ordinaryIncome);
  shortTermCapitalGains = Math.max(0, shortTermCapitalGains);
  longTermCapitalGains = Math.max(0, longTermCapitalGains);

  return [ordinaryIncome, shortTermCapitalGains, longTermCapitalGains];
}

export function calculateDeduction(
  jurisdiction,
  filingStatus,
  deductionType,
  itemizedDeduction,
) {
  let deduction = 0;
  if (deductionType === DeductionTypeEnum.STANDARD.name) {
    deduction = _getStandardDeduction(jurisdiction, filingStatus);
  } else if (deductionType === DeductionTypeEnum.ITEMIZED.name) {
    deduction = itemizedDeduction;
  }

  return deduction;
}

function _getStandardDeduction(jurisdiction, filingStatus) {
  return STANDARD_DEDUCTION_AMOUNTS[jurisdiction][filingStatus];
}

export function calculateIncomeTax(
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains,
  longTermCapitalGains,
) {
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
  for (const bracket of brackets) {
    if (remainingIncome > bracket.bracketStart) {
      const taxableInBracket = remainingIncome - bracket.bracketStart;
      totalTax += taxableInBracket * bracket.rate;
      remainingIncome = bracket.bracketStart;
    }
  }

  return totalTax;
}

export function calculateLongTermCapitalGainsTax(
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains,
  longTermCapitalGains,
) {
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
