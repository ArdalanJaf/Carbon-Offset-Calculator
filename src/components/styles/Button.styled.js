import styled from "styled-components";

const StyledButton = styled.button`
  background-color: grey;
  border-radius: 5px;
  padding: 0.4em 0.5em;
  /* padding-right: 1em; */
  border: none;
  color: #fff;
  font-weight: 500;
  height: fit-content;
  /* display: block; */
  /* text-align: center; */
  /* margin: auto; */
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

export default StyledButton;
