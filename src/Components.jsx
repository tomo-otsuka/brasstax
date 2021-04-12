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
  return (
    <div>
      <label>{props.label + ": "}</label>
      <input
        type="text"
        onChange={props.onChange}
        disabled={props.disabled}
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
