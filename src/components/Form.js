import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import SelectCountry from "./SelectCountry";
import SelectMonth from "./SelectMonth";
import SelectYear from "./SelectYear";
import InputNoOfTrees from "./InputNoOfTrees";

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      annualCO2Emissions: "5.55",
      treePurchases: [{ month: "1", year: "2040", trees: "10" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "treePurchases",
  });

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectCountry control={control} errors={errors} />

      <ul>
        {fields.map((field, index) => (
          <li key={field.id}>
            <span>{index + 1}</span>
            <SelectMonth index={index} control={control} errors={errors} />
            <SelectYear index={index} control={control} errors={errors} />
            <InputNoOfTrees index={index} errors={errors} register={register} />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
        <button
          type="button"
          onClick={() => {
            append();
          }}
        >
          Add
        </button>
      </ul>
      <button
        type="button"
        onClick={() => {
          reset({
            annualCO2Emissions: "",
            treePurchases: [{ month: "1", year: "2030", trees: "1" }],
          });
        }}
      >
        Clear
      </button>
      <input type="submit" />
    </form>
  );
}
