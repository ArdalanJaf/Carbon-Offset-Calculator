import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import countriesCO2 from "../config/countriesCO2";
import Select from "react-select";
import SelectCountry from "./SelectCountry";

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      annualCO2Emissions: "",
      treePurchases: [{ month: "", year: "", trees: "" }], // array item = { date: 0, trees: 0 }
    },
  });

  const onSubmit = (data) => console.log(data);

  const countList = countriesCO2.map((country) => {
    return {
      value: country.annualCO2EmissionsPerCapita,
      label: country.name,
    };
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectCountry control={control} errors={errors} />

      <input type="submit" />
    </form>
  );
}
