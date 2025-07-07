import React, { useState, useMemo } from "react";
import {
  FilingStatusEnum,
  DeductionTypeEnum,
  JurisdictionEnum,
  TimePeriodEnum,
} from "../constants";
import {
  calculateTax,
  adjustIncomes,
  calculateDeduction,
  calculateIncomeTax,
  calculateLongTermCapitalGainsTax,
  calculateAdditionalMedicareTax,
  calculateNetInvestmentIncomeTax,
} from "../taxFunctions";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

export const EstimatedTaxes = () => {
  const [jurisdiction, setJurisdiction] = useState(
    JurisdictionEnum.FEDERAL.name,
  );
  const [filingStatus, setFilingStatus] = useState(
    FilingStatusEnum.SINGLE.name,
  );
  const [timePeriod, setTimePeriod] = useState(TimePeriodEnum.FIRST.name);
  const [ordinaryIncome, setOrdinaryIncome] = useState(0);
  const [shortTermCapitalGains, setShortTermCapitalGains] = useState(0);
  const [longTermCapitalGains, setLongTermCapitalGains] = useState(0);
  const [deductionType, setDeductionType] = useState(
    DeductionTypeEnum.STANDARD.name,
  );
  const [itemizedDeductions, setItemizedDeductions] = useState(0);
  const [taxCreditsAnnual, setTaxCreditsAnnual] = useState(0);
  const [includePriorYearCalculation, setIncludePriorYearCalculation] =
    useState(false);
  const [priorYearAgi, setPriorYearAgi] = useState(0);
  const [priorYearTax, setPriorYearTax] = useState(0);
  const [withholding, setWithholding] = useState(0);

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

  const totalTaxBasedOnAnnualizedIncome = useMemo(() => {
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

  const annualizedAdjustedIncomes = useMemo(() => {
    const multiplier = [4, 2.4, 1.5, 1][timePeriod];
    let annualizedOrdinaryIncome = multiplier * ordinaryIncome;
    let annualizedShortTermCapitalGains = multiplier * shortTermCapitalGains;
    let annualizedLongTermCapitalGains = multiplier * longTermCapitalGains;
    let annualizedItemizedDeductions = multiplier * itemizedDeductions;

    return adjustIncomes(
      jurisdiction,
      filingStatus,
      annualizedOrdinaryIncome,
      annualizedShortTermCapitalGains,
      annualizedLongTermCapitalGains,
      deductionType,
      annualizedItemizedDeductions,
    );
  }, [
    jurisdiction,
    filingStatus,
    ordinaryIncome,
    shortTermCapitalGains,
    longTermCapitalGains,
    deductionType,
    itemizedDeductions,
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

  const incomeTax = useMemo(() => {
    const [
      annualizedOrdinaryIncome,
      annualizedShortTermCapitalGains,
      annualizedLongTermCapitalGains,
    ] = annualizedAdjustedIncomes;

    return calculateIncomeTax(
      jurisdiction,
      filingStatus,
      annualizedOrdinaryIncome,
      annualizedShortTermCapitalGains,
      annualizedLongTermCapitalGains,
    );
  }, [jurisdiction, filingStatus, annualizedAdjustedIncomes]);

  const longTermCapitalGainsTax = useMemo(() => {
    const [
      annualizedOrdinaryIncome,
      annualizedShortTermCapitalGains,
      annualizedLongTermCapitalGains,
    ] = annualizedAdjustedIncomes;

    return calculateLongTermCapitalGainsTax(
      jurisdiction,
      filingStatus,
      annualizedOrdinaryIncome,
      annualizedShortTermCapitalGains,
      annualizedLongTermCapitalGains,
    );
  }, [jurisdiction, filingStatus, annualizedAdjustedIncomes]);

  const additionalMedicareTax = useMemo(() => {
    const [annualizedOrdinaryIncome] = annualizedAdjustedIncomes;

    return calculateAdditionalMedicareTax(
      filingStatus,
      annualizedOrdinaryIncome,
    );
  }, [filingStatus, annualizedAdjustedIncomes]);

  const netInvestmentIncomeTax = useMemo(() => {
    const [
      annualizedOrdinaryIncome,
      annualizedShortTermCapitalGains,
      annualizedLongTermCapitalGains,
    ] = annualizedAdjustedIncomes;

    return calculateNetInvestmentIncomeTax(
      filingStatus,
      annualizedOrdinaryIncome,
      annualizedShortTermCapitalGains + annualizedLongTermCapitalGains,
    );
  }, [filingStatus, annualizedAdjustedIncomes]);

  const obligationBasedOnAnnualizedIncome = useMemo(() => {
    return 0.9 * totalTaxBasedOnAnnualizedIncome;
  }, [totalTaxBasedOnAnnualizedIncome]);

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
    return totalTaxBasedOnAnnualizedIncome / annualizedIncome || 0;
  }, [totalTaxBasedOnAnnualizedIncome, annualizedIncome]);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            select
            label="Jurisdiction"
            value={jurisdiction}
            onChange={(e) => setJurisdiction(e.target.value)}
            fullWidth
          >
            {Object.values(JurisdictionEnum).map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            label="Filing Status"
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value)}
            fullWidth
          >
            {Object.values(FilingStatusEnum).map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            label="Time Period"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            fullWidth
          >
            {Object.values(TimePeriodEnum).map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Ordinary Income"
            type="number"
            value={ordinaryIncome}
            onChange={(e) => setOrdinaryIncome(Number(e.target.value))}
            fullWidth
          />
          <TextField
            label="Short Term Capital Gains"
            type="number"
            value={shortTermCapitalGains}
            onChange={(e) => setShortTermCapitalGains(Number(e.target.value))}
            fullWidth
          />
          <TextField
            label="Long Term Capital Gains"
            type="number"
            value={longTermCapitalGains}
            onChange={(e) => setLongTermCapitalGains(Number(e.target.value))}
            fullWidth
          />
          <TextField
            select
            label="Deduction Type"
            value={deductionType}
            onChange={(e) => setDeductionType(e.target.value)}
            fullWidth
          >
            {Object.values(DeductionTypeEnum).map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          {deductionType === DeductionTypeEnum.ITEMIZED.name && (
            <TextField
              label="Itemized Deductions"
              type="number"
              value={itemizedDeductions}
              onChange={(e) => setItemizedDeductions(Number(e.target.value))}
              fullWidth
            />
          )}
          <TextField
            label="Tax Credits (Annual)"
            type="number"
            value={taxCreditsAnnual}
            onChange={(e) => setTaxCreditsAnnual(Number(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Calculations</Typography>
          <Typography>
            Annualized Income: {annualizedIncome.toFixed(2)}
          </Typography>
          <Typography>Deduction: {deduction.toFixed(2)}</Typography>
          {jurisdiction === JurisdictionEnum.FEDERAL.name && (
            <>
              <Typography>Income Tax: {incomeTax.toFixed(2)}</Typography>
              <Typography>
                Long Term Capital Gains Tax:{" "}
                {longTermCapitalGainsTax.toFixed(2)}
              </Typography>
              <Typography>
                Additional Medicare Tax: {additionalMedicareTax.toFixed(2)}
              </Typography>
              <Typography>
                Net Investment Tax: {netInvestmentIncomeTax.toFixed(2)}
              </Typography>
            </>
          )}
          <Typography>
            Total Tax: {totalTaxBasedOnAnnualizedIncome.toFixed(2)} (
            {(annualizedEffectiveTaxRate * 100).toFixed(2)}
            %)
          </Typography>
          <Typography>
            Obligation based on annualized income:{" "}
            {obligationBasedOnAnnualizedIncome.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={includePriorYearCalculation}
                onChange={(e) =>
                  setIncludePriorYearCalculation(e.target.checked)
                }
              />
            }
            label="Include prior year calculation"
          />
          <TextField
            label="Prior Year AGI"
            type="number"
            value={priorYearAgi}
            onChange={(e) => setPriorYearAgi(Number(e.target.value))}
            disabled={!includePriorYearCalculation}
            fullWidth
          />
          <TextField
            label="Prior Year Tax"
            type="number"
            value={priorYearTax}
            onChange={(e) => setPriorYearTax(Number(e.target.value))}
            disabled={!includePriorYearCalculation}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Obligation based on prior year:{" "}
            {obligationBasedOnPriorYear.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Annualized Obligation: {annualizedObligation.toFixed(2)}
          </Typography>
          <Typography>
            Obligation in time period: {obligationDuringTimePeriod.toFixed(2)}
          </Typography>
          <TextField
            label="Withholding ($)"
            type="number"
            value={withholding}
            onChange={(e) => setWithholding(Number(e.target.value))}
            fullWidth
          />
          <Typography>Taxes Owed: {taxesOwed.toFixed(2)}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            This is not financial advice. <br />
            This tool is meant to estimate the estimated payments, and is
            provided without any guarantees. <br />
            The author is not a CPA nor did any CPA review this. Please use at
            your own risk. <br />
            If you would like to inspect the calculations or make any
            contributions, please review the source code{" "}
            <a href="https://github.com/tomo-otsuka/brasstax">here</a>. <br />
            <br />
            Privacy: This tool does not collect any sensitive data. <br />
            In fact, after retrieving the initial static assets to display this
            page, <br />
            it does not communicate to a server whatsoever.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
