import React from "react";
import StyledHeader from "./styles/Header.styled";
import TreeIcon from "./icons/TreeIcon";

function Header() {
  return (
    <StyledHeader>
      <TreeIcon />
      <h1>CARBON OFFSET SIMULATOR</h1>
    </StyledHeader>
  );
}

export default Header;
