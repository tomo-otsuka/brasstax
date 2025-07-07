import React from "react";
import {
  LabeledCheckbox,
  LabeledSelect,
  LabeledSpan,
  LabeledTextBox,
} from "./Components.jsx";
import {
  JurisdictionEnum,
  FilingStatusEnum,
  TimePeriodEnum,
  DeductionTypeEnum,
} from "../constants.js";
import {
  adjustIncomes,
  calculateTax,
  calculateDeduction,
  calculateLongTermCapitalGainsTax,
  calculateAdditionalMedicareTax,
  calculateNetInvestmentIncomeTax,
  calculateIncomeTax,
} from "../taxFunctions.js";
import { Grid, Box } from "@mui/material";

export class EstimatedTaxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jurisdiction: JurisdictionEnum.FEDERAL.name,
      filingStatus: FilingStatusEnum.SINGLE.name,
      timePeriod: TimePeriodEnum.FIRST.name,

      ordinaryIncome: 0,
      shortTermCapitalGains: 0,
      longTermCapitalGains: 0,
      deductionType: DeductionTypeEnum.STANDARD.name,
      itemizedDeductions: 0,
      taxCreditsAnnual: 0,

      includePriorYearCalculation: false,
      priorYearAgi: 0,
      priorYearTax: 0,

      withholding: 0,
    };
  }

  handleStateChange(stateVar, value) {
    if (!(stateVar in this.state)) {
      alert(`incorrect state variable: ${stateVar}`);
      return;
    }
    this.setState({ [stateVar]: value });
  }

  _calculateObligationBasedOnPriorYear() {
    const threshold =
      this.state.filingStatus !==
      FilingStatusEnum.MARRIED_FILING_SEPARATELY.name
        ? 150000
        : 75000;
    const multiplier = this.state.priorYearAgi <= threshold ? 1 : 1.1;
    return this.state.priorYearTax * multiplier;
  }

  _calculateAnnualizedIncome() {
    const multiplier = [4, 2.4, 1.5, 1][this.state.timePeriod];
    const ordinaryIncome = multiplier * this.state.ordinaryIncome;
    const shortTermCapitalGains = multiplier * this.state.shortTermCapitalGains;
    const longTermCapitalGains = multiplier * this.state.longTermCapitalGains;

    return (
      ordinaryIncome +
      Math.max(shortTermCapitalGains + longTermCapitalGains, -3000)
    );
  }

  _calculateTotalTaxBasedOnAnnualizedIncome() {
    const multiplier = [4, 2.4, 1.5, 1][this.state.timePeriod];
    const ordinaryIncome = multiplier * this.state.ordinaryIncome;
    const shortTermCapitalGains = multiplier * this.state.shortTermCapitalGains;
    const longTermCapitalGains = multiplier * this.state.longTermCapitalGains;

    return calculateTax(
      this.state.jurisdiction,
      this.state.filingStatus,
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
      this.state.deductionType,
      multiplier * this.state.itemizedDeductions,
      this.state.taxCreditsAnnual
    );
  }

  _calculateAnnualizedAdjustedIncomes() {
    const multiplier = [4, 2.4, 1.5, 1][this.state.timePeriod];
    let ordinaryIncome = multiplier * this.state.ordinaryIncome;
    let shortTermCapitalGains = multiplier * this.state.shortTermCapitalGains;
    let longTermCapitalGains = multiplier * this.state.longTermCapitalGains;
    let itemizedDeductions = multiplier * this.state.itemizedDeductions;

    return adjustIncomes(
      this.state.jurisdiction,
      this.state.filingStatus,
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
      this.state.deductionType,
      itemizedDeductions
    );
  }

  _calculateDeduction() {
    const multiplier = [4, 2.4, 1.5, 1][this.state.timePeriod];
    const itemizedDeductions = multiplier * this.state.itemizedDeductions;
    return calculateDeduction(
      this.state.jurisdiction,
      this.state.filingStatus,
      this.state.deductionType,
      itemizedDeductions
    );
  }

  _calculateIncomeTax() {
    const [
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
    ] = this._calculateAnnualizedAdjustedIncomes();

    return calculateIncomeTax(
      this.state.jurisdiction,
      this.state.filingStatus,
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains
    );
  }

  _calculateLongTermCapitalGainsTax() {
    const [
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
    ] = this._calculateAnnualizedAdjustedIncomes();

    return calculateLongTermCapitalGainsTax(
      this.state.jurisdiction,
      this.state.filingStatus,
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains
    );
  }

  _calculateAdditionalMedicareTax() {
    const [ordinaryIncome] = this._calculateAnnualizedAdjustedIncomes();

    return calculateAdditionalMedicareTax(
      this.state.filingStatus,
      ordinaryIncome
    );
  }

  _calculateNetInvestmentIncomeTax() {
    const [
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains,
    ] = this._calculateAnnualizedAdjustedIncomes();

    return calculateNetInvestmentIncomeTax(
      this.state.filingStatus,
      ordinaryIncome,
      shortTermCapitalGains + longTermCapitalGains
    );
  }

  _calculateObligationBasedOnAnnualizedIncome() {
    return 0.9 * this._calculateTotalTaxBasedOnAnnualizedIncome();
  }

  _calculateObligationDuringTimePeriod() {
    let multipliers = [0.25, 0.5, 0.75, 1];
    if (this.state.jurisdiction === JurisdictionEnum.CALIFORNIA.name) {
      multipliers = [0.3, 0.7, 0.7, 1];
    }
    const rate = multipliers[this.state.timePeriod];
    const obligation = this._calculateAnnualizedObligation();
    return obligation * rate;
  }

  _calculateTaxesOwed() {
    return this._calculateObligationDuringTimePeriod() - this.state.withholding;
  }

  _calculateAnnualizedObligation() {
    let obligations = [this._calculateObligationBasedOnAnnualizedIncome()];
    if (this.state.includePriorYearCalculation) {
      if (
        !(
          this.state.jurisdiction === JurisdictionEnum.CALIFORNIA.name &&
          this._calculateAnnualizedIncome() > 1000000
        )
      ) {
        obligations.push(this._calculateObligationBasedOnPriorYear());
      }
    }
    return Math.min(...obligations);
  }

  _calculateAnnualizedEffectiveTaxRate() {
    const totalTax = this._calculateTotalTaxBasedOnAnnualizedIncome();
    const income = this._calculateAnnualizedIncome();
    return totalTax / income || 0;
  }

  render() {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <LabeledSelect
              onChange={(event) =>
                this.handleStateChange("jurisdiction", event.target.value)
              }
              label="Jurisdiction"
              selectOptions={Object.values(JurisdictionEnum)}
            ></LabeledSelect>
          </Grid>
          <Grid item xs={12}>
            <LabeledSelect
              onChange={(event) =>
                this.handleStateChange("filingStatus", event.target.value)
              }
              label="Filing Status"
              selectOptions={Object.values(FilingStatusEnum)}
            ></LabeledSelect>
          </Grid>
          <Grid item xs={12}>
            <LabeledSelect
              onChange={(event) =>
                this.handleStateChange("timePeriod", event.target.value)
              }
              label="Time Period"
              selectOptions={Object.values(TimePeriodEnum)}
            ></LabeledSelect>
          </Grid>
          <Grid item xs={6}>
            <LabeledTextBox
              label="Ordinary Income"
              onInput={(textValue) =>
                this.handleStateChange("ordinaryIncome", textValue)
              }
              value={this.state.ordinaryIncome}
            ></LabeledTextBox>
            <LabeledTextBox
              label="Short Term Capital Gains"
              onInput={(textValue) =>
                this.handleStateChange("shortTermCapitalGains", textValue)
              }
              value={this.state.shortTermCapitalGains}
            ></LabeledTextBox>
            <LabeledTextBox
              label="Long Term Capital Gains"
              onInput={(textValue) =>
                this.handleStateChange("longTermCapitalGains", textValue)
              }
              value={this.state.longTermCapitalGains}
            ></LabeledTextBox>
            <LabeledSelect
              onChange={(event) =>
                this.handleStateChange("deductionType", event.target.value)
              }
              label="Deduction Type"
              selectOptions={Object.values(DeductionTypeEnum)}
            ></LabeledSelect>
            {this.state.deductionType === "itemized" && (
              <LabeledTextBox
                label="Itemized Deductions"
                onInput={(textValue) =>
                  this.handleStateChange("itemizedDeductions", textValue)
                }
                value={this.state.itemizedDeductions}
              ></LabeledTextBox>
            )}
            <LabeledTextBox
              label="Tax Credits (Annual)"
              onInput={(textValue) =>
                this.handleStateChange("taxCreditsAnnual", textValue)
              }
              value={this.state.taxCreditsAnnual}
            ></LabeledTextBox>
          </Grid>
          <Grid item xs={6}>
            <LabeledSpan
              label="Annualized Income"
              value={this._calculateAnnualizedIncome().toFixed(2)}
            ></LabeledSpan>
            <LabeledSpan
              label="Deduction"
              value={this._calculateDeduction().toFixed(2)}
            ></LabeledSpan>
            {this.state.jurisdiction === JurisdictionEnum.FEDERAL.name && (
              <>
                <LabeledSpan
                  label="Income Tax"
                  value={this._calculateIncomeTax().toFixed(2)}
                ></LabeledSpan>
                <LabeledSpan
                  label="Long Term Capital Gains Tax"
                  value={this._calculateLongTermCapitalGainsTax().toFixed(2)}
                ></LabeledSpan>
                <LabeledSpan
                  label="Additional Medicare Tax"
                  value={this._calculateAdditionalMedicareTax().toFixed(2)}
                ></LabeledSpan>
                <LabeledSpan
                  label="Net Investment Tax"
                  value={this._calculateNetInvestmentIncomeTax().toFixed(2)}
                ></LabeledSpan>
              </>
            )}
            <LabeledSpan
              label="Total Tax"
              value={
                this._calculateTotalTaxBasedOnAnnualizedIncome().toFixed(2) +
                " (" +
                (this._calculateAnnualizedEffectiveTaxRate() * 100).toFixed(2) +
                "%)"
              }
            ></LabeledSpan>
            <LabeledSpan
              label="Obligation based on annualized income"
              value={this._calculateObligationBasedOnAnnualizedIncome().toFixed(2)}
            ></LabeledSpan>
          </Grid>
          <Grid item xs={6}>
            <LabeledCheckbox
              label="Include prior year calculation"
              checked={this.state.includePriorYearCalculation}
              onChange={(event) =>
                this.handleStateChange(
                  "includePriorYearCalculation",
                  event.target.checked
                )
              }
            ></LabeledCheckbox>
            <LabeledTextBox
              label="Prior Year AGI"
              onInput={(textValue) =>
                this.handleStateChange("priorYearAgi", textValue)
              }
              disabled={!this.state.includePriorYearCalculation}
              value={this.state.priorYearAgi}
            ></LabeledTextBox>
            <LabeledTextBox
              label="Prior Year Tax"
              onInput={(textValue) =>
                this.handleStateChange("priorYearTax", textValue)
              }
              disabled={!this.state.includePriorYearCalculation}
              value={this.state.priorYearTax}
            ></LabeledTextBox>
          </Grid>
          <Grid item xs={6}>
            <LabeledSpan
              label="Obligation based on prior year"
              value={this._calculateObligationBasedOnPriorYear().toFixed(2)}
            ></LabeledSpan>
          </Grid>
          <Grid item xs={12}>
            <LabeledSpan
              label="Annualized Obligation"
              value={this._calculateAnnualizedObligation().toFixed(2)}
            ></LabeledSpan>

            <LabeledSpan
              label="Obligation in time period"
              value={this._calculateObligationDuringTimePeriod().toFixed(2)}
            ></LabeledSpan>

            <LabeledTextBox
              label="Withholding ($)"
              onInput={(textValue) =>
                this.handleStateChange("withholding", textValue)
              }
              value={this.state.withholding}
            ></LabeledTextBox>

            <LabeledSpan
              label="Taxes Owed"
              value={this._calculateTaxesOwed().toFixed(2)}
            ></LabeledSpan>
          </Grid>
          <Grid item xs={12}>
            <p>
              This is not financial advice. <br />
              This tool is meant to estimate the estimated payments, and is provided
              without any guarantees. <br />
              The author is not a CPA nor did any CPA review this. Please use at
              your own risk. <br />
              If you would like to inspect the calculations or make any
              contributions, please review the source code{" "}
              <a href="https://github.com/tomo-otsuka/brasstax">here</a>. <br />
              <br />
              Privacy: This tool does not collect any sensitive data. <br />
              In fact, after retrieving the initial static assets to display this
              page, <br />
              it does not communicate to a server whatsoever.
            </p>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
