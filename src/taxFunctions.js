export function calculateTax(
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains,
  longTermCapitalGains
) {
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

  return totalTax;
}

function _calculateIncomeTax(
  filingStatus,
  ordinaryIncome,
  shortTermCapitalGains
) {
  const taxBrackets = {
    single: [
      { bracketStart: 518400, rate: 0.37, cumulative: 156235 },
      { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
      { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
      { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
      { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
      { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
      { bracketStart: 0, rate: 0.1, cumulative: 0 },
    ],
    "married-filing-jointly": [
      { bracketStart: 622050, rate: 0.37, cumulative: 167307.5 },
      { bracketStart: 414700, rate: 0.35, cumulative: 94735 },
      { bracketStart: 326600, rate: 0.32, cumulative: 66543 },
      { bracketStart: 171050, rate: 0.24, cumulative: 29211 },
      { bracketStart: 80250, rate: 0.22, cumulative: 9235 },
      { bracketStart: 19750, rate: 0.12, cumulative: 1975 },
      { bracketStart: 0, rate: 0.1, cumulative: 0 },
    ],
    "married-filing-separately": [
      { bracketStart: 311025, rate: 0.37, cumulative: 83653.75 },
      { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
      { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
      { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
      { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
      { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
      { bracketStart: 0, rate: 0.1, cumulative: 0 },
    ],
    "head-of-household": [
      { bracketStart: 518400, rate: 0.37, cumulative: 154793.5 },
      { bracketStart: 207350, rate: 0.35, cumulative: 45926 },
      { bracketStart: 163300, rate: 0.32, cumulative: 31830 },
      { bracketStart: 85500, rate: 0.24, cumulative: 13158 },
      { bracketStart: 53700, rate: 0.22, cumulative: 6162 },
      { bracketStart: 14100, rate: 0.12, cumulative: 1410 },
      { bracketStart: 0, rate: 0.1, cumulative: 0 },
    ],
  };

  const brackets = taxBrackets[filingStatus];
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
  const taxBracketsForFilingStatus = {
    single: [
      { bracketEnd: 40400, rate: 0 },
      { bracketEnd: 445850, rate: 0.15 },
      { bracketEnd: Infinity, rate: 0.2 },
    ],
    "married-filing-jointly": [
      { bracketEnd: 80800, rate: 0 },
      { bracketEnd: 501600, rate: 0.15 },
      { bracketEnd: Infinity, rate: 0.2 },
    ],
    "married-filing-separately": [
      { bracketEnd: 40400, rate: 0 },
      { bracketEnd: 250800, rate: 0.15 },
      { bracketEnd: Infinity, rate: 0.2 },
    ],
    "head-of-household": [
      { bracketEnd: 54100, rate: 0 },
      { bracketEnd: 473750, rate: 0.15 },
      { bracketEnd: Infinity, rate: 0.2 },
    ],
  };
  const taxBrackets = taxBracketsForFilingStatus[filingStatus];
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
    filingStatus === "married-jointly" ? 250000 : 200000;
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
    single: 200000,
    "married-filing-jointly": 250000,
    "married-filing-separately": 125000,
    "head-of-household": 200000,
  };
  const threshold = thresholds[filingStatus];
  const applicableIncome = Math.max(
    0,
    Math.min(ordinaryIncome + capitalGains - threshold, capitalGains)
  );
  return applicableIncome * 0.038;
}
