import React, { useState } from "react";
import StyledInput from "./styles/Input.Styled";
import numeral from "numeral";

function ConfigField({ label, currentValue, dollars, co2, years, inputFn }) {
  const configData = {
    initial_cost: "11",
    upkeep_cost: "11",
    annual_offset: "2111", //kg
    years_to_grow: "11", //years
  };

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
        type="number"
        placeholder="Enter new value if you wish to change."
      ></StyledInput>
    </label>
  );
}

export default ConfigField;
