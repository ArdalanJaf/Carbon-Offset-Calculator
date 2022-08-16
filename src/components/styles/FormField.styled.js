import styled from "styled-components";

const StyledFormField = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 1em;
  padding-top: 0.5em;
  margin-bottom: 1em;
  /* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2); */

  & > div {
    display: flex;
    justify-content: space-between;
    button:last-of-type {
      margin-right: 2.6em;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* Container-wrap: wrap; */
  }
`;

export default StyledFormField;
