import styled from "styled-components";

const StyledFormField = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 0.5em 0.5em 0;
  margin-bottom: 1em;
  /* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2); */
  transition: all 0.1s ease-in-out;

  @media (min-width: ${({ theme }) => theme.mobileLarge}) {
    padding-left: 1em;
    padding-right: 1em;
  }
  /*
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding-left: 1em;
    padding-right: 1em;
  } */
`;

export default StyledFormField;
