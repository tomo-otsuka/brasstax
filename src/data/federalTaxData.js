import { FilingStatusEnum } from "../constants.js";

export const FEDERAL_STANDARD_DEDUCTIONS = {
  [FilingStatusEnum.SINGLE.name]: 15750,
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 31500,
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 15750,
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 23625,
};

export const FEDERAL_INCOME_TAX_BRACKETS = {
  [FilingStatusEnum.SINGLE.name]: [
    { bracketStart: 626350, rate: 0.37 },
    { bracketStart: 250525, rate: 0.35 },
    { bracketStart: 197300, rate: 0.32 },
    { bracketStart: 103350, rate: 0.24 },
    { bracketStart: 48475, rate: 0.22 },
    { bracketStart: 11925, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
    { bracketStart: 751600, rate: 0.37 },
    { bracketStart: 501050, rate: 0.35 },
    { bracketStart: 394600, rate: 0.32 },
    { bracketStart: 206700, rate: 0.24 },
    { bracketStart: 96950, rate: 0.22 },
    { bracketStart: 23850, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
    { bracketStart: 375800, rate: 0.37 },
    { bracketStart: 250525, rate: 0.35 },
    { bracketStart: 197300, rate: 0.32 },
    { bracketStart: 103350, rate: 0.24 },
    { bracketStart: 48475, rate: 0.22 },
    { bracketStart: 11925, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
    { bracketStart: 626350, rate: 0.37 },
    { bracketStart: 250500, rate: 0.35 },
    { bracketStart: 197300, rate: 0.32 },
    { bracketStart: 103350, rate: 0.24 },
    { bracketStart: 64850, rate: 0.22 },
    { bracketStart: 17000, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
};

export const FILING_STATUS_TO_LONG_TERM_BRACKETS = {
  [FilingStatusEnum.SINGLE.name]: [
    { bracketEnd: 48350, rate: 0 },
    { bracketEnd: 533400, rate: 0.15 },
    { bracketEnd: Infinity, rate: 0.2 },
  ],
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
    { bracketEnd: 96700, rate: 0 },
    { bracketEnd: 600050, rate: 0.15 },
    { bracketEnd: Infinity, rate: 0.2 },
  ],
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
    { bracketEnd: 48350, rate: 0 },
    { bracketEnd: 300000, rate: 0.15 }, // Confirmed split
    { bracketEnd: Infinity, rate: 0.2 },
  ],
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
    { bracketEnd: 64750, rate: 0 },
    { bracketEnd: 566700, rate: 0.15 },
    { bracketEnd: Infinity, rate: 0.2 },
  ],
};
