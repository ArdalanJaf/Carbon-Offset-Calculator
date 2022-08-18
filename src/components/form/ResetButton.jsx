import React from "react";
import DeleteIcon from "../icons/DeleteIcon";
import StyledDelButton from "../styles/DeleteButton.styled";

export default function ResetButton({ reset, fields }) {
  return (
    <>
      <StyledDelButton
        type="button"
        style={
          fields.length < 2
            ? { opacity: "0.2", curser: "normal" }
            : { opacity: "1", cursor: "pointer" }
        }
        disabled={fields.length < 2 ? true : false}
        onClick={() => {
          reset({
            annualCO2Emissions: undefined,
            treePurchases: [{ month: "", year: "", trees: "" }],
          });
        }}
      >
        <DeleteIcon />
        <span className="screen-reader">Reset table</span>
      </StyledDelButton>
    </>
  );
}
