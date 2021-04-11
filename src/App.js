import "./App.css";
import React from "react";
import { calculateTax } from "./taxFunctions.js";

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

class LabeledTextBox extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label + ": "}</label>
        <input
          type="text"
          onChange={(event) => this.props.onChange(event)}
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
      annualizedIncome: 0,
      obligationBasedOnCurrentYear: 0,

      withholdings: 0,

      priorYearAgi: 0,
      priorYearTax: 0,
      obligationBasedOnPriorYear: 0,
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

  handleWithholdingsChange(event) {
    this.setState({ withholdings: event.target.value });
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
        ordinaryIncome + shortTermCapitalGains + longTermCapitalGains,
    });
    this.setState({
      obligationBasedOnCurrentYear:
        0.9 *
        calculateTax(
          this.state.filingStatus,
          ordinaryIncome,
          shortTermCapitalGains,
          longTermCapitalGains
        ),
    });
    return;
  }

  _calculateObligationDuringTimePeriod() {
    const rate = [0.25, 0.5, 0.75, 1][this.state.timePeriod];
    const obligation = Math.min(
      this.state.obligationBasedOnPriorYear,
      this.state.obligationBasedOnCurrentYear
    );
    return obligation * rate;
  }

  render() {
    return (
      <div className="App App-header">
        <FilingStatus
          onChange={(event) => this.handleFilingStatusChange(event)}
        ></FilingStatus>
        <TimePeriod
          onChange={(event) => this.handleTimePeriodChange(event)}
        ></TimePeriod>
        <LabeledTextBox
          label="Ordinary Income"
          onChange={(event) => this.handleOrdinaryIncomeChange(event)}
        ></LabeledTextBox>
        <LabeledTextBox
          label="Short Term Capital Gains"
          onChange={(event) => this.handleShortTermCapitalGainsChange(event)}
        ></LabeledTextBox>
        <LabeledTextBox
          label="Long Term Capital Gains"
          onChange={(event) => this.handleLongTermCapitalGainsChange(event)}
        ></LabeledTextBox>

        <LabeledSpan
          label="Annualized Income"
          value={this.state.annualizedIncome}
        ></LabeledSpan>
        <LabeledSpan
          label="Obligation based on current year"
          value={this.state.obligationBasedOnCurrentYear}
        ></LabeledSpan>

        <LabeledTextBox
          label="Prior Year AGI"
          onChange={(event) => this.handlePriorYearAgiChange(event)}
        ></LabeledTextBox>
        <LabeledTextBox
          label="Prior Year Tax"
          onChange={(event) => this.handlePriorYearTaxChange(event)}
        ></LabeledTextBox>

        <LabeledSpan
          label="Obligation based on prior year"
          value={this.state.obligationBasedOnPriorYear}
        ></LabeledSpan>

        <LabeledSpan
          label="Annualized Obligation"
          value={Math.min(
            this.state.obligationBasedOnPriorYear,
            this.state.obligationBasedOnCurrentYear
          )}
        ></LabeledSpan>

        <LabeledSpan
          label="Obligation in time period"
          value={this._calculateObligationDuringTimePeriod()}
        ></LabeledSpan>

        <LabeledTextBox
          label="Withholdings"
          onChange={(event) => this.handleWithholdingsChange(event)}
        ></LabeledTextBox>
      </div>
    );
  }
}

export default App;
