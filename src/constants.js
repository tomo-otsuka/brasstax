export const JurisdictionEnum = Object.freeze({
  FEDERAL: { name: "federal", readable: "Federal" },
  ALABAMA: { name: "alabama", readable: "Alabama" },
  ALASKA: { name: "alaska", readable: "Alaska" },
  ARIZONA: { name: "arizona", readable: "Arizona" },
  ARKANSAS: { name: "arkansas", readable: "Arkansas" },
  CALIFORNIA: { name: "california", readable: "California" },
  COLORADO: { name: "colorado", readable: "Colorado" },
  CONNECTICUT: { name: "connecticut", readable: "Connecticut" },
  DELAWARE: { name: "delaware", readable: "Delaware" },
  FLORIDA: { name: "florida", readable: "Florida" },
  GEORGIA: { name: "georgia", readable: "Georgia" },
  HAWAII: { name: "hawaii", readable: "Hawaii" },
  IDAHO: { name: "idaho", readable: "Idaho" },
  ILLINOIS: { name: "illinois", readable: "Illinois" },
  INDIANA: { name: "indiana", readable: "Indiana" },
  IOWA: { name: "iowa", readable: "Iowa" },
  KANSAS: { name: "kansas", readable: "Kansas" },
  KENTUCKY: { name: "kentucky", readable: "Kentucky" },
  LOUISIANA: { name: "louisiana", readable: "Louisiana" },
  MAINE: { name: "maine", readable: "Maine" },
  MARYLAND: { name: "maryland", readable: "Maryland" },
  MASSACHUSETTS: { name: "massachusetts", readable: "Massachusetts" },
  MICHIGAN: { name: "michigan", readable: "Michigan" },
  MINNESOTA: { name: "minnesota", readable: "Minnesota" },
  MISSISSIPPI: { name: "mississippi", readable: "Mississippi" },
  MISSOURI: { name: "missouri", readable: "Missouri" },
  MONTANA: { name: "montana", readable: "Montana" },
  NEBRASKA: { name: "nebraska", readable: "Nebraska" },
  NEVADA: { name: "nevada", readable: "Nevada" },
  NEW_HAMPSHIRE: { name: "new-hampshire", readable: "New Hampshire" },
  NEW_JERSEY: { name: "new-jersey", readable: "New Jersey" },
  NEW_MEXICO: { name: "new-mexico", readable: "New Mexico" },
  NEW_YORK: { name: "new-york", readable: "New York" },
  NORTH_CAROLINA: { name: "north-carolina", readable: "North Carolina" },
  NORTH_DAKOTA: { name: "north-dakota", readable: "North Dakota" },
  OHIO: { name: "ohio", readable: "Ohio" },
  OKLAHOMA: { name: "oklahoma", readable: "Oklahoma" },
  OREGON: { name: "oregon", readable: "Oregon" },
  PENNSYLVANIA: { name: "pennsylvania", readable: "Pennsylvania" },
  RHODE_ISLAND: { name: "rhode-island", readable: "Rhode Island" },
  SOUTH_CAROLINA: { name: "south-carolina", readable: "South Carolina" },
  SOUTH_DAKOTA: { name: "south-dakota", readable: "South Dakota" },
  TENNESSEE: { name: "tennessee", readable: "Tennessee" },
  TEXAS: { name: "texas", readable: "Texas" },
  UTAH: { name: "utah", readable: "Utah" },
  VERMONT: { name: "vermont", readable: "Vermont" },
  VIRGINIA: { name: "virginia", readable: "Virginia" },
  WASHINGTON: { name: "washington", readable: "Washington" },
  WEST_VIRGINIA: { name: "west-virginia", readable: "West Virginia" },
  WISCONSIN: { name: "wisconsin", readable: "Wisconsin" },
  WYOMING: { name: "wyoming", readable: "Wyoming" },
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

export const JurisdictionNameToEnum = Object.fromEntries(
  Object.values(JurisdictionEnum).map((jurisdiction) => [
    jurisdiction.name,
    jurisdiction,
  ]),
);
