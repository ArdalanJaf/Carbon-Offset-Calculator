import styled from "styled-components";

const ContentContainer = styled.div`
  /* border: solid 2px #fff; */
  background-color: #eff6f7;
  padding: 1em 0.5em;
  border-radius: 10px;
  /* box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); */
  transition: all 0.1s ease-in-out;

  @media (min-width: ${({ theme }) => theme.mobileLarge}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export default ContentContainer;