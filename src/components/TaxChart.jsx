import React from "react";

import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  Tooltip,
  Title,
} from "chart.js";
import {
  DeductionTypeEnum,
  FilingStatusEnum,
  JurisdictionEnum,
} from "../constants";
import {
  adjustIncomes,
  calculateDeduction,
  calculateIncomeTax,
  calculateLongTermCapitalGainsTax,
  calculateMedicareTax,
  calculateNetInvestmentIncomeTax,
  calculateSocialSecurityTax,
} from "../taxFunctions";
import { LabeledSelect, LabeledTextBox } from "./Components";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  Tooltip,
  Title
);

export class TaxChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filingStatus: FilingStatusEnum.SINGLE.name,
      ordinaryIncome: 0,
      shortTermCapitalGains: 0,
      longTermCapitalGains: 0,

      chart: null,
    };
  }

  handleStateChange(stateVar, value) {
    if (!(stateVar in this.state)) {
      alert(`incorrect state variable: ${stateVar}`);
      return;
    }
    this.setState({ [stateVar]: value });
  }

  chartRef = React.createRef();

  calculateTax(income) {
    const jurisdiction = JurisdictionEnum.FEDERAL.name;
    const filingStatus = this.state.filingStatus;
    const deductionType = DeductionTypeEnum.STANDARD.name;

    const ordinaryIncome = Math.min(income, this.state.ordinaryIncome);
    const shortTermCapitalGains = Math.max(
      0,
      Math.min(income - ordinaryIncome, this.state.shortTermCapitalGains)
    );
    const longTermCapitalGains = Math.max(
      0,
      Math.min(
        income - ordinaryIncome - shortTermCapitalGains,
        this.state.longTermCapitalGains
      )
    );

    const deduction = calculateDeduction(
      jurisdiction,
      filingStatus,
      deductionType,
      0
    );

    const taxableIncome = Math.max(0, ordinaryIncome - deduction);

    const incomeTax = calculateIncomeTax(
      jurisdiction,
      filingStatus,
      taxableIncome,
      shortTermCapitalGains,
      longTermCapitalGains
    );
    const socialSecurityTax = calculateSocialSecurityTax(ordinaryIncome);
    const medicareTax = calculateMedicareTax(filingStatus, ordinaryIncome);
    const longTermCapitalGainsTax = calculateLongTermCapitalGainsTax(
      jurisdiction,
      filingStatus,
      ordinaryIncome,
      shortTermCapitalGains,
      longTermCapitalGains
    );
    const netInvestmentIncomeTax = calculateNetInvestmentIncomeTax(
      filingStatus,
      ordinaryIncome,
      shortTermCapitalGains + longTermCapitalGains
    );

    const stateIncomeTax = calculateIncomeTax(
      JurisdictionEnum.CALIFORNIA.name,
      filingStatus,
      taxableIncome,
      shortTermCapitalGains,
      longTermCapitalGains
    );
    return (
      incomeTax +
      socialSecurityTax +
      medicareTax +
      longTermCapitalGainsTax +
      netInvestmentIncomeTax +
      stateIncomeTax
    );
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    const chart = new Chart(myChartRef, {
      data: {
        labels: [],
        datasets: [
          {
            type: "line",
            label: "Effective Tax Rate",
            yAxisID: "left-y-axis",
            xAxisID: "x-axis",
          },
          {
            type: "bar",
            label: "Marginal Tax",
            backgroundColor: "rgba(199, 242, 175)",
            yAxisID: "left-y-axis",
          },
        ],
      },
      options: {
        scales: {
          "left-y-axis": {
            type: "linear",
            position: "left",
            title: {
              display: true,
              text: "Tax Rate",
            },
          },
          "x-axis": {
            title: {
              display: true,
              text: "Income",
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Marginal and Effective Tax Rates",
          },
        },
      },
    });

    this.setState({ chart: chart });
  }

  componentDidUpdate() {
    const totalIncome =
      Number(this.state.ordinaryIncome) +
      Number(this.state.shortTermCapitalGains) +
      Number(this.state.longTermCapitalGains);
    const stepSize = Math.max(1, Math.round(totalIncome / 500));
    const labels = Array.from(
      { length: Math.ceil(totalIncome / stepSize) },
      (v, x) => x * stepSize
    );
    this.state.chart.data.labels = labels;
    const data = labels.map(
      (x, i, a) =>
        (this.calculateTax(x) - this.calculateTax(a[i - 1])) / stepSize
    );
    const effectiveTaxRateData = labels.map(
      (x, i) => this.calculateTax(x) / labels[i]
    );
    this.state.chart.data.datasets[0].data = effectiveTaxRateData;
    this.state.chart.data.datasets[1].data = data;
    this.state.chart.update("active");
  }

  render() {
    return (
      <div className="App App-header">
        <LabeledSelect
          onChange={(event) =>
            this.handleStateChange("filingStatus", event.target.value)
          }
          label="Filing Status"
          selectOptions={Object.values(FilingStatusEnum)}
        ></LabeledSelect>
        <LabeledTextBox
          label="Ordinary Income"
          onChange={(event) =>
            this.handleStateChange("ordinaryIncome", event.target.value)
          }
        ></LabeledTextBox>
        <LabeledTextBox
          label="Short Term Capital Gains"
          onChange={(event) =>
            this.handleStateChange("shortTermCapitalGains", event.target.value)
          }
        ></LabeledTextBox>
        <LabeledTextBox
          label="Long Term Capital Gains"
          onChange={(event) =>
            this.handleStateChange("longTermCapitalGains", event.target.value)
          }
        ></LabeledTextBox>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
