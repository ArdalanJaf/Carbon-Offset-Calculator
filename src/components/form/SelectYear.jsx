import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import years from "../../config/years";

export default function Selectyear({ index, control, errors }) {
  // Converts config years array into react-select format and into string for form.
  const optionList = years.map((year) => {
    return { value: year.toString(), label: year.toString() };
  });

  return (
    <>
      <Controller
        name={`treePurchases.${index}.year`}
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
            aria-label="Select year for trees purchase entry"
            placeholder="Year"
            components={{
              // DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
          />
        )}
        rules={{ required: true }}
      />
      {errors.treePurchases?.[`${index}`]?.year && (
        <ErrorMessage type={errors.treePurchases[`${index}`].year.type} />
      )}
    </>
  );
}
