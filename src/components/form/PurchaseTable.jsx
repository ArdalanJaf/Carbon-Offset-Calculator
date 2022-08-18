import React from "react";
// Components
import SelectMonth from "./SelectMonth";
import SelectYear from "./SelectYear";
import InputTrees from "./InputTrees";
import DeleteRowButton from "./DeleteRowButton";
import AddPurchaseButton from "./AddPurchaseButton";
import StyledPurchaseTable from "../styles/PurchaseTable.Styled";
import ResetButton from "./ResetButton";

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
              <td>
                <SelectMonth index={index} control={control} errors={errors} />
              </td>
              <td>
                <SelectYear index={index} control={control} errors={errors} />
              </td>
              <td>
                <InputTrees index={index} errors={errors} register={register} />
              </td>
              <td>
                <DeleteRowButton
                  fields={fields}
                  remove={remove}
                  index={index}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>
              <AddPurchaseButton append={append} />
            </td>
            <td>
              <p>
                <span>Total:</span> {getTotalTrees(fields)}
              </p>
            </td>
            <td>
              <ResetButton reset={reset} fields={fields} />
            </td>
          </tr>
        </tbody>
      </StyledPurchaseTable>
    </>
  );
}
