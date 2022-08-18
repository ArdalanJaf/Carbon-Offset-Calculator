import styled from "styled-components";

const StyledInput = styled.input`
  height: 38px;
  border: solid rgba(0, 0, 0, 0.2) 1px;
  border-radius: 4px;
  text-indent: 6px;
  font-size: 1em;
  min-width: 3.7em;
  width: 100%;
  /* padding: 1em; */
  /* display: block; */
  &:active,
  &:focus-visible,
  &:focus,
  &:focus-within,
  &:visited {
    outline-color: rgb(38, 132, 255);
    background-color: #fff;
  }
`;

export default StyledInput;
