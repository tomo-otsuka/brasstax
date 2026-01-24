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
  Card,
  CardContent,
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
} from "@mui/material";
import {
  Share,
  ExpandMore as ExpandMoreIcon,
  Calculate as CalculateIcon,
} from "@mui/icons-material";

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

      return calculateTax(
        jurisdiction,
        filingStatus,
        adjOrdinaryIncome,
        adjShortTermCapitalGains,
        adjLongTermCapitalGains,
        deductionType,
        0,
        0,
        selectedState,
      );
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
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,
          interaction: {
            mode: "index",
            intersect: false,
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
              type: "linear",
              title: {
                display: true,
                text: "Income",
                color: "rgba(255, 255, 255, 0.7)",
                font: { size: 14, weight: "500" },
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.6)",
                callback: (value) =>
                  value >= 1000000
                    ? `$${(value / 1000000).toFixed(1)}M`
                    : `$${(value / 1000).toFixed(0)}k`,
              },
              grid: {
                color: "rgba(255, 255, 255, 0.05)",
              },
              stacked: true,
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

      const effectiveTaxRateData = labels.map(
        (x, i) => calculateTaxForChart(x)["Total Tax"] / labels[i],
      );
      const datasets = [];
      datasets.push({
        type: "line",
        label: "Effective Tax Rate",
        yAxisID: "y",
        xAxisID: "x",
        data: effectiveTaxRateData,
        borderColor: "rgba(255, 255, 255, 0.9)",
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
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#fff",
        tension: 0.3,
        fill: "origin",
      });

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
              backgroundColor: `rgba(${CHART_COLORS[name]}, 0.7)`,
              borderColor: `rgba(${CHART_COLORS[name]}, 1)`,
              borderWidth: 0,
              borderRadius: 2,
              yAxisID: "y",
              xAxisID: "x",
              data: [],
              stacked: true,
            });
            datasetIndex = datasets.length - 1;
          }

          datasets[datasetIndex].data[i] =
            value - (previousTaxes ? previousTaxes[name] : 0);
          datasets[datasetIndex].data[i] /= stepSize;
        }
        previousTaxes = currentTaxes;
      }
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
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid size="grow">
          <Typography variant="h4" component="h1">
            Tax Rate Explorer
          </Typography>
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
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 2 }}>
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
            <Grid size={{ xs: 12, sm: 2 }}>
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
            </Grid>
            <Grid size={{ xs: 12, sm: 3 }}>
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
            <Grid size={{ xs: 12, sm: 3 }}>
              <TextField
                label="Short Term Capital Gains"
                type="number"
                value={shortTermCapitalGains}
                onChange={(e) => {
                  setShortTermCapitalGains(Number(e.target.value));
                  updateSearchParams("shortTermCapitalGains", e.target.value);
                }}
                fullWidth
                inputProps={{ step: 1000 }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 2 }}>
              <TextField
                label="Long Term Capital Gains"
                type="number"
                value={longTermCapitalGains}
                onChange={(e) => {
                  setLongTermCapitalGains(Number(e.target.value));
                  updateSearchParams("longTermCapitalGains", e.target.value);
                }}
                fullWidth
                inputProps={{ step: 1000 }}
              />
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, mb: 1 }}
          >
            Or select an example scenario:
          </Typography>
          <PresetList
            presets={TAX_CHART_PRESETS}
            basePath="/tax-rate-explorer"
          />
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <canvas id="myChart" ref={chartRef} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <CalculateIcon sx={{ color: "primary.main" }} />
                <Typography variant="h6">Results Summary</Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}
              >
                $
                {taxBreakdown["Total Tax"].toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Total Tax on ${totalIncome.toLocaleString()} income
              </Typography>
              <Typography variant="h6" sx={{ color: "text.primary", mt: 2 }}>
                {(effectiveTaxRate * 100).toFixed(2)}% effective rate
              </Typography>
              <TableContainer component={Paper} sx={{ mt: 1 }}>
                <Table size="small" aria-label="tax breakdown">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tax Type</TableCell>
                      <TableCell align="right">Amount</TableCell>
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
                          <TableCell align="right">
                            ${value.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="chart-explanation-content"
          id="chart-explanation-header"
        >
          <Typography variant="h6">How to Read This Chart</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            This chart shows how each dollar of your income is taxed, helping
            you understand the difference between marginal and effective rates.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Reading the Chart
          </Typography>
          <Typography paragraph>
            <strong>Stacked bars</strong> = your <strong>marginal rate</strong>{" "}
            —the tax on your next dollar. Watch for jumps as you cross brackets.
            Each color is a different tax type.
          </Typography>
          <Typography paragraph>
            <strong>The line</strong> = your <strong>effective rate</strong>{" "}
            —total tax divided by total income.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Things to Notice
          </Typography>
          <ul>
            <li>
              <Typography>
                <strong>Social Security Cap:</strong> The SS tax (light green)
                disappears after $168,600 in wages—you only pay up to that
                limit.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Capital Gains:</strong> Long-term gains are taxed at
                lower rates. Load the "Capital Gains" preset to see this in
                action.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>High-Earner Taxes:</strong> NIIT and Additional Medicare
                Tax appear at higher income levels.
              </Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
