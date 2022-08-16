import styled from "styled-components";

const Container = styled.div`
  padding: 2em 0.5em 3em;
  width: fit-content;
  margin: auto;

  @media (min-width: ${({ theme }) => theme.mobileLarge}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export default Container;

// #61892F
// #86C232
// #222629
// #474B4F
// #6B6E70
