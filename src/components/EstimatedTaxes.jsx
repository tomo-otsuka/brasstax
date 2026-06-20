import React, { useState, useMemo } from "react";
import {
  FilingStatusEnum,
  DeductionTypeEnum,
  JurisdictionEnum,
  TimePeriodEnum,
} from "../constants";
import { calculateTax, calculateDeduction } from "../taxFunctions";
import { usePageMeta } from "./common/usePageMeta";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Typography,
  Divider,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from "@mui/material";
import {
  Share,
  ExpandMore as ExpandMoreIcon,
  Settings as SettingsIcon,
  AccountBalance as IncomeIcon,
  TuneRounded as AdjustmentsIcon,
  History as PriorYearIcon,
  Calculate as CalculateIcon,
} from "@mui/icons-material";
import { InputSection } from "./common/InputSection";
import { ResultCard } from "./common/ResultCard";
import { TaxYearBadge } from "./common/TaxYearBadge";
const SectionHeader = ({ icon, title }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, px: 0.5 }}>
    {React.cloneElement(icon, { sx: { fontSize: 18, color: "primary.main" } })}
    <Typography
      variant="overline"
      sx={{ fontWeight: 700, letterSpacing: 1.2, color: "text.secondary" }}
    >
      {title}
    </Typography>
  </Box>
);

