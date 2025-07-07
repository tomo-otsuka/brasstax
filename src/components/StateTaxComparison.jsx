import React, { useState } from "react";
import { STATE_TAX_DATA } from "../data/taxData.js";
import { FilingStatusEnum } from "../constants.js";
import { Bar } from "react-chartjs-2";
import {
  Grid,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Card,
  CardContent,
  TableSortLabel,
  Button,
} from "@mui/material";
import { Share } from "@mui/icons-material";
import { JurisdictionNameToEnum } from "../constants.js";

function calculateIncomeTax(income, brackets, filingStatus) {
  if (!brackets) {
    return 0;
  }

  const applicableBrackets = brackets[filingStatus];
  if (!applicableBrackets) {
    // Fallback to single if specific filing status not found for simplicity
    // In a real app, you'd want more robust handling or default to a common one
    console.warn(
      `Filing status ${filingStatus} not found for income tax brackets. Falling back to single.`,
    );
    return calculateIncomeTax(income, brackets, FilingStatusEnum.SINGLE.name);
  }

  let remainingIncome = income;
  let totalTax = 0;

  // Brackets are assumed to be sorted from highest to lowest bracketStart
  for (const bracket of applicableBrackets) {
    if (remainingIncome > bracket.bracketStart) {
      const taxableInBracket = remainingIncome - bracket.bracketStart;
      totalTax += taxableInBracket * bracket.rate;
      remainingIncome = bracket.bracketStart;
    }
  }

  return totalTax;
}

export function StateTaxComparison({ searchParams, setSearchParams }) {
  const [income, setIncome] = useState(
    Number(searchParams.get("income")) || 100000,
  );
  const [homeValue, setHomeValue] = useState(
    Number(searchParams.get("homeValue")) || 500000,
  );
  const [spending, setSpending] = useState(
    Number(searchParams.get("spending")) || 20000,
  );
  const [filingStatus, setFilingStatus] = useState(
    searchParams.get("filingStatus") || FilingStatusEnum.SINGLE.name,
  );
  const [orderBy, setOrderBy] = useState(
    searchParams.get("orderBy") || "totalTax",
  );
  const [order, setOrder] = useState(searchParams.get("order") || "desc");

  const updateSearchParams = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    const newOrder = isAsc ? "desc" : "asc";
    setOrder(newOrder);
    setOrderBy(property);
    updateSearchParams("order", newOrder);
    updateSearchParams("orderBy", property);
  };

  const results = Object.entries(STATE_TAX_DATA)
    .map(([stateName, taxData]) => {
      const incomeTax = calculateIncomeTax(
        income,
        taxData.income_tax_brackets,
        filingStatus,
      );
      const propertyTax = homeValue * taxData.property_tax_rate;
      const salesTax = spending * taxData.sales_tax_rate;
      const totalTax = incomeTax + propertyTax + salesTax;

      return {
        stateName: JurisdictionNameToEnum[stateName].readable,
        incomeTax,
        propertyTax,
        salesTax,
        totalTax,
      };
    })
    .sort((a, b) => {
      if (order === "asc") {
        return a[orderBy] > b[orderBy] ? 1 : -1;
      } else {
        return b[orderBy] > a[orderBy] ? 1 : -1;
      }
    });

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        State Tax Comparison
      </Typography>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Annual Income"
                type="number"
                value={income}
                onChange={(e) => {
                  setIncome(Number(e.target.value));
                  updateSearchParams("income", e.target.value);
                }}
                fullWidth
                inputProps={{ step: 1000 }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Home Value"
                type="number"
                value={homeValue}
                onChange={(e) => {
                  setHomeValue(Number(e.target.value));
                  updateSearchParams("homeValue", e.target.value);
                }}
                fullWidth
                inputProps={{ step: 1000 }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Annual Spending (Goods)"
                type="number"
                value={spending}
                onChange={(e) => {
                  setSpending(Number(e.target.value));
                  updateSearchParams("spending", e.target.value);
                }}
                fullWidth
                inputProps={{ step: 1000 }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel>Filing Status</InputLabel>
                <Select
                  value={filingStatus}
                  onChange={(e) => {
                    setFilingStatus(e.target.value);
                    updateSearchParams("filingStatus", e.target.value);
                  }}
                  label="Filing Status"
                >
                  {Object.values(FilingStatusEnum).map((status) => (
                    <MenuItem key={status.name} value={status.name}>
                      {status.readable}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        startIcon={<Share />}
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
        }}
        sx={{ mb: 2 }}
      >
        Share
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Bar
          data={{
            labels: results.map((r) => r.stateName),
            datasets: [
              {
                label: "Income Tax",
                data: results.map((r) => r.incomeTax),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
              {
                label: "Property Tax",
                data: results.map((r) => r.propertyTax),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
              {
                label: "Sales Tax",
                data: results.map((r) => r.salesTax),
                backgroundColor: "rgba(75, 192, 192, 0.5)",
              },
            ],
          }}
          options={{
            indexAxis: "y",
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
                ticks: {
                  autoSkip: false,
                  fontSize: 10,
                },
              },
            },
          }}
          height={250}
        />
      </TableContainer>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sortDirection={orderBy === "stateName" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "stateName"}
                  direction={orderBy === "stateName" ? order : "asc"}
                  onClick={() => handleRequestSort("stateName")}
                >
                  State
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="right"
                sortDirection={orderBy === "incomeTax" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "incomeTax"}
                  direction={orderBy === "incomeTax" ? order : "asc"}
                  onClick={() => handleRequestSort("incomeTax")}
                >
                  Income Tax
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="right"
                sortDirection={orderBy === "propertyTax" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "propertyTax"}
                  direction={orderBy === "propertyTax" ? order : "asc"}
                  onClick={() => handleRequestSort("propertyTax")}
                >
                  Property Tax
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="right"
                sortDirection={orderBy === "salesTax" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "salesTax"}
                  direction={orderBy === "salesTax" ? order : "asc"}
                  onClick={() => handleRequestSort("salesTax")}
                >
                  Sales Tax
                </TableSortLabel>
              </TableCell>
              <TableCell
                align="right"
                sortDirection={orderBy === "totalTax" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "totalTax"}
                  direction={orderBy === "totalTax" ? order : "asc"}
                  onClick={() => handleRequestSort("totalTax")}
                >
                  Total Tax
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.stateName}>
                <TableCell component="th" scope="row">
                  {result.stateName}
                </TableCell>
                <TableCell align="right">
                  {result.incomeTax.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}
                </TableCell>
                <TableCell align="right">
                  {result.propertyTax.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}
                </TableCell>
                <TableCell align="right">
                  {result.salesTax.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}
                </TableCell>
                <TableCell align="right">
                  {result.totalTax.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        sx={{ marginTop: 2 }}
      >
        Disclaimer: This is a simplified comparison for illustrative purposes
        and does not constitute financial advice. Calculations are based on 2024
        data and use state-level averages.
      </Typography>
    </Box>
  );
}
