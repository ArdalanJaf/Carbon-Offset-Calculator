import unixToMY from "../../utils/unixToMY";
import numeral from "numeral";
import React from "react";
import { useSelector } from "react-redux";

function GraphTooltip({ active, payload, label, type }) {
  const monthlyEmissions = useSelector(
    (state) => state.resultData.stats.monthlyEmissions
  );

  if (active) {
    let color = payload[0].color;
    return (
      <div
        className="tooltip"
        style={{
          backgroundColor: "rgb(0,0,0,0.4)",
          borderRadius: "10px",
          padding: ".1em 1em",
          boxShadow: "15px 30px 40px 5px rgba(0,0,0,0.5)",
          textAlign: "center",
          // fontWeight: "600",
          color: "#fff",
          // color: color,
        }}
      >
        <h4>{unixToMY(label, true, true)}</h4>
        {type === "offset" ? (
          <>
            <p style={{ color: "skyblue" }}>
              Offset:{" "}
              <span style={{ fontWeight: "600", color: "skyblue" }}>
                {payload[0].value} kgCO<sub>2</sub>{" "}
              </span>
            </p>
            <p>
              Emissions:{" "}
              <span style={{ fontWeight: "600", color: "red" }}>
                {monthlyEmissions} kgCO<sub>2</sub>{" "}
              </span>
            </p>
          </>
        ) : (
          <p style={{ color: color }}>
            Expenditure:{" "}
            <span style={{ fontWeight: "600", color: color }}>
              ${numeral(payload[0].value).format("0,000,000.00")}
            </span>
          </p>
        )}

        {/* <p>{JSON.stringify(payload, null, 2)}</p> */}
      </div>
    );
  }
}

export default GraphTooltip;
