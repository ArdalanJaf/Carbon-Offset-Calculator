import styled from "styled-components";

export const FlexMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
  }
`;

export const FlexChild = styled.div`
  max-width: 600px;
  & > * {
    margin-bottom: 1em;
  }

  &:first-of-type {
    order: 2;
  }
  &:last-of-type {
    order: 1;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    max-width: 700px;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex: 1 1 0px;

    &:first-of-type {
      margin-right: 1em;
      order: 1;
    }
    &:last-of-type {
      margin-left: 1em;
      order: 2;
    }
  }
`;
