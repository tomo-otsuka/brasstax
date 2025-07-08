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
} from "@mui/material";
import { Share } from "@mui/icons-material";

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
);

const getNumericParam = (searchParams, paramName, defaultValue) => {
  const param = searchParams.get(paramName);
  return param !== null ? Number(param) : defaultValue;
};

export const TaxChart = ({ searchParams, setSearchParams, showSnackbar }) => {
  const [filingStatus, setFilingStatus] = useState(
    searchParams.get("filingStatus") || FilingStatusEnum.SINGLE.name,
  );
  const [ordinaryIncome, setOrdinaryIncome] = useState(
    getNumericParam(searchParams, "ordinaryIncome", 75000),
  );
  const [shortTermCapitalGains, setShortTermCapitalGains] = useState(
    getNumericParam(searchParams, "shortTermCapitalGains", 5000),
  );
  const [longTermCapitalGains, setLongTermCapitalGains] = useState(
    getNumericParam(searchParams, "longTermCapitalGains", 10000),
  );
  const [selectedState, setSelectedState] = useState(
    searchParams.get("selectedState") || JurisdictionEnum.CALIFORNIA.name,
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

  useEffect(() => {
    setFilingStatus(
      searchParams.get("filingStatus") || FilingStatusEnum.SINGLE.name,
    );
    setOrdinaryIncome(getNumericParam(searchParams, "ordinaryIncome", 75000));
    setShortTermCapitalGains(
      getNumericParam(searchParams, "shortTermCapitalGains", 5000),
    );
    setLongTermCapitalGains(
      getNumericParam(searchParams, "longTermCapitalGains", 10000),
    );
    setSelectedState(
      searchParams.get("selectedState") || JurisdictionEnum.CALIFORNIA.name,
    );
  }, [searchParams]);

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(myChartRef, {
        options: {
          interaction: {
            mode: "index",
            intersect: false,
          },
          scales: {
            "y-axis": {
              type: "linear",
              position: "left",
              min: "0",
              max: "0.6",
              title: {
                display: true,
                text: "Tax Rate",
              },
              stacked: true,
            },
            "x-axis": {
              type: "linear",
              title: {
                display: true,
                text: "Income",
              },
              stacked: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Marginal and Effective Tax Rates",
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
      const totalIncome =
        Number(ordinaryIncome) +
        Number(shortTermCapitalGains) +
        Number(longTermCapitalGains);
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
        yAxisID: "y-axis",
        xAxisID: "x-axis",
        data: effectiveTaxRateData,
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
              backgroundColor: `rgba(${CHART_COLORS[name]}, 0.5)`,
              borderColor: `rgba(${CHART_COLORS[name]}, 1)`,
              borderWidth: 1,
              yAxisID: "y-axis",
              xAxisID: "x-axis",
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
  ]);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs>
          <Typography variant="h4" component="h1">
            Tax Chart
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
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
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
            <Grid item xs={12} sm={2}>
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
            <Grid item xs={12} sm={3}>
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
            <Grid item xs={12} sm={3}>
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
            <Grid item xs={12} sm={2}>
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
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <canvas id="myChart" ref={chartRef} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PresetList
            presets={TAX_CHART_PRESETS}
            basePath="/brasstax/tax-chart"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
