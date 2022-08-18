import React from "react";
import Config from "./Config";
import CogIcon from "./icons/CogIcon";
import StyledConfigButton from "./styles/ConfigButton.Styled";
import useComponentVisible from "./useComponentVisible";

function ConfigButton() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <>
      <StyledConfigButton>
        <div
          onClick={() => setIsComponentVisible(!isComponentVisible)}
          className={isComponentVisible ? "isOpen" : ""}
        >
          <CogIcon />
        </div>
        <div ref={ref}>{isComponentVisible && <Config />}</div>
      </StyledConfigButton>
    </>
  );
}

export default ConfigButton;

// code taken from:
// https://stackoverflow.com/questions/54560790/detect-click-outside-react-component-using-hooks
