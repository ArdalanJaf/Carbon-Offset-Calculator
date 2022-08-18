import styled from "styled-components";

const StyledSaves = styled.div`
  display: flex;
  /* flex-direction: column; */
  position: absolute;
  left: 3.5em;
  top: 1em;

  svg {
    width: 35px;
    height: 35px;
    /* opacity: 0.8; */
    &:active {
      transform: scale(0.8);
    }
  }

  div:last-of-type svg {
    width: 36px;
    height: 36px;
  }
  /* height: 50px;
  width: 50px; */
`;

export default StyledSaves;
