import "./App.css";
import React from "react";
import { calculateTax, getStandardDeduction } from "./taxFunctions.js";

class FilingStatus extends React.Component {
  render() {
    return (
      <div>
        <label for="filing-status">Filing Status: </label>
        <select
          id="filing-status"
          onChange={(event) => this.props.onChange(event)}
        >
          <option value="single">Single</option>
          <option value="married-filing-jointly">Married Filing Jointly</option>
          <option value="married-filing-separately">
            Married Filing Separately
          </option>
          <option value="head-of-household">Head of Household</option>
        </select>
      </div>
    );
  }
}

class TimePeriod extends React.Component {
  render() {
    return (
      <div>
        <label for="time-period">Time Period: </label>
        <select
          id="time-period"
          onChange={(event) => this.props.onChange(event)}
        >
          <option value="0">1/1 - 3/31</option>
          <option value="1">1/1 - 5/31</option>
          <option value="2">1/1 - 8/31</option>
          <option value="3">1/1 - 12/31</option>
        </select>
      </div>
    );
  }
}

class DeductionType extends React.Component {
  render() {
    return (
      <div>
        <label for="deduction-type">Deduction Type: </label>
        <select
          id="deduction-type"
          onChange={(event) => this.props.onChange(event)}
        >
          <option value="standard">Standard</option>
          <option value="itemized">Itemized</option>
        </select>
      </div>
    );
  }
}

class IncludePriorYearCalculation extends React.Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={(event) => this.props.onChange(event)}
        ></input>
        <label>Include prior year calculation</label>
      </div>
    );
  }
}

class LabeledTextBox extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label + ": "}</label>
        <input
          type="text"
          onChange={(event) => this.props.onChange(event)}
          disabled={this.props.disabled}
        ></input>
      </div>
    );
  }
}

