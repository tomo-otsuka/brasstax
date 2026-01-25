import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Grid,
  Slider,
  Alert,
  Paper,
  Divider,
} from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { calculateTax } from "../taxFunctions";
import { FilingStatusEnum, JurisdictionEnum } from "../constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export function BonusTruth() {
  const [annualSalary, setAnnualSalary] = useState(75000);
  const [bonusAmount, setBonusAmount] = useState(5000);
  const [filingStatus, setFilingStatus] = useState(
    FilingStatusEnum.SINGLE.name,
  );

  const [results, setResults] = useState(null);

  useEffect(() => {
    // 1. Calculate Tax on Salary ONLY
    const taxOnSalaryResult = calculateTax({
      jurisdiction: JurisdictionEnum.FEDERAL.name,
      filingStatus,
      ordinaryIncome: annualSalary,
    });
    const taxOnSalary = taxOnSalaryResult["Total Tax"];

    // 2. Calculate Tax on Salary + Bonus
    const totalIncome = annualSalary + bonusAmount;
    const taxOnTotalResult = calculateTax({
      jurisdiction: JurisdictionEnum.FEDERAL.name,
      filingStatus,
      ordinaryIncome: totalIncome,
    });
    const taxOnTotal = taxOnTotalResult["Total Tax"];

    // 3. Marginal Tax on Bonus and Withholding
    const actualTaxOnBonus = taxOnTotal - taxOnSalary;
    const withheldOnBonus = bonusAmount * 0.22; // 22% Federal Flat Rate

    const marginalRate = (actualTaxOnBonus / bonusAmount) * 100;
    const difference = withheldOnBonus - actualTaxOnBonus;

    setResults({
      actualTaxOnBonus,
      withheldOnBonus,
      marginalRate,
      difference,
    });
  }, [annualSalary, bonusAmount, filingStatus]);

  if (!results) return null;

  const isRefund = results.difference > 0;
  const absDifference = Math.abs(results.difference);

  const chartData = {
    labels: ["Bonus Withholding vs Actual Tax"],
    datasets: [
      {
        label: "Withheld (22% Flat Rate)",
        data: [results.withheldOnBonus],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
      {
        label: "Actual Tax Liability (Marginal Rate)",
        data: [results.actualTaxOnBonus],
        backgroundColor: "rgba(53, 162, 235, 0.7)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Where does the money go?",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        The Truth About Your Bonus
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Many people think bonuses are taxed at a higher rate. In reality, they
        are often just <strong>withheld</strong> at a higher flat rate (22% for
        Federal) than your effective tax rate. This tool shows you if you'll get
        that money back or if you might owe more.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Your Details
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                label="Filing Status"
                select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value)}
                fullWidth
              >
                {Object.values(FilingStatusEnum).map((status) => (
                  <MenuItem key={status.name} value={status.name}>
                    {status.readable}
                  </MenuItem>
                ))}
              </TextField>

              <Box>
                <Typography gutterBottom>
                  Annual Salary: ${annualSalary.toLocaleString()}
                </Typography>
                <Slider
                  value={annualSalary}
                  min={0}
                  max={500000}
                  step={1000}
                  onChange={(e, val) => setAnnualSalary(val)}
                />
                <TextField
                  type="number"
                  value={annualSalary}
                  onChange={(e) => setAnnualSalary(Number(e.target.value))}
                  size="small"
                  InputProps={{ startAdornment: "$" }}
                />
              </Box>

              <Box>
                <Typography gutterBottom>
                  Bonus Amount: ${bonusAmount.toLocaleString()}
                </Typography>
                <Slider
                  value={bonusAmount}
                  min={0}
                  max={100000}
                  step={500}
                  onChange={(e, val) => setBonusAmount(val)}
                />
                <TextField
                  type="number"
                  value={bonusAmount}
                  onChange={(e) => setBonusAmount(Number(e.target.value))}
                  size="small"
                  InputProps={{ startAdornment: "$" }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              {isRefund ? (
                <Alert severity="success" variant="filled">
                  <Typography variant="h6">
                    You overpaid by{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(absDifference)}
                    !
                  </Typography>
                  <Typography variant="body2">
                    They withheld too much. You will likely get this back as a
                    refund when you file your taxes.
                  </Typography>
                </Alert>
              ) : (
                <Alert severity="warning" variant="filled">
                  <Typography variant="h6">
                    You underpaid by{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(absDifference)}
                    !
                  </Typography>
                  <Typography variant="body2">
                    The 22% withholding wasn't enough to cover your marginal tax
                    rate of {results.marginalRate.toFixed(1)}%. You may owe
                    taxes.
                  </Typography>
                </Alert>
              )}
            </Grid>

            <Grid xs={12}>
              <Card>
                <CardContent>
                  <Box sx={{ height: 300 }}>
                    <Bar data={chartData} options={chartOptions} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12}>
              <Paper sx={{ p: 2, bgcolor: "background.default" }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  The Math:
                </Typography>
                <Typography variant="body2">
                  • Federal Withholding (Flat): 22% of $
                  {bonusAmount.toLocaleString()} ={" "}
                  <strong>${results.withheldOnBonus.toLocaleString()}</strong>
                </Typography>
                <Typography variant="body2">
                  • Actual Marginal Tax: {results.marginalRate.toFixed(2)}% of $
                  {bonusAmount.toLocaleString()} ={" "}
                  <strong>${results.actualTaxOnBonus.toLocaleString()}</strong>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
