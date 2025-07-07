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

export function LabeledTextBox(props) {
  const onInput = (event) => {
    let targetValue = event.target.value;
    if (targetValue.match(/[^\d.-]/)) {
      targetValue = targetValue.replace(/[^\d.-]/g, "");
    }
    props.onInput(targetValue);
  };

  return (
    <div>
      <label>{props.label + ": "}</label>
      <input
        type="text"
        onInput={onInput}
        disabled={props.disabled}
        value={props.value}
      ></input>
    </div>
  );
}

export function LabeledSpan(props) {
  return (
    <div>
      <label>{props.label + ": "}</label>
      <span>{props.value}</span>
    </div>
  );
}
