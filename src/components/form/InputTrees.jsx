import React from "react";
import ErrorMessage from "./ErrorMessage";
import StyledInput from "../styles/Input.Styled";

export default function InputNoOfTrees(props) {
  const { index, register, errors } = props;

  return (
    <>
      <StyledInput
        {...register(`treePurchases.${index}.trees`, {
          required: true,
          pattern: /^[0-9]*$/,
          maxLength: 2,
        })}
        size="2"
        placeholder="Trees"
        aria-label="Input number of new trees."
      />
      {errors.treePurchases?.[`${index}`]?.trees && (
        <ErrorMessage type={errors.treePurchases[`${index}`].trees.type} />
      )}
    </>
  );
}
