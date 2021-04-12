import React from "react";

export class LabeledSelect extends React.Component {
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

export class LabeledCheckbox extends React.Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={(event) => this.props.onChange(event)}
        ></input>
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export class LabeledTextBox extends React.Component {
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

export class LabeledSpan extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label + ": "}</label>
        <span>{this.props.value}</span>
      </div>
    );
  }
}