class LabeledSpan extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label + ": "}</label>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filingStatus: "single",
      timePeriod: 0,

      ordinaryIncome: 0,
      shortTermCapitalGains: 0,
      longTermCapitalGains: 0,
      deductionType: "standard",
      itemizedDeduction: 0,
      taxCreditsAnnual: 0,

      annualizedIncome: 0,
      obligationBasedOnCurrentYear: 0,

      includePriorYearCalculation: true,
      priorYearAgi: 0,
      priorYearTax: 0,
      obligationBasedOnPriorYear: 0,

      withholdings: 0,
    };
  }

  handleFilingStatusChange(event) {
    this.setState(
      { filingStatus: event.target.value },
      this._updateObligationBasedOnCurrentYear
    );
  }

  handleTimePeriodChange(event) {
    this.setState(
      { timePeriod: event.target.value },
      this._updateObligationBasedOnCurrentYear
    );
  }

  handleOrdinaryIncomeChange(event) {
    this.setState(
      { ordinaryIncome: event.target.value },
      this._updateObligationBasedOnCurrentYear
    );
  }

  handleShortTermCapitalGainsChange(event) {
    this.setState(
      { shortTermCapitalGains: event.target.value },
      this._updateObligationBasedOnCurrentYear
    );
  }

  handleLongTermCapitalGainsChange(event) {
    this.setState(
      { longTermCapitalGains: event.target.value },
      this._updateObligationBasedOnCurrentYear
    );
  }

  handleDeductionTypeChange(event) {
    this.setState(
      { deductionType: event.target.value },
      this._updateObligationBasedOnCurrentYear
    );
  }

  handleItemizedDeductionsChange(event) {
    this.setState(
      { itemizedDeduction: event.target.value },
      this._updateObligationBasedOnCurrentYear
    );
  }

  handleTaxCreditsAnnualChange(event) {
    this.setState(
      { taxCreditsAnnual: event.target.value },
      this._updateObligationBasedOnCurrentYear
    );
  }

  handleWithholdingsChange(event) {
    this.setState({ withholdings: event.target.value });
  }

  handleIncludePriorYearCalculation(event) {
    this.setState({ includePriorYearCalculation: event.target.checked });
  }

  _calculateObligationBasedOnPriorYear(priorYearAgi, priorYearTax) {
    const threshold =
      this.state.filingStatus !== "married-filing-separately" ? 150000 : 75000;
    const multiplier = priorYearAgi <= threshold ? 1 : 1.1;
    return priorYearTax * multiplier;
  }

  handlePriorYearAgiChange(event) {
    const priorYearAgi = event.target.value;
    const priorYearTax = this.state.priorYearTax;

    this.setState({ priorYearAgi: priorYearAgi });
    this.setState({
      obligationBasedOnPriorYear: this._calculateObligationBasedOnPriorYear(
        priorYearAgi,
        priorYearTax
      ),
    });
  }

  handlePriorYearTaxChange(event) {
    const priorYearAgi = this.state.priorYearAgi;
    const priorYearTax = event.target.value;

    this.setState({ priorYearTax: priorYearTax });
    this.setState({
      obligationBasedOnPriorYear: this._calculateObligationBasedOnPriorYear(
        priorYearAgi,
        priorYearTax
      ),
    });
  }

  _updateObligationBasedOnCurrentYear() {
    const multiplier = [4, 2.4, 1.5, 1][this.state.timePeriod];
    const ordinaryIncome = multiplier * this.state.ordinaryIncome;
    const shortTermCapitalGains = multiplier * this.state.shortTermCapitalGains;
    const longTermCapitalGains = multiplier * this.state.longTermCapitalGains;

    this.setState({
      annualizedIncome:
        ordinaryIncome +
        Math.max(shortTermCapitalGains + longTermCapitalGains, -3000),
    });
    this.setState({
      obligationBasedOnCurrentYear:
        0.9 *
        calculateTax(
          this.state.filingStatus,
          ordinaryIncome,
          shortTermCapitalGains,
          longTermCapitalGains,
          this.state.deductionType,
          multiplier * this.state.itemizedDeduction,
          this.state.taxCreditsAnnual
        ),
    });
    return;
  }

  _calculateObligationDuringTimePeriod() {
    const rate = [0.25, 0.5, 0.75, 1][this.state.timePeriod];
    const obligation = this._getAnnualizedObligation();
    return obligation * rate;
  }

  _calculateTaxesOwed() {
    return (
      this._calculateObligationDuringTimePeriod() - this.state.withholdings
    );
  }

  _getAnnualizedObligation() {
    let obligations = [this.state.obligationBasedOnCurrentYear];
    if (this.state.includePriorYearCalculation) {
      obligations.push(this.state.obligationBasedOnPriorYear);
    }
    return Math.min(...obligations);
  }

  render() {
    return (
      <div className="App App-header">
        <div className="row">
          <div className="bordered">
            <FilingStatus
              onChange={(event) => this.handleFilingStatusChange(event)}
            ></FilingStatus>
            <TimePeriod
              onChange={(event) => this.handleTimePeriodChange(event)}
            ></TimePeriod>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="row">
              <div className="bordered">
                <LabeledTextBox
                  label="Ordinary Income"
                  onChange={(event) => this.handleOrdinaryIncomeChange(event)}
                ></LabeledTextBox>
                <LabeledTextBox
                  label="Short Term Capital Gains"
                  onChange={(event) =>
                    this.handleShortTermCapitalGainsChange(event)
                  }
                ></LabeledTextBox>
                <LabeledTextBox
                  label="Long Term Capital Gains"
                  onChange={(event) =>
                    this.handleLongTermCapitalGainsChange(event)
                  }
                ></LabeledTextBox>
                <DeductionType
                  onChange={(event) => this.handleDeductionTypeChange(event)}
                ></DeductionType>
                {this.state.deductionType === "itemized" && (
                  <LabeledTextBox
                    label="Itemized Deductions"
                    onChange={(event) =>
                      this.handleItemizedDeductionsChange(event)
                    }
                  ></LabeledTextBox>
                )}
                <LabeledTextBox
                  label="Tax Credits (Annual)"
                  onChange={(event) => this.handleTaxCreditsAnnualChange(event)}
                ></LabeledTextBox>
              </div>

              <div className="bordered">
                <LabeledSpan
                  label="Annualized Income"
                  value={this.state.annualizedIncome.toFixed(2)}
                ></LabeledSpan>
                <LabeledSpan
                  label="Obligation based on current year"
                  value={this.state.obligationBasedOnCurrentYear.toFixed(2)}
                ></LabeledSpan>
              </div>
            </div>

            <div className="row">
              <div className="bordered">
                <IncludePriorYearCalculation
                  checked={this.state.includePriorYearCalculation}
                  onChange={(event) =>
                    this.handleIncludePriorYearCalculation(event)
                  }
                ></IncludePriorYearCalculation>
                <LabeledTextBox
                  label="Prior Year AGI"
                  onChange={(event) => this.handlePriorYearAgiChange(event)}
                  disabled={!this.state.includePriorYearCalculation}
                ></LabeledTextBox>
                <LabeledTextBox
                  label="Prior Year Tax"
                  onChange={(event) => this.handlePriorYearTaxChange(event)}
                  disabled={!this.state.includePriorYearCalculation}
                ></LabeledTextBox>
              </div>

              <div className="bordered">
                <LabeledSpan
                  label="Obligation based on prior year"
                  value={this.state.obligationBasedOnPriorYear.toFixed(2)}
                ></LabeledSpan>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="bordered">
            <LabeledSpan
              label="Annualized Obligation"
              value={this._getAnnualizedObligation().toFixed(2)}
            ></LabeledSpan>

            <LabeledSpan
              label="Obligation in time period"
              value={this._calculateObligationDuringTimePeriod().toFixed(2)}
            ></LabeledSpan>

            <LabeledTextBox
              label="Withholdings"
              onChange={(event) => this.handleWithholdingsChange(event)}
            ></LabeledTextBox>

            <LabeledSpan
              label="Taxes Owed"
              value={this._calculateTaxesOwed().toFixed(2)}
            ></LabeledSpan>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
