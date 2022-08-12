import React from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";
import unixToMY from "../utils/unixToMY";

function Summary() {
  const stats = useSelector((state) => state.resultData.stats);
  const { trees, cost, totalYears, carbonNeutralDate } = stats;
  return (
    <div>
      <h2>Summary</h2>
      <ul>
        <li>
          <p>
            You will achieve carbon neutrality in{" "}
            <spam>{unixToMY(stats.carbonNeutralDate, true, true)}</spam> with{" "}
            <spam>{trees} trees</spam> planted. Your monthly maintenances cost
            at that point is{" "}
            <spam>${numeral(cost.upkeep).format("0,000,000.00")}</spam>.
          </p>
        </li>
        <li>
          <p>
            Your total expenditure over roughly {totalYears} years is{" "}
            <spam>${numeral(cost.grandTotal).format("0,000,000.00")}</spam>.
            This comprises{" "}
            <spam>${numeral(cost.initial).format("0,000,000.00")}</spam> in
            purchase costs and{" "}
            <spam>${numeral(cost.totalUpkeep).format("0,000,000.00")}</spam> in
            maintenance fees.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Summary;
