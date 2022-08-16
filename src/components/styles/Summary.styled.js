import styled from "styled-components";

const StyledSummary = styled.div`
  width: 100%;
  height: 100%;

  ul {
    padding-inline-start: 0;
    margin-block-end: 0;
    margin-block-end: 0;
  }

  li {
    list-style: none;
    color: grey;
    &:not(li:last-of-type) p {
      margin-bottom: 1em;
    }

    p {
      /* color: #fff; */
      background-color: #fff;
      padding: 0.5em;
      border-radius: 10px;
      line-height: 1.8em;
      margin: 0;

      span {
        font-weight: 700;
      }
    }
  }
`;

export default StyledSummary;
