import React from "react";
import { months } from "../config/months";
import Select from "react-select";
import { Controller } from "react-hook-form";

export default function SelectMonth(props) {
  const { index, control, errors } = props;

  const optionList = months.map((month, index) => {
    return { value: index.toString(), label: month };
  });

  return (
    <>
      <Controller
        name={`treePurchases.${index}.month`}
        control={control}
        render={({ value, field }) => (
          <Select
            aria-label="Select month for trees purchase entry"
            options={optionList}
            defaultInputValue={
              field.value &&
              optionList.find((c) => c.value === field.value).label
            }
            placeholder="select month"
            //   value={monthsList.find((c) => c.value === value)}
            onChange={(val) => field.onChange(val.value)}
          />
        )}
        rules={{ required: true }}
      />
      {errors.treePurchases?.[`${index}`]?.month && (
        <p>{errors.treePurchases[`${index}`].month.type}</p>
      )}
    </>
  );
}
