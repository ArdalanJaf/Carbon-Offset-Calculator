import React from "react";
import StyledHeader from "./styles/Header.styled";
import TreeIcon from "./icons/TreeIcon";

function Header() {
  return (
    <StyledHeader>
      {/* <div> */}
      <TreeIcon />
      <h1>CARBON OFFSET SIMULATOR</h1>
      {/* </div> */}
      {/* <p>How long and how much to achieve carbon neutrality? </p> */}
      {/* <p>
            Simply select your annual CO<sub>2</sub> production and add tree
            planting purchases in the table below.
          </p> */}
    </StyledHeader>
  );
}

export default Header;
