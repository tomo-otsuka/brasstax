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
    labels: ["Individually (Single)", "Jointly (MFJ)"],
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
    <Box component="main" sx={{ flexGrow: 1, padding: 2 }}>
      <Box component="header" sx={{ mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid size="grow">
            <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
              Marriage Penalty Calculator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Analyze the financial impact of filing jointly vs individually as
              single filers
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
              Share
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Tier 1: Input Ribbon */}
      <Box component="section" sx={{ mb: 3 }}>
        <Card variant="outlined" sx={{ bgcolor: "background.paper" }}>
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Grid container spacing={3} alignItems="flex-start">
              <Grid size={{ xs: 12, md: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1,
                    color: "primary.main",
                  }}
                >
                  <StateIcon fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Jurisdiction
                  </Typography>
                </Box>
                <TextField
                  select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    updateSearchParams("selectedState", e.target.value);
                  }}
                  fullWidth
                  size="small"
                  variant="filled"
                  hiddenLabel
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

              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1,
                    color: "text.secondary",
                  }}
                >
                  <PersonIcon fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Person 1
                  </Typography>
                </Box>
                <Grid container spacing={1.5}>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      label="Income"
                      type="number"
                      value={ordinaryIncome1}
                      onChange={(e) => {
                        setOrdinaryIncome1(Number(e.target.value));
                        updateSearchParams("ordinaryIncome1", e.target.value);
                      }}
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      label="ST Gains"
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
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      label="LT Gains"
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
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1,
                    color: "text.secondary",
                  }}
                >
                  <PersonIcon fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Person 2
                  </Typography>
                </Box>
                <Grid container spacing={1.5}>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      label="Income"
                      type="number"
                      value={ordinaryIncome2}
                      onChange={(e) => {
                        setOrdinaryIncome2(Number(e.target.value));
                        updateSearchParams("ordinaryIncome2", e.target.value);
                      }}
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      label="ST Gains"
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
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <TextField
                      label="LT Gains"
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
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Tier 2: Hero Results */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Box
            component="article"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: 3,
              borderRadius: 1,
              textAlign: "center",
              bgcolor:
                totalDifference >= 0
                  ? "rgba(244, 63, 94, 0.05)"
                  : "rgba(16, 185, 129, 0.05)",
              border: "1px solid",
              borderColor:
                totalDifference >= 0
                  ? "rgba(244, 63, 94, 0.2)"
                  : "rgba(16, 185, 129, 0.2)",
            }}
          >
            <ResultIcon
              sx={{
                fontSize: 48,
                mb: 2,
                mx: "auto",
                color: resultColor,
                filter: "drop-shadow(0 0 8px rgba(0,0,0,0.1))",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                textTransform: "uppercase",
                letterSpacing: 1,
                fontSize: "0.75rem",
                fontWeight: 700,
                mb: 1,
              }}
            >
              Resulting Impact
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontWeight: 800, color: resultColor, mb: 1 }}
            >
              ${Math.abs(totalDifference).toLocaleString()}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              {resultText}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {totalDifference >= 0
                ? "You pay more in taxes by filing jointly than you would as individuals."
                : "You save on taxes by filing a joint return compared to separate returns."}
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7, lg: 8 }}>
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardContent sx={{ h: "100%", p: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Visual Comparison{" "}
                <Typography variant="caption" color="text.secondary">
                  (Individually vs Jointly)
                </Typography>
              </Typography>
              <Box sx={{ height: 260 }}>
                <Bar data={chartData} options={chartOptions} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tier 3: Detailed Breakdown */}
      <Box component="section">
        <Typography variant="h6" sx={{ mb: 2, px: 1, fontWeight: 600 }}>
          Detailed Breakdown
        </Typography>
        <TableContainer
          component={Paper}
          elevation={0}
          variant="outlined"
          sx={{ borderRadius: 1, overflow: "hidden" }}
        >
          <Table aria-label="tax comparison table" size="medium">
            <TableHead>
              <TableRow sx={{ bgcolor: "action.hover" }}>
                <TableCell sx={{ fontWeight: 700 }}>Tax Category</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>
                  Individually (Singles)
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>
                  Jointly (MFJ)
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>
                  Impact
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(taxMarried).map((key) => {
                const isTotal = key === "Total Tax";
                return (
                  <TableRow
                    key={key}
                    sx={{
                      bgcolor: isTotal ? "action.selected" : "inherit",
                      "& .MuiTableCell-root": { py: 1.5 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography
                        variant={isTotal ? "subtitle1" : "body1"}
                        sx={{ fontWeight: isTotal ? 700 : 500 }}
                      >
                        {key}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body1">
                        $
                        {(tax1[key] + tax2[key]).toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body1">
                        $
                        {taxMarried[key].toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color:
                          taxDifference[key] > 0
                            ? "error.main"
                            : "success.main",
                        fontWeight: isTotal ? 700 : 600,
                      }}
                    >
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        {taxDifference[key] > 0 ? "+" : ""}$
                        {taxDifference[key].toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                        })}
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* About Section */}
      <Box sx={{ mt: 4 }}>
        <Accordion variant="outlined">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>
              Wealth & Marriage FAQ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              The "marriage penalty" (or bonus) is the difference between what a
              couple pays filing <strong>Jointly (MFJ)</strong> versus what they
              would pay as <strong>two Single filers</strong>.
            </Typography>
            <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
              Why compare to Single filing?
            </Typography>
            <Typography paragraph variant="body2">
              This comparison shows the tax impact of <em>being married</em>. It
              does <strong>not</strong> compare Jointly vs Married Filing
              Separately (MFS), as MFS is a special status with restricted
              benefits often used for separate liabilities or specific income
              scenarios.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700 }}
              gutterBottom
            >
              Why Does This Happen?
            </Typography>
            <Typography paragraph>
              When two people with similar incomes marry, their combined income
              can push them into higher brackets—because joint brackets aren't
              always double the single brackets. On the flip side, couples with
              very different incomes often see a <strong>marriage bonus</strong>
              .
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
