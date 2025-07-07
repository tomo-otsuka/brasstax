import React from "react";
import { TextField, Select, MenuItem, Checkbox, FormControlLabel, InputLabel, FormControl } from "@mui/material";

export function LabeledSelect(props) {
  const selectOptions = props.selectOptions.map((selectOption) => (
    <MenuItem value={selectOption.name}>{selectOption.readable}</MenuItem>
  ));

  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select label={props.label} onChange={props.onChange}>{selectOptions}</Select>
    </FormControl>
  );
}

export function LabeledCheckbox(props) {
  return (
    <FormControlLabel control={<Checkbox checked={props.checked} onChange={props.onChange} />} label={props.label} />
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
    <TextField
      label={props.label}
      onInput={onInput}
      disabled={props.disabled}
      value={props.value}
      fullWidth
    />
  );
}

export function LabeledSpan(props) {
  return (
    <div>
      <p>{props.label}: {props.value}</p>
    </div>
  );
}
