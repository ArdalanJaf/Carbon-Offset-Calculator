import React from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";
import unixToMY from "../../utils/unixToMY";
import StyledSummary from "../styles/Summary.styled";
import ContentContainer from "../styles/ContentContainer.styled";

function Summary() {
  const stats = useSelector((state) => state.resultData.stats);
  const {
    trees,
    cost,
    totalYears,
    carbonNeutralDate,
    finalMonthlyOffset,
    monthlyEmissions,
  } = stats;
  console.log(finalMonthlyOffset, monthlyEmissions);
  return (
    <ContentContainer>
      <StyledSummary>
        <h2>SUMMARY</h2>
        <ul>
          <li>
            <p>
              {carbonNeutralDate ? (
                <>
                  You will achieve carbon neutrality in{" "}
                  <span>{unixToMY(carbonNeutralDate, true, true)}</span> with{" "}
                  <span>{trees} trees</span> planted. Your monthly maintenance
                  cost at this point will be{" "}
                  <span>${numeral(cost.upkeep).format("0,000,000.00")}</span>.
                </>
              ) : (
                <>
                  You have not planted enough trees to achieve carbon
                  neutrality, offsetting{" "}
                  <span>
                    {((finalMonthlyOffset / monthlyEmissions) * 100).toFixed(2)}
                    %{" "}
                  </span>{" "}
                  of your CO<sub>2</sub> emissions.
                </>
              )}{" "}
            </p>
          </li>
          {/* <li>
            <p>
              Your monthly maintenance cost at this point will be{" "}
              <span>${numeral(cost.upkeep).format("0,000,000.00")}</span>.
            </p>
          </li> */}
          <li>
            <p>
              Your total expenditure over roughly {totalYears} years is{" "}
              <span>${numeral(cost.grandTotal).format("0,000,000.00")}</span>.
              This comprises{" "}
              <span>${numeral(cost.initial).format("0,000,000.00")}</span> in
              purchase costs and{" "}
              <span>${numeral(cost.totalUpkeep).format("0,000,000.00")}</span>{" "}
              in maintenance fees.
            </p>
          </li>
        </ul>
      </StyledSummary>
    </ContentContainer>
  );
}

export default Summary;
