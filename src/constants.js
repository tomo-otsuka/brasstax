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
