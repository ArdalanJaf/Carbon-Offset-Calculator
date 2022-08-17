import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
// Components
import SelectCountry from "./SelectCountry";
import StyledForm from "./styles/Form.Styled";
import StyledButton from "./styles/Button.styled";
import StyledFormField from "./styles/FormField.styled";
import PurchaseTable from "./PurchaseTable";

// Other
import SendFormData from "../utils/sendFormData";
import sortTP from "../utils/sortTP";
import defaultConfig from "../config/defaultCalcConfig";
import { useDispatch } from "react-redux";
import { setResultData } from "../app/resultDataSlice";

export default function Form() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      annualCO2Emissions: "5.55",
      treePurchases: [
        { month: "8", year: "2022", trees: "19" },
        { month: "4", year: "2023", trees: "25" },
        { month: "8", year: "2024", trees: "30" },
        { month: "11", year: "2025", trees: "30" },
        { month: "2", year: "2026", trees: "35" },
        { month: "11", year: "2026", trees: "30" },
        { month: "4", year: "2027", trees: "29" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "treePurchases",
  });

  const onSubmit = async (data) => {
    console.log("submit");
    data.treePurchases.sort(sortTP);
    data.config = defaultConfig;
    const resultData = await SendFormData(data);
    // console.log(resultData);
    dispatch(setResultData(resultData));
  };

  console.log("re-rendered");

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <SelectCountry
        key={fields[0].id}
        control={control}
        errors={errors}
        watchAnnualC02Field={watch("annualCO2Emissions")}
        setValue={setValue}
      />
      <h2>Tree Purchases</h2>

      <StyledFormField>
        <PurchaseTable
          fields={fields}
          control={control}
          errors={errors}
          register={register}
          remove={remove}
          append={append}
        />

        <StyledButton
          type="button"
          onClick={() => {
            append({ month: "", year: "", trees: "" });
          }}
        >
          + Add Purchase
        </StyledButton>

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
      </StyledFormField>

      <input type="submit" />
    </StyledForm>
  );
}