const ResultRow = ({
  label,
  value,
  bold = false,
  color = "text.primary",
  active = false,
  isCurrency = true,
}) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: 0.75,
      opacity: active || bold ? 1 : 0.8,
      position: "relative",
    }}
  >
    <Typography
      variant="body2"
      sx={{
        fontWeight: bold ? 700 : 400,
        color: bold ? "text.primary" : "text.secondary",
      }}
    >
      {label}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontWeight: bold || active ? 800 : 600,
        color: active ? "primary.main" : color,
        fontFamily: "'JetBrains Mono', monospace", // Use mono for numbers if available, else standard
      }}
    >
      {isCurrency
        ? `$${Number(value).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
        : value}
    </Typography>
    {active && (
      <Box
        sx={{
          position: "absolute",
          left: -12,
          width: 3,
          height: "60%",
          bgcolor: "primary.main",
          borderRadius: 1,
        }}
      />
    )}
  </Box>
);

export const EstimatedTaxes = ({
  searchParams,
  setSearchParams,
  showSnackbar,
}) => {
  usePageMeta({
    title: "Estimated Taxes",
    description:
      "Estimate your quarterly tax payments to the IRS using the annualized income method and check safe harbor rules.",
  });

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

    return calculateTax({
      jurisdiction,
      filingStatus,
      ordinaryIncome: annualizedOrdinaryIncome,
      shortTermCapitalGains: annualizedShortTermCapitalGains,
      longTermCapitalGains: annualizedLongTermCapitalGains,
      deductionType,
      itemizedDeduction: annualizedItemizedDeductions,
      taxCredits: taxCreditsAnnual,
    });
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
    return calculateDeduction({
      jurisdiction,
      filingStatus,
      deductionType,
      itemizedDeduction: annualizedItemizedDeductions,
    });
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
        <Grid size="grow">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <Typography variant="h4" component="h1">
              Estimated Taxes
            </Typography>
            <TaxYearBadge year="2025" />
          </Box>
        </Grid>
        <Grid>
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
            Estimate your quarterly tax payments to the IRS. This is especially
            useful if you're self-employed or have income that isn't subject to
            withholding.
          </Typography>
          <Typography variant="h6" gutterBottom>
            How It Works
          </Typography>
          <Typography paragraph>
            We use the <strong>annualized income method</strong>: your income
            for the selected period is projected to a full year, and your
            required quarterly payment is calculated from that annual estimate.
            <br />
            <br />
            <a
              href="https://www.irs.gov/publications/p505#en_US_2024_publink1000194460"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              Source: IRS Publication 505 (Annualized Income Installment Method)
            </a>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Safe Harbor Rule
          </Typography>
          <Typography paragraph>
            Per IRS guidelines, penalty avoidance typically requires paying 90%
            of your current year's tax. Alternatively providing a{" "}
            <strong>safe harbor</strong>: paying 100% of last year's tax (110%
            if your AGI exceeded $150k) also keeps you penalty-free. Enable
            "Prior Year Safe Harbor" below to compare.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <InputSection title="General" icon={<SettingsIcon />}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 4 }}>
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
                  <Grid size={{ xs: 12, sm: 4 }}>
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
                  <Grid size={{ xs: 12, sm: 4 }}>
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
              </InputSection>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <InputSection title="Income & Deductions" icon={<IncomeIcon />}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                    <Grid size={{ xs: 12, sm: 6 }}>
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
              </InputSection>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <InputSection
                title="Annual Adjustments"
                icon={<AdjustmentsIcon />}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Tax Credits (Annual)"
                      type="number"
                      value={taxCreditsAnnual}
                      onChange={(e) => {
                        setTaxCreditsAnnual(Number(e.target.value));
                        updateSearchParams("taxCreditsAnnual", e.target.value);
                      }}
                      fullWidth
                      inputProps={{ step: 1000 }}
                    />
                  </Grid>
                </Grid>
              </InputSection>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <InputSection
                title="Prior Year Safe Harbor"
                icon={<PriorYearIcon />}
              >
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
                  label="Enable calculation based on prior year tax"
                />
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                  <Grid size={{ xs: 12, sm: 6 }}>
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
              </InputSection>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ position: "sticky", top: "1rem" }}>
            <ResultCard
              title="Payment Summary"
              icon={<CalculateIcon />}
              value={taxesOwed}
              label="Estimated Payment Due"
            >
              <Box sx={{ mt: 1 }}>
                <TextField
                  label="Withholding for Period"
                  type="number"
                  value={withholding}
                  onChange={(e) => {
                    setWithholding(Number(e.target.value));
                    updateSearchParams("withholding", e.target.value);
                  }}
                  fullWidth
                  size="small"
                  variant="outlined"
                  inputProps={{ step: 1000 }}
                  helperText="Already paid via W-2 / other"
                />
              </Box>

              <Box sx={{ mt: 3 }}>
                <SectionHeader
                  icon={<PriorYearIcon />}
                  title="Requirement Breakdown"
                />
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    background: "rgba(255, 255, 255, 0.02)",
                    borderRadius: 1,
                  }}
                >
                  <ResultRow
                    label="90% of Current Year"
                    value={obligationBasedOnAnnualizedIncome}
                    active={
                      annualizedObligation === obligationBasedOnAnnualizedIncome
                    }
                  />
                  {includePriorYearCalculation && (
                    <ResultRow
                      label="Prior Year Safe Harbor"
                      value={obligationBasedOnPriorYear}
                      active={
                        annualizedObligation === obligationBasedOnPriorYear
                      }
                    />
                  )}
                  <Divider sx={{ my: 1.5, opacity: 0.1 }} />
                  <ResultRow
                    label="Annual Required Obligation"
                    value={annualizedObligation}
                    bold
                  />
                  <ResultRow
                    label={`Due for Phase ${Number(timePeriod) + 1}`}
                    value={obligationDuringTimePeriod}
                    bold
                    color="primary.main"
                  />
                </Paper>
              </Box>

              <Box sx={{ mt: 3 }}>
                <SectionHeader
                  icon={<SettingsIcon />}
                  title="Annualized Estimates"
                />
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    background: "rgba(255, 255, 255, 0.02)",
                    borderRadius: 1,
                  }}
                >
                  <ResultRow
                    label="Projected Income"
                    value={annualizedIncome}
                  />
                  <ResultRow label="Projected Deductions" value={deduction} />
                  <ResultRow
                    label="Projected Total Tax"
                    value={taxBreakdown["Total Tax"]}
                  />
                  <ResultRow
                    label="Effective Tax Rate"
                    value={`${(annualizedEffectiveTaxRate * 100).toFixed(2)}%`}
                    isCurrency={false}
                  />
                </Paper>
              </Box>

              {jurisdiction === JurisdictionEnum.FEDERAL.name && (
                <Box sx={{ mt: 3 }}>
                  <SectionHeader
                    icon={<SettingsIcon />}
                    title="Federal Tax Detail"
                  />
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2,
                      background: "rgba(255, 255, 255, 0.02)",
                      borderRadius: 1,
                    }}
                  >
                    {Object.entries(taxBreakdown)
                      .filter(([key]) => key !== "Total Tax")
                      .map(([key, value]) => (
                        <ResultRow key={key} label={key} value={value} />
                      ))}
                  </Paper>
                </Box>
              )}
            </ResultCard>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
