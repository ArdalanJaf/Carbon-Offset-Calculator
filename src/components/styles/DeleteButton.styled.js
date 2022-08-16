import styled from "styled-components";

const StyledDelButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  height: 38px;
  width: 38px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  svg {
    padding: 5px;
    opacity: 0.6;
    &:hover {
      transform: scale(0.9);
      opacity: 0.3;
    }
  }
`;

export default StyledDelButton;
