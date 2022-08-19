import styled from "styled-components";

const Container = styled.div`
  padding: 2em 0.5em 6em;
  /* width: fit-content; */
  margin: auto;
  max-width: 1400px;
  min-height: 100vh;
  position: relative;

  @media (min-width: ${({ theme }) => theme.mobileLarge}) {
    padding-left: 1em;
    padding-right: 1em;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding-left: 2em;
    padding-right: 2em;
  }
`;

export default Container;

// #61892F
// #86C232
// #222629
// #474B4F
// #6B6E70
