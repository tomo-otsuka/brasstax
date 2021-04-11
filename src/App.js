import "./App.css";
import React from "react";
import { FilingStatusEnum, TimePeriodEnum } from "./constants.js";
import { calculateTax, getStandardDeduction } from "./taxFunctions.js";

class LabeledSelect extends React.Component {
  render() {
    const selectOptions = this.props.selectOptions.map((selectOption) => (
      <option value={selectOption.name}>{selectOption.readable}</option>
    ));

    return (
      <div>
        <label>{this.props.label}: </label>
        <select onChange={(event) => this.props.onChange(event)}>
          {selectOptions}
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
      filingStatus: FilingStatusEnum.SINGLE.name,
      timePeriod: TimePeriodEnum.FIRST.name,

      ordinaryIncome: 0,
      shortTermCapitalGains: 0,
      longTermCapitalGains: 0,
      deductionType: "standard",
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

  _calculateObligationBasedOnCurrentYear() {
    const multiplier = [4, 2.4, 1.5, 1][this.state.timePeriod];
    const ordinaryIncome = multiplier * this.state.ordinaryIncome;
    const shortTermCapitalGains = multiplier * this.state.shortTermCapitalGains;
    const longTermCapitalGains = multiplier * this.state.longTermCapitalGains;

    return (
      0.9 *
      calculateTax(
        this.state.filingStatus,
        ordinaryIncome,
        shortTermCapitalGains,
        longTermCapitalGains,
        this.state.deductionType,
        multiplier * this.state.itemizedDeductions,
        this.state.taxCreditsAnnual
      )
    );
  }

  _calculateObligationDuringTimePeriod() {
    const rate = [0.25, 0.5, 0.75, 1][this.state.timePeriod];
    const obligation = this._getAnnualizedObligation();
    return obligation * rate;
  }

  _calculateTaxesOwed() {
    return this._calculateObligationDuringTimePeriod() - this.state.withholding;
  }

  _getAnnualizedObligation() {
    let obligations = [this._calculateObligationBasedOnCurrentYear()];
    if (this.state.includePriorYearCalculation) {
      obligations.push(this._calculateObligationBasedOnPriorYear());
    }
    return Math.min(...obligations);
  }

  render() {
    return (
      <div className="App App-header">
        <div className="row">
          <div className="bordered">
            <LabeledSelect
              onChange={(event) =>
                this.handleStateChange("filingStatus", event.target.value)
              }
              label="Filing Status"
              selectOptions={Object.values(FilingStatusEnum)}
            ></LabeledSelect>
            <LabeledSelect
              onChange={(event) =>
                this.handleStateChange("timePeriod", event.target.value)
              }
              label="Time Period"
              selectOptions={Object.values(TimePeriodEnum)}
            ></LabeledSelect>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="row">
              <div className="bordered">
                <LabeledTextBox
                  label="Ordinary Income"
                  onChange={(event) =>
                    this.handleStateChange("ordinaryIncome", event.target.value)
                  }
                ></LabeledTextBox>
                <LabeledTextBox
                  label="Short Term Capital Gains"
                  onChange={(event) =>
                    this.handleStateChange(
                      "shortTermCapitalGains",
                      event.target.value
                    )
                  }
                ></LabeledTextBox>
                <LabeledTextBox
                  label="Long Term Capital Gains"
                  onChange={(event) =>
                    this.handleStateChange(
                      "longTermCapitalGains",
                      event.target.value
                    )
                  }
                ></LabeledTextBox>
                <DeductionType
                  onChange={(event) =>
                    this.handleStateChange("deductionType", event.target.value)
                  }
                ></DeductionType>
                {this.state.deductionType === "itemized" && (
                  <LabeledTextBox
                    label="Itemized Deductions"
                    onChange={(event) =>
                      this.handleStateChange(
                        "itemizedDeductions",
                        event.target.value
                      )
                    }
                  ></LabeledTextBox>
                )}
                <LabeledTextBox
                  label="Tax Credits (Annual)"
                  onChange={(event) =>
                    this.handleStateChange(
                      "taxCreditsAnnual",
                      event.target.value
                    )
                  }
                ></LabeledTextBox>
              </div>

              <div className="bordered">
                <LabeledSpan
                  label="Annualized Income"
                  value={this._calculateAnnualizedIncome().toFixed(2)}
                ></LabeledSpan>
                <LabeledSpan
                  label="Obligation based on current year"
                  value={this._calculateObligationBasedOnCurrentYear().toFixed(
                    2
                  )}
                ></LabeledSpan>
              </div>
            </div>

            <div className="row">
              <div className="bordered">
                <IncludePriorYearCalculation
                  checked={this.state.includePriorYearCalculation}
                  onChange={(event) =>
                    this.handleStateChange(
                      "includePriorYearCalculation",
                      event.target.checked
                    )
                  }
                ></IncludePriorYearCalculation>
                <LabeledTextBox
                  label="Prior Year AGI"
                  onChange={(event) =>
                    this.handleStateChange("priorYearAgi", event.target.value)
                  }
                  disabled={!this.state.includePriorYearCalculation}
                ></LabeledTextBox>
                <LabeledTextBox
                  label="Prior Year Tax"
                  onChange={(event) =>
                    this.handleStateChange("priorYearTax", event.target.value)
                  }
                  disabled={!this.state.includePriorYearCalculation}
                ></LabeledTextBox>
              </div>

              <div className="bordered">
                <LabeledSpan
                  label="Obligation based on prior year"
                  value={this._calculateObligationBasedOnPriorYear().toFixed(2)}
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
              label="Withholding"
              onChange={(event) =>
                this.handleStateChange("withholding", event.target.value)
              }
            ></LabeledTextBox>

            <LabeledSpan
              label="Taxes Owed"
              value={this._calculateTaxesOwed().toFixed(2)}
            ></LabeledSpan>
          </div>
        </div>
        <span className="footer">
          This is not financial advice. <br></br>
          This tool is meant to estimate the estimated payments, and is provided
          without any guarantees. <br></br>
          The author is not a CPA nor did any CPA review this. Please use at
          your own risk. <br></br>
          If you would like to inspect the calculations or make any
          contributions, please review the source code{" "}
          <a href="https://github.com/tomo-otsuka/brasstax">here</a>.
        </span>
      </div>
    );
  }
}

export default App;
