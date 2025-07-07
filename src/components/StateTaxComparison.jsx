
import React, { useState } from "react";
import { LabeledTextBox } from "./Components.jsx";
import { STATE_TAX_DATA } from "../data/taxData.js";
import { FilingStatusEnum } from "../constants.js";

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
    <div className="App App-header">
      <h2>State Tax Comparison</h2>
      <div className="row">
        <div className="bordered">
          <LabeledTextBox
            label="Annual Income"
            onInput={(value) => setIncome(Number(value))}
            value={income}
          />
          <LabeledTextBox
            label="Home Value"
            onInput={(value) => setHomeValue(Number(value))}
            value={homeValue}
          />
          <LabeledTextBox
            label="Annual Spending (Goods)"
            onInput={(value) => setSpending(Number(value))}
            value={spending}
          />
          <div className="labeled-text-box">
            <label>Filing Status</label>
            <select
              value={filingStatus}
              onChange={(e) => setFilingStatus(e.target.value)}
            >
              {Object.values(FilingStatusEnum).map((status) => (
                <option key={status.name} value={status.name}>
                  {status.readable}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="bordered">
          <h3>Results</h3>
          <table>
            <thead>
              <tr>
                <th>State</th>
                <th>Income Tax</th>
                <th>Property Tax</th>
                <th>Sales Tax</th>
                <th>Total Tax</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.stateName}>
                  <td>{result.stateName}</td>
                  <td>${result.incomeTax.toFixed(2)}</td>
                  <td>${result.propertyTax.toFixed(2)}</td>
                  <td>${result.salesTax.toFixed(2)}</td>
                  <td>${result.totalTax.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <span className="footer">
        Disclaimer: This is a simplified comparison for illustrative purposes and does not constitute financial advice. Calculations are based on 2024 data and use state-level averages.
      </span>
    </div>
  );
}
