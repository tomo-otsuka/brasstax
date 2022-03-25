import {
  FilingStatusEnum,
  DeductionTypeEnum,
  JurisdictionEnum,
} from "./constants.js";

const STANDARD_DEDUCTION_AMOUNTS = {
  [JurisdictionEnum.FEDERAL.name]: {
    [FilingStatusEnum.SINGLE.name]: 12950,
    [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 25900,
    [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 12950,
    [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 19400,
  },
  [JurisdictionEnum.CALIFORNIA.name]: {
    [FilingStatusEnum.SINGLE.name]: 4803,
    [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 9606,
    [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 4803,
    [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 9606,
  },
};

const JURISDICTIONS_THAT_TREAT_LONG_TERM_CAPITAL_GAINS_AS_ORDINARY_INCOME = new Set(
  [JurisdictionEnum.CALIFORNIA.name]
);

const FEDERAL_INCOME_TAX_BRACKETS = {
  [FilingStatusEnum.SINGLE.name]: [
    { bracketStart: 523600, rate: 0.37 },
    { bracketStart: 209425, rate: 0.35 },
    { bracketStart: 164925, rate: 0.32 },
    { bracketStart: 86375, rate: 0.24 },
    { bracketStart: 40525, rate: 0.22 },
    { bracketStart: 9950, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
    { bracketStart: 628300, rate: 0.37 },
    { bracketStart: 418850, rate: 0.35 },
    { bracketStart: 329850, rate: 0.32 },
    { bracketStart: 172750, rate: 0.24 },
    { bracketStart: 81050, rate: 0.22 },
    { bracketStart: 19900, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
    { bracketStart: 314150, rate: 0.37 },
    { bracketStart: 209425, rate: 0.35 },
    { bracketStart: 164925, rate: 0.32 },
    { bracketStart: 86375, rate: 0.24 },
    { bracketStart: 40525, rate: 0.22 },
    { bracketStart: 9950, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
    { bracketStart: 523600, rate: 0.37 },
    { bracketStart: 209400, rate: 0.35 },
    { bracketStart: 164900, rate: 0.32 },
    { bracketStart: 86350, rate: 0.24 },
    { bracketStart: 54200, rate: 0.22 },
    { bracketStart: 14200, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
};

const CALIFORNIA_INCOME_TAX_BRACKETS = {
  [FilingStatusEnum.SINGLE.name]: [
    { bracketStart: 1000000, rate: 0.133 },
    { bracketStart: 625369, rate: 0.123 },
    { bracketStart: 375221, rate: 0.113 },
    { bracketStart: 312686, rate: 0.103 },
    { bracketStart: 61214, rate: 0.093 },
    { bracketStart: 48435, rate: 0.08 },
    { bracketStart: 34892, rate: 0.06 },
    { bracketStart: 22107, rate: 0.04 },
    { bracketStart: 9325, rate: 0.02 },
    { bracketStart: 0, rate: 0.01 },
  ],
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
    { bracketStart: 1250739, rate: 0.133 },
    { bracketStart: 1000000, rate: 0.123 },
    { bracketStart: 750442, rate: 0.113 },
    { bracketStart: 625372, rate: 0.103 },
    { bracketStart: 122428, rate: 0.093 },
    { bracketStart: 96870, rate: 0.08 },
    { bracketStart: 69784, rate: 0.06 },
    { bracketStart: 44214, rate: 0.04 },
    { bracketStart: 18650, rate: 0.02 },
    { bracketStart: 0, rate: 0.01 },
  ],
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
    { bracketStart: 1000000, rate: 0.133 },
    { bracketStart: 625369, rate: 0.123 },
    { bracketStart: 375221, rate: 0.113 },
    { bracketStart: 312686, rate: 0.103 },
    { bracketStart: 61214, rate: 0.093 },
    { bracketStart: 48435, rate: 0.08 },
    { bracketStart: 34892, rate: 0.06 },
    { bracketStart: 22107, rate: 0.04 },
    { bracketStart: 9325, rate: 0.02 },
    { bracketStart: 0, rate: 0.01 },
  ],
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
    { bracketStart: 1000000, rate: 0.133 },
    { bracketStart: 850503, rate: 0.123 },
    { bracketStart: 510303, rate: 0.113 },
    { bracketStart: 425251, rate: 0.103 },
    { bracketStart: 83324, rate: 0.093 },
    { bracketStart: 70542, rate: 0.08 },
    { bracketStart: 56999, rate: 0.06 },
    { bracketStart: 44217, rate: 0.04 },
    { bracketStart: 18663, rate: 0.02 },
    { bracketStart: 0, rate: 0.01 },
  ],
};

const JURISDICTION_TO_INCOME_BRACKETS = {
  [JurisdictionEnum.FEDERAL.name]: FEDERAL_INCOME_TAX_BRACKETS,
  [JurisdictionEnum.CALIFORNIA.name]: CALIFORNIA_INCOME_TAX_BRACKETS,
};

const FILING_STATUS_TO_LONG_TERM_BRACKETS = {
  [FilingStatusEnum.SINGLE.name]: [
    { bracketEnd: 41675, rate: 0 },
    { bracketEnd: 459750, rate: 0.15 },
    { bracketEnd: Infinity, rate: 0.2 },
  ],
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
    { bracketEnd: 83350, rate: 0 },
    { bracketEnd: 517200, rate: 0.15 },
    { bracketEnd: Infinity, rate: 0.2 },
  ],
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
    { bracketEnd: 41675, rate: 0 },
    { bracketEnd: 258600, rate: 0.15 },
    { bracketEnd: Infinity, rate: 0.2 },
  ],
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
    { bracketEnd: 55800, rate: 0 },
    { bracketEnd: 488500, rate: 0.15 },
    { bracketEnd: Infinity, rate: 0.2 },
  ],
};

export function calculateTax(
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains,
  longTermCapitalGains,
  deductionType,
  itemizedDeduction,
  taxCredits
) {
  [ordinaryIncome, shortTermCapitalGains, longTermCapitalGains] = adjustIncomes(
    jurisdiction,
    filingStatus,
    ordinaryIncome,
    shortTermCapitalGains,
    longTermCapitalGains,
    deductionType,
    itemizedDeduction
  );

  let totalTax = calculateIncomeTax(
    jurisdiction,
    filingStatus,
    ordinaryIncome,
    shortTermCapitalGains,
    longTermCapitalGains
  );
  totalTax += calculateLongTermCapitalGainsTax(
    jurisdiction,
    filingStatus,
    ordinaryIncome,
    shortTermCapitalGains,
    longTermCapitalGains
  );

  if (jurisdiction === JurisdictionEnum.FEDERAL.name) {
    totalTax += calculateAdditionalMedicareTax(filingStatus, ordinaryIncome);
    totalTax += calculateNetInvestmentIncomeTax(
      filingStatus,
      ordinaryIncome,
      shortTermCapitalGains + longTermCapitalGains
    );
  }

  totalTax -= taxCredits;

  totalTax = Math.max(0, totalTax);

  return totalTax;
}

export function adjustIncomes(
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains,
  longTermCapitalGains,
  deductionType,
  itemizedDeduction
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
    itemizedDeduction
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
  itemizedDeduction
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
  longTermCapitalGains
) {
  const brackets = JURISDICTION_TO_INCOME_BRACKETS[jurisdiction][filingStatus];
  let applicableIncome = ordinaryIncome + shortTermCapitalGains;
  if (
    JURISDICTIONS_THAT_TREAT_LONG_TERM_CAPITAL_GAINS_AS_ORDINARY_INCOME.has(
      jurisdiction
    )
  ) {
    applicableIncome += longTermCapitalGains;
  }

  let totalTax = 0;
  for (const bracket of brackets) {
    if (applicableIncome < bracket.bracketStart) {
      continue;
    }
    totalTax += (applicableIncome - bracket.bracketStart) * bracket.rate;
    applicableIncome = bracket.bracketStart;
  }

  return totalTax;
}

export function calculateLongTermCapitalGainsTax(
  jurisdiction,
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains,
  longTermCapitalGains
) {
  if (
    JURISDICTIONS_THAT_TREAT_LONG_TERM_CAPITAL_GAINS_AS_ORDINARY_INCOME.has(
      jurisdiction
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
      taxBracket.bracketEnd - accountedIncome
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
    ordinaryIncome
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
    ordinaryIncome - additionalTaxThreshold
  );
  return additionalTaxApplicableIncome * 0.009;
}

export function calculateNetInvestmentIncomeTax(
  filingStatus,
  ordinaryIncome,
  capitalGains
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
    Math.min(ordinaryIncome + capitalGains - threshold, capitalGains)
  );
  return applicableIncome * 0.038;
}
