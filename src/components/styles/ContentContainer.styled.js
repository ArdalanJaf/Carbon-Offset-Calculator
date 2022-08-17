import styled from "styled-components";

const ContentContainer = styled.div`
  /* border: solid 2px #fff; */
  background-color: rgba(239, 246, 247, 0.5);
  /* backdrop-filter: ; */
  backdrop-filter: opacity(0.5), blur(100px);
  padding: 1em 0.5em;
  border-radius: 10px;
  /* box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); */
  /* transition: width 0.1s ease-in-out; */

  @media (min-width: ${({ theme }) => theme.mobileLarge}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export default ContentContainer;
