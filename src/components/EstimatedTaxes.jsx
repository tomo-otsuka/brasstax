import React, { useState, useMemo } from "react";
import {
  FilingStatusEnum,
  DeductionTypeEnum,
  JurisdictionEnum,
  TimePeriodEnum,
} from "../constants";
import { calculateTax, calculateDeduction } from "../taxFunctions";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Share, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

export const EstimatedTaxes = ({
  searchParams,
  setSearchParams,
  showSnackbar,
}) => {
  const [jurisdiction, setJurisdiction] = useState(
    searchParams.get("jurisdiction") || JurisdictionEnum.FEDERAL.name,
  );
  const [filingStatus, setFilingStatus] = useState(
    searchParams.get("filingStatus") || FilingStatusEnum.SINGLE.name,
  );
  const [timePeriod, setTimePeriod] = useState(
    searchParams.get("timePeriod") || TimePeriodEnum.FIRST.name,
  );
  const [ordinaryIncome, setOrdinaryIncome] = useState(
    Number(searchParams.get("ordinaryIncome")) || 0,
  );
  const [shortTermCapitalGains, setShortTermCapitalGains] = useState(
    Number(searchParams.get("shortTermCapitalGains")) || 0,
  );
  const [longTermCapitalGains, setLongTermCapitalGains] = useState(
    Number(searchParams.get("longTermCapitalGains")) || 0,
  );
  const [deductionType, setDeductionType] = useState(
    searchParams.get("deductionType") || DeductionTypeEnum.STANDARD.name,
  );
  const [itemizedDeductions, setItemizedDeductions] = useState(
    Number(searchParams.get("itemizedDeductions")) || 0,
  );
  const [taxCreditsAnnual, setTaxCreditsAnnual] = useState(
    Number(searchParams.get("taxCreditsAnnual")) || 0,
  );
  const [includePriorYearCalculation, setIncludePriorYearCalculation] =
    useState(
      searchParams.get("includePriorYearCalculation") === "true" || false,
    );
  const [priorYearAgi, setPriorYearAgi] = useState(
    Number(searchParams.get("priorYearAgi")) || 0,
  );
  const [priorYearTax, setPriorYearTax] = useState(
    Number(searchParams.get("priorYearTax")) || 0,
  );
  const [withholding, setWithholding] = useState(
    Number(searchParams.get("withholding")) || 0,
  );

  const updateSearchParams = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  };

  const obligationBasedOnPriorYear = useMemo(() => {
    const threshold =
      filingStatus !== FilingStatusEnum.MARRIED_FILING_SEPARATELY.name
        ? 150000
        : 75000;
    const multiplier = priorYearAgi <= threshold ? 1 : 1.1;
    return priorYearTax * multiplier;
  }, [priorYearAgi, priorYearTax, filingStatus]);

  const annualizedIncome = useMemo(() => {
    const multiplier = [4, 2.4, 1.5, 1][timePeriod];
    const annualizedOrdinaryIncome = multiplier * ordinaryIncome;
    const annualizedShortTermCapitalGains = multiplier * shortTermCapitalGains;
    const annualizedLongTermCapitalGains = multiplier * longTermCapitalGains;

    return (
      annualizedOrdinaryIncome +
      Math.max(
        annualizedShortTermCapitalGains + annualizedLongTermCapitalGains,
        -3000,
      )
    );
  }, [ordinaryIncome, shortTermCapitalGains, longTermCapitalGains, timePeriod]);

  const taxBreakdown = useMemo(() => {
    const multiplier = [4, 2.4, 1.5, 1][timePeriod];
    const annualizedOrdinaryIncome = multiplier * ordinaryIncome;
    const annualizedShortTermCapitalGains = multiplier * shortTermCapitalGains;
    const annualizedLongTermCapitalGains = multiplier * longTermCapitalGains;
    const annualizedItemizedDeductions = multiplier * itemizedDeductions;

    return calculateTax(
      jurisdiction,
      filingStatus,
      annualizedOrdinaryIncome,
      annualizedShortTermCapitalGains,
      annualizedLongTermCapitalGains,
      deductionType,
      annualizedItemizedDeductions,
      taxCreditsAnnual,
    );
  }, [
    jurisdiction,
    filingStatus,
    ordinaryIncome,
    shortTermCapitalGains,
    longTermCapitalGains,
    deductionType,
    itemizedDeductions,
    taxCreditsAnnual,
    timePeriod,
  ]);

  const deduction = useMemo(() => {
    const multiplier = [4, 2.4, 1.5, 1][timePeriod];
    const annualizedItemizedDeductions = multiplier * itemizedDeductions;
    return calculateDeduction(
      jurisdiction,
      filingStatus,
      deductionType,
      annualizedItemizedDeductions,
    );
  }, [
    jurisdiction,
    filingStatus,
    deductionType,
    itemizedDeductions,
    timePeriod,
  ]);

  const obligationBasedOnAnnualizedIncome = useMemo(() => {
    return 0.9 * taxBreakdown["Total Tax"];
  }, [taxBreakdown]);

  const annualizedObligation = useMemo(() => {
    let obligations = [obligationBasedOnAnnualizedIncome];
    if (includePriorYearCalculation) {
      if (
        !(
          jurisdiction === JurisdictionEnum.CALIFORNIA.name &&
          annualizedIncome > 1000000
        )
      ) {
        obligations.push(obligationBasedOnPriorYear);
      }
    }
    return Math.min(...obligations);
  }, [
    obligationBasedOnAnnualizedIncome,
    includePriorYearCalculation,
    jurisdiction,
    annualizedIncome,
    obligationBasedOnPriorYear,
  ]);

  const obligationDuringTimePeriod = useMemo(() => {
    let multipliers = [0.25, 0.5, 0.75, 1];
    if (jurisdiction === JurisdictionEnum.CALIFORNIA.name) {
      multipliers = [0.3, 0.7, 0.7, 1];
    }
    const rate = multipliers[timePeriod];
    return annualizedObligation * rate;
  }, [jurisdiction, timePeriod, annualizedObligation]);

  const taxesOwed = useMemo(() => {
    return obligationDuringTimePeriod - withholding;
  }, [obligationDuringTimePeriod, withholding]);

  const annualizedEffectiveTaxRate = useMemo(() => {
    return taxBreakdown["Total Tax"] / annualizedIncome || 0;
  }, [taxBreakdown, annualizedIncome]);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs>
          <Typography variant="h4" component="h1">
            Estimated Taxes
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            startIcon={<Share />}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              showSnackbar();
            }}
          >
            Share
          </Button>
        </Grid>
      </Grid>
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="explanation-content"
          id="explanation-header"
        >
          <Typography variant="h6">About This Tool</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            This tool helps you estimate your quarterly required tax payments to
            the IRS. If you are self-employed or have other income not subject
            to withholding, you are generally required to make these payments
            throughout the year.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Annualized Income Method
          </Typography>
          <Typography paragraph>
            The calculation is based on the <strong>annualized income</strong>{" "}
            method. This means we take your income for the selected time period
            (e.g., the first quarter) and project it out for the full year to
            estimate your total annual tax. Your required payment for the
            quarter is then calculated based on this annualized tax.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Safe Harbor Rule
          </Typography>
          <Typography paragraph>
            To avoid underpayment penalties, you generally need to pay at least
            90% of your current year's tax liability. However, the IRS provides
            a <strong>"safe harbor"</strong> rule: you can also avoid penalties
            by paying 100% of your previous year's tax liability (or 110% if
            your prior year's Adjusted Gross Income was over $150,000). This
            tool allows you to include your prior year's information to see if
            this rule results in a lower required payment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    General
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        select
                        label="Jurisdiction"
                        value={jurisdiction}
                        onChange={(e) => {
                          setJurisdiction(e.target.value);
                          updateSearchParams("jurisdiction", e.target.value);
                        }}
                        fullWidth
                      >
                        {Object.values(JurisdictionEnum).map((option) => (
                          <MenuItem key={option.name} value={option.name}>
                            {option.readable}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        select
                        label="Filing Status"
                        value={filingStatus}
                        onChange={(e) => {
                          setFilingStatus(e.target.value);
                          updateSearchParams("filingStatus", e.target.value);
                        }}
                        fullWidth
                      >
                        {Object.values(FilingStatusEnum).map((option) => (
                          <MenuItem key={option.name} value={option.name}>
                            {option.readable}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        select
                        label="Time Period"
                        value={timePeriod}
                        onChange={(e) => {
                          setTimePeriod(e.target.value);
                          updateSearchParams("timePeriod", e.target.value);
                        }}
                        fullWidth
                      >
                        {Object.values(TimePeriodEnum).map((option) => (
                          <MenuItem key={option.name} value={option.name}>
                            {option.readable}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Income & Deductions (for the time period)
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Ordinary Income"
                        type="number"
                        value={ordinaryIncome}
                        onChange={(e) => {
                          setOrdinaryIncome(Number(e.target.value));
                          updateSearchParams("ordinaryIncome", e.target.value);
                        }}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Short Term Capital Gains"
                        type="number"
                        value={shortTermCapitalGains}
                        onChange={(e) => {
                          setShortTermCapitalGains(Number(e.target.value));
                          updateSearchParams(
                            "shortTermCapitalGains",
                            e.target.value,
                          );
                        }}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Long Term Capital Gains"
                        type="number"
                        value={longTermCapitalGains}
                        onChange={(e) => {
                          setLongTermCapitalGains(Number(e.target.value));
                          updateSearchParams(
                            "longTermCapitalGains",
                            e.target.value,
                          );
                        }}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        label="Deduction Type"
                        value={deductionType}
                        onChange={(e) => {
                          setDeductionType(e.target.value);
                          updateSearchParams("deductionType", e.target.value);
                        }}
                        fullWidth
                      >
                        {Object.values(DeductionTypeEnum).map((option) => (
                          <MenuItem key={option.name} value={option.name}>
                            {option.readable}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    {deductionType === DeductionTypeEnum.ITEMIZED.name && (
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Itemized Deductions"
                          type="number"
                          value={itemizedDeductions}
                          onChange={(e) => {
                            setItemizedDeductions(Number(e.target.value));
                            updateSearchParams(
                              "itemizedDeductions",
                              e.target.value,
                            );
                          }}
                          fullWidth
                          inputProps={{ step: 1000 }}
                        />
                      </Grid>
                    )}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Annual Adjustments
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Tax Credits (Annual)"
                        type="number"
                        value={taxCreditsAnnual}
                        onChange={(e) => {
                          setTaxCreditsAnnual(Number(e.target.value));
                          updateSearchParams(
                            "taxCreditsAnnual",
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
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={includePriorYearCalculation}
                        onChange={(e) => {
                          setIncludePriorYearCalculation(e.target.checked);
                          updateSearchParams(
                            "includePriorYearCalculation",
                            e.target.checked,
                          );
                        }}
                      />
                    }
                    label={
                      <Typography variant="h6">
                        Prior Year Safe Harbor
                      </Typography>
                    }
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Prior Year AGI"
                        type="number"
                        value={priorYearAgi}
                        onChange={(e) => {
                          setPriorYearAgi(Number(e.target.value));
                          updateSearchParams("priorYearAgi", e.target.value);
                        }}
                        disabled={!includePriorYearCalculation}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Prior Year Tax"
                        type="number"
                        value={priorYearTax}
                        onChange={(e) => {
                          setPriorYearTax(Number(e.target.value));
                          updateSearchParams("priorYearTax", e.target.value);
                        }}
                        disabled={!includePriorYearCalculation}
                        fullWidth
                        inputProps={{ step: 1000 }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ position: "sticky", top: "1rem" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Results
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography
                  variant="h4"
                  component="p"
                  textAlign="center"
                  gutterBottom
                >
                  Taxes Owed: ${taxesOwed.toFixed(2)}
                </Typography>
                <TextField
                  label="Withholding (for the time period)"
                  type="number"
                  value={withholding}
                  onChange={(e) => {
                    setWithholding(Number(e.target.value));
                    updateSearchParams("withholding", e.target.value);
                  }}
                  fullWidth
                  sx={{ my: 1 }}
                  inputProps={{ step: 1000 }}
                />
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Summary
                </Typography>
                <Typography>
                  Annualized Income: ${annualizedIncome.toFixed(2)}
                </Typography>
                <Typography>
                  Annualized Deduction: ${deduction.toFixed(2)}
                </Typography>
                <Typography>
                  Annualized Total Tax: ${taxBreakdown["Total Tax"].toFixed(2)}
                </Typography>
                <Typography>
                  Annualized Effective Tax Rate:{" "}
                  {(annualizedEffectiveTaxRate * 100).toFixed(2)}%
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Details
                </Typography>
                {jurisdiction === JurisdictionEnum.FEDERAL.name && (
                  <>
                    {Object.entries(taxBreakdown).map(
                      ([key, value]) =>
                        key !== "Total Tax" && (
                          <Typography key={key}>
                            {key}: ${value.toFixed(2)}
                          </Typography>
                        ),
                    )}
                    <Divider sx={{ my: 2 }} />
                  </>
                )}
                <Typography>
                  Obligation based on annualized income (90% of total tax): $
                  {obligationBasedOnAnnualizedIncome.toFixed(2)}
                </Typography>
                {includePriorYearCalculation && (
                  <Typography>
                    Obligation based on prior year: $
                    {obligationBasedOnPriorYear.toFixed(2)}
                  </Typography>
                )}
                <Typography>
                  Final Annualized Obligation: $
                  {annualizedObligation.toFixed(2)}
                </Typography>
                <Typography>
                  Obligation for time period: $
                  {obligationDuringTimePeriod.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption">
                This is not financial advice. <br />
                This tool is meant to estimate the estimated payments, and is
                provided without any guarantees. <br />
                The author is not a CPA nor did any CPA review this. Please use
                at your own risk. <br />
                If you would like to inspect the calculations or make any
                contributions, please review the source code{" "}
                <a href="https://github.com/tomo-otsuka/brasstax">here</a>.{" "}
                <br />
                <br />
                Privacy: This tool does not collect any sensitive data. <br />
                In fact, after retrieving the initial static assets to display
                this page, <br />
                it does not communicate to a server whatsoever.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
