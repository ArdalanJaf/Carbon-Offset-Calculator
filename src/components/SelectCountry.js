import React from "react";
import { useDispatch, useSelector } from "react-redux";
import countriesCO2 from "../config/countriesCO2";
import { setAnnualCO2Emissions } from "../app/formDataSlice";
import Select from "react-select";

export default function SelectCountry() {
  const { annualCO2Consumption } = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  // Converts array of country-based average CO2 consumption into react-select format.
  const optionList = countriesCO2.map((country) => {
    return { value: country.annualCO2EmissionsPerCapita, label: country.name };
  });

  // Select handler function (required for react-select)
  function handleSelect(option) {
    dispatch(setAnnualCO2Emissions(option.value));
  }

  return (
    <>
      <Select
        // defaultInputValue="" <-- pull from local storage option?
        options={optionList}
        placeholder="select country"
        onChange={handleSelect}
        aria-label="Select your country to set your average annual CO2 emmisions "
      />
      <p>{annualCO2Consumption} (metric tons)</p>
    </>
  );

  // return (
  //   <label>
  //     Country:
  //     <select
  //       id="country"
  //       value={annualCO2Consumpt}
  //       // onChange={(e) => dispatch(setAnnualCO2Emissions(e.target.value))}
  //       onChange={(e) => setAnnualCO2Consumpt(e.target.value)}
  //     >
  //       {countriesCO2.map((country, index) => {
  //         return (
  //           <option key={index} value={country.personAnualConsumption}>
  //             {country.name}
  //           </option>
  //         );
  //       })}
  //     </select>
  //     <p>{annualCO2Consumpt} metric tons</p>
  //   </label>
  // );
}
