import { FilingStatusEnum, JurisdictionEnum } from "../constants.js";

export const STANDARD_DEDUCTION_AMOUNTS = {
  [JurisdictionEnum.FEDERAL.name]: {
    [FilingStatusEnum.SINGLE.name]: 14600,
    [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 29200,
    [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 14600,
    [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 21900,
  },
  [JurisdictionEnum.CALIFORNIA.name]: {
    [FilingStatusEnum.SINGLE.name]: 5540,
    [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 11080,
    [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 5540,
    [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 11080,
  },
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

export const CALIFORNIA_INCOME_TAX_BRACKETS = {
  [FilingStatusEnum.SINGLE.name]: [
    { bracketStart: 1000000, rate: 0.133 },
    { bracketStart: 721315, rate: 0.123 },
    { bracketStart: 432788, rate: 0.113 },
    { bracketStart: 360660, rate: 0.103 },
    { bracketStart: 70607, rate: 0.093 },
    { bracketStart: 55867, rate: 0.08 },
    { bracketStart: 40246, rate: 0.06 },
    { bracketStart: 25500, rate: 0.04 },
    { bracketStart: 10757, rate: 0.02 },
    { bracketStart: 0, rate: 0.01 },
  ],
  [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
    { bracketStart: 1000000, rate: 0.133 },
    { bracketStart: 1442629, rate: 0.123 },
    { bracketStart: 865575, rate: 0.113 },
    { bracketStart: 721319, rate: 0.103 },
    { bracketStart: 141213, rate: 0.093 },
    { bracketStart: 111733, rate: 0.08 },
    { bracketStart: 80491, rate: 0.06 },
    { bracketStart: 50999, rate: 0.04 },
    { bracketStart: 21513, rate: 0.02 },
    { bracketStart: 0, rate: 0.01 },
  ],
  [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
    { bracketStart: 1000000, rate: 0.133 },
    { bracketStart: 721315, rate: 0.123 },
    { bracketStart: 432788, rate: 0.113 },
    { bracketStart: 360660, rate: 0.103 },
    { bracketStart: 70607, rate: 0.093 },
    { bracketStart: 55867, rate: 0.08 },
    { bracketStart: 40246, rate: 0.06 },
    { bracketStart: 25500, rate: 0.04 },
    { bracketStart: 10757, rate: 0.02 },
    { bracketStart: 0, rate: 0.01 },
  ],
  [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
    { bracketStart: 1000000, rate: 0.133 },
    { bracketStart: 980988, rate: 0.123 },
    { bracketStart: 588594, rate: 0.113 },
    { bracketStart: 490494, rate: 0.103 },
    { bracketStart: 96108, rate: 0.093 },
    { bracketStart: 81365, rate: 0.08 },
    { bracketStart: 65745, rate: 0.06 },
    { bracketStart: 51001, rate: 0.04 },
    { bracketStart: 21528, rate: 0.02 },
    { bracketStart: 0, rate: 0.01 },
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

export const STATE_TAX_DATA = {
  [JurisdictionEnum.ALABAMA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 3000, rate: 0.05 },
        { bracketStart: 500, rate: 0.04 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 6000, rate: 0.05 },
        { bracketStart: 1000, rate: 0.04 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 3000, rate: 0.05 },
        { bracketStart: 500, rate: 0.04 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 3000, rate: 0.05 },
        { bracketStart: 500, rate: 0.04 },
        { bracketStart: 0, rate: 0.02 },
      ],
    },
    property_tax_rate: 0.0036,
    sales_tax_rate: 0.04,
  },
  [JurisdictionEnum.ALASKA.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0116,
    sales_tax_rate: 0.0182,
  },
  [JurisdictionEnum.ARIZONA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.025 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.025 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.025 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.025 },
      ],
    },
    property_tax_rate: 0.0064,
    sales_tax_rate: 0.084,
  },
  [JurisdictionEnum.ARKANSAS.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 92301, rate: 0.039 },
        { bracketStart: 25700, rate: 0.039 },
        { bracketStart: 15600, rate: 0.034 },
        { bracketStart: 10900, rate: 0.03 },
        { bracketStart: 5500, rate: 0.02 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 92301, rate: 0.039 },
        { bracketStart: 25700, rate: 0.039 },
        { bracketStart: 15600, rate: 0.034 },
        { bracketStart: 10900, rate: 0.03 },
        { bracketStart: 5500, rate: 0.02 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 92301, rate: 0.039 },
        { bracketStart: 25700, rate: 0.039 },
        { bracketStart: 15600, rate: 0.034 },
        { bracketStart: 10900, rate: 0.03 },
        { bracketStart: 5500, rate: 0.02 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 92301, rate: 0.039 },
        { bracketStart: 25700, rate: 0.039 },
        { bracketStart: 15600, rate: 0.034 },
        { bracketStart: 10900, rate: 0.03 },
        { bracketStart: 5500, rate: 0.02 },
        { bracketStart: 0, rate: 0.0 },
      ],
    },
    property_tax_rate: 0.0059,
    sales_tax_rate: 0.0947,
  },
  [JurisdictionEnum.CALIFORNIA.name]: {
    income_tax_brackets: CALIFORNIA_INCOME_TAX_BRACKETS,
    property_tax_rate: 0.0074,
    sales_tax_rate: 0.0882,
  },
  [JurisdictionEnum.COLORADO.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.044 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.044 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.044 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.044 },
      ],
    },
    property_tax_rate: 0.0049,
    sales_tax_rate: 0.029,
  },
  [JurisdictionEnum.CONNECTICUT.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 500000, rate: 0.0699 },
        { bracketStart: 250001, rate: 0.069 },
        { bracketStart: 200001, rate: 0.065 },
        { bracketStart: 100001, rate: 0.06 },
        { bracketStart: 50001, rate: 0.055 },
        { bracketStart: 10001, rate: 0.045 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 1000000, rate: 0.0699 },
        { bracketStart: 500001, rate: 0.069 },
        { bracketStart: 400001, rate: 0.065 },
        { bracketStart: 200001, rate: 0.06 },
        { bracketStart: 100001, rate: 0.055 },
        { bracketStart: 20001, rate: 0.045 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 500000, rate: 0.0699 },
        { bracketStart: 250001, rate: 0.069 },
        { bracketStart: 200001, rate: 0.065 },
        { bracketStart: 100001, rate: 0.06 },
        { bracketStart: 50001, rate: 0.055 },
        { bracketStart: 10001, rate: 0.045 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 800000, rate: 0.0699 },
        { bracketStart: 400001, rate: 0.069 },
        { bracketStart: 320001, rate: 0.065 },
        { bracketStart: 160001, rate: 0.06 },
        { bracketStart: 80001, rate: 0.055 },
        { bracketStart: 16001, rate: 0.045 },
        { bracketStart: 0, rate: 0.02 },
      ],
    },
    property_tax_rate: 0.02893,
    sales_tax_rate: 0.0635,
  },
  [JurisdictionEnum.DELAWARE.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 60000, rate: 0.066 },
        { bracketStart: 20000, rate: 0.0555 },
        { bracketStart: 10000, rate: 0.048 },
        { bracketStart: 5000, rate: 0.039 },
        { bracketStart: 2000, rate: 0.022 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 60000, rate: 0.066 },
        { bracketStart: 20000, rate: 0.0555 },
        { bracketStart: 10000, rate: 0.048 },
        { bracketStart: 5000, rate: 0.039 },
        { bracketStart: 2000, rate: 0.022 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 60000, rate: 0.066 },
        { bracketStart: 20000, rate: 0.0555 },
        { bracketStart: 10000, rate: 0.048 },
        { bracketStart: 5000, rate: 0.039 },
        { bracketStart: 2000, rate: 0.022 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 60000, rate: 0.066 },
        { bracketStart: 20000, rate: 0.0555 },
        { bracketStart: 10000, rate: 0.048 },
        { bracketStart: 5000, rate: 0.039 },
        { bracketStart: 2000, rate: 0.022 },
        { bracketStart: 0, rate: 0.0 },
      ],
    },
    property_tax_rate: 0.0055,
    sales_tax_rate: 0,
  },
  [JurisdictionEnum.FLORIDA.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0098,
    sales_tax_rate: 0.0708,
  },
  [JurisdictionEnum.GEORGIA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.0539 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.0539 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.0539 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.0539 },
      ],
    },
    property_tax_rate: 0.0083,
    sales_tax_rate: 0.0738,
  },
  [JurisdictionEnum.HAWAII.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 200000, rate: 0.11 },
        { bracketStart: 175000, rate: 0.1 },
        { bracketStart: 150000, rate: 0.09 },
        { bracketStart: 100000, rate: 0.08 },
        { bracketStart: 48000, rate: 0.076 },
        { bracketStart: 36000, rate: 0.068 },
        { bracketStart: 24000, rate: 0.064 },
        { bracketStart: 18000, rate: 0.055 },
        { bracketStart: 12000, rate: 0.049 },
        { bracketStart: 9600, rate: 0.032 },
        { bracketStart: 4800, rate: 0.025 },
        { bracketStart: 0, rate: 0.014 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 400000, rate: 0.11 },
        { bracketStart: 350000, rate: 0.1 },
        { bracketStart: 300000, rate: 0.09 },
        { bracketStart: 200000, rate: 0.08 },
        { bracketStart: 96000, rate: 0.076 },
        { bracketStart: 72000, rate: 0.068 },
        { bracketStart: 48000, rate: 0.064 },
        { bracketStart: 36000, rate: 0.055 },
        { bracketStart: 24000, rate: 0.049 },
        { bracketStart: 19200, rate: 0.032 },
        { bracketStart: 9600, rate: 0.025 },
        { bracketStart: 0, rate: 0.014 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 200000, rate: 0.11 },
        { bracketStart: 175000, rate: 0.1 },
        { bracketStart: 150000, rate: 0.09 },
        { bracketStart: 100000, rate: 0.08 },
        { bracketStart: 48000, rate: 0.076 },
        { bracketStart: 36000, rate: 0.068 },
        { bracketStart: 24000, rate: 0.064 },
        { bracketStart: 18000, rate: 0.055 },
        { bracketStart: 12000, rate: 0.049 },
        { bracketStart: 9600, rate: 0.032 },
        { bracketStart: 4800, rate: 0.025 },
        { bracketStart: 0, rate: 0.014 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 200000, rate: 0.11 },
        { bracketStart: 175000, rate: 0.1 },
        { bracketStart: 150000, rate: 0.09 },
        { bracketStart: 100000, rate: 0.08 },
        { bracketStart: 48000, rate: 0.076 },
        { bracketStart: 36000, rate: 0.068 },
        { bracketStart: 24000, rate: 0.064 },
        { bracketStart: 18000, rate: 0.055 },
        { bracketStart: 12000, rate: 0.049 },
        { bracketStart: 9600, rate: 0.032 },
        { bracketStart: 4800, rate: 0.025 },
        { bracketStart: 0, rate: 0.014 },
      ],
    },
    property_tax_rate: 0.0026,
    sales_tax_rate: 0.045,
  },
  [JurisdictionEnum.IDAHO.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 2500, rate: 0.05695 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 5000, rate: 0.05695 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 2500, rate: 0.05695 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 5000, rate: 0.05695 },
        { bracketStart: 0, rate: 0.0 },
      ],
    },
    property_tax_rate: 0.0056,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.ILLINOIS.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.0495 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.0495 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.0495 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.0495 },
      ],
    },
    property_tax_rate: 0.0208,
    sales_tax_rate: 0.0884,
  },
  [JurisdictionEnum.INDIANA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.0305 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.0305 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.0305 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.0305 },
      ],
    },
    property_tax_rate: 0.0077,
    sales_tax_rate: 0.07,
  },
  [JurisdictionEnum.IOWA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 31050, rate: 0.057 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 62100, rate: 0.057 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 31050, rate: 0.057 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 31050, rate: 0.057 },
        { bracketStart: 0, rate: 0.0 },
      ],
    },
    property_tax_rate: 0.0149,
    sales_tax_rate: 0.07,
  },
  [JurisdictionEnum.KANSAS.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 23000, rate: 0.0558 },
        { bracketStart: 0, rate: 0.052 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 46000, rate: 0.0558 },
        { bracketStart: 0, rate: 0.052 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 23000, rate: 0.0558 },
        { bracketStart: 0, rate: 0.052 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 23000, rate: 0.0558 },
        { bracketStart: 0, rate: 0.052 },
      ],
    },
    property_tax_rate: 0.0134,
    sales_tax_rate: 0.065,
  },
  [JurisdictionEnum.KENTUCKY.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.04 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.04 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.04 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.04 },
      ],
    },
    property_tax_rate: 0.0074,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.LOUISIANA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 50000, rate: 0.0425 },
        { bracketStart: 12500, rate: 0.035 },
        { bracketStart: 0, rate: 0.0185 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 100000, rate: 0.0425 },
        { bracketStart: 25000, rate: 0.035 },
        { bracketStart: 0, rate: 0.0185 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 50000, rate: 0.0425 },
        { bracketStart: 12500, rate: 0.035 },
        { bracketStart: 0, rate: 0.0185 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 50000, rate: 0.0425 },
        { bracketStart: 12500, rate: 0.035 },
        { bracketStart: 0, rate: 0.0185 },
      ],
    },
    property_tax_rate: 0.0055,
    sales_tax_rate: 0.0445,
  },
  [JurisdictionEnum.MAINE.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 61600, rate: 0.0715 },
        { bracketStart: 26050, rate: 0.0675 },
        { bracketStart: 0, rate: 0.058 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 123250, rate: 0.0715 },
        { bracketStart: 52100, rate: 0.0675 },
        { bracketStart: 0, rate: 0.058 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 61600, rate: 0.0715 },
        { bracketStart: 26050, rate: 0.0675 },
        { bracketStart: 0, rate: 0.058 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 92450, rate: 0.0715 },
        { bracketStart: 39050, rate: 0.0675 },
        { bracketStart: 0, rate: 0.058 },
      ],
    },
    property_tax_rate: 0.0096,
    sales_tax_rate: 0.055,
  },
  [JurisdictionEnum.MARYLAND.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 250001, rate: 0.0575 },
        { bracketStart: 150001, rate: 0.055 },
        { bracketStart: 125001, rate: 0.0525 },
        { bracketStart: 100001, rate: 0.05 },
        { bracketStart: 3001, rate: 0.0475 },
        { bracketStart: 2001, rate: 0.04 },
        { bracketStart: 1001, rate: 0.03 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 300001, rate: 0.0575 },
        { bracketStart: 200001, rate: 0.055 },
        { bracketStart: 175001, rate: 0.0525 },
        { bracketStart: 125001, rate: 0.05 },
        { bracketStart: 4001, rate: 0.0475 },
        { bracketStart: 3001, rate: 0.04 },
        { bracketStart: 2001, rate: 0.03 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 250001, rate: 0.0575 },
        { bracketStart: 150001, rate: 0.055 },
        { bracketStart: 125001, rate: 0.0525 },
        { bracketStart: 100001, rate: 0.05 },
        { bracketStart: 3001, rate: 0.0475 },
        { bracketStart: 2001, rate: 0.04 },
        { bracketStart: 1001, rate: 0.03 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 250001, rate: 0.0575 },
        { bracketStart: 150001, rate: 0.055 },
        { bracketStart: 125001, rate: 0.0525 },
        { bracketStart: 100001, rate: 0.05 },
        { bracketStart: 3001, rate: 0.0475 },
        { bracketStart: 2001, rate: 0.04 },
        { bracketStart: 1001, rate: 0.03 },
        { bracketStart: 0, rate: 0.02 },
      ],
    },
    property_tax_rate: 0.0102,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.MASSACHUSETTS.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.05 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.05 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.05 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.05 },
      ],
    },
    property_tax_rate: 0.0096,
    sales_tax_rate: 0.0625,
  },
  [JurisdictionEnum.MICHIGAN.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.0425 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.0425 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.0425 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.0425 },
      ],
    },
    property_tax_rate: 0.0135,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.MINNESOTA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 1000000, rate: 0.0985 },
        { bracketStart: 171730, rate: 0.0785 },
        { bracketStart: 41730, rate: 0.068 },
        { bracketStart: 0, rate: 0.0535 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 1000000, rate: 0.0985 },
        { bracketStart: 286490, rate: 0.0785 },
        { bracketStart: 69530, rate: 0.068 },
        { bracketStart: 0, rate: 0.0535 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 1000000, rate: 0.0985 },
        { bracketStart: 143245, rate: 0.0785 },
        { bracketStart: 34765, rate: 0.068 },
        { bracketStart: 0, rate: 0.0535 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 1000000, rate: 0.0985 },
        { bracketStart: 229190, rate: 0.0785 },
        { bracketStart: 55630, rate: 0.068 },
        { bracketStart: 0, rate: 0.0535 },
      ],
    },
    property_tax_rate: 0.0105,
    sales_tax_rate: 0.06875,
  },
  [JurisdictionEnum.MISSISSIPPI.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 10000, rate: 0.047 },
        { bracketStart: 5000, rate: 0.04 },
        { bracketStart: 0, rate: 0.03 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 10000, rate: 0.047 },
        { bracketStart: 5000, rate: 0.04 },
        { bracketStart: 0, rate: 0.03 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 10000, rate: 0.047 },
        { bracketStart: 5000, rate: 0.04 },
        { bracketStart: 0, rate: 0.03 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 10000, rate: 0.047 },
        { bracketStart: 5000, rate: 0.04 },
        { bracketStart: 0, rate: 0.03 },
      ],
    },
    property_tax_rate: 0.007,
    sales_tax_rate: 0.07,
  },
  [JurisdictionEnum.MISSOURI.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 8400, rate: 0.054 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 8400, rate: 0.054 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 8400, rate: 0.054 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 8400, rate: 0.054 },
        { bracketStart: 0, rate: 0.0 },
      ],
    },
    property_tax_rate: 0.0099,
    sales_tax_rate: 0.0835,
  },
  [JurisdictionEnum.MONTANA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 20500, rate: 0.059 },
        { bracketStart: 0, rate: 0.047 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 41000, rate: 0.059 },
        { bracketStart: 0, rate: 0.047 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 20500, rate: 0.059 },
        { bracketStart: 0, rate: 0.047 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 20500, rate: 0.059 },
        { bracketStart: 0, rate: 0.047 },
      ],
    },
    property_tax_rate: 0.0079,
    sales_tax_rate: 0,
  },
  [JurisdictionEnum.NEBRASKA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 37670, rate: 0.0584 },
        { bracketStart: 18830, rate: 0.0501 },
        { bracketStart: 3140, rate: 0.0351 },
        { bracketStart: 0, rate: 0.0246 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 75340, rate: 0.0584 },
        { bracketStart: 37660, rate: 0.0501 },
        { bracketStart: 6280, rate: 0.0351 },
        { bracketStart: 0, rate: 0.0246 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 37670, rate: 0.0584 },
        { bracketStart: 18830, rate: 0.0501 },
        { bracketStart: 3140, rate: 0.0351 },
        { bracketStart: 0, rate: 0.0246 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 59130, rate: 0.0584 },
        { bracketStart: 29560, rate: 0.0501 },
        { bracketStart: 4940, rate: 0.0351 },
        { bracketStart: 0, rate: 0.0246 },
      ],
    },
    property_tax_rate: 0.0154,
    sales_tax_rate: 0.0697,
  },
  [JurisdictionEnum.NEVADA.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0082,
    sales_tax_rate: 0.0823,
  },
  [JurisdictionEnum.NEW_HAMPSHIRE.name]: {
    income_tax_brackets: null, // No general income tax on wages
    property_tax_rate: 0.0161,
    sales_tax_rate: 0, // No state sales tax
  },
  [JurisdictionEnum.NEW_JERSEY.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 1000000, rate: 0.1075 },
        { bracketStart: 500001, rate: 0.0897 },
        { bracketStart: 75001, rate: 0.05525 },
        { bracketStart: 35001, rate: 0.035 },
        { bracketStart: 20001, rate: 0.0175 },
        { bracketStart: 0, rate: 0.014 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 1000000, rate: 0.1075 },
        { bracketStart: 500001, rate: 0.0897 },
        { bracketStart: 150001, rate: 0.0637 },
        { bracketStart: 80001, rate: 0.05525 },
        { bracketStart: 70001, rate: 0.035 },
        { bracketStart: 50001, rate: 0.0245 },
        { bracketStart: 20001, rate: 0.0175 },
        { bracketStart: 0, rate: 0.014 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 1000000, rate: 0.1075 },
        { bracketStart: 500001, rate: 0.0897 },
        { bracketStart: 75001, rate: 0.05525 },
        { bracketStart: 35001, rate: 0.035 },
        { bracketStart: 20001, rate: 0.0175 },
        { bracketStart: 0, rate: 0.014 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 1000000, rate: 0.1075 },
        { bracketStart: 500001, rate: 0.0897 },
        { bracketStart: 150001, rate: 0.0637 },
        { bracketStart: 80001, rate: 0.05525 },
        { bracketStart: 70001, rate: 0.035 },
        { bracketStart: 50001, rate: 0.0245 },
        { bracketStart: 20001, rate: 0.0175 },
        { bracketStart: 0, rate: 0.014 },
      ],
    },
    property_tax_rate: 0.0233,
    sales_tax_rate: 0.06625,
  },
  [JurisdictionEnum.NEW_MEXICO.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 210000, rate: 0.059 },
        { bracketStart: 16000, rate: 0.049 },
        { bracketStart: 11000, rate: 0.032 },
        { bracketStart: 5500, rate: 0.022 },
        { bracketStart: 0, rate: 0.017 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 315000, rate: 0.059 },
        { bracketStart: 24000, rate: 0.049 },
        { bracketStart: 16500, rate: 0.032 },
        { bracketStart: 8250, rate: 0.022 },
        { bracketStart: 0, rate: 0.017 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 157500, rate: 0.059 },
        { bracketStart: 12000, rate: 0.049 },
        { bracketStart: 8250, rate: 0.032 },
        { bracketStart: 4125, rate: 0.022 },
        { bracketStart: 0, rate: 0.017 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 315000, rate: 0.059 },
        { bracketStart: 24000, rate: 0.049 },
        { bracketStart: 16500, rate: 0.032 },
        { bracketStart: 8250, rate: 0.022 },
        { bracketStart: 0, rate: 0.017 },
      ],
    },
    property_tax_rate: 0.0067,
    sales_tax_rate: 0.0762,
  },
  [JurisdictionEnum.NEW_YORK.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 25000001, rate: 0.109 },
        { bracketStart: 5000001, rate: 0.103 },
        { bracketStart: 1077551, rate: 0.0965 },
        { bracketStart: 215401, rate: 0.0685 },
        { bracketStart: 80651, rate: 0.06 },
        { bracketStart: 13901, rate: 0.055 },
        { bracketStart: 11701, rate: 0.0525 },
        { bracketStart: 8501, rate: 0.045 },
        { bracketStart: 0, rate: 0.04 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 25000001, rate: 0.109 },
        { bracketStart: 5000001, rate: 0.103 },
        { bracketStart: 2155351, rate: 0.0965 },
        { bracketStart: 323201, rate: 0.0685 },
        { bracketStart: 161551, rate: 0.06 },
        { bracketStart: 27901, rate: 0.055 },
        { bracketStart: 23601, rate: 0.0525 },
        { bracketStart: 17151, rate: 0.045 },
        { bracketStart: 0, rate: 0.04 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 25000001, rate: 0.109 },
        { bracketStart: 5000001, rate: 0.103 },
        { bracketStart: 1077551, rate: 0.0965 },
        { bracketStart: 215401, rate: 0.0685 },
        { bracketStart: 80651, rate: 0.06 },
        { bracketStart: 13901, rate: 0.055 },
        { bracketStart: 11701, rate: 0.0525 },
        { bracketStart: 8501, rate: 0.045 },
        { bracketStart: 0, rate: 0.04 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 25000001, rate: 0.109 },
        { bracketStart: 5000001, rate: 0.103 },
        { bracketStart: 1616451, rate: 0.0965 },
        { bracketStart: 269301, rate: 0.0685 },
        { bracketStart: 107651, rate: 0.06 },
        { bracketStart: 20901, rate: 0.055 },
        { bracketStart: 17651, rate: 0.0525 },
        { bracketStart: 12801, rate: 0.045 },
        { bracketStart: 0, rate: 0.04 },
      ],
    },
    property_tax_rate: 0.0154,
    sales_tax_rate: 0.0853,
  },
  [JurisdictionEnum.NORTH_CAROLINA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.045 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.045 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.045 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.045 },
      ],
    },
    property_tax_rate: 0.0063,
    sales_tax_rate: 0.0695,
  },
  [JurisdictionEnum.NORTH_DAKOTA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 447250, rate: 0.025 },
        { bracketStart: 90525, rate: 0.0225 },
        { bracketStart: 0, rate: 0.011 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 447250, rate: 0.025 },
        { bracketStart: 150850, rate: 0.0225 },
        { bracketStart: 0, rate: 0.011 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 223625, rate: 0.025 },
        { bracketStart: 75425, rate: 0.0225 },
        { bracketStart: 0, rate: 0.011 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 447250, rate: 0.025 },
        { bracketStart: 120700, rate: 0.0225 },
        { bracketStart: 0, rate: 0.011 },
      ],
    },
    property_tax_rate: 0.0099,
    sales_tax_rate: 0.05,
  },
  [JurisdictionEnum.OHIO.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 100000, rate: 0.035 },
        { bracketStart: 26051, rate: 0.0275 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 100000, rate: 0.035 },
        { bracketStart: 26051, rate: 0.0275 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 100000, rate: 0.035 },
        { bracketStart: 26051, rate: 0.0275 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 100000, rate: 0.035 },
        { bracketStart: 26051, rate: 0.0275 },
        { bracketStart: 0, rate: 0.0 },
      ],
    },
    property_tax_rate: 0.0143,
    sales_tax_rate: 0.0724,
  },
  [JurisdictionEnum.OKLAHOMA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 7201, rate: 0.0475 },
        { bracketStart: 4901, rate: 0.0375 },
        { bracketStart: 3751, rate: 0.0275 },
        { bracketStart: 2501, rate: 0.0175 },
        { bracketStart: 1001, rate: 0.0075 },
        { bracketStart: 0, rate: 0.0025 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 12201, rate: 0.0475 },
        { bracketStart: 8201, rate: 0.0375 },
        { bracketStart: 6301, rate: 0.0275 },
        { bracketStart: 4201, rate: 0.0175 },
        { bracketStart: 2001, rate: 0.0075 },
        { bracketStart: 0, rate: 0.0025 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 7201, rate: 0.0475 },
        { bracketStart: 4901, rate: 0.0375 },
        { bracketStart: 3751, rate: 0.0275 },
        { bracketStart: 2501, rate: 0.0175 },
        { bracketStart: 1001, rate: 0.0075 },
        { bracketStart: 0, rate: 0.0025 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 12201, rate: 0.0475 },
        { bracketStart: 8201, rate: 0.0375 },
        { bracketStart: 6301, rate: 0.0275 },
        { bracketStart: 4201, rate: 0.0175 },
        { bracketStart: 2001, rate: 0.0075 },
        { bracketStart: 0, rate: 0.0025 },
      ],
    },
    property_tax_rate: 0.0076,
    sales_tax_rate: 0.0899,
  },
  [JurisdictionEnum.OREGON.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 125000, rate: 0.099 },
        { bracketStart: 10750, rate: 0.0875 },
        { bracketStart: 4300, rate: 0.0675 },
        { bracketStart: 0, rate: 0.0475 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 250000, rate: 0.099 },
        { bracketStart: 21500, rate: 0.0875 },
        { bracketStart: 8600, rate: 0.0675 },
        { bracketStart: 0, rate: 0.0475 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 125000, rate: 0.099 },
        { bracketStart: 10750, rate: 0.0875 },
        { bracketStart: 4300, rate: 0.0675 },
        { bracketStart: 0, rate: 0.0475 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 250000, rate: 0.099 },
        { bracketStart: 21500, rate: 0.0875 },
        { bracketStart: 8600, rate: 0.0675 },
        { bracketStart: 0, rate: 0.0475 },
      ],
    },
    property_tax_rate: 0.0086,
    sales_tax_rate: 0,
  },
  [JurisdictionEnum.PENNSYLVANIA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.0307 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.0307 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.0307 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.0307 },
      ],
    },
    property_tax_rate: 0.0126,
    sales_tax_rate: 0.0634,
  },
  [JurisdictionEnum.RHODE_ISLAND.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 176050, rate: 0.0599 },
        { bracketStart: 77450, rate: 0.0475 },
        { bracketStart: 0, rate: 0.0375 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 176050, rate: 0.0599 },
        { bracketStart: 77450, rate: 0.0475 },
        { bracketStart: 0, rate: 0.0375 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 176050, rate: 0.0599 },
        { bracketStart: 77450, rate: 0.0475 },
        { bracketStart: 0, rate: 0.0375 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 176050, rate: 0.0599 },
        { bracketStart: 77450, rate: 0.0475 },
        { bracketStart: 0, rate: 0.0375 },
      ],
    },
    property_tax_rate: 0.01443,
    sales_tax_rate: 0.07,
  },
  [JurisdictionEnum.SOUTH_CAROLINA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 17330, rate: 0.062 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 17330, rate: 0.062 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 17330, rate: 0.062 },
        { bracketStart: 0, rate: 0.0 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 17330, rate: 0.062 },
        { bracketStart: 0, rate: 0.0 },
      ],
    },
    property_tax_rate: 0.0053,
    sales_tax_rate: 0.075,
  },
  [JurisdictionEnum.SOUTH_DAKOTA.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0124,
    sales_tax_rate: 0.0611,
  },
  [JurisdictionEnum.TENNESSEE.name]: {
    income_tax_brackets: null, // No personal income tax
    property_tax_rate: 0.0055,
    sales_tax_rate: 0.0956,
  },
  [JurisdictionEnum.TEXAS.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.018,
    sales_tax_rate: 0.082,
  },
  [JurisdictionEnum.UTAH.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.0455 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 0, rate: 0.0455 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 0, rate: 0.0455 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 0, rate: 0.0455 },
      ],
    },
    property_tax_rate: 0.0055,
    sales_tax_rate: 0.072,
  },
  [JurisdictionEnum.VERMONT.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 242700, rate: 0.0875 },
        { bracketStart: 116000, rate: 0.076 },
        { bracketStart: 47900, rate: 0.066 },
        { bracketStart: 0, rate: 0.0335 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 294950, rate: 0.0875 },
        { bracketStart: 193500, rate: 0.076 },
        { bracketStart: 79950, rate: 0.066 },
        { bracketStart: 0, rate: 0.0335 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 242700, rate: 0.0875 },
        { bracketStart: 116000, rate: 0.076 },
        { bracketStart: 47900, rate: 0.066 },
        { bracketStart: 0, rate: 0.0335 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 268850, rate: 0.0875 },
        { bracketStart: 154750, rate: 0.076 },
        { bracketStart: 64200, rate: 0.066 },
        { bracketStart: 0, rate: 0.0335 },
      ],
    },
    property_tax_rate: 0.0178,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.VIRGINIA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 17001, rate: 0.0575 },
        { bracketStart: 5001, rate: 0.05 },
        { bracketStart: 3001, rate: 0.03 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 17001, rate: 0.0575 },
        { bracketStart: 5001, rate: 0.05 },
        { bracketStart: 3001, rate: 0.03 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 17001, rate: 0.0575 },
        { bracketStart: 5001, rate: 0.05 },
        { bracketStart: 3001, rate: 0.03 },
        { bracketStart: 0, rate: 0.02 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 17001, rate: 0.0575 },
        { bracketStart: 5001, rate: 0.05 },
        { bracketStart: 3001, rate: 0.03 },
        { bracketStart: 0, rate: 0.02 },
      ],
    },
    property_tax_rate: 0.0072,
    sales_tax_rate: 0.053,
  },
  [JurisdictionEnum.WASHINGTON.name]: {
    income_tax_brackets: null, // No personal income tax
    property_tax_rate: 0.0084,
    sales_tax_rate: 0.0943,
  },
  [JurisdictionEnum.WEST_VIRGINIA.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 60001, rate: 0.0512 },
        { bracketStart: 40001, rate: 0.0472 },
        { bracketStart: 25001, rate: 0.0354 },
        { bracketStart: 10001, rate: 0.0315 },
        { bracketStart: 0, rate: 0.0236 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 60001, rate: 0.0512 },
        { bracketStart: 40001, rate: 0.0472 },
        { bracketStart: 25001, rate: 0.0354 },
        { bracketStart: 10001, rate: 0.0315 },
        { bracketStart: 0, rate: 0.0236 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 30001, rate: 0.0512 },
        { bracketStart: 20001, rate: 0.0472 },
        { bracketStart: 12501, rate: 0.0354 },
        { bracketStart: 5001, rate: 0.0315 },
        { bracketStart: 0, rate: 0.0236 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 60001, rate: 0.0512 },
        { bracketStart: 40001, rate: 0.0472 },
        { bracketStart: 25001, rate: 0.0354 },
        { bracketStart: 10001, rate: 0.0315 },
        { bracketStart: 0, rate: 0.0236 },
      ],
    },
    property_tax_rate: 0.0055,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.WISCONSIN.name]: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 315341, rate: 0.0765 },
        { bracketStart: 28641, rate: 0.053 },
        { bracketStart: 14321, rate: 0.044 },
        { bracketStart: 0, rate: 0.035 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 420461, rate: 0.0765 },
        { bracketStart: 38191, rate: 0.053 },
        { bracketStart: 19091, rate: 0.044 },
        { bracketStart: 0, rate: 0.035 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 210231, rate: 0.0765 },
        { bracketStart: 19096, rate: 0.053 },
        { bracketStart: 9546, rate: 0.044 },
        { bracketStart: 0, rate: 0.035 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 315341, rate: 0.0765 },
        { bracketStart: 28641, rate: 0.053 },
        { bracketStart: 14321, rate: 0.044 },
        { bracketStart: 0, rate: 0.035 },
      ],
    },
    property_tax_rate: 0.0138,
    sales_tax_rate: 0.05,
  },
  [JurisdictionEnum.WYOMING.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0058,
    sales_tax_rate: 0.0544,
  },
};
