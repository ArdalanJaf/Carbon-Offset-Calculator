import styled from "styled-components";

const ContentContainer = styled.div`
  /* border: solid 2px #fff; */
  background-color: #eff6f7;
  padding: 1em;
  border-radius: 10px;
  /* box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); */

  h2 {
    font-weight: 400;
    color: grey;
    /* color: #000; */
    font-size: 1.8em;
    margin: 1em 0 0.5em;
    margin-top: 0;
    text-align: center;
  }

  /* @media (max-width: ${({ theme }) => theme.mobile}) {
  } */
`;

export default ContentContainer;
