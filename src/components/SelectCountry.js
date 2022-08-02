import React, { useEffect } from "react";
import countriesCO2 from "../config/countriesCO2";
import { useDispatch, useSelector } from "react-redux";
import { setAnnualCO2Consumption } from "../app/formDataSlice";

export default function SelectCountry() {
  const { annualCO2Consumption } = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  return (
    <label>
      Country:
      <select
        id="country"
        value={annualCO2Consumption}
        onChange={(e) => dispatch(setAnnualCO2Consumption(e.target.value))}
      >
        {countriesCO2.map((country, index) => {
          return (
            <option key={index} value={country.personAnualConsumption}>
              {country.name}
            </option>
          );
        })}
      </select>
      <p>{annualCO2Consumption} metric tons</p>
    </label>
  );
}
