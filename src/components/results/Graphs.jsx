import React from "react";
import ExpenditureGraph from "./ExpenditureGraph";
import OffsetGraph from "./OffsetGraph";
import ContentContainer from "../styles/ContentContainer.styled";

function Graphs() {
  return (
    <>
      <ContentContainer>
        <h2>CARBON OFFSETS</h2>
        <OffsetGraph />
      </ContentContainer>
      <ContentContainer>
        <h2>CUMULATIVE EXPENDITURE</h2>
        <ExpenditureGraph />
      </ContentContainer>
    </>
  );
}

export default Graphs;
