import { FilingStatusEnum, JurisdictionEnum } from "../constants";

export const TAX_CHART_PRESETS = [
  {
    name: "Average Single Earner",
    params: {
      filingStatus: FilingStatusEnum.SINGLE.name,
      ordinaryIncome: 80000,
      shortTermCapitalGains: 2000,
      longTermCapitalGains: 5000,
      selectedState: JurisdictionEnum.NEW_YORK.name,
    },
  },
  {
    name: "High-Income Married Couple",
    params: {
      filingStatus: FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
      ordinaryIncome: 250000,
      shortTermCapitalGains: 10000,
      longTermCapitalGains: 50000,
      selectedState: JurisdictionEnum.CALIFORNIA.name,
    },
  },
  {
    name: "Single with Significant Capital Gains",
    params: {
      filingStatus: FilingStatusEnum.SINGLE.name,
      ordinaryIncome: 60000,
      shortTermCapitalGains: 5000,
      longTermCapitalGains: 150000,
      selectedState: JurisdictionEnum.FLORIDA.name,
    },
  },
  {
    name: "Retiree with No State Income Tax",
    params: {
      filingStatus: FilingStatusEnum.SINGLE.name,
      ordinaryIncome: 50000,
      shortTermCapitalGains: 0,
      longTermCapitalGains: 25000,
      selectedState: JurisdictionEnum.TEXAS.name,
    },
  },
];
