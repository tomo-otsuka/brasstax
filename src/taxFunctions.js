import { FilingStatusEnum, DeductionTypeEnum } from "./constants.js";

const FILING_STATUS_TO_INCOME_TAX_BRACKETS = {
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
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains,
  longTermCapitalGains,
  deductionType,
  itemizedDeduction,
  taxCredits
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
    deduction = _getStandardDeduction(filingStatus);
  } else if (deductionType === DeductionTypeEnum.ITEMIZED.name) {
    deduction = itemizedDeduction;
  }

  ordinaryIncome -= deduction;
  if (ordinaryIncome < 0) {
    shortTermCapitalGains += ordinaryIncome;
  }
  ordinaryIncome = Math.max(0, ordinaryIncome);
  shortTermCapitalGains = Math.max(0, shortTermCapitalGains);

  let totalTax = _calculateIncomeTax(
    filingStatus,
    ordinaryIncome,
    shortTermCapitalGains
  );
  totalTax += _calculateLongTermCapitalGainsTax(
    filingStatus,
    ordinaryIncome,
    shortTermCapitalGains,
    longTermCapitalGains
  );
  totalTax += _calculateSocialSecurityTax(ordinaryIncome);
  totalTax += _calculateMedicareTax(filingStatus, ordinaryIncome);
  totalTax += _calculateNetInvestmentIncomeTax(
    filingStatus,
    ordinaryIncome,
    shortTermCapitalGains + longTermCapitalGains
  );

  totalTax -= taxCredits;

  totalTax = Math.max(0, totalTax);

  return totalTax;
}

function _getStandardDeduction(filingStatus) {
  return {
    [FilingStatusEnum.SINGLE.name]: 12400,
    [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 25100,
    [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 12550,
    [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 18800,
  }[filingStatus];
}

function _calculateIncomeTax(
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains
) {
  const brackets = FILING_STATUS_TO_INCOME_TAX_BRACKETS[filingStatus];
  const applicableIncome = ordinaryIncome + shortTermCapitalGains;

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

function _calculateLongTermCapitalGainsTax(
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains,
  longTermCapitalGains
) {
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

function _calculateSocialSecurityTax(ordinaryIncome) {
  const applicableIncome = Math.min(ordinaryIncome, 142800);
  return applicableIncome * 0.062;
}

function _calculateMedicareTax(filingStatus, ordinaryIncome) {
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

function _calculateNetInvestmentIncomeTax(
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
