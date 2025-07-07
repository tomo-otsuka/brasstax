
import React, { useState } from "react";
import { LabeledTextBox } from "./Components.jsx";
import { STATE_TAX_DATA } from "../data/taxData.js";
import { FilingStatusEnum } from "../constants.js";
import { Grid, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function calculateIncomeTax(income, brackets, filingStatus) {
  if (!brackets) {
    return 0;
  }

  const applicableBrackets = brackets[filingStatus];
  if (!applicableBrackets) {
    // Fallback to single if specific filing status not found for simplicity
    // In a real app, you'd want more robust handling or default to a common one
    console.warn(`Filing status ${filingStatus} not found for income tax brackets. Falling back to single.`);
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

export function StateTaxComparison() {
  const [income, setIncome] = useState(100000);
  const [homeValue, setHomeValue] = useState(500000);
  const [spending, setSpending] = useState(20000);
  const [filingStatus, setFilingStatus] = useState(FilingStatusEnum.SINGLE.name);

  const results = Object.entries(STATE_TAX_DATA).map(([stateName, taxData]) => {
    const incomeTax = calculateIncomeTax(income, taxData.income_tax_brackets, filingStatus);
    const propertyTax = homeValue * taxData.property_tax_rate;
    const salesTax = spending * taxData.sales_tax_rate;
    const totalTax = incomeTax + propertyTax + salesTax;

    return {
      stateName,
      incomeTax,
      propertyTax,
      salesTax,
      totalTax,
    };
  }).sort((a, b) => b.totalTax - a.totalTax);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        State Tax Comparison
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LabeledTextBox
            label="Annual Income"
            onInput={(value) => setIncome(Number(value))}
            value={income}
          />
        </Grid>
        <Grid item xs={12}>
          <LabeledTextBox
            label="Home Value"
            onInput={(value) => setHomeValue(Number(value))}
            value={homeValue}
          />
        </Grid>
        <Grid item xs={12}>
          <LabeledTextBox
            label="Annual Spending (Goods)"
            onInput={(value) => setSpending(Number(value))}
            value={spending}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Filing Status</InputLabel>
            <Select
              value={filingStatus}
              onChange={(e) => setFilingStatus(e.target.value)}
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
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>State</TableCell>
              <TableCell align="right">Income Tax</TableCell>
              <TableCell align="right">Property Tax</TableCell>
              <TableCell align="right">Sales Tax</TableCell>
              <TableCell align="right">Total Tax</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.stateName}>
                <TableCell component="th" scope="row">
                  {result.stateName}
                </TableCell>
                <TableCell align="right">{result.incomeTax.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</TableCell>
                <TableCell align="right">{result.propertyTax.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</TableCell>
                <TableCell align="right">{result.salesTax.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</TableCell>
                <TableCell align="right">{result.totalTax.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="caption" display="block" gutterBottom sx={{ marginTop: 2 }}>
        Disclaimer: This is a simplified comparison for illustrative purposes and does not constitute financial advice. Calculations are based on 2024 data and use state-level averages.
      </Typography>
    </Box>
  );
}
