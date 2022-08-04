import React from "react";
import countriesCO2 from "../config/countriesCO2";
import Select from "react-select";
import { Controller } from "react-hook-form";

export default function SelectCountry(props) {
  const { control, errors } = props;

  // Converts array of country-based average CO2 consumption into react-select format.
  const optionList = countriesCO2.map((country) => {
    return {
      value: country.annualCO2EmissionsPerCapita.toString(),
      label: country.name,
    };
  });

  return (
    <>
      <Controller
        name="annualCO2Emissions"
        control={control}
        render={({ value, field }) => (
          <Select
            options={optionList}
            // LOAD DATA FROM LOCAL STORAGE IF USER SAVED BEFORE?
            defaultInputValue={
              field.value &&
              optionList.find((c) => c.value === field.value).label
            }
            onChange={(val) => field.onChange(val.value)}
            placeholder="select country"
            aria-label="Select your country to set your average annual CO2 emmisions "
          />
        )}
        rules={{ required: true }}
      />
      {errors.annualCO2Emissions && <p>{errors.annualCO2Emissions.type}</p>}
    </>
  );
}
