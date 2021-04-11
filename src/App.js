import "./App.css";
import React from "react";

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

class OrdinaryIncome extends React.Component {
  render() {
    return (
      <div>
        <label for="ordinary-income">Ordinary Income: </label>
        <input
          type="text"
          onChange={(event) => this.props.onChange(event)}
        ></input>
      </div>
    );
  }
}

class ShortTermCapitalGains extends React.Component {
  render() {
    return (
      <div>
        <label for="short-term-capital-gains">Short Term Capital Gains: </label>
        <input
          type="text"
          onChange={(event) => this.props.onChange(event)}
        ></input>
      </div>
    );
  }
}

class LongTermCapitalGains extends React.Component {
  render() {
    return (
      <div>
        <label for="long-term-capital-gains">Long Term Capital Gains: </label>
        <input
          type="text"
          onChange={(event) => this.props.onChange(event)}
        ></input>
      </div>
    );
  }
}

class Withholdings extends React.Component {
  render() {
    return (
      <div>
        <label for="withholdings">Withholdings: </label>
        <input
          type="text"
          onChange={(event) => this.props.onChange(event)}
        ></input>
      </div>
    );
  }
}

class PriorYearAgi extends React.Component {
  render() {
    return (
      <div>
        <label for="prior-year-agi">Prior Year AGI: </label>
        <input
          type="text"
          onChange={(event) => this.props.onChange(event)}
        ></input>
      </div>
    );
  }
}

