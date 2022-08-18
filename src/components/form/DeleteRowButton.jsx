import React from "react";
// Components
import TrashIcon from "../icons/TrashIcon.jsx";
import StyledDelButton from "../styles/DeleteButton.styled";

export default function DeleteRowButton({ fields, remove, index }) {
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
          if (fields.length > 1) remove(index);
        }}
      >
        <TrashIcon />
        <span className="screen-reader">Delete this purchase</span>
      </StyledDelButton>
    </>
  );
}
