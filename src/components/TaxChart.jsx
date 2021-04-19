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
    return {
      "Federal Income Tax": incomeTax,
      "Social Security": socialSecurityTax,
      Medicare: medicareTax,
      LTCG: longTermCapitalGainsTax,
      NIIT: netInvestmentIncomeTax,
      "State Income Tax": stateIncomeTax,
    };
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    const chart = new Chart(myChartRef, {
      options: {
        scales: {
          "y-axis": {
            type: "linear",
            position: "left",
            min: "0",
            max: "0.6",
            title: {
              display: true,
              text: "Tax Rate",
            },
            stacked: true,
          },
          "x-axis": {
            type: "linear",
            title: {
              display: true,
              text: "Income",
            },
            stacked: true,
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
    const stepSize = Math.max(1, Math.ceil(totalIncome / 100));
    const labels = Array.from(
      { length: Math.ceil(totalIncome / stepSize) },
      (v, x) => x * stepSize
    );

    const calculateTotalTax = (values) => values.reduce((x, y) => x + y, 0);
    const effectiveTaxRateData = labels.map(
      (x, i) =>
        calculateTotalTax(Object.values(this.calculateTax(x))) / labels[i]
    );
    const datasets = [];
    datasets.push({
      type: "line",
      label: "Effective Tax Rate",
      yAxisID: "y-axis",
      xAxisID: "x-axis",
      data: effectiveTaxRateData,
    });

    const colors = {
      "Federal Income Tax": "51, 153, 51",
      "Social Security": "100, 242, 175",
      Medicare: "255, 0, 102",
      LTCG: "0, 51, 153",
      NIIT: "0, 142, 175",
      "State Income Tax": "153, 51, 153",
    };
    let previousTaxes = undefined;
    for (const [i, label] of labels.entries()) {
      const currentTaxes = this.calculateTax(label);
      for (const [name, value] of Object.entries(currentTaxes)) {
        let datasetIndex = datasets.findIndex(
          (element) => element.label === name
        );
        if (datasetIndex === -1) {
          datasets.push({
            type: "bar",
            label: name,
            backgroundColor: `rgba(${colors[name]}, 0.5)`,
            borderColor: `rgba(${colors[name]}, 1)`,
            borderWidth: 1,
            yAxisID: "y-axis",
            xAxisID: "x-axis",
            data: [],
            stacked: true,
          });
          datasetIndex = datasets.length - 1;
        }

        datasets[datasetIndex].data[i] =
          value - (previousTaxes ? previousTaxes[name] : 0);
        datasets[datasetIndex].data[i] /= stepSize;
      }
      previousTaxes = currentTaxes;
    }
    this.state.chart.data.labels = labels;
    this.state.chart.data.datasets = datasets;
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
