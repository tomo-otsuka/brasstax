export const JurisdictionEnum = Object.freeze({
  FEDERAL: { name: "federal", readable: "Federal" },
  CALIFORNIA: { name: "california", readable: "CA" },
  NEVADA: { name: "nevada", readable: "NV" },
  ARIZONA: { name: "arizona", readable: "AZ" },
  COLORADO: { name: "colorado", readable: "CO" },
  FLORIDA: { name: "florida", readable: "FL" },
  ILLINOIS: { name: "illinois", readable: "IL" },
  NEW_YORK: { name: "new-york", readable: "NY" },
  OREGON: { name: "oregon", readable: "OR" },
  TEXAS: { name: "texas", readable: "TX" },
  NEW_HAMPSHIRE: { name: "new-hampshire", readable: "NH" },
  PENNSYLVANIA: { name: "pennsylvania", readable: "PA" },
  TENNESSEE: { name: "tennessee", readable: "TN" },
  WASHINGTON: { name: "washington", readable: "WA" },
  ALASKA: { name: "alaska", readable: "AK" },
  DELAWARE: { name: "delaware", readable: "DE" },
  MONTANA: { name: "montana", readable: "MT" },
  SOUTH_DAKOTA: { name: "south-dakota", readable: "SD" },
  HAWAII: { name: "hawaii", readable: "HI" },
  UTAH: { name: "utah", readable: "UT" },
  KENTUCKY: { name: "kentucky", readable: "KY" },
  MISSISSIPPI: { name: "mississippi", readable: "MS" },
  ALABAMA: { name: "alabama", readable: "AL" },
  MISSOURI: { name: "missouri", readable: "MO" },
});

export const FilingStatusEnum = Object.freeze({
  SINGLE: { name: "single", readable: "Single" },
  MARRIED_FILING_JOINTLY: {
    name: "married-filing-jointly",
    readable: "Married Filing Jointly",
  },
  MARRIED_FILING_SEPARATELY: {
    name: "married-filing-separately",
    readable: "Married Filing Separately",
  },
  HEAD_OF_HOUSEHOLD: {
    name: "head-of-household",
    readable: "Head of Household",
  },
});

export const TimePeriodEnum = Object.freeze({
  FIRST: { name: 0, readable: "1/1 - 3/31" },
  SECOND: { name: 1, readable: "1/1 - 5/31" },
  THIRD: { name: 2, readable: "1/1 - 8/31" },
  FOURTH: { name: 3, readable: "1/1 - 12/31" },
});

export const DeductionTypeEnum = Object.freeze({
  STANDARD: { name: "standard", readable: "Standard" },
  ITEMIZED: { name: "itemized", readable: "Itemized" },
});
