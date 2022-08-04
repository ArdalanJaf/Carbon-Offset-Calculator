import React from "react";
import { years } from "../config/years";
import Select from "react-select";
import { Controller } from "react-hook-form";

export default function Selectyear(props) {
  const { index, control, errors } = props;

  const optionList = years.map((year) => {
    return { value: year, label: year.toString() };
  });

  return (
    <>
      <Controller
        name={`treePurchases.${index}.year`}
        control={control}
        render={({ value, field }) => (
          <Select
            aria-label="Select year for trees purchase entry"
            options={optionList}
            defaultInputValue={
              field.value &&
              optionList.find((c) => c.value === field.value).label
            }
            placeholder="select year"
            //   value={yearsList.find((c) => c.value === value)}
            onChange={(val) => field.onChange(val.value)}
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
