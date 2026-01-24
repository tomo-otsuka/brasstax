import { FilingStatusEnum } from "../constants.js";

export const FEDERAL_STANDARD_DEDUCTIONS = {
  [FilingStatusEnum.SINGLE.name]: 14600,
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 29200,
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 14600,
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 21900,
};

export const FEDERAL_INCOME_TAX_BRACKETS = {
  [FilingStatusEnum.SINGLE.name]: [
    { bracketStart: 609350, rate: 0.37 },
    { bracketStart: 243725, rate: 0.35 },
    { bracketStart: 191950, rate: 0.32 },
    { bracketStart: 100525, rate: 0.24 },
    { bracketStart: 47150, rate: 0.22 },
    { bracketStart: 11600, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
    { bracketStart: 731200, rate: 0.37 },
    { bracketStart: 487450, rate: 0.35 },
    { bracketStart: 383900, rate: 0.32 },
    { bracketStart: 201050, rate: 0.24 },
    { bracketStart: 94300, rate: 0.22 },
    { bracketStart: 23200, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
    { bracketStart: 365600, rate: 0.37 },
    { bracketStart: 243725, rate: 0.35 },
    { bracketStart: 191950, rate: 0.32 },
    { bracketStart: 100525, rate: 0.24 },
    { bracketStart: 47150, rate: 0.22 },
    { bracketStart: 11600, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
    { bracketStart: 609350, rate: 0.37 },
    { bracketStart: 243700, rate: 0.35 },
    { bracketStart: 191950, rate: 0.32 },
    { bracketStart: 100500, rate: 0.24 },
    { bracketStart: 63100, rate: 0.22 },
    { bracketStart: 16550, rate: 0.12 },
    { bracketStart: 0, rate: 0.1 },
  ],
};

export const FILING_STATUS_TO_LONG_TERM_BRACKETS = {
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
