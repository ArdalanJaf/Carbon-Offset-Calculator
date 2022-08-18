import unixToMY from "../../utils/unixToMY";
import numeral from "numeral";
import React from "react";
import { useSelector } from "react-redux";
import StyledGraphTooltip from "../styles/GraphTooltip.Styled";

function GraphTooltip({ active, payload, label, type }) {
  const monthlyEmissions = useSelector(
    (state) => state.resultData.stats.monthlyEmissions
  );

  if (active) {
    return (
      <StyledGraphTooltip className="tooltip">
        <h4>{unixToMY(label, true, true)}</h4>
        {type === "offset" ? (
          <>
            <p>
              Offset:{" "}
              <span style={{ color: "#4188a4" }}>
                {payload[0].value} kgCO<sub>2</sub>{" "}
              </span>
            </p>
            <p>
              Emissions:{" "}
              <span style={{ color: "#c62c31" }}>
                {monthlyEmissions} kgCO<sub>2</sub>{" "}
              </span>
            </p>
          </>
        ) : (
          <p>
            Cost:{" "}
            <span style={{ color: "#b88802" }}>
              ${numeral(payload[0].value).format("0,000,000.00")}
            </span>
          </p>
        )}
      </StyledGraphTooltip>
    );
  }
}

export default GraphTooltip;
