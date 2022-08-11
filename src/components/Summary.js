import React from "react";
import { useSelector } from "react-redux";

function Summary() {
  const stats = useSelector((state) => state.resultData.stats);

  return (
    <div>
      <h2>Summary</h2>

      <p>{stats.annualOffset}</p>
    </div>
  );
}

export default Summary;
