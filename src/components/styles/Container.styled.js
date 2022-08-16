import styled from "styled-components";

const Container = styled.div`
  padding: 2em 1em 3em;
  width: fit-content;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* Container-wrap: wrap; */
  }
`;

export default Container;

// #61892F
// #86C232
// #222629
// #474B4F
// #6B6E70
