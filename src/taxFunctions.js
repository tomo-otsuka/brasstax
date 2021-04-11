import {
  FilingStatusEnum,
  DeductionTypeEnum,
  JurisdictionEnum,
} from "./constants.js";

const JURISDICTIONS_THAT_TREAT_LONG_TERM_CAPITAL_GAINS_AS_ORDINARY_INCOME = new Set(
  [JurisdictionEnum.CALIFORNIA.name]
);

const FEDERAL_INCOME_TAX_BRACKETS = {
  [FilingStatusEnum.SINGLE.name]: [
    { bracketStart: 518400, rate: 0.37, cumulative: 156235 },
    { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
    { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
    { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
    { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
    { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
    { bracketStart: 0, rate: 0.1, cumulative: 0 },
  ],
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
    { bracketStart: 622050, rate: 0.37, cumulative: 167307.5 },
    { bracketStart: 414700, rate: 0.35, cumulative: 94735 },
    { bracketStart: 326600, rate: 0.32, cumulative: 66543 },
    { bracketStart: 171050, rate: 0.24, cumulative: 29211 },
    { bracketStart: 80250, rate: 0.22, cumulative: 9235 },
    { bracketStart: 19750, rate: 0.12, cumulative: 1975 },
    { bracketStart: 0, rate: 0.1, cumulative: 0 },
  ],
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
    { bracketStart: 311025, rate: 0.37, cumulative: 83653.75 },
    { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
    { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
    { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
    { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
    { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
    { bracketStart: 0, rate: 0.1, cumulative: 0 },
  ],
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
    { bracketStart: 518400, rate: 0.37, cumulative: 154793.5 },
    { bracketStart: 207350, rate: 0.35, cumulative: 45926 },
    { bracketStart: 163300, rate: 0.32, cumulative: 31830 },
    { bracketStart: 85500, rate: 0.24, cumulative: 13158 },
    { bracketStart: 53700, rate: 0.22, cumulative: 6162 },
    { bracketStart: 14100, rate: 0.12, cumulative: 1410 },
    { bracketStart: 0, rate: 0.1, cumulative: 0 },
  ],
};

const CALIFORNIA_INCOME_TAX_BRACKETS = {
  [FilingStatusEnum.SINGLE.name]: [
    { bracketStart: 1000000, rate: 0.133, cumulative: 107549.37 },
    { bracketStart: 599012, rate: 0.123, cumulative: 58227.85 },
    { bracketStart: 359407, rate: 0.113, cumulative: 31152.48 },
    { bracketStart: 299508, rate: 0.103, cumulative: 24982.88 },
    { bracketStart: 58634, rate: 0.093, cumulative: 2581.6 },
    { bracketStart: 46394, rate: 0.08, cumulative: 1602.4 },
    { bracketStart: 33421, rate: 0.06, cumulative: 824.02 },
    { bracketStart: 21175, rate: 0.04, cumulative: 334.18 },
    { bracketStart: 8932, rate: 0.02, cumulative: 89.32 },
    { bracketStart: 0, rate: 0.01, cumulative: 0 },
  ],
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
    { bracketStart: 1198024, rate: 0.133, cumulative: 118435.92 },
    { bracketStart: 1000000, rate: 0.123, cumulative: 94078.97 },
    { bracketStart: 718814, rate: 0.113, cumulative: 62304.95 },
    { bracketStart: 599016, rate: 0.103, cumulative: 49965.76 },
    { bracketStart: 117268, rate: 0.093, cumulative: 5163.2 },
    { bracketStart: 92788, rate: 0.08, cumulative: 3204.8 },
    { bracketStart: 66842, rate: 0.06, cumulative: 1648.04 },
    { bracketStart: 42350, rate: 0.04, cumulative: 668.36 },
    { bracketStart: 17864, rate: 0.02, cumulative: 178.64 },
    { bracketStart: 0, rate: 0.01, cumulative: 0 },
  ],
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
    { bracketStart: 1000000, rate: 0.133, cumulative: 107549.37 },
    { bracketStart: 599012, rate: 0.123, cumulative: 58227.85 },
    { bracketStart: 359407, rate: 0.113, cumulative: 31152.48 },
    { bracketStart: 299508, rate: 0.103, cumulative: 24982.88 },
    { bracketStart: 58634, rate: 0.093, cumulative: 2581.6 },
    { bracketStart: 46394, rate: 0.08, cumulative: 1602.4 },
    { bracketStart: 33421, rate: 0.06, cumulative: 824.02 },
    { bracketStart: 21175, rate: 0.04, cumulative: 334.18 },
    { bracketStart: 8932, rate: 0.02, cumulative: 89.32 },
    { bracketStart: 0, rate: 0.01, cumulative: 0 },
  ],
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
    { bracketStart: 1000000, rate: 0.133, cumulative: 101385.48 },
    { bracketStart: 814658, rate: 0.123, cumulative: 78588.41 },
    { bracketStart: 488796, rate: 0.113, cumulative: 41776 },
    { bracketStart: 407329, rate: 0.103, cumulative: 33374.9 },
    { bracketStart: 79812, rate: 0.093, cumulative: 2915.82 },
    { bracketStart: 67569, rate: 0.08, cumulative: 1936.38 },
    { bracketStart: 54597, rate: 0.06, cumulative: 1158.06 },
    { bracketStart: 42353, rate: 0.04, cumulative: 668.3 },
    { bracketStart: 17876, rate: 0.02, cumulative: 178.76 },
    { bracketStart: 0, rate: 0.01, cumulative: 0 },
  ],
};

const JURISDICTION_TO_INCOME_BRACKETS = {
  [JurisdictionEnum.FEDERAL.name]: FEDERAL_INCOME_TAX_BRACKETS,
  [JurisdictionEnum.CALIFORNIA.name]: CALIFORNIA_INCOME_TAX_BRACKETS,
};

const FILING_STATUS_TO_LONG_TERM_BRACKETS = {
  [FilingStatusEnum.SINGLE.name]: [
    { bracketEnd: 40400, rate: 0 },
    { bracketEnd: 445850, rate: 0.15 },
    { bracketEnd: Infinity, rate: 0.2 },
  ],
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
    { bracketEnd: 80800, rate: 0 },
    { bracketEnd: 501600, rate: 0.15 },
    { bracketEnd: Infinity, rate: 0.2 },
  ],
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
    { bracketEnd: 40400, rate: 0 },
    { bracketEnd: 250800, rate: 0.15 },
    { bracketEnd: Infinity, rate: 0.2 },
  ],
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
    { bracketEnd: 54100, rate: 0 },
    { bracketEnd: 473750, rate: 0.15 },
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
    totalTax += calculateSocialSecurityTax(ordinaryIncome);
    totalTax += calculateMedicareTax(filingStatus, ordinaryIncome);
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

  let deduction = 0;
  if (deductionType === DeductionTypeEnum.STANDARD.name) {
    deduction = _getStandardDeduction(jurisdiction, filingStatus);
  } else if (deductionType === DeductionTypeEnum.ITEMIZED.name) {
    deduction = itemizedDeduction;
  }

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

function _getStandardDeduction(jurisdiction, filingStatus) {
  return {
    [JurisdictionEnum.FEDERAL.name]: {
      [FilingStatusEnum.SINGLE.name]: 12400,
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 25100,
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 12550,
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 18800,
    },
    [JurisdictionEnum.CALIFORNIA.name]: {
      [FilingStatusEnum.SINGLE.name]: 4601,
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 9202,
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 4601,
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 9202,
    },
  }[jurisdiction][filingStatus];
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
    totalTax += bracket.cumulative;
    totalTax += (applicableIncome - bracket.bracketStart) * bracket.rate;
    break;
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
  const applicableIncome = Math.min(ordinaryIncome, 142800);
  return applicableIncome * 0.062;
}

export function calculateMedicareTax(filingStatus, ordinaryIncome) {
  const additionalTaxThreshold =
    filingStatus === FilingStatusEnum.MARRIED_FILING_JOINTLY.name
      ? 250000
      : 200000;
  const additionalTaxApplicableIncome = Math.max(
    0,
    ordinaryIncome - additionalTaxThreshold
  );
  const additionalTax = additionalTaxApplicableIncome * 0.009;
  return ordinaryIncome * 0.0145 + additionalTax;
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
