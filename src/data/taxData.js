import { FilingStatusEnum, JurisdictionEnum } from "../constants.js";

export const STANDARD_DEDUCTION_AMOUNTS = {
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

export const FEDERAL_INCOME_TAX_BRACKETS = {
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

export const CALIFORNIA_INCOME_TAX_BRACKETS = {
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
  CALIFORNIA: {
    income_tax_brackets: CALIFORNIA_INCOME_TAX_BRACKETS,
    property_tax_rate: 0.0074,
    sales_tax_rate: 0.0882,
  },
  COLORADO: {
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
    sales_tax_rate: 0.0772,
  },
  FLORIDA: {
    income_tax_brackets: null,
    property_tax_rate: 0.0098,
    sales_tax_rate: 0.0708,
  },
  ILLINOIS: {
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
    property_tax_rate: 0.0227,
    sales_tax_rate: 0.0881,
  },
  NEW_YORK: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 25000000, rate: 0.109 },
        { bracketStart: 5000000, rate: 0.103 },
        { bracketStart: 1077550, rate: 0.0965 },
        { bracketStart: 80650, rate: 0.06 },
        { bracketStart: 21400, rate: 0.055 },
        { bracketStart: 12800, rate: 0.045 },
        { bracketStart: 8500, rate: 0.04 },
        { bracketStart: 0, rate: 0.04 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 25000000, rate: 0.109 },
        { bracketStart: 5000000, rate: 0.103 },
        { bracketStart: 2155350, rate: 0.0965 },
        { bracketStart: 161550, rate: 0.06 },
        { bracketStart: 43000, rate: 0.055 },
        { bracketStart: 25600, rate: 0.045 },
        { bracketStart: 17150, rate: 0.04 },
        { bracketStart: 0, rate: 0.04 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 25000000, rate: 0.109 },
        { bracketStart: 5000000, rate: 0.103 },
        { bracketStart: 1077550, rate: 0.0965 },
        { bracketStart: 80650, rate: 0.06 },
        { bracketStart: 21400, rate: 0.055 },
        { bracketStart: 12800, rate: 0.045 },
        { bracketStart: 8500, rate: 0.04 },
        { bracketStart: 0, rate: 0.04 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 25000000, rate: 0.109 },
        { bracketStart: 5000000, rate: 0.103 },
        { bracketStart: 1616450, rate: 0.0965 },
        { bracketStart: 107700, rate: 0.06 },
        { bracketStart: 32100, rate: 0.055 },
        { bracketStart: 19300, rate: 0.045 },
        { bracketStart: 12750, rate: 0.04 },
        { bracketStart: 0, rate: 0.04 },
      ],
    },
    property_tax_rate: 0.0172,
    sales_tax_rate: 0.0852,
  },
  OREGON: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 125000, rate: 0.099 },
        { bracketStart: 9200, rate: 0.0875 },
        { bracketStart: 3650, rate: 0.0675 },
        { bracketStart: 0, rate: 0.0475 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 250000, rate: 0.099 },
        { bracketStart: 18400, rate: 0.0875 },
        { bracketStart: 7300, rate: 0.0675 },
        { bracketStart: 0, rate: 0.0475 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 125000, rate: 0.099 },
        { bracketStart: 9200, rate: 0.0875 },
        { bracketStart: 3650, rate: 0.0675 },
        { bracketStart: 0, rate: 0.0475 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 250000, rate: 0.099 },
        { bracketStart: 18400, rate: 0.0875 },
        { bracketStart: 7300, rate: 0.0675 },
        { bracketStart: 0, rate: 0.0475 },
      ],
    },
    property_tax_rate: 0.009,
    sales_tax_rate: 0,
  },
  TEXAS: {
    income_tax_brackets: null,
    property_tax_rate: 0.018,
    sales_tax_rate: 0.082,
  },
  ARIZONA: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.025 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [{ bracketStart: 0, rate: 0.025 }],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [{ bracketStart: 0, rate: 0.025 }],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [{ bracketStart: 0, rate: 0.025 }],
    },
    property_tax_rate: 0.0045,
    sales_tax_rate: 0.0838,
  },
  NEW_HAMPSHIRE: {
    income_tax_brackets: null, // No general income tax on wages
    property_tax_rate: 0.0161,
    sales_tax_rate: 0, // No state sales tax
  },
  PENNSYLVANIA: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.0307 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [{ bracketStart: 0, rate: 0.0307 }],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [{ bracketStart: 0, rate: 0.0307 }],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [{ bracketStart: 0, rate: 0.0307 }],
    },
    property_tax_rate: 0.0126,
    sales_tax_rate: 0.0634,
  },
  TENNESSEE: {
    income_tax_brackets: null, // No personal income tax
    property_tax_rate: 0.0055,
    sales_tax_rate: 0.0956,
  },
  WASHINGTON: {
    income_tax_brackets: null, // No personal income tax
    property_tax_rate: 0.0084,
    sales_tax_rate: 0.0943,
  },
  ALASKA: {
    income_tax_brackets: null,
    property_tax_rate: 0.0116,
    sales_tax_rate: 0.0182,
  },
  DELAWARE: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 60000, rate: 0.0660 },
        { bracketStart: 20000, rate: 0.0555 },
        { bracketStart: 10000, rate: 0.0480 },
        { bracketStart: 5000, rate: 0.0390 },
        { bracketStart: 2000, rate: 0.0220 },
        { bracketStart: 0, rate: 0.0000 },
      ],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [
        { bracketStart: 60000, rate: 0.0660 },
        { bracketStart: 20000, rate: 0.0555 },
        { bracketStart: 10000, rate: 0.0480 },
        { bracketStart: 5000, rate: 0.0390 },
        { bracketStart: 2000, rate: 0.0220 },
        { bracketStart: 0, rate: 0.0000 },
      ],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [
        { bracketStart: 60000, rate: 0.0660 },
        { bracketStart: 20000, rate: 0.0555 },
        { bracketStart: 10000, rate: 0.0480 },
        { bracketStart: 5000, rate: 0.0390 },
        { bracketStart: 2000, rate: 0.0220 },
        { bracketStart: 0, rate: 0.0000 },
      ],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [
        { bracketStart: 60000, rate: 0.0660 },
        { bracketStart: 20000, rate: 0.0555 },
        { bracketStart: 10000, rate: 0.0480 },
        { bracketStart: 5000, rate: 0.0390 },
        { bracketStart: 2000, rate: 0.0220 },
        { bracketStart: 0, rate: 0.0000 },
      ],
    },
    property_tax_rate: 0.0055,
    sales_tax_rate: 0,
  },
  MONTANA: {
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
  SOUTH_DAKOTA: {
    income_tax_brackets: null,
    property_tax_rate: 0.0124,
    sales_tax_rate: 0.0611,
  },
  HAWAII: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [
        { bracketStart: 200000, rate: 0.11 },
        { bracketStart: 175000, rate: 0.10 },
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
        { bracketStart: 350000, rate: 0.10 },
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
        { bracketStart: 175000, rate: 0.10 },
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
        { bracketStart: 175000, rate: 0.10 },
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
  UTAH: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.0455 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [{ bracketStart: 0, rate: 0.0455 }],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [{ bracketStart: 0, rate: 0.0455 }],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [{ bracketStart: 0, rate: 0.0455 }],
    },
    property_tax_rate: 0.0055,
    sales_tax_rate: 0.072,
  },
  KENTUCKY: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.04 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [{ bracketStart: 0, rate: 0.04 }],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [{ bracketStart: 0, rate: 0.04 }],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [{ bracketStart: 0, rate: 0.04 }],
    },
    property_tax_rate: 0.0074,
    sales_tax_rate: 0.06,
  },
  MISSISSIPPI: {
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
  NORTH_CAROLINA: {
    income_tax_brackets: {
      [FilingStatusEnum.SINGLE.name]: [{ bracketStart: 0, rate: 0.045 }],
      [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: [{ bracketStart: 0, rate: 0.045 }],
      [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: [{ bracketStart: 0, rate: 0.045 }],
      [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: [{ bracketStart: 0, rate: 0.045 }],
    },
    property_tax_rate: 0.0063,
    sales_tax_rate: 0.0695,
  },
  NEVADA: {
    income_tax_brackets: null,
    property_tax_rate: 0.0082,
    sales_tax_rate: 0.0823,
  },
  ALABAMA: {
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
  MISSOURI: {
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
};

export const JURISDICTION_TO_INCOME_BRACKETS = {
  [JurisdictionEnum.FEDERAL.name]: FEDERAL_INCOME_TAX_BRACKETS,
  [JurisdictionEnum.CALIFORNIA.name]: CALIFORNIA_INCOME_TAX_BRACKETS,
  [JurisdictionEnum.NEVADA.name]: null,
  [JurisdictionEnum.ARIZONA.name]: STATE_TAX_DATA.ARIZONA.income_tax_brackets,
  [JurisdictionEnum.COLORADO.name]: STATE_TAX_DATA.COLORADO.income_tax_brackets,
  [JurisdictionEnum.FLORIDA.name]: null,
  [JurisdictionEnum.ILLINOIS.name]: STATE_TAX_DATA.ILLINOIS.income_tax_brackets,
  [JurisdictionEnum.NEW_YORK.name]: STATE_TAX_DATA.NEW_YORK.income_tax_brackets,
  [JurisdictionEnum.OREGON.name]: STATE_TAX_DATA.OREGON.income_tax_brackets,
  [JurisdictionEnum.TEXAS.name]: null,
  [JurisdictionEnum.NEW_HAMPSHIRE.name]: null,
  [JurisdictionEnum.PENNSYLVANIA.name]: STATE_TAX_DATA.PENNSYLVANIA.income_tax_brackets,
  [JurisdictionEnum.TENNESSEE.name]: null,
  [JurisdictionEnum.WASHINGTON.name]: null,
  [JurisdictionEnum.ALASKA.name]: null,
  [JurisdictionEnum.DELAWARE.name]: STATE_TAX_DATA.DELAWARE.income_tax_brackets,
  [JurisdictionEnum.MONTANA.name]: STATE_TAX_DATA.MONTANA.income_tax_brackets,
  [JurisdictionEnum.SOUTH_DAKOTA.name]: null,
  [JurisdictionEnum.HAWAII.name]: STATE_TAX_DATA.HAWAII.income_tax_brackets,
  [JurisdictionEnum.UTAH.name]: STATE_TAX_DATA.UTAH.income_tax_brackets,
  [JurisdictionEnum.MISSISSIPPI.name]: STATE_TAX_DATA.MISSISSIPPI.income_tax_brackets,
  [JurisdictionEnum.ALABAMA.name]: STATE_TAX_DATA.ALABAMA.income_tax_brackets,
  [JurisdictionEnum.MISSOURI.name]: STATE_TAX_DATA.MISSOURI.income_tax_brackets,
};
