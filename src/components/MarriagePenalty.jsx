import React, { useState, useMemo } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  DeductionTypeEnum,
  FilingStatusEnum,
  JurisdictionEnum,
} from "../constants";
import { calculateTax } from "../taxFunctions";
import {
  Grid,
  Box,
  Typography,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Divider,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  Share,
  ExpandMore as ExpandMoreIcon,
  LocationOn as StateIcon,
  Person as PersonIcon,
  Favorite as ResultIcon,
} from "@mui/icons-material";

import { InputSection } from "./common/InputSection";
import { ResultCard } from "./common/ResultCard";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function MarriagePenalty({
  searchParams,
  setSearchParams,
  showSnackbar,
}) {
  const [ordinaryIncome1, setOrdinaryIncome1] = useState(
    Number(searchParams.get("ordinaryIncome1")) || 75000,
  );
  const [shortTermCapitalGains1, setShortTermCapitalGains1] = useState(
    Number(searchParams.get("shortTermCapitalGains1")) || 5000,
  );
  const [longTermCapitalGains1, setLongTermCapitalGains1] = useState(
    Number(searchParams.get("longTermCapitalGains1")) || 10000,
  );
  const [ordinaryIncome2, setOrdinaryIncome2] = useState(
    Number(searchParams.get("ordinaryIncome2")) || 75000,
  );
  const [shortTermCapitalGains2, setShortTermCapitalGains2] = useState(
    Number(searchParams.get("shortTermCapitalGains2")) || 0,
  );
  const [longTermCapitalGains2, setLongTermCapitalGains2] = useState(
    Number(searchParams.get("longTermCapitalGains2")) || 0,
  );
  const [selectedState, setSelectedState] = useState(
    searchParams.get("selectedState") || JurisdictionEnum.CALIFORNIA.name,
  );

  const updateSearchParams = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  };

  const tax1 = useMemo(
    () =>
      calculateTax({
        jurisdiction: JurisdictionEnum.FEDERAL.name,
        filingStatus: FilingStatusEnum.SINGLE.name,
        ordinaryIncome: ordinaryIncome1,
        shortTermCapitalGains: shortTermCapitalGains1,
        longTermCapitalGains: longTermCapitalGains1,
        deductionType: DeductionTypeEnum.STANDARD.name,
        itemizedDeduction: 0,
        taxCredits: 0,
        stateJurisdiction: selectedState,
      }),
    [
      ordinaryIncome1,
      shortTermCapitalGains1,
      longTermCapitalGains1,
      selectedState,
    ],
  );

  const tax2 = useMemo(
    () =>
      calculateTax({
        jurisdiction: JurisdictionEnum.FEDERAL.name,
        filingStatus: FilingStatusEnum.SINGLE.name,
        ordinaryIncome: ordinaryIncome2,
        shortTermCapitalGains: shortTermCapitalGains2,
        longTermCapitalGains: longTermCapitalGains2,
        deductionType: DeductionTypeEnum.STANDARD.name,
        itemizedDeduction: 0,
        taxCredits: 0,
        stateJurisdiction: selectedState,
      }),
    [
      ordinaryIncome2,
      shortTermCapitalGains2,
      longTermCapitalGains2,
      selectedState,
    ],
  );

  const taxMarried = useMemo(
    () =>
      calculateTax({
        jurisdiction: JurisdictionEnum.FEDERAL.name,
        filingStatus: FilingStatusEnum.MARRIED_FILING_JOINTLY.name,
        ordinaryIncome: { p1: ordinaryIncome1, p2: ordinaryIncome2 },
        shortTermCapitalGains: shortTermCapitalGains1 + shortTermCapitalGains2,
        longTermCapitalGains: longTermCapitalGains1 + longTermCapitalGains2,
        deductionType: DeductionTypeEnum.STANDARD.name,
        itemizedDeduction: 0,
        taxCredits: 0,
        stateJurisdiction: selectedState,
      }),
    [
      ordinaryIncome1,
      shortTermCapitalGains1,
      longTermCapitalGains1,
      ordinaryIncome2,
      shortTermCapitalGains2,
      longTermCapitalGains2,
      selectedState,
    ],
  );

  const taxDifference = useMemo(() => {
    const difference = {};
    for (const key in taxMarried) {
      difference[key] = taxMarried[key] - (tax1[key] || 0) - (tax2[key] || 0);
    }
    return difference;
  }, [tax1, tax2, taxMarried]);

  const totalDifference = taxDifference["Total Tax"];
  const resultText =
    totalDifference >= 0 ? "Marriage Penalty" : "Marriage Bonus";
  const resultColor = totalDifference >= 0 ? "error.main" : "success.main";

  const chartData = {
    labels: ["Separately", "Jointly"],
    datasets: Object.keys(taxMarried)
      .filter((key) => key !== "Total Tax")
      .map((key, index) => {
        const colors = [
          "rgba(99, 102, 241, 0.8)", // Indigo
          "rgba(168, 85, 247, 0.8)", // Purple
          "rgba(236, 72, 153, 0.8)", // Pink
          "rgba(59, 130, 246, 0.8)", // Blue
          "rgba(16, 185, 129, 0.8)", // Emerald
        ];
        return {
          label: key,
          data: [(tax1[key] || 0) + (tax2[key] || 0), taxMarried[key] || 0],
          backgroundColor: colors[index % colors.length],
          borderRadius: 4,
        };
      }),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#a1a1aa",
          font: { family: "'Outfit', sans-serif", size: 10 },
          usePointStyle: true,
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: "rgba(15, 15, 20, 0.9)",
        titleFont: { family: "'Outfit', sans-serif", size: 14 },
        bodyFont: { family: "'Outfit', sans-serif", size: 13 },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.parsed.y || 0;
            return `${label}: $${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          color: "#a1a1aa",
          font: { family: "'Outfit', sans-serif", size: 12 },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: { color: "rgba(255, 255, 255, 0.05)" },
        ticks: {
          color: "#a1a1aa",
          font: { family: "'Outfit', sans-serif" },
          callback: (value) => `$${value.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid size="grow">
          <Typography variant="h4" component="h1">
            Marriage Penalty Calculator
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
            The "marriage penalty" (or bonus) is the difference between what a
            couple pays filing jointly versus what they'd pay as two single
            filers.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Why Does This Happen?
          </Typography>
          <Typography paragraph>
            When two people with similar incomes marry, their combined income
            can push them into higher brackets—because joint brackets aren't
            always double the single brackets. On the flip side, couples with
            very different incomes often see a <strong>marriage bonus</strong>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <InputSection title="State" icon={<StateIcon />}>
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
              </InputSection>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <InputSection title="Person 1" icon={<PersonIcon />}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      label="Ordinary Income"
                      type="number"
                      value={ordinaryIncome1}
                      onChange={(e) => {
                        setOrdinaryIncome1(Number(e.target.value));
                        updateSearchParams("ordinaryIncome1", e.target.value);
                      }}
                      fullWidth
                      inputProps={{ step: 1000 }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      label="Short Term Capital Gains"
                      type="number"
                      value={shortTermCapitalGains1}
                      onChange={(e) => {
                        setShortTermCapitalGains1(Number(e.target.value));
                        updateSearchParams(
                          "shortTermCapitalGains1",
                          e.target.value,
                        );
                      }}
                      fullWidth
                      inputProps={{ step: 1000 }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      label="Long Term Capital Gains"
                      type="number"
                      value={longTermCapitalGains1}
                      onChange={(e) => {
                        setLongTermCapitalGains1(Number(e.target.value));
                        updateSearchParams(
                          "longTermCapitalGains1",
                          e.target.value,
                        );
                      }}
                      fullWidth
                      inputProps={{ step: 1000 }}
                    />
                  </Grid>
                </Grid>
              </InputSection>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <InputSection title="Person 2" icon={<PersonIcon />}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      label="Ordinary Income"
                      type="number"
                      value={ordinaryIncome2}
                      onChange={(e) => {
                        setOrdinaryIncome2(Number(e.target.value));
                        updateSearchParams("ordinaryIncome2", e.target.value);
                      }}
                      fullWidth
                      inputProps={{ step: 1000 }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      label="Short Term Capital Gains"
                      type="number"
                      value={shortTermCapitalGains2}
                      onChange={(e) => {
                        setShortTermCapitalGains2(Number(e.target.value));
                        updateSearchParams(
                          "shortTermCapitalGains2",
                          e.target.value,
                        );
                      }}
                      fullWidth
                      inputProps={{ step: 1000 }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      label="Long Term Capital Gains"
                      type="number"
                      value={longTermCapitalGains2}
                      onChange={(e) => {
                        setLongTermCapitalGains2(Number(e.target.value));
                        updateSearchParams(
                          "longTermCapitalGains2",
                          e.target.value,
                        );
                      }}
                      fullWidth
                      inputProps={{ step: 1000 }}
                    />
                  </Grid>
                </Grid>
              </InputSection>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ position: "sticky", top: "1rem" }}>
            <ResultCard
              title={resultText}
              icon={<ResultIcon />}
              value={Math.abs(totalDifference)}
              resultColor={resultColor}
            >
              <Box sx={{ height: 300, my: 3 }}>
                <Bar data={chartData} options={chartOptions} />
              </Box>
              <Divider sx={{ my: 2 }} />
              <TableContainer component={Paper}>
                <Table aria-label="tax comparison table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tax Type</TableCell>
                      <TableCell align="right">Separately</TableCell>
                      <TableCell align="right">Jointly</TableCell>
                      <TableCell align="right">Difference</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.keys(taxMarried).map((key) => (
                      <TableRow
                        key={key}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          fontWeight: key === "Total Tax" ? "bold" : "normal",
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {key}
                        </TableCell>
                        <TableCell align="right">
                          ${(tax1[key] + tax2[key]).toFixed(2)}
                        </TableCell>
                        <TableCell align="right">
                          ${taxMarried[key].toFixed(2)}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color:
                              taxDifference[key] > 0
                                ? "error.main"
                                : "success.main",
                          }}
                        >
                          ${taxDifference[key].toFixed(2)}
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
    </Box>
  );
}
