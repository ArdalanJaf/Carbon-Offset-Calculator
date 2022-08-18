import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
// Components
import SelectCountry from "./SelectCountry";
import PurchaseTable from "./PurchaseTable";
import StyledFormField from "../styles/FormField.styled";
import StyledSubmit from "../styles/Submit.styled";
import ContentContainer from "../styles/ContentContainer.styled";
// import Save from "../Save";
// Other
import sendFormData from "../../utils/sendFormData";
import sortTP from "../../utils/sortTP";
import { setResultData } from "../../app/resultDataSlice";

export default function Form() {
  const dispatch = useDispatch();
  // const [stateSave, setStateSave] = useState();

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
      annualCO2Emissions: undefined,
      treePurchases: [{ month: "", year: "", trees: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "treePurchases",
  });

  const onSubmit = async (data) => {
    data.treePurchases.sort(sortTP);

    // setStateSave(data);
    const resultData = await sendFormData(data);
    if (resultData !== undefined) dispatch(setResultData(resultData));
  };

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

        <StyledSubmit type="submit" />

        {/* <Save reset={reset} stateSave={stateSave} setStateSave={setStateSave} /> */}
      </form>
    </ContentContainer>
  );
}
