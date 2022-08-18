import React from "react";
import StyledButton from "../styles/Button.styled";

export default function AddPurchaseButton({ append }) {
  return (
    <>
      <StyledButton
        type="button"
        style={{ backgroundColor: "rgb(220 194 130)" }}
        onClick={() => {
          append({ month: "", year: "", trees: "" });
        }}
      >
        + Add Purchase
      </StyledButton>
    </>
  );
}
