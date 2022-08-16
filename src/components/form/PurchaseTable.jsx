import React, { useEffect } from "react";
// Components
import SelectMonth from "./SelectMonth";
import SelectYear from "./SelectYear";
import InputTrees from "./InputTrees";
import DeleteIcon from "../icons/DeleteIcon";
import StyledPurchaseTable from "../styles/PurchaseTable.Styled";
import StyledDelButton from "../styles/DeleteButton.styled";
import StyledButton from "../styles/Button.styled";

export default function PurchaseTable({
  fields,
  control,
  errors,
  register,
  remove,
  append,
  watch,
  reset,
}) {
  function getTotalTrees(object) {
    let totalTrees = 0;
    object.map((purchase) => (totalTrees += Number(purchase.trees)));
    return totalTrees;
  }

  // useEffect(() => {
  //   console.log(fields[0].trees);
  // }, [watch(`treePurchases.0.trees`)]);

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
        <tr>
          {/* <td colSpan={2}></td> */}
          <td colSpan={2}>
            {" "}
            <StyledButton
              type="button"
              style={{ backgroundColor: "skyblue" }}
              onClick={() => {
                append({ month: "", year: "", trees: "" });
              }}
            >
              + Add Purchase
            </StyledButton>
          </td>
          {/* <td></td> */}
          {/* <td></td> */}
          <td colSpan={1}>
            <p>
              <span>Total:</span> {getTotalTrees(fields)}
            </p>
          </td>
          <td>
            <StyledDelButton
              type="button"
              style={fields.length < 2 ? { opacity: "0.2" } : { opacity: "1" }}
              disabled={fields.length < 2 ? true : false}
              onClick={() => {
                reset({
                  annualCO2Emissions: "",
                  treePurchases: [{ month: "", year: "", trees: "" }],
                });
              }}
            >
              <DeleteIcon />
              <span className="screen-reader">Reset table</span>
            </StyledDelButton>
          </td>
        </tr>
      </tbody>
    </StyledPurchaseTable>
  );
}
