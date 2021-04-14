import React from "react";

export function LabeledSelect(props) {
  const selectOptions = props.selectOptions.map((selectOption) => (
    <option value={selectOption.name}>{selectOption.readable}</option>
  ));

  return (
    <div>
      <label>{props.label}: </label>
      <select onChange={props.onChange}>{selectOptions}</select>
    </div>
  );
}

export function LabeledCheckbox(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      ></input>
      <label>{props.label}</label>
    </div>
  );
}

export class LabeledTextBox extends React.Component {
  state = { value: "" };

  onChange = (event) => {
    const value = event.target.value;
    if (value.match(/[^\d\.\-]/)) {
      this.setState({ value: value.replace(/[^\d\.\-]/g, "") });
      return;
    }
    this.setState({ value: value });
    this.props.onChange(event);
  };

  render() {
    return (
      <div>
        <label>{this.props.label + ": "}</label>
        <input
          type="text"
          onChange={this.onChange}
          disabled={this.props.disabled}
          value={this.state.value}
        ></input>
      </div>
    );
  }
}

export function LabeledSpan(props) {
  return (
    <div>
      <label>{props.label + ": "}</label>
      <span>{props.value}</span>
    </div>
  );
}
