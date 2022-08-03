import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Purchase from "./Purchase";

export default function Purchases() {
  const { treePurchases } = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  return (
    <table>
      <tbody>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Month & Year</th>
          <th scope="col">Number of Trees</th>
          <th scope="col"></th>
        </tr>

        {treePurchases.map((purchase, index) => {
          return <Purchase key={index} index={index}></Purchase>;
        })}
      </tbody>
    </table>
  );
}
