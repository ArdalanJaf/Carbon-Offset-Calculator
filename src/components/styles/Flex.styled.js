import styled from "styled-components";

const Flex = styled.div`
  /* display: flex; */
  /* max-width: 1600px; */
  margin: auto;
  justify-content: center;

  .flexedContainer {
    width: 100%;
    max-width: 700px;
    flex: 1;
    &:first-of-type {
      /* margin-right: 2em; */
    }
    &:last-of-type {
      /* margin-left: 2em; */
    }
    & > div,
    & > form {
      margin-bottom: 2em;
    }
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    display: flex;
  }
`;

export default Flex;
