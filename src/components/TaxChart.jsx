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
import {
  adjustIncomes,
  calculateIncomeTax,
  calculateLongTermCapitalGainsTax,
  calculateMedicareTax,
  calculateNetInvestmentIncomeTax,
  calculateSocialSecurityTax,
} from "../taxFunctions";
import { Grid, Box, TextField, MenuItem } from "@mui/material";

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

export const TaxChart = () => {
  const [filingStatus, setFilingStatus] = useState(
    FilingStatusEnum.SINGLE.name,
  );
  const [ordinaryIncome, setOrdinaryIncome] = useState(75000);
  const [shortTermCapitalGains, setShortTermCapitalGains] = useState(5000);
  const [longTermCapitalGains, setLongTermCapitalGains] = useState(10000);
  const [selectedState, setSelectedState] = useState(
    JurisdictionEnum.CALIFORNIA.name,
  );
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const calculateTax = useCallback(
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

      [adjOrdinaryIncome, adjShortTermCapitalGains, adjLongTermCapitalGains] =
        adjustIncomes(
          jurisdiction,
          filingStatus,
          adjOrdinaryIncome,
          adjShortTermCapitalGains,
          adjLongTermCapitalGains,
          deductionType,
          0,
        );

      const incomeTax = calculateIncomeTax(
        jurisdiction,
        filingStatus,
        adjOrdinaryIncome,
        adjShortTermCapitalGains,
        adjLongTermCapitalGains,
      );
      const socialSecurityTax = calculateSocialSecurityTax(adjOrdinaryIncome);
      const medicareTax = calculateMedicareTax(filingStatus, adjOrdinaryIncome);
      const longTermCapitalGainsTax = calculateLongTermCapitalGainsTax(
        jurisdiction,
        filingStatus,
        adjOrdinaryIncome,
        adjShortTermCapitalGains,
        adjLongTermCapitalGains,
      );
      const netInvestmentIncomeTax = calculateNetInvestmentIncomeTax(
        filingStatus,
        adjOrdinaryIncome,
        adjShortTermCapitalGains + adjLongTermCapitalGains,
      );

      const stateIncomeTax = calculateIncomeTax(
        selectedState,
        filingStatus,
        adjOrdinaryIncome,
        adjShortTermCapitalGains,
        adjLongTermCapitalGains,
      );
      return {
        "Federal Income Tax": incomeTax,
        "Social Security": socialSecurityTax,
        Medicare: medicareTax,
        LTCG: longTermCapitalGainsTax,
        NIIT: netInvestmentIncomeTax,
        "State Income Tax": stateIncomeTax,
      };
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

      const calculateTotalTax = (values) => values.reduce((x, y) => x + y, 0);
      const effectiveTaxRateData = labels.map(
        (x, i) => calculateTotalTax(Object.values(calculateTax(x))) / labels[i],
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
        const currentTaxes = calculateTax(label);
        for (const [name, value] of Object.entries(currentTaxes)) {
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
    calculateTax,
  ]);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <TextField
            select
            label="Filing Status"
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value)}
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
        <Grid item xs={12} sm={3}>
          <TextField
            label="Ordinary Income"
            type="number"
            value={ordinaryIncome}
            onChange={(e) => setOrdinaryIncome(Number(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Short Term Capital Gains"
            type="number"
            value={shortTermCapitalGains}
            onChange={(e) => setShortTermCapitalGains(Number(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Long Term Capital Gains"
            type="number"
            value={longTermCapitalGains}
            onChange={(e) => setLongTermCapitalGains(Number(e.target.value))}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <canvas id="myChart" ref={chartRef} />
        </Grid>
      </Grid>
    </Box>
  );
};