class PriorYearTax extends React.Component {
  render() {
    return (
      <div>
        <label for="prior-year-tax">Prior Year Tax: </label>
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
        this._calculateTax(
          ordinaryIncome,
          shortTermCapitalGains,
          longTermCapitalGains
        ),
    });
    return;
  }

  _calculateTax(ordinaryIncome, shortTermCapitalGains, longTermCapitalGains) {
    let totalTax = this._calculateIncomeTax(
      ordinaryIncome,
      shortTermCapitalGains
    );
    totalTax += this._calculateLongTermCapitalGainsTax(
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains
    );
    totalTax += this._calculateSocialSecurityTax(ordinaryIncome);
    totalTax += this._calculateMedicareTax(ordinaryIncome);
    totalTax += this._calculateNetInvestmentIncomeTax(
      ordinaryIncome,
      shortTermCapitalGains + longTermCapitalGains
    );

    return totalTax;
  }

  _calculateIncomeTax(ordinaryIncome, shortTermCapitalGains) {
    const taxBrackets = {
      single: [
        { bracketStart: 518400, rate: 0.37, cumulative: 156235 },
        { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
        { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
        { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
        { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
        { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
        { bracketStart: 0, rate: 0.1, cumulative: 0 },
      ],
      "married-filing-jointly": [
        { bracketStart: 622050, rate: 0.37, cumulative: 167307.5 },
        { bracketStart: 414700, rate: 0.35, cumulative: 94735 },
        { bracketStart: 326600, rate: 0.32, cumulative: 66543 },
        { bracketStart: 171050, rate: 0.24, cumulative: 29211 },
        { bracketStart: 80250, rate: 0.22, cumulative: 9235 },
        { bracketStart: 19750, rate: 0.12, cumulative: 1975 },
        { bracketStart: 0, rate: 0.1, cumulative: 0 },
      ],
      "married-filing-separately": [
        { bracketStart: 311025, rate: 0.37, cumulative: 83653.75 },
        { bracketStart: 207350, rate: 0.35, cumulative: 47367.5 },
        { bracketStart: 163300, rate: 0.32, cumulative: 33271.5 },
        { bracketStart: 85525, rate: 0.24, cumulative: 14605.5 },
        { bracketStart: 40125, rate: 0.22, cumulative: 4617.5 },
        { bracketStart: 9875, rate: 0.12, cumulative: 987.5 },
        { bracketStart: 0, rate: 0.1, cumulative: 0 },
      ],
      "head-of-household": [
        { bracketStart: 518400, rate: 0.37, cumulative: 154793.5 },
        { bracketStart: 207350, rate: 0.35, cumulative: 45926 },
        { bracketStart: 163300, rate: 0.32, cumulative: 31830 },
        { bracketStart: 85500, rate: 0.24, cumulative: 13158 },
        { bracketStart: 53700, rate: 0.22, cumulative: 6162 },
        { bracketStart: 14100, rate: 0.12, cumulative: 1410 },
        { bracketStart: 0, rate: 0.1, cumulative: 0 },
      ],
    };

    const brackets = taxBrackets[this.state.filingStatus];
    const applicableIncome = ordinaryIncome + shortTermCapitalGains;

    let totalTax = 0;
    for (const bracket of brackets) {
      if (applicableIncome < bracket.bracketStart) {
        continue;
      }
      totalTax += bracket.cumulative;
      totalTax += (applicableIncome - bracket.bracketStart) * bracket.rate;
      break;
    }

    return totalTax;
  }

  _calculateLongTermCapitalGainsTax(
    ordinaryIncome,
    shortTermCapitalGains,
    longTermCapitalGains
  ) {
    const taxBracketsForFilingStatus = {
      single: [
        { bracketEnd: 40400, rate: 0 },
        { bracketEnd: 445850, rate: 0.15 },
        { bracketEnd: Infinity, rate: 0.2 },
      ],
      "married-filing-jointly": [
        { bracketEnd: 80800, rate: 0 },
        { bracketEnd: 501600, rate: 0.15 },
        { bracketEnd: Infinity, rate: 0.2 },
      ],
      "married-filing-separately": [
        { bracketEnd: 40400, rate: 0 },
        { bracketEnd: 250800, rate: 0.15 },
        { bracketEnd: Infinity, rate: 0.2 },
      ],
      "head-of-household": [
        { bracketEnd: 54100, rate: 0 },
        { bracketEnd: 473750, rate: 0.15 },
        { bracketEnd: Infinity, rate: 0.2 },
      ],
    };
    const taxBrackets = taxBracketsForFilingStatus[this.state.filingStatus];
    let accountedIncome = ordinaryIncome + shortTermCapitalGains;
    let longTermCapitalGainsTax = 0;
    let unaccountedLongTermCapitalGains = longTermCapitalGains;
    for (const taxBracket of taxBrackets) {
      if (taxBracket.bracketEnd < ordinaryIncome + shortTermCapitalGains) {
        continue;
      }

      const gainsInBracket = Math.min(
        unaccountedLongTermCapitalGains,
        taxBracket.bracketEnd - accountedIncome
      );

      longTermCapitalGainsTax += gainsInBracket * taxBracket.rate;
      unaccountedLongTermCapitalGains -= gainsInBracket;
      accountedIncome += gainsInBracket;
    }
    return longTermCapitalGainsTax;
  }

  _calculateSocialSecurityTax(ordinaryIncome) {
    const applicableIncome = Math.min(ordinaryIncome, 142800);
    return applicableIncome * 0.062;
  }

  _calculateMedicareTax(ordinaryIncome) {
    const additionalTaxThreshold =
      this.state.filingStatus === "married-jointly" ? 250000 : 200000;
    const additionalTaxApplicableIncome = Math.max(
      0,
      ordinaryIncome - additionalTaxThreshold
    );
    const additionalTax = additionalTaxApplicableIncome * 0.009;
    return ordinaryIncome * 0.0145 + additionalTax;
  }

  _calculateNetInvestmentIncomeTax(ordinaryIncome, capitalGains) {
    const thresholds = {
      single: 200000,
      "married-filing-jointly": 250000,
      "married-filing-separately": 125000,
      "head-of-household": 200000,
    };
    const threshold = thresholds[this.state.filingStatus];
    const applicableIncome = Math.max(
      0,
      Math.min(ordinaryIncome + capitalGains - threshold, capitalGains)
    );
    return applicableIncome * 0.038;
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
        <OrdinaryIncome
          onChange={(event) => this.handleOrdinaryIncomeChange(event)}
        ></OrdinaryIncome>
        <ShortTermCapitalGains
          onChange={(event) => this.handleShortTermCapitalGainsChange(event)}
        ></ShortTermCapitalGains>
        <LongTermCapitalGains
          onChange={(event) => this.handleLongTermCapitalGainsChange(event)}
        ></LongTermCapitalGains>

        <LabeledSpan
          label="Annualized Income"
          value={this.state.annualizedIncome}
        ></LabeledSpan>
        <LabeledSpan
          label="Obligation based on current year"
          value={this.state.obligationBasedOnCurrentYear}
        ></LabeledSpan>

        <PriorYearAgi
          onChange={(event) => this.handlePriorYearAgiChange(event)}
        ></PriorYearAgi>
        <PriorYearTax
          onChange={(event) => this.handlePriorYearTaxChange(event)}
        ></PriorYearTax>

        <LabeledSpan
          label="Obligation based on prior year"
          value={this.state.obligationBasedOnPriorYear}
        ></LabeledSpan>

        <LabeledSpan
          label="Obligation"
          value={Math.min(
            this.state.obligationBasedOnPriorYear,
            this.state.obligationBasedOnCurrentYear
          )}
        ></LabeledSpan>

        <LabeledSpan
          label="Obligation in time period"
          value={this._calculateObligationDuringTimePeriod()}
        ></LabeledSpan>

        <Withholdings
          onChange={(event) => this.handleWithholdingsChange(event)}
        ></Withholdings>
      </div>
    );
  }
}

export default App;
