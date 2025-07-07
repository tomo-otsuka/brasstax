import React, { useEffect, useState, useCallback } from "react";
import {
  DeductionTypeEnum,
  FilingStatusEnum,
  JurisdictionEnum,
} from "../constants";
import {
  calculateDeduction,
  calculateIncomeTax,
  calculateLongTermCapitalGainsTax,
  calculateMedicareTax,
  calculateNetInvestmentIncomeTax,
} from "../taxFunctions";
import { Grid, Box, Typography, TextField, MenuItem } from "@mui/material";

export function MarriagePenalty(props) {
  const [ordinaryIncome1, setOrdinaryIncome1] = useState(75000);
  const [shortTermCapitalGains1, setShortTermCapitalGains1] = useState(5000);
  const [longTermCapitalGains1, setLongTermCapitalGains1] = useState(10000);
  const [ordinaryIncome2, setOrdinaryIncome2] = useState(75000);
  const [shortTermCapitalGains2, setShortTermCapitalGains2] = useState(0);
  const [longTermCapitalGains2, setLongTermCapitalGains2] = useState(0);
  const [selectedState, setSelectedState] = useState(
    JurisdictionEnum.CALIFORNIA.name,
  );
  const [tax1, setTax1] = useState({});
  const [tax2, setTax2] = useState({});
  const [taxMarried, setTaxMarried] = useState({});
  const [taxDifference, setTaxDifference] = useState({});

  const calculateTax = useCallback(
    (
      filingStatus,
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
    ) => {
      const jurisdiction = JurisdictionEnum.FEDERAL.name;
      const deductionType = DeductionTypeEnum.STANDARD.name;

      const deduction = calculateDeduction(
        jurisdiction,
        filingStatus,
        deductionType,
        0,
      );

      const taxableIncome = Math.max(0, ordinaryIncome - deduction);

      const incomeTax = calculateIncomeTax(
        jurisdiction,
        filingStatus,
        taxableIncome,
        shortTermCapitalGains,
        longTermCapitalGains,
      );
      const medicareTax = calculateMedicareTax(filingStatus, ordinaryIncome);
      const longTermCapitalGainsTax = calculateLongTermCapitalGainsTax(
        jurisdiction,
        filingStatus,
        ordinaryIncome,
        shortTermCapitalGains,
        longTermCapitalGains,
      );
      const netInvestmentIncomeTax = calculateNetInvestmentIncomeTax(
        filingStatus,
        ordinaryIncome,
        shortTermCapitalGains + longTermCapitalGains,
      );

      const stateIncomeTax = calculateIncomeTax(
        selectedState,
        filingStatus,
        taxableIncome,
        shortTermCapitalGains,
        longTermCapitalGains,
      );
      return {
        "Federal Income Tax": incomeTax,
        Medicare: medicareTax,
        LTCG: longTermCapitalGainsTax,
        NIIT: netInvestmentIncomeTax,
        "State Income Tax": stateIncomeTax,
        "Total Tax":
          incomeTax +
          medicareTax +
          longTermCapitalGainsTax +
          netInvestmentIncomeTax +
          stateIncomeTax,
      };
    },
    [selectedState],
  );

  useEffect(() => {
    setTax1(
      calculateTax(
        FilingStatusEnum.SINGLE.name,
        ordinaryIncome1,
        shortTermCapitalGains1,
        longTermCapitalGains1,
      ),
    );
  }, [
    ordinaryIncome1,
    shortTermCapitalGains1,
    longTermCapitalGains1,
    selectedState,
    calculateTax,
  ]);
  useEffect(() => {
    setTax2(
      calculateTax(
        FilingStatusEnum.SINGLE.name,
        ordinaryIncome2,
        shortTermCapitalGains2,
        longTermCapitalGains2,
      ),
    );
  }, [
    ordinaryIncome2,
    shortTermCapitalGains2,
    longTermCapitalGains2,
    selectedState,
    calculateTax,
  ]);
  useEffect(() => {
    setTaxMarried(
      calculateTax(
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        ordinaryIncome1 + ordinaryIncome2,
        shortTermCapitalGains1 + shortTermCapitalGains2,
        longTermCapitalGains1 + longTermCapitalGains2,
      ),
    );
  }, [
    ordinaryIncome1,
    shortTermCapitalGains1,
    longTermCapitalGains1,
    ordinaryIncome2,
    shortTermCapitalGains2,
    longTermCapitalGains2,
    selectedState,
    calculateTax,
  ]);
  useEffect(() => {
    setTaxDifference({
      "Federal Income Tax": (
        taxMarried["Federal Income Tax"] -
        tax1["Federal Income Tax"] -
        tax2["Federal Income Tax"]
      ).toFixed(2),
      Medicare: (
        taxMarried["Medicare"] -
        tax1["Medicare"] -
        tax2["Medicare"]
      ).toFixed(2),
      LTCG: (taxMarried["LTCG"] - tax1["LTCG"] - tax2["LTCG"]).toFixed(2),
      NIIT: (taxMarried["NIIT"] - tax1["NIIT"] - tax2["NIIT"]).toFixed(2),
      "State Income Tax": (
        taxMarried["State Income Tax"] -
        tax1["State Income Tax"] -
        tax2["State Income Tax"]
      ).toFixed(2),
      "Total Tax": (
        taxMarried["Total Tax"] -
        tax1["Total Tax"] -
        tax2["Total Tax"]
      ).toFixed(2),
    });
  }, [taxMarried, tax1, tax2]);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            select
            label="State"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            fullWidth
          >
            {Object.values(JurisdictionEnum)
              .filter((j) => j.name !== JurisdictionEnum.FEDERAL.name)
              .map((state) => (
                <MenuItem key={state.name} value={state.name}>
                  {state.readable}
                </MenuItem>
              ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Person 1</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Ordinary Income"
                type="number"
                value={ordinaryIncome1}
                onChange={(e) => setOrdinaryIncome1(Number(e.target.value))}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Short Term Capital Gains"
                type="number"
                value={shortTermCapitalGains1}
                onChange={(e) =>
                  setShortTermCapitalGains1(Number(e.target.value))
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Long Term Capital Gains"
                type="number"
                value={longTermCapitalGains1}
                onChange={(e) =>
                  setLongTermCapitalGains1(Number(e.target.value))
                }
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Person 2</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Ordinary Income"
                type="number"
                value={ordinaryIncome2}
                onChange={(e) => setOrdinaryIncome2(Number(e.target.value))}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Short Term Capital Gains"
                type="number"
                value={shortTermCapitalGains2}
                onChange={(e) =>
                  setShortTermCapitalGains2(Number(e.target.value))
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Long Term Capital Gains"
                type="number"
                value={longTermCapitalGains2}
                onChange={(e) =>
                  setLongTermCapitalGains2(Number(e.target.value))
                }
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Person 1 Taxes</Typography>
          {Object.entries(tax1).map(([key, value]) => (
            <Typography key={key}>
              {key}: {value.toFixed(2)}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Person 2 Taxes</Typography>
          {Object.entries(tax2).map(([key, value]) => (
            <Typography key={key}>
              {key}: {value.toFixed(2)}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Married Taxes</Typography>
          {Object.entries(taxMarried).map(([key, value]) => (
            <Typography key={key}>
              {key}: {value.toFixed(2)}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Tax Difference</Typography>
          {Object.entries(taxDifference).map(([key, value]) => (
            <Typography key={key}>
              {key}: {value}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
