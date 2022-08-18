import styled from "styled-components";

const StyledConfigButton = styled.div`
  position: absolute;
  left: 0.5em;
  top: 0.5em;
  height: 50px;
  width: 50px;
  z-index: 99;

  svg {
    stroke: #888;

    transition: all 0.1s ease-out;
    cursor: pointer;
  }
  &:hover svg {
    /* stroke: #888; */
    /* transform: scale(1.1); */
    transform: scale(1.2) rotate(-110deg);
  }
  &:active svg {
    transform: scale(1);
  }

  .isOpen svg {
    transform: scale(1.2) rotate(-110deg);
    /* stroke: #888; */
    cursor: none;
  }
`;

export default StyledConfigButton;
