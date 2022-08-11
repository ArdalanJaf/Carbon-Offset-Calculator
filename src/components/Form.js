import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
// Components
import SelectCountry from "./SelectCountry";
import SelectMonth from "./SelectMonth";
import SelectYear from "./SelectYear";
import InputNoOfTrees from "./InputNoOfTrees";
// Other
import SendFormData from "../utils/SendData";
import sortTP from "../utils/sortTP";
import defaultConfig from "../config/defaultCalcConfig";
import { useDispatch } from "react-redux";
import { setResultData } from "../app/resultDataSlice";

export default function App() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      annualCO2Emissions: "5.55",
      treePurchases: [
        { month: "8", year: "2023", trees: "19" },
        { month: "4", year: "2024", trees: "25" },
        { month: "11", year: "2024", trees: "30" },
        { month: "0", year: "2025", trees: "28" },
        { month: "2", year: "2026", trees: "35" },
        { month: "4", year: "2027", trees: "29" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "treePurchases",
  });

  const onSubmit = async (data) => {
    data.treePurchases.sort(sortTP);
    data.config = defaultConfig;
    const results = await SendFormData(data);
    dispatch(setResultData(results));
  };

  console.log("re-rendered");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectCountry key={fields[0].id} control={control} errors={errors} />
      <ul>
        {fields.map((field, index) => (
          <li key={field.id}>
            <span>{index + 1}</span>
            <SelectMonth index={index} control={control} errors={errors} />
            <SelectYear index={index} control={control} errors={errors} />
            <InputNoOfTrees index={index} errors={errors} register={register} />

            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => {
                  remove(index);
                }}
              >
                Delete
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            type="button"
            onClick={() => {
              append();
            }}
          >
            Add
          </button>
        </li>
      </ul>

      <button
        type="button"
        onClick={() => {
          reset({
            annualCO2Emissions: "",
            treePurchases: [{ month: "", year: "", trees: "" }],
          });
        }}
      >
        Clear
      </button>

      <input type="submit" />
    </form>
  );
}
