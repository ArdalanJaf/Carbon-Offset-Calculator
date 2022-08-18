import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import ErrorMessage from "./ErrorMessage";
import { months } from "../../config/months";

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
            options={optionList}
            // defaultInputValue to allow user to load previous form from API or local storage.
            defaultInputValue={
              field.value &&
              optionList.find((c) => c.value === field.value).label
            }
            onChange={(val) => field.onChange(val.value)}
            placeholder="Month"
            aria-label="Select month for trees purchase entry"
            components={{
              // DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
          />
        )}
        rules={{ required: true }}
      />
      {errors.treePurchases?.[`${index}`]?.month && (
        <ErrorMessage type={errors.treePurchases[`${index}`].month.type} />
      )}
    </>
  );
}
