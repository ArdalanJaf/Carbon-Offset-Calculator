import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import countriesCO2 from "../config/countriesCO2";
import Select from "react-select";
import SelectCountry from "./SelectCountry";
import SelectMonth from "./SelectMonth";

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      annualCO2Emissions: "",
      treePurchases: [{ month: "", year: "", trees: "" }],
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
          Append
        </button>
      </ul>

      <input type="submit" />
    </form>
  );
}
