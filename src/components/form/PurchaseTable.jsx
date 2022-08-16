import React from "react";
// Components
import SelectMonth from "./SelectMonth";
import SelectYear from "./SelectYear";
import InputTrees from "./InputTrees";
import DeleteIcon from "../icons/DeleteIcon";
import StyledPurchaseTable from "../styles/PurchaseTable.Styled";
import StyledDelButton from "../styles/DeleteButton.styled";

export default function PurchaseTable({
  fields,
  control,
  errors,
  register,
  remove,
  append,
}) {
  return (
    <StyledPurchaseTable>
      <thead>
        <tr>
          {/* <th>
            <span>#</span>
          </th> */}
          <th>
            <span>Month</span>
          </th>
          <th>
            <span> Year</span>
          </th>
          <th>
            <span> Trees</span>
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {fields.map((field, index) => (
          <tr key={field.id}>
            {/* <td>
              <span>{index + 1}</span>
            </td> */}
            <SelectMonth index={index} control={control} errors={errors} />
            <SelectYear index={index} control={control} errors={errors} />
            <InputTrees index={index} errors={errors} register={register} />

            <td>
              <StyledDelButton
                type="button"
                style={
                  fields.length < 2 ? { opacity: "0.2" } : { opacity: "1" }
                }
                disabled={fields.length < 2 ? true : false}
                onClick={() => {
                  if (fields.length > 1) remove(index);
                  console.log(fields);
                }}
              >
                <DeleteIcon />
              </StyledDelButton>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledPurchaseTable>
  );
}
