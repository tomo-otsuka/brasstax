import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  FormControlLabel,
  Switch,
  Divider,
} from "@mui/material";
import {
  Share,
  ExpandMore as ExpandMoreIcon,
  Timeline,
} from "@mui/icons-material";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { FilingStatusEnum, JurisdictionEnum } from "../constants";
import { calculateTax } from "../taxFunctions";
import { InputSection } from "./common/InputSection";
import { ResultCard } from "./common/ResultCard";
import { CHART_COLORS } from "../constants/colors";
import { TaxYearBadge } from "./common/TaxYearBadge";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
);

export const TradVsRoth = ({ searchParams, setSearchParams, showSnackbar }) => {
  const [currentIncome, setCurrentIncome] = useState(
    Number(searchParams.get("currentIncome")) || 100000,
  );
  const [retirementIncome, setRetirementIncome] = useState(
    Number(searchParams.get("retirementIncome")) || 60000,
  );
  const [filingStatus, setFilingStatus] = useState(
    searchParams.get("filingStatus") || FilingStatusEnum.SINGLE.name,
  );
  const [yearsToGrow, setYearsToGrow] = useState(
    Number(searchParams.get("yearsToGrow")) || 20,
  );
  const [annualReturn, setAnnualReturn] = useState(
    Number(searchParams.get("annualReturn")) || 7,
  );
  const [investmentAmount, setInvestmentAmount] = useState(
    Number(searchParams.get("investmentAmount")) || 6000,
  );

  // UX State - Not persisted in URL necessarily, or could be
  const [taxInputMode, setTaxInputMode] = useState("income"); // 'income' or 'rate'

  const [customCurrentRate, setCustomCurrentRate] = useState(24);
  const [customFutureRate, setCustomFutureRate] = useState(22);
  const [capitalGainsRate, setCapitalGainsRate] = useState(15);

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const updateSearchParams = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  };

  const calculateMarginalRate = (income, status) => {
    const delta = 100;
    const baseTax = calculateTax({
      jurisdiction: JurisdictionEnum.FEDERAL.name,
      filingStatus: status,
      ordinaryIncome: income,
    })["Federal Income Tax"];

    const incrementedTax = calculateTax({
      jurisdiction: JurisdictionEnum.FEDERAL.name,
      filingStatus: status,
      ordinaryIncome: income + delta,
    })["Federal Income Tax"];

    return (incrementedTax - baseTax) / delta;
  };

  const results = useMemo(() => {
    let currentRate, futureRateStr;

    // 1. Determine Rates
    if (taxInputMode === "rate") {
      currentRate = customCurrentRate / 100;
      futureRateStr = customFutureRate / 100;
    } else {
      currentRate = calculateMarginalRate(currentIncome, filingStatus);
      futureRateStr = calculateMarginalRate(retirementIncome, filingStatus);
    }
    const futureRate = futureRateStr;

    // 2. Determine Principal
    // "I want to put $X into the account."
    // We compare:
    // A) Roth: Put $X in. Cost = $X / (1-t).
    // B) Trad: Put $X in. Cost = $X. Savings = $X * t. Invest savings in Brokerage.
    // This ensures both options assume the same "Gross Income Used".

    const tradPrincipal = investmentAmount;
    const rothPrincipal = investmentAmount;
    const brokeragePrincipal = investmentAmount * currentRate;

    // Traditional: Taxed at end.
    const tradFutureGross =
      tradPrincipal * Math.pow(1 + annualReturn / 100, yearsToGrow);
    const tradTaxLiability = tradFutureGross * futureRate;
    const tradNet = tradFutureGross - tradTaxLiability;

    // Brokerage (Taxable) sidecar for Traditional strategy
    let brokerageNet = 0;
    if (brokeragePrincipal > 0) {
      const brokerageGross =
        brokeragePrincipal * Math.pow(1 + annualReturn / 100, yearsToGrow);
      const gains = brokerageGross - brokeragePrincipal;
      const taxOnGains = Math.max(0, gains * (capitalGainsRate / 100));
      brokerageNet = brokerageGross - taxOnGains;
    }

    const tradTotalFutureNet = tradNet + brokerageNet;

    // Roth: Tax free at end.
    const rothFutureNet =
      rothPrincipal * Math.pow(1 + annualReturn / 100, yearsToGrow);

    return {
      currentMarginalRate: currentRate,
      futureRate,
      tradPrincipal,
      rothPrincipal,
      brokeragePrincipal,
      tradNet, // Just the 401k part
      brokerageNet, // Just the brokerage part
      tradTotalFutureNet, // Combined
      grossCostTrad: tradPrincipal,
      grossCostRoth: investmentAmount / (1 - currentRate),
      // Update comparisons to use the Total
      tradFutureNet: tradTotalFutureNet,
      rothFutureNet,
      difference: Math.abs(tradTotalFutureNet - rothFutureNet),
      higherValueStrategy:
        Math.abs(tradTotalFutureNet - rothFutureNet) < 1
          ? "Equal"
          : tradTotalFutureNet > rothFutureNet
            ? "Traditional"
            : "Roth",
    };
  }, [
    currentIncome,
    retirementIncome,
    filingStatus,
    yearsToGrow,
    annualReturn,
    investmentAmount,
    taxInputMode,
    capitalGainsRate,
    customCurrentRate,
    customFutureRate,
  ]);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const labels = Array.from({ length: yearsToGrow + 1 }, (_, i) => i);

      const tradData = labels.map((year) => {
        // 401k Part
        const gross = investmentAmount * Math.pow(1 + annualReturn / 100, year);
        const net401k = gross * (1 - results.futureRate);

        // Brokerage Part
        let netBrokerage = 0;
        if (results.brokeragePrincipal > 0) {
          const bGross =
            results.brokeragePrincipal * Math.pow(1 + annualReturn / 100, year);
          const gains = bGross - results.brokeragePrincipal;
          netBrokerage = bGross - Math.max(0, gains * (capitalGainsRate / 100));
        }
        return net401k + netBrokerage;
      });

      const rothData = labels.map((year) => {
        const principal = investmentAmount;
        return principal * Math.pow(1 + annualReturn / 100, year);
      });

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label:
                results.brokeragePrincipal > 0
                  ? "Traditional + Invested Savings"
                  : "Traditional (Net after Tax)",
              data: tradData,
              borderColor: CHART_COLORS["Federal Income Tax"], // Using existing redish color
              backgroundColor: "rgba(255, 99, 132, 0.1)",
              borderWidth: 3,
              tension: 0.4,
              fill: true,
            },
            {
              label: "Roth (Tax Free)",
              data: rothData,
              borderColor: CHART_COLORS["Social Security Tax"], // Using existing greenish color
              backgroundColor: "rgba(75, 192, 192, 0.1)",
              borderWidth: 3,
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            title: {
              display: true,
              text: "Investment Growth Comparison (Net Purchasing Power)",
              color: "rgba(255, 255, 255, 0.9)",
              font: { size: 16 },
            },
            legend: {
              labels: { color: "rgba(255, 255, 255, 0.8)" },
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  return `${context.dataset.label}: $${Math.round(context.raw).toLocaleString()}`;
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Years",
                color: "rgba(255, 255, 255, 0.7)",
              },
              ticks: { color: "rgba(255, 255, 255, 0.6)" },
              grid: { color: "rgba(255, 255, 255, 0.1)" },
            },
            y: {
              title: {
                display: true,
                text: "Net Value ($)",
                color: "rgba(255, 255, 255, 0.7)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.6)",
                callback: (value) => "$" + value.toLocaleString(),
              },
              grid: { color: "rgba(255, 255, 255, 0.1)" },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [
    yearsToGrow,
    annualReturn,
    investmentAmount,
    results,
    taxInputMode,
    capitalGainsRate,
  ]);

  return (
    <Box component="main" sx={{ flexGrow: 1, padding: 2 }}>
      <Box component="header">
        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid size="grow">
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
              <Typography variant="h4" component="h1">
                Traditional vs Roth Analyzer
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
      </Box>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">How this works</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            This calculator compares the <strong>net spending power</strong> of
            contributing to a Traditional (Pre-tax) vs Roth (Post-tax) account.
          </Typography>
          <Typography paragraph>
            <strong>The "fair" comparison:</strong> We compare equal
            contributions (e.g. $6,000 to either account).
          </Typography>
          <ul>
            <li>
              <Typography>
                <strong>Roth:</strong> You put $6,000 in. It grows tax-free.
                Take-home pay reduction: ~$7,900 (assuming 24% tax).
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Traditional:</strong> You put $6,000 in. It grows
                tax-deferred. Take-home pay reduction: $6,000.
                <br />
                <em>Model Assumption</em>: We invest the $1,900 difference in a
                taxable brokerage account so the total initial cost matches the
                Roth.
              </Typography>
            </li>
          </ul>
          <Typography>
            The math compares your <strong>Current Marginal Rate</strong> vs
            your <strong>Future Marginal Rate</strong>.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <strong>What counts as "Retirement Income"?</strong>
            <br />
            Include only <strong>taxable</strong> sources: Traditional 401k/IRA
            withdrawals, Pensions, and the taxable portion of Social Security.
            <br />
            <em>Do not</em> include Roth withdrawals or savings account
            withdrawals (principal), as these are tax-free.
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <strong>Why no inflation? (Today's Dollars)</strong>
            <br />
            This calculator uses <strong>Real Dollars</strong>.
            <br />
            &bull; <strong>Current Income:</strong> Use what you earn today.
            <br />
            &bull; <strong>Annual Return:</strong> Use a "Real" rate (nominal
            return minus inflation). For example, if you expect 10% returns and
            3% inflation, use <strong>7%</strong>.
            <br />
            &bull; <strong>Federal Tax Brackets:</strong> These are indexed to
            inflation by the IRS. By using "Today's Dollars" for everything, we
            can use <em>current</em> tax brackets as a safe proxy for future
            purchasing power.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <InputSection title="Assumptions">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={taxInputMode === "rate"}
                      onChange={(e) =>
                        setTaxInputMode(e.target.checked ? "rate" : "income")
                      }
                    />
                  }
                  label="Enter Tax Rates Directly"
                />
              </Grid>

              {taxInputMode === "income" ? (
                <>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Current Annual Income"
                      type="number"
                      value={currentIncome}
                      onChange={(e) => {
                        setCurrentIncome(Number(e.target.value));
                        updateSearchParams("currentIncome", e.target.value);
                      }}
                      fullWidth
                      inputProps={{ step: 1000 }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Est. Base Retirement Income"
                      type="number"
                      value={retirementIncome}
                      onChange={(e) => {
                        setRetirementIncome(Number(e.target.value));
                        updateSearchParams("retirementIncome", e.target.value);
                      }}
                      fullWidth
                      inputProps={{ step: 1000 }}
                      helperText="Taxable income (today's dollars) from OTHER sources (e.g. Pension, Social Security). Used to determine your tax bracket."
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
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
                </>
              ) : (
                <>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Current Tax Rate (%)"
                      type="number"
                      value={customCurrentRate}
                      onChange={(e) =>
                        setCustomCurrentRate(Number(e.target.value))
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Future Tax Rate (%)"
                      type="number"
                      value={customFutureRate}
                      onChange={(e) =>
                        setCustomFutureRate(Number(e.target.value))
                      }
                      fullWidth
                    />
                  </Grid>
                </>
              )}

              <Grid size={{ xs: 12 }}>
                <Divider sx={{ my: 1 }} />
                <Typography
                  variant="subtitle2"
                  color="primary"
                  sx={{ mt: 1, mb: 1 }}
                >
                  Investment Details
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, sm: 12 }}>
                <TextField
                  label="Contribution Amount"
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => {
                    setInvestmentAmount(Number(e.target.value));
                    updateSearchParams("investmentAmount", e.target.value);
                  }}
                  fullWidth
                  inputProps={{ step: 100 }}
                  helperText="Analysis of this specific contribution amount growing over time"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Box
                  sx={{
                    p: 1.5,
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    display="block"
                    color="textSecondary"
                    gutterBottom
                  >
                    <strong>Model Assumption (Reinvesting Tax Savings):</strong>
                    <br />A Traditional contribution reduces current tax by $
                    {Math.round(results.brokeragePrincipal).toLocaleString()}.
                    This model assumes these funds are invested in a taxable
                    brokerage account.
                  </Typography>
                  <TextField
                    label="Capital Gains Tax Rate (%)"
                    type="number"
                    value={capitalGainsRate}
                    onChange={(e) =>
                      setCapitalGainsRate(Number(e.target.value))
                    }
                    fullWidth
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Years to Grow"
                  type="number"
                  value={yearsToGrow}
                  onChange={(e) => {
                    setYearsToGrow(Number(e.target.value));
                    updateSearchParams("yearsToGrow", e.target.value);
                  }}
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  label="Annual Return (%)"
                  type="number"
                  value={annualReturn}
                  onChange={(e) => {
                    setAnnualReturn(Number(e.target.value));
                    updateSearchParams("annualReturn", e.target.value);
                  }}
                  fullWidth
                  inputProps={{ step: 0.1 }}
                  helperText="Use real rates (growth above inflation) for purchasing power"
                />
              </Grid>
            </Grid>
          </InputSection>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ position: "sticky", top: "1rem" }}>
            <ResultCard
              title={
                results.higherValueStrategy === "Equal"
                  ? "Values are Equal"
                  : `Mathematically Higher Result: ${results.higherValueStrategy}`
              }
              icon={<Timeline />}
              value={
                results.higherValueStrategy === "Traditional"
                  ? results.tradFutureNet
                  : results.rothFutureNet
              }
              subtitle={`After ${yearsToGrow} years`}
              label={
                results.higherValueStrategy === "Equal"
                  ? "Tax rates are identical"
                  : `Net Estimated Difference: $${Math.round(results.difference).toLocaleString()}`
              }
            >
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={{ xs: 6 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      bgcolor: "rgba(255, 99, 132, 0.1)",
                      border: "1px solid rgba(255, 99, 132, 0.3)",
                    }}
                  >
                    <Typography variant="subtitle2" color="textSecondary">
                      Current Breakdown
                    </Typography>
                    <Typography variant="h6">
                      {(results.currentMarginalRate * 100).toFixed(1)}%
                    </Typography>
                    <Typography variant="caption">
                      Marginal Tax Rate Now
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      bgcolor: "rgba(75, 192, 192, 0.1)",
                      border: "1px solid rgba(75, 192, 192, 0.3)",
                    }}
                  >
                    <Typography variant="subtitle2" color="textSecondary">
                      Future Breakdown
                    </Typography>
                    <Typography variant="h6">
                      {(results.futureRate * 100).toFixed(1)}%
                    </Typography>
                    <Typography variant="caption">
                      Marginal Tax Rate Later
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ height: 300 }}>
                <canvas ref={chartRef} />
              </Box>
            </ResultCard>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
