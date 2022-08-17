import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .flexedContainer {
    max-width: 700px;

    & > * {
      margin-bottom: 1em;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
    .flexedContainer {
      flex: 1 1 0px;

      &:first-of-type {
        margin-right: 1em;
      }
      &:last-of-type {
        margin-left: 1em;
      }
    }
  }
`;

export default Flex;
