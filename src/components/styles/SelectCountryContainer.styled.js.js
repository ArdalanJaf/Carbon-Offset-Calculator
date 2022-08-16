import styled from "styled-components";

const SelectCountryContainer = styled.div`
  margin-bottom: 1.5em;
  /* display: flex;
  justify-content: space-evenly; */
  transition: all 0.1s ease-in-out;

  & > * {
    /* width: 48%; */
    width: 100%;
    max-width: 20em;
    margin: auto;
    transition: all 0.1s ease-in-out;
    &:last-of-type {
      margin-top: 1em;
    }
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    justify-content: space-evenly;
    & > * {
      width: 48%;
      max-width: 48%;
      margin: 0;
      &:last-of-type {
        margin-top: 0;
      }
    }
  }
`;

export default SelectCountryContainer;
