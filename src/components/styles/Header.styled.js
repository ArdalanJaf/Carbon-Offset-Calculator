import styled from "styled-components";

const StyledHeader = styled.div`
  margin-bottom: 4em;
  margin-left: 0.5em;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  svg {
    /* height: 80px; */
    /* width: auto; */
    /* filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.95)); */
    margin-right: 1em;
    > * {
      stroke: white;
      fill: cadetblue;
      /* fill: #6fcf97; */
    }
  }

  h1 {
    font-size: 3em;
    font-weight: 300;
    margin: 0;
    padding: 0;
    color: #fff;
    /* filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.95)); */

    /* width: 56%; */
  }

  p {
    text-align: center;
    font-style: italic;
    font-weight: 600;
    color: #6fcf97;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* Container-wrap: wrap; */
  }
`;

export default StyledHeader;
