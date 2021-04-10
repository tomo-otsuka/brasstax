import './App.css';
import React from 'react';

class FilingStatus extends React.Component {
  render() {
    return <div>
      <label for="filing-status">Filing Status: </label>
      <select id="filing-status" onChange={(event) => this.props.onChange(event)}>
        <option value="single">Single</option>
        <option value="married-jointly">Married Filing Jointly</option>
        <option value="married-separately">Married Filing Separately</option>
        <option value="head-of-household">Head of Household</option>
      </select>
    </div>
  }
}

class TimePeriod extends React.Component {
  render() {
    return <div>
      <label for="time-period">Time Period: </label>
      <select id="time-period" onChange={(event) => this.props.onChange(event)}>
        <option value="1">1/1 - 3/31</option>
        <option value="2">1/1 - 5/31</option>
        <option value="3">1/1 - 8/31</option>
        <option value="4">1/1 - 12/31</option>
      </select>
    </div>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filingStatus: "single",
      timePeriod: 1
    };
  }

  handleFilingStatusChange(event) {
    this.setState({ filingStatus: event.target.value });
  }

  handleTimePeriodChange(event) {
    this.setState({ timePeriod: event.target.value });
  }

  render() {
    return (
      <div className="App App-header">
        <FilingStatus onChange={(event) => this.handleFilingStatusChange(event)}></FilingStatus>
        <TimePeriod onChange={(event) => this.handleTimePeriodChange(event)}></TimePeriod>
      </div >
    )
  }
}

export default App;
