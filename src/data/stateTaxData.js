import { FilingStatusEnum, JurisdictionEnum } from "../constants.js";

/**
 * Helper to create identical tax brackets for all filing statuses (Flat Tax).
 */
const createFlatTaxBrackets = (rate) => {
  const brackets = [{ bracketStart: 0, rate }];
  return {
    [FilingStatusEnum.SINGLE.name]: brackets,
    [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: brackets,
    [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: brackets,
    [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: brackets,
  };
};

export const STATE_STANDARD_DEDUCTION_AMOUNTS = {
  [JurisdictionEnum.CALIFORNIA.name]: {
    [FilingStatusEnum.SINGLE.name]: 5540,
    [FilingStatusEnum.MARRIED_FILING_JOINTLY.name]: 11080,
    [FilingStatusEnum.MARRIED_FILING_SEPARATELY.name]: 5540,
    [FilingStatusEnum.HEAD_OF_HOUSEHOLD.name]: 11080,
  },
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
    property_tax_rate: 0.004,
    sales_tax_rate: 0.04,
  },
  [JurisdictionEnum.ALASKA.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0104,
    sales_tax_rate: 0.0182,
  },
  [JurisdictionEnum.ARIZONA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.025),
    property_tax_rate: 0.0063,
    sales_tax_rate: 0.084,
  },
  [JurisdictionEnum.ARKANSAS.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.039), // Simplified from multi-bracket for demo
    property_tax_rate: 0.0064,
    sales_tax_rate: 0.0947,
  },
  [JurisdictionEnum.CALIFORNIA.name]: {
    income_tax_brackets: CALIFORNIA_INCOME_TAX_BRACKETS,
    property_tax_rate: 0.0075,
    sales_tax_rate: 0.0882,
  },
  [JurisdictionEnum.COLORADO.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.044),
    property_tax_rate: 0.0055,
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
    property_tax_rate: 0.0179,
    sales_tax_rate: 0.0635,
  },
  [JurisdictionEnum.DELAWARE.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.066), // Simplified
    property_tax_rate: 0.0061,
    sales_tax_rate: 0,
  },
  [JurisdictionEnum.FLORIDA.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0091,
    sales_tax_rate: 0.0708,
  },
  [JurisdictionEnum.GEORGIA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0539),
    property_tax_rate: 0.0092,
    sales_tax_rate: 0.0738,
  },
  [JurisdictionEnum.HAWAII.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.11), // Simplified
    property_tax_rate: 0.0032,
    sales_tax_rate: 0.045,
  },
  [JurisdictionEnum.IDAHO.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.05695),
    property_tax_rate: 0.0067,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.ILLINOIS.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0495),
    property_tax_rate: 0.0208,
    sales_tax_rate: 0.0884,
  },
  [JurisdictionEnum.INDIANA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0305),
    property_tax_rate: 0.0084,
    sales_tax_rate: 0.07,
  },
  [JurisdictionEnum.IOWA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.057),
    property_tax_rate: 0.0152,
    sales_tax_rate: 0.07,
  },
  [JurisdictionEnum.KANSAS.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0558),
    property_tax_rate: 0.0134,
    sales_tax_rate: 0.065,
  },
  [JurisdictionEnum.KENTUCKY.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.04),
    property_tax_rate: 0.0083,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.LOUISIANA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0425),
    property_tax_rate: 0.0056,
    sales_tax_rate: 0.0445,
  },
  [JurisdictionEnum.MAINE.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0715),
    property_tax_rate: 0.0124,
    sales_tax_rate: 0.055,
  },
  [JurisdictionEnum.MARYLAND.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0575),
    property_tax_rate: 0.0105,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.MASSACHUSETTS.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.05),
    property_tax_rate: 0.0114,
    sales_tax_rate: 0.0625,
  },
  [JurisdictionEnum.MICHIGAN.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0425),
    property_tax_rate: 0.0138,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.MINNESOTA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0985),
    property_tax_rate: 0.0111,
    sales_tax_rate: 0.06875,
  },
  [JurisdictionEnum.MISSISSIPPI.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.047),
    property_tax_rate: 0.0067,
    sales_tax_rate: 0.07,
  },
  [JurisdictionEnum.MISSOURI.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.054),
    property_tax_rate: 0.0101,
    sales_tax_rate: 0.0835,
  },
  [JurisdictionEnum.MONTANA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.059),
    property_tax_rate: 0.0074,
    sales_tax_rate: 0,
  },
  [JurisdictionEnum.NEBRASKA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0584),
    property_tax_rate: 0.0163,
    sales_tax_rate: 0.0697,
  },
  [JurisdictionEnum.NEVADA.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0059,
    sales_tax_rate: 0.0823,
  },
  [JurisdictionEnum.NEW_HAMPSHIRE.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0193,
    sales_tax_rate: 0,
  },
  [JurisdictionEnum.NEW_JERSEY.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.1075),
    property_tax_rate: 0.0223,
    sales_tax_rate: 0.06625,
  },
  [JurisdictionEnum.NEW_MEXICO.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.059),
    property_tax_rate: 0.0067,
    sales_tax_rate: 0.0762,
  },
  [JurisdictionEnum.NEW_YORK.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.109),
    property_tax_rate: 0.014,
    sales_tax_rate: 0.0853,
  },
  [JurisdictionEnum.NORTH_CAROLINA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.045),
    property_tax_rate: 0.0082,
    sales_tax_rate: 0.0695,
  },
  [JurisdictionEnum.NORTH_DAKOTA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.025),
    property_tax_rate: 0.0098,
    sales_tax_rate: 0.05,
  },
  [JurisdictionEnum.OHIO.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.035),
    property_tax_rate: 0.0159,
    sales_tax_rate: 0.0724,
  },
  [JurisdictionEnum.OKLAHOMA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0475),
    property_tax_rate: 0.0089,
    sales_tax_rate: 0.0899,
  },
  [JurisdictionEnum.OREGON.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.099),
    property_tax_rate: 0.0093,
    sales_tax_rate: 0,
  },
  [JurisdictionEnum.PENNSYLVANIA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0307),
    property_tax_rate: 0.0149,
    sales_tax_rate: 0.0634,
  },
  [JurisdictionEnum.RHODE_ISLAND.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0599),
    property_tax_rate: 0.014,
    sales_tax_rate: 0.07,
  },
  [JurisdictionEnum.SOUTH_CAROLINA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.062),
    property_tax_rate: 0.0057,
    sales_tax_rate: 0.075,
  },
  [JurisdictionEnum.SOUTH_DAKOTA.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0117,
    sales_tax_rate: 0.0611,
  },
  [JurisdictionEnum.TENNESSEE.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0067,
    sales_tax_rate: 0.0956,
  },
  [JurisdictionEnum.TEXAS.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0168,
    sales_tax_rate: 0.082,
  },
  [JurisdictionEnum.UTAH.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0455),
    property_tax_rate: 0.0057,
    sales_tax_rate: 0.072,
  },
  [JurisdictionEnum.VERMONT.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0875),
    property_tax_rate: 0.0183,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.VIRGINIA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0575),
    property_tax_rate: 0.0087,
    sales_tax_rate: 0.053,
  },
  [JurisdictionEnum.WASHINGTON.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0087,
    sales_tax_rate: 0.0943,
  },
  [JurisdictionEnum.WEST_VIRGINIA.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0512),
    property_tax_rate: 0.0057,
    sales_tax_rate: 0.06,
  },
  [JurisdictionEnum.WISCONSIN.name]: {
    income_tax_brackets: createFlatTaxBrackets(0.0765),
    property_tax_rate: 0.0161,
    sales_tax_rate: 0.05,
  },
  [JurisdictionEnum.WYOMING.name]: {
    income_tax_brackets: null,
    property_tax_rate: 0.0056,
    sales_tax_rate: 0.0544,
  },
};
