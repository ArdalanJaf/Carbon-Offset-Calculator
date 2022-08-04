import React from "react";
import years from "../config/years";
import Select from "react-select";
import { Controller } from "react-hook-form";

export default function Selectyear(props) {
  const { index, control, errors } = props;

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
            //   value={yearsList.find((c) => c.value === value)}
            onChange={(val) => field.onChange(val.value)}
            aria-label="Select year for trees purchase entry"
            placeholder="select year"
          />
        )}
        rules={{ required: true }}
      />
      {errors.treePurchases?.[`${index}`]?.year && (
        <p>{errors.treePurchases[`${index}`].year.type}</p>
      )}
    </>
  );
}
