import React from "react";
// Components
import SelectMonth from "./SelectMonth";
import SelectYear from "./SelectYear";
import InputTrees from "./InputTrees";
import DeleteIcon from "../icons/DeleteIcon";
import StyledPurchaseTable from "../styles/PurchaseTable.Styled";
import StyledDelButton from "../styles/DeleteButton.styled";
import StyledButton from "../styles/Button.styled";
import TrashIcon from "../icons/TrashIcon.jsx";

export default function PurchaseTable(props) {
  const { fields, control, errors, register, remove, append, reset } = props;

  function getTotalTrees(object) {
    let totalTrees = 0;
    object.map((purchase) => (totalTrees += Number(purchase.trees)));
    return totalTrees;
  }

  return (
    <>
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
              </td>
            </tr>
          ))}
          <tr>
            {/* <td colSpan={2}></td> */}
            <td colSpan={2}>
              {" "}
              <StyledButton
                type="button"
                style={{ backgroundColor: "rgb(218 186 108)" }}
                onClick={() => {
                  append({ month: "", year: "", trees: "" });
                }}
              >
                + Add Purchase
              </StyledButton>
            </td>
            <td colSpan={1}>
              <p>
                <span>Total:</span> {getTotalTrees(fields)}
              </p>
            </td>
            <td>
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
            </td>
          </tr>
        </tbody>
      </StyledPurchaseTable>
      {/* <StyledButton
        type="button"
        style={{ backgroundColor: "#87ceeb" }}
        onClick={() => {
          console.log("Save");
        }}
      >
        Save
      </StyledButton> */}
    </>
  );
}
