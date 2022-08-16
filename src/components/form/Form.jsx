import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
// Components
import SelectCountry from "./SelectCountry";
import PurchaseTable from "./PurchaseTable";
import StyledFormField from "../styles/FormField.styled";
import StyledButton from "../styles/Button.styled";
import StyledSubmit from "../styles/Submit.styled";
import ContentContainer from "../styles/ContentContainer.styled";
import StyledFlexButtons from "../styles/FlexButtons.styled";
// Other
import SendFormData from "../../utils/SendFormData";
import sortTP from "../../utils/sortTP";
import defaultConfig from "../../config/defaultCalcConfig";
import { setResultData } from "../../app/resultDataSlice";

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
    <ContentContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>ANNUAL EMISSIONS</h2>

        <SelectCountry
          key={fields[0].id}
          control={control}
          errors={errors}
          watchAnnualC02Field={watch("annualCO2Emissions")}
          setValue={setValue}
        />

        <h2>TREE PURCHASES</h2>

        <StyledFormField>
          <PurchaseTable
            fields={fields}
            control={control}
            errors={errors}
            register={register}
            remove={remove}
            append={append}
            watch={watch}
            reset={reset}
          />
        </StyledFormField>
        {/* <StyledFlexButtons> */}
        {/* <StyledButton
            type="button"
            style={{ backgroundColor: "skyblue" }}
            onClick={() => {
              console.log("Save");
            }}
          >
            Save
          </StyledButton> */}
        <StyledSubmit type="submit" />
        {/* </StyledFlexButtons> */}
      </form>
    </ContentContainer>
  );
}
