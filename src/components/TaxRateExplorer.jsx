import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  Tooltip,
  Title,
  Legend,
  Filler,
} from "chart.js";
import { CHART_COLORS } from "../constants/colors";
import {
  DeductionTypeEnum,
  FilingStatusEnum,
  JurisdictionEnum,
} from "../constants";
import { calculateTax } from "../taxFunctions";
import { TAX_CHART_PRESETS } from "../data/presetData.js";
import { PresetList } from "./PresetList.jsx";
import {
  Grid,
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
} from "@mui/material";
import {
  Share,
  ExpandMore as ExpandMoreIcon,
  Calculate as CalculateIcon,
} from "@mui/icons-material";

import { ResultCard } from "./common/ResultCard";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  Tooltip,
  Title,
  Legend,
  Filler,
);

const getNumericParam = (searchParams, paramName, defaultValue) => {
  const param = searchParams.get(paramName);
  return param !== null ? Number(param) : defaultValue;
};

export const TaxRateExplorer = ({
  searchParams,
  setSearchParams,
  showSnackbar,
}) => {
  const [filingStatus, setFilingStatus] = useState(
    searchParams.get("filingStatus") || FilingStatusEnum.SINGLE.name,
  );
  const [ordinaryIncome, setOrdinaryIncome] = useState(
    getNumericParam(searchParams, "ordinaryIncome", 250000),
  );
  const [shortTermCapitalGains, setShortTermCapitalGains] = useState(
    getNumericParam(searchParams, "shortTermCapitalGains", 0),
  );
  const [longTermCapitalGains, setLongTermCapitalGains] = useState(
    getNumericParam(searchParams, "longTermCapitalGains", 50000),
  );
  const [selectedState, setSelectedState] = useState(
    searchParams.get("selectedState") || JurisdictionEnum.WASHINGTON.name,
  );
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const updateSearchParams = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  };

  const calculateTaxForChart = useCallback(
    (income) => {
      const jurisdiction = JurisdictionEnum.FEDERAL.name;
      const deductionType = DeductionTypeEnum.STANDARD.name;

      let adjOrdinaryIncome = Math.min(income, ordinaryIncome);
      let adjShortTermCapitalGains = Math.max(
        0,
        Math.min(income - adjOrdinaryIncome, shortTermCapitalGains),
      );
      let adjLongTermCapitalGains = Math.max(
        0,
        Math.min(
          income - adjOrdinaryIncome - adjShortTermCapitalGains,
          longTermCapitalGains,
        ),
      );

      return calculateTax({
        jurisdiction,
        filingStatus,
        ordinaryIncome: adjOrdinaryIncome,
        shortTermCapitalGains: adjShortTermCapitalGains,
        longTermCapitalGains: adjLongTermCapitalGains,
        deductionType,
        itemizedDeduction: 0,
        taxCredits: 0,
        stateJurisdiction: selectedState,
      });
    },
    [
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
      filingStatus,
      selectedState,
    ],
  );

  const totalIncome =
    Number(ordinaryIncome) +
    Number(shortTermCapitalGains) +
    Number(longTermCapitalGains);

  const taxBreakdown = calculateTaxForChart(totalIncome);
  const effectiveTaxRate = taxBreakdown["Total Tax"] / totalIncome;

  useEffect(() => {
    setFilingStatus(
      searchParams.get("filingStatus") || FilingStatusEnum.SINGLE.name,
    );
    setOrdinaryIncome(getNumericParam(searchParams, "ordinaryIncome", 250000));
    setShortTermCapitalGains(
      getNumericParam(searchParams, "shortTermCapitalGains", 0),
    );
    setLongTermCapitalGains(
      getNumericParam(searchParams, "longTermCapitalGains", 50000),
    );
    setSelectedState(
      searchParams.get("selectedState") || JurisdictionEnum.WASHINGTON.name,
    );
  }, [searchParams]);

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(myChartRef, {
        type: "bar",
        data: {
          labels: [],
          datasets: [],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,
          interaction: {
            mode: "index",
            intersect: false,
          },
          elements: {
            point: {
              radius: 0,
            },
            line: {
              borderWidth: 3,
            },
          },
          scales: {
            y: {
              type: "linear",
              position: "left",
              min: 0,
              max: 0.6,
              title: {
                display: true,
                text: "Tax Rate",
                color: "rgba(255, 255, 255, 0.7)",
                font: { size: 14, weight: "500" },
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.6)",
                callback: (value) => `${(value * 100).toFixed(0)}%`,
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
              stacked: true,
            },
            x: {
              type: "category",
              title: {
                display: true,
                text: "Income",
                color: "rgba(255, 255, 255, 0.7)",
                font: { size: 14, weight: "500" },
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.6)",
                callback: function (value) {
                  const label = this.getLabelForValue(value);
                  return label >= 1000000
                    ? `$${(label / 1000000).toFixed(1)}M`
                    : `$${(label / 1000).toFixed(0)}k`;
                },
                maxTicksLimit: 10,
              },
              grid: {
                color: "rgba(255, 255, 255, 0.05)",
              },
              stacked: true,
              offset: false,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Marginal and Effective Tax Rates",
              color: "rgba(255, 255, 255, 0.9)",
              font: { size: 18, weight: "600" },
              padding: { bottom: 20 },
            },
            legend: {
              labels: {
                color: "rgba(255, 255, 255, 0.8)",
                usePointStyle: true,
                padding: 20,
              },
            },
            tooltip: {
              backgroundColor: "rgba(17, 24, 39, 0.95)",
              titleColor: "#fff",
              bodyColor: "rgba(255, 255, 255, 0.8)",
              borderColor: "rgba(255, 255, 255, 0.1)",
              borderWidth: 1,
              cornerRadius: 8,
              padding: 12,
              callbacks: {
                label: (context) => {
                  const value = context.parsed.y;
                  return `${context.dataset.label}: ${(value * 100).toFixed(1)}%`;
                },
              },
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
  }, []);

  useEffect(() => {
    if (chartInstance.current) {
      const stepSize = Math.max(1, Math.ceil(totalIncome / 100));
      const labels = Array.from(
        { length: Math.ceil(totalIncome / stepSize) },
        (v, x) => x * stepSize,
      );

      const effectiveTaxRateData = labels.map((x, i) =>
        x === 0 ? 0 : calculateTaxForChart(x)["Total Tax"] / x,
      );

      const datasets = [];

      let previousTaxes = undefined;
      for (const [i, label] of labels.entries()) {
        const currentTaxes = calculateTaxForChart(label);
        for (const [name, value] of Object.entries(currentTaxes)) {
          if (name === "Total Tax") {
            continue;
          }
          let datasetIndex = datasets.findIndex(
            (element) => element.label === name,
          );
          if (datasetIndex === -1) {
            datasets.push({
              type: "bar",
              label: name,
              backgroundColor: `rgba(${CHART_COLORS[name] || CHART_COLORS["State Income Tax"]}, 0.7)`,
              borderColor: `rgba(${CHART_COLORS[name] || CHART_COLORS["State Income Tax"]}, 1)`,
              borderWidth: 0,
              borderRadius: 2,
              pointRadius: 0, // Ensure no points on bars
              yAxisID: "y",
              xAxisID: "x",
              data: [],
              stack: "tax-layers",
              barPercentage: 1.0,
              categoryPercentage: 1.0,
              order: 1,
            });
            datasetIndex = datasets.length - 1;
          }

          const taxAmount = value - (previousTaxes ? previousTaxes[name] : 0);
          datasets[datasetIndex].data.push(taxAmount / stepSize);
        }
        previousTaxes = currentTaxes;
      }

      datasets.push({
        type: "line",
        label: "Effective Tax Rate",
        yAxisID: "y",
        xAxisID: "x",
        data: effectiveTaxRateData,
        borderColor: "rgba(255, 255, 255, 1)",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "rgba(255, 255, 255, 0.1)";
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top,
          );
          gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0.15)");
          return gradient;
        },
        fill: "origin",
        borderDash: [],
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: "transparent",
        tension: 0.4,
        spanGaps: true,
        stack: "line-layer",
        order: 0,
      });

      chartInstance.current.data.labels = labels;
      chartInstance.current.data.datasets = datasets;
      chartInstance.current.update("active");
    }
  }, [
    ordinaryIncome,
    shortTermCapitalGains,
    longTermCapitalGains,
    filingStatus,
    calculateTaxForChart,
    totalIncome,
  ]);

  return (
    <Box sx={{ flexGrow: 1, padding: { xs: 2, md: 3 } }}>
      {/* Tier 1: Header */}
      <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <Grid size="grow">
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            Tax Rate Explorer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Interactive visualization of marginal tax brackets and effective
            rates
          </Typography>
        </Grid>
        <Grid>
          <Button
            variant="outlined"
            startIcon={<Share />}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              showSnackbar();
            }}
          >
            Share Analysis
          </Button>
        </Grid>
      </Grid>

      {/* Tier 2: Input Ribbon */}
      <Card
        sx={{
          mb: 4,
          p: 2,
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Box
          sx={{
            mb: 2,
            pb: 2,
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontWeight: 700, color: "primary.main" }}
          >
            QUICK SCENARIOS:
          </Typography>
          <PresetList
            presets={TAX_CHART_PRESETS}
            basePath="/tax-rate-explorer"
          />
        </Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={2.5} size={{ xs: 12, sm: 6, md: 2.5 }}>
            <TextField
              select
              label="Filing Status"
              value={filingStatus}
              onChange={(e) => {
                setFilingStatus(e.target.value);
                updateSearchParams("filingStatus", e.target.value);
              }}
              fullWidth
              variant="filled"
              size="small"
            >
              {Object.values(FilingStatusEnum).map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  {option.readable}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={2.5} size={{ xs: 12, sm: 6, md: 2.5 }}>
            <TextField
              select
              label="State Jurisdiction"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                updateSearchParams("selectedState", e.target.value);
              }}
              fullWidth
              variant="filled"
              size="small"
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
          <Grid item xs={12} sm={4} md={2.3} size={{ xs: 12, sm: 4, md: 2.3 }}>
            <TextField
              label="Ordinary Income"
              type="number"
              value={ordinaryIncome}
              onChange={(e) => {
                setOrdinaryIncome(Number(e.target.value));
                updateSearchParams("ordinaryIncome", e.target.value);
              }}
              fullWidth
              variant="filled"
              size="small"
              inputProps={{ step: 1000 }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2.3} size={{ xs: 12, sm: 4, md: 2.3 }}>
            <TextField
              label="Short Term Gains"
              type="number"
              value={shortTermCapitalGains}
              onChange={(e) => {
                setShortTermCapitalGains(Number(e.target.value));
                updateSearchParams("shortTermCapitalGains", e.target.value);
              }}
              fullWidth
              variant="filled"
              size="small"
              inputProps={{ step: 1000 }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2.4} size={{ xs: 12, sm: 4, md: 2.4 }}>
            <TextField
              label="Long Term Gains"
              type="number"
              value={longTermCapitalGains}
              onChange={(e) => {
                setLongTermCapitalGains(Number(e.target.value));
                updateSearchParams("longTermCapitalGains", e.target.value);
              }}
              fullWidth
              variant="filled"
              size="small"
              inputProps={{ step: 1000 }}
            />
          </Grid>
        </Grid>
      </Card>

      {/* Tier 3: Analysis Area */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card
            sx={{
              p: 3,
              height: "100%",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ position: "relative", minHeight: 400 }}>
              <canvas id="myChart" ref={chartRef} />
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box sx={{ position: "sticky", top: "2rem" }}>
            <ResultCard
              title="Results Summary"
              icon={<CalculateIcon />}
              value={taxBreakdown["Total Tax"]}
              subtitle={`Total Tax on $${totalIncome.toLocaleString()} income`}
              label={`${(effectiveTaxRate * 100).toFixed(2)}% effective rate`}
            >
              <TableContainer
                component={Paper}
                sx={{
                  mt: 2,
                  boxShadow: "none",
                  background: "rgba(255, 255, 255, 0.03)",
                }}
              >
                <Table size="small" aria-label="tax breakdown">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ color: "text.secondary", fontWeight: 700 }}
                      >
                        Tax Type
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "text.secondary", fontWeight: 700 }}
                      >
                        Amount
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(taxBreakdown)
                      .filter(([key]) => key !== "Total Tax")
                      .map(([key, value]) => (
                        <TableRow key={key}>
                          <TableCell component="th" scope="row">
                            {key}
                          </TableCell>
                          <TableCell align="right" sx={{ fontWeight: 600 }}>
                            ${value.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </ResultCard>
          </Box>
        </Grid>
      </Grid>

      <Accordion sx={{ mt: 4 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="chart-explanation-content"
          id="chart-explanation-header"
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Understanding the Analysis
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 3, pb: 4 }}>
          <Typography paragraph color="text.secondary">
            This chart visualizes how each dollar of your income is taxed,
            exposing the hidden dynamics of marginal brackets and effective
            rates.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                  }}
                />
                Reading the Chart
              </Typography>
              <Typography paragraph variant="body2" color="text.secondary">
                <strong>Stacked Bars</strong> represent your{" "}
                <strong>marginal rate</strong>—the tax on your next dollar.
                Watch for jumps as you cross brackets. Each color corresponds to
                a different tax level (Federal, SS, State, etc.).
              </Typography>
              <Typography paragraph variant="body2" color="text.secondary">
                <strong>The White Line</strong> represents your{" "}
                <strong>effective rate</strong>—total tax divided by total
                income. It provides a smoother view of your actual tax burden.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "secondary.main",
                  }}
                />
                Key Inflection Points
              </Typography>
              <Typography
                component="div"
                variant="body2"
                color="text.secondary"
              >
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  <li>
                    <strong>Social Security Cap:</strong> The SS tax disappears
                    after $168,600 in wages.
                  </li>
                  <li>
                    <strong>Progressivity:</strong> Notice the "steps" in
                    marginal rates as income climbs.
                  </li>
                  <li>
                    <strong>Capital Gains:</strong> Long-term gains benefit from
                    significantly lower preferential rates.
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
