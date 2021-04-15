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
} from "chart.js";
import {
  DeductionTypeEnum,
  FilingStatusEnum,
  JurisdictionEnum,
} from "../constants";
import {
  calculateDeduction,
  calculateIncomeTax,
  calculateMedicareTax,
  calculateSocialSecurityTax,
} from "../taxFunctions";
import { LabeledSelect } from "../Components";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarController,
  BarElement
);

export class TaxChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filingStatus: FilingStatusEnum.SINGLE.name,

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

    const deduction = calculateDeduction(
      jurisdiction,
      filingStatus,
      deductionType,
      0
    );

    const taxableIncome = Math.max(0, income - deduction);

    const incomeTax = calculateIncomeTax(
      jurisdiction,
      filingStatus,
      taxableIncome,
      0,
      0
    );
    const socialSecurityTax = calculateSocialSecurityTax(income);
    const medicareTax = calculateMedicareTax(filingStatus, income);

    const stateIncomeTax = calculateIncomeTax(
      JurisdictionEnum.CALIFORNIA.name,
      filingStatus,
      taxableIncome,
      0,
      0
    );
    return incomeTax + socialSecurityTax + medicareTax + stateIncomeTax;
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    const labels = Array.from({ length: 1000 }, (v, x) => x * 1000);

    const chart = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            spanGaps: true,
            showLine: false,
            pointRadius: 1,
          },
        ],
      },
      options: {},
    });

    this.setState({ chart: chart });
  }

  componentDidUpdate() {
    const labels = this.state.chart.data.labels;
    const data = labels.map(
      (x, i, a) => (this.calculateTax(x) - this.calculateTax(a[i - 1])) / 1000
    );
    this.state.chart.data.datasets[0].data = data;
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
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
