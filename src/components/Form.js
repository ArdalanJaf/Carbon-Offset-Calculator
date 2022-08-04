import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import countriesCO2 from "../config/countriesCO2";
import Select from "react-select";

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
      <Controller
        name="annualCO2Emissions"
        control={control}
        render={({ value, field }) => (
          <Select
            options={countList}
            // defaultInputValue={
            //   field.value &&
            //   countList.find((c) => c.value === field.value).label
            // }
            onChange={(val) => field.onChange(val.value)}
            placeholder="select country"
            aria-label="Select your country to set your average annual CO2 emmisions "
          />
        )}
        rules={{ required: true }}
      />
      {errors.annualCO2Emissions && <p>{errors.annualCO2Emissions.type}</p>}

      <input type="submit" />
    </form>
  );
}
