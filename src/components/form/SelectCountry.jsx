import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import countriesCO2 from "../../config/countriesCO2";
import ErrorMessage from "./ErrorMessage";
import StyledInput from "../styles/Input.Styled";
import SelectCountryContainer from "../styles/SelectCountryContainer.styled.js";

export default function SelectCountry(props) {
  const { control, errors, watchAnnualC02Field, setValue } = props;
  const [customActive, setCustomActive] = useState(false);
  const optionListInit = countriesCO2.map((country) => {
    // Ternary checks if form has custom CO2 emissions from saved local storage, updating optionList's custom value if so.
    return {
      value:
        country.name === "Custom" && // For Custom
        watchAnnualC02Field !== undefined && // if form value is not empty (i.e. blank form) and does not match existing values
        countriesCO2.find(
          (c) => c.annualCO2PerCapita.toString() === watchAnnualC02Field
        ) === undefined
          ? watchAnnualC02Field // set custom value to that
          : country.annualCO2PerCapita.toString(), // otherwise use default ("")
      label: country.name,
    };
  });
  const [optionList, setOptionList] = useState(optionListInit);

  useEffect(() => {
    // Activates custom input, on de-activation resets custom value to ""
    if (
      // if the form value is custom, turn on custom input
      watchAnnualC02Field !== undefined &&
      optionList.find((c) => c.value === watchAnnualC02Field).label === "Custom"
    ) {
      setCustomActive(true);
    } else {
      // if the form value is Not custom, turn off custom input, and reset custom value to ""
      setCustomActive(false);
      let OLCopy = optionList;
      OLCopy[OLCopy.length - 1].value = "";
      setOptionList(OLCopy);
    }
  }, [watchAnnualC02Field, optionList]);

  return (
    <SelectCountryContainer>
      <div>
        <Controller
          name="annualCO2Emissions"
          control={control}
          render={({ value, field }) => (
            <Select
              options={optionList}
              // defaultInputValue to allow user to load previous from from API or local storage.
              defaultInputValue={
                field.value === undefined
                  ? ""
                  : optionList.find((c) => c.value === field.value).label
              }
              onChange={(val) => field.onChange(val.value)}
              placeholder="Select country or custom"
              aria-label="Select your country to set your average annual CO2 emmisions "
            />
          )}
          rules={{
            required: true,
            maxLength: 6,
            pattern: /^[0-9]*[.]?[0-9]*$/,
          }}
        />
        {!customActive && errors.annualCO2Emissions && (
          <ErrorMessage type={errors.annualCO2Emissions.type} />
        )}
      </div>
      {customActive && (
        <div>
          <StyledInput
            defaultValue={watchAnnualC02Field}
            onChange={(e) => {
              // if (watchAnnualC02Field == "" && customActive) {
              setValue("annualCO2Emissions", e.target.value);
              let OLCopy = optionList;
              OLCopy[OLCopy.length - 1].value = e.target.value;
              setOptionList(OLCopy);
            }}
            // }
          />
          {errors.annualCO2Emissions && (
            <ErrorMessage type={errors.annualCO2Emissions.type} />
          )}
        </div>
      )}
    </SelectCountryContainer>
  );
}
