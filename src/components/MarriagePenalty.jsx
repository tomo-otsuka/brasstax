import React, { useState, useCallback, useMemo } from "react";
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
import {
  Grid,
  Box,
  Typography,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { Share } from "@mui/icons-material";

export function MarriagePenalty({ searchParams, setSearchParams }) {
  const [ordinaryIncome1, setOrdinaryIncome1] = useState(
    Number(searchParams.get("ordinaryIncome1")) || 75000,
  );
  const [shortTermCapitalGains1, setShortTermCapitalGains1] = useState(
    Number(searchParams.get("shortTermCapitalGains1")) || 5000,
  );
  const [longTermCapitalGains1, setLongTermCapitalGains1] = useState(
    Number(searchParams.get("longTermCapitalGains1")) || 10000,
  );
  const [ordinaryIncome2, setOrdinaryIncome2] = useState(
    Number(searchParams.get("ordinaryIncome2")) || 75000,
  );
  const [shortTermCapitalGains2, setShortTermCapitalGains2] = useState(
    Number(searchParams.get("shortTermCapitalGains2")) || 0,
  );
  const [longTermCapitalGains2, setLongTermCapitalGains2] = useState(
    Number(searchParams.get("longTermCapitalGains2")) || 0,
  );
  const [selectedState, setSelectedState] = useState(
    searchParams.get("selectedState") || JurisdictionEnum.CALIFORNIA.name,
  );

  const updateSearchParams = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  };

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

  const tax1 = useMemo(
    () =>
      calculateTax(
        FilingStatusEnum.SINGLE.name,
        ordinaryIncome1,
        shortTermCapitalGains1,
        longTermCapitalGains1,
      ),
    [
      ordinaryIncome1,
      shortTermCapitalGains1,
      longTermCapitalGains1,
      calculateTax,
    ],
  );

  const tax2 = useMemo(
    () =>
      calculateTax(
        FilingStatusEnum.SINGLE.name,
        ordinaryIncome2,
        shortTermCapitalGains2,
        longTermCapitalGains2,
      ),
    [
      ordinaryIncome2,
      shortTermCapitalGains2,
      longTermCapitalGains2,
      calculateTax,
    ],
  );

  const taxMarried = useMemo(
    () =>
      calculateTax(
        FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        ordinaryIncome1 + ordinaryIncome2,
        shortTermCapitalGains1 + shortTermCapitalGains2,
        longTermCapitalGains1 + longTermCapitalGains2,
      ),
    [
      ordinaryIncome1,
      shortTermCapitalGains1,
      longTermCapitalGains1,
      ordinaryIncome2,
      shortTermCapitalGains2,
      longTermCapitalGains2,
      calculateTax,
    ],
  );

  const taxDifference = useMemo(() => {
    const difference = {};
    for (const key in taxMarried) {
      difference[key] = (
        taxMarried[key] -
        (tax1[key] || 0) -
        (tax2[key] || 0)
      ).toFixed(2);
    }
    return difference;
  }, [tax1, tax2, taxMarried]);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <TextField
                select
                label="State"
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  updateSearchParams("selectedState", e.target.value);
                }}
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Person 1</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Ordinary Income"
                    type="number"
                    value={ordinaryIncome1}
                    onChange={(e) => {
                      setOrdinaryIncome1(Number(e.target.value));
                      updateSearchParams("ordinaryIncome1", e.target.value);
                    }}
                    fullWidth
                    inputProps={{ step: 1000 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Short Term Capital Gains"
                    type="number"
                    value={shortTermCapitalGains1}
                    onChange={(e) => {
                      setShortTermCapitalGains1(Number(e.target.value));
                      updateSearchParams(
                        "shortTermCapitalGains1",
                        e.target.value,
                      );
                    }}
                    fullWidth
                    inputProps={{ step: 1000 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Long Term Capital Gains"
                    type="number"
                    value={longTermCapitalGains1}
                    onChange={(e) => {
                      setLongTermCapitalGains1(Number(e.target.value));
                      updateSearchParams(
                        "longTermCapitalGains1",
                        e.target.value,
                      );
                    }}
                    fullWidth
                    inputProps={{ step: 1000 }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Person 2</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Ordinary Income"
                    type="number"
                    value={ordinaryIncome2}
                    onChange={(e) => {
                      setOrdinaryIncome2(Number(e.target.value));
                      updateSearchParams("ordinaryIncome2", e.target.value);
                    }}
                    fullWidth
                    inputProps={{ step: 1000 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Short Term Capital Gains"
                    type="number"
                    value={shortTermCapitalGains2}
                    onChange={(e) => {
                      setShortTermCapitalGains2(Number(e.target.value));
                      updateSearchParams(
                        "shortTermCapitalGains2",
                        e.target.value,
                      );
                    }}
                    fullWidth
                    inputProps={{ step: 1000 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Long Term Capital Gains"
                    type="number"
                    value={longTermCapitalGains2}
                    onChange={(e) => {
                      setLongTermCapitalGains2(Number(e.target.value));
                      updateSearchParams(
                        "longTermCapitalGains2",
                        e.target.value,
                      );
                    }}
                    fullWidth
                    inputProps={{ step: 1000 }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Person 1 Taxes</Typography>
              <Divider sx={{ my: 1 }} />
              {Object.entries(tax1).map(([key, value]) => (
                <Typography key={key}>
                  {key}: {value.toFixed(2)}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Person 2 Taxes</Typography>
              <Divider sx={{ my: 1 }} />
              {Object.entries(tax2).map(([key, value]) => (
                <Typography key={key}>
                  {key}: {value.toFixed(2)}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Married Taxes</Typography>
              <Divider sx={{ my: 1 }} />
              {Object.entries(taxMarried).map(([key, value]) => (
                <Typography key={key}>
                  {key}: {value.toFixed(2)}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Tax Difference</Typography>
              <Divider sx={{ my: 1 }} />
              {Object.entries(taxDifference).map(([key, value]) => (
                <Typography key={key}>
                  {key}: {value}
                </Typography>
              ))}
              <Button
                variant="contained"
                startIcon={<Share />}
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                sx={{ mt: 2 }}
              >
                Share
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
