import React from "react";
import countriesCO2 from "../config/countriesCO2";
import Select from "react-select";
import { Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

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
            // defaultInputValue to allow user to load previous form from API or local storage.
            defaultInputValue={
              field.value &&
              optionList.find((c) => c.value === field.value).label
            }
            onChange={(val) => field.onChange(val.value)}
            placeholder="Select country..."
            aria-label="Select your country to set your average annual CO2 emmisions "
          />
        )}
        rules={{ required: true }}
      />
      {errors.annualCO2Emissions && (
        <ErrorMessage type={errors.annualCO2Emissions.type} />
      )}
    </>
  );
}
