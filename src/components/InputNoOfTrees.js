import React from "react";
import ErrorMessage from "./ErrorMessage";

export default function InputNoOfTrees(props) {
  const { index, register, errors } = props;

  // NEED TO MAKE PATTERN ONLY ACCEPT MAX NUMBER (default 55)
  return (
    <>
      <input
        {...register(`treePurchases.${index}.trees`, {
          required: true,
          pattern: /^[0-9]*$/,
          maxLength: 10,
        })}
        placeholder="number of trees"
      />
      {errors.treePurchases?.[`${index}`]?.trees && (
        <ErrorMessage type={errors.treePurchases[`${index}`].trees.type} />
      )}
    </>
  );
}

//styles

// height: 33px;
// border: solid rgba(0, 0, 0, .2) 1px;
// border-radius: 3px;
// text-indent: 10px;
