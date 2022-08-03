import SelectMonth from "./SelectMonth";
import React, { useState } from "react";

export default function Purchase(state) {
  const [treePurchaseConstruct, setTreePurchaseConstruct] = useState({
    month: null,
    year: null,
    trees: 0,
  });

  const { index } = state;

  return (
    <tr>
      <td> {index + 1} </td>
      <td>
        <SelectMonth
          index={index}
          setTreePurchaseConstruct={setTreePurchaseConstruct}
        />
      </td>
      <td></td>
      <td>
        {" "}
        <button></button>
      </td>
    </tr>
  );
}