import React from "react";
import StyledInput from "./styles/Input.Styled";
import numeral from "numeral";

function ConfigField({ label, currentValue, dollars, co2, years, inputFn }) {
  return (
    <label>
      {label}
      <span>
        {dollars && <span>${numeral(currentValue).format("0.00")}</span>}
        {co2 && (
          <span>
            {currentValue} mtCO<sub>2</sub>
          </span>
        )}
        {years && <span>{currentValue} years</span>}
      </span>
      <StyledInput
        onChange={inputFn}
        // value={value}
        type="number"
        placeholder="Enter new value... "
      ></StyledInput>
    </label>
  );
}

export default ConfigField;
