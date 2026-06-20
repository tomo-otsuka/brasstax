import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Slider,
  Paper,
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
import { usePageMeta } from "./common/usePageMeta";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export function BonusTruth() {
  usePageMeta({
    title: "Bonus Tax Truth Calculator",
    description:
      "Understand how your bonus is actually taxed versus withheld, and discover if you will owe more or get a refund.",
  });

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

    // IRS Supplemental Withholding: 22% for first $1M, 37% for anything over
    let withheldOnBonus = 0;
    if (bonusAmount <= 1000000) {
      withheldOnBonus = bonusAmount * 0.22;
    } else {
      withheldOnBonus = 1000000 * 0.22 + (bonusAmount - 1000000) * 0.37;
    }

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
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
            }}
          >
            The Truth About Your Bonus
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Your bonus is <strong>ultimately taxed as ordinary income</strong>,
            just like your regular salary. However, the IRS allows companies to
            withhold a flat rate (22% for the first $1M). Because this
            withholding is just a <em>prepayment</em> and doesn't account for
            your specific tax bracket, you often end up with a refund or a tax
            bill when you file.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h6" gutterBottom fontWeight="600">
              Your Details
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 2 }}
            >
              <TextField
                label="Filing Status"
                select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value)}
                fullWidth
                variant="outlined"
              >
                {Object.values(FilingStatusEnum).map((status) => (
                  <MenuItem key={status.name} value={status.name}>
                    {status.readable}
                  </MenuItem>
                ))}
              </TextField>

              <Box>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  color="text.secondary"
                >
                  Annual Salary
                </Typography>
                <Typography variant="h5" fontWeight="500" gutterBottom>
                  ${annualSalary.toLocaleString()}
                </Typography>
                <Slider
                  value={annualSalary}
                  min={0}
                  max={500000}
                  step={1000}
                  onChange={(e, val) => setAnnualSalary(val)}
                  sx={{ color: "primary.main" }}
                />
                <TextField
                  type="number"
                  value={annualSalary}
                  onChange={(e) => setAnnualSalary(Number(e.target.value))}
                  size="small"
                  fullWidth
                  InputProps={{ startAdornment: "$" }}
                />
              </Box>

              <Box>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  color="text.secondary"
                >
                  Bonus Amount
                </Typography>
                <Typography variant="h5" fontWeight="500" gutterBottom>
                  ${bonusAmount.toLocaleString()}
                </Typography>
                <Slider
                  value={bonusAmount}
                  min={0}
                  max={100000}
                  step={500}
                  onChange={(e, val) => setBonusAmount(val)}
                  sx={{ color: "secondary.main" }}
                />
                <TextField
                  type="number"
                  value={bonusAmount}
                  onChange={(e) => setBonusAmount(Number(e.target.value))}
                  size="small"
                  fullWidth
                  InputProps={{ startAdornment: "$" }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Grid container spacing={3}>
            {/* Hero Result Section */}
            <Grid size={{ xs: 12 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  borderLeft: `6px solid ${isRefund ? "#66bb6a" : "#ffa726"}`,
                  background: isRefund
                    ? "rgba(102, 187, 106, 0.08)"
                    : "rgba(255, 167, 38, 0.08)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: 2,
                      fontWeight: "bold",
                      color: isRefund ? "#81c784" : "#ffb74d",
                    }}
                  >
                    {isRefund ? "ESTIMATED REFUND" : "POTENTIAL TAX BILL"}
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight="800"
                    sx={{ my: 1, color: isRefund ? "#a5d6a7" : "#ffcc80" }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(absDifference)}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", maxWidth: "90%" }}
                  >
                    {isRefund
                      ? "Your effective marginal tax rate is lower than the 22% flat withholding. This difference is typically refunded when you file."
                      : `The 22% flat withholding is below your actual marginal rate of ${results.marginalRate.toFixed(1)}%. This indicates a potential estimated tax underpayment.`}
                  </Typography>
                </Box>
                {/* Subtle background glow */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    background: isRefund
                      ? "rgba(102, 187, 106, 0.15)"
                      : "rgba(255, 167, 38, 0.15)",
                    filter: "blur(40px)",
                  }}
                />
              </Paper>
            </Grid>

            {/* Chart Section */}
            <Grid size={{ xs: 12 }}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                <Box sx={{ height: 320 }}>
                  <Bar data={chartData} options={chartOptions} />
                </Box>
              </Paper>
            </Grid>

            {/* Math Breakdown */}
            <Grid size={{ xs: 12 }}>
              <Paper
                elevation={0}
                variant="outlined"
                sx={{ p: 3, borderRadius: 3, bgcolor: "background.paper" }}
              >
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  The Math Behind It
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="caption" color="text.secondary">
                      FEDERAL WITHHOLDING (PREPAYMENT)
                    </Typography>
                    <Typography variant="h6">
                      {bonusAmount > 1000000 ? "22% / 37% Flat" : "22% Flat"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {bonusAmount > 1000000 ? (
                        <>
                          $1M at 22% + $
                          {(bonusAmount - 1000000).toLocaleString()} at 37%
                        </>
                      ) : (
                        `22% of $${bonusAmount.toLocaleString()}`
                      )}
                      {" = "}
                      <strong>
                        ${results.withheldOnBonus.toLocaleString()}
                      </strong>
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="caption" color="text.secondary">
                      ACTUAL MARGINAL TAX (FINAL COST)
                    </Typography>
                    <Typography variant="h6">
                      {results.marginalRate.toFixed(2)}% Bracket
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      of ${bonusAmount.toLocaleString()} ={" "}
                      <strong>
                        ${results.actualTaxOnBonus.toLocaleString()}
                      </strong>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
