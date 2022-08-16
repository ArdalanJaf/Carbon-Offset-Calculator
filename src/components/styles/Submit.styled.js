import styled from "styled-components";

const StyledSubmit = styled.input`
  background-color: skyblue;
  border-radius: 5px;
  padding: 0.4em 1em;
  font-size: 1.5em;
  font-weight: 500;
  border: none;
  color: #fff;
  display: block;
  /* text-align: center; */
  margin: auto;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

export default StyledSubmit;
