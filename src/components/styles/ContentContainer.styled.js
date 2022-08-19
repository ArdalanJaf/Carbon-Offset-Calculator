import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: rgba(239, 246, 247, 0.5);
  backdrop-filter: blur(3px);
  padding: 1em 0.5em;
  border-radius: 10px;

  @media (min-width: ${({ theme }) => theme.mobileLarge}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export default ContentContainer;
