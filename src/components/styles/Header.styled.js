import styled from "styled-components";

const StyledHeader = styled.div`
  margin-bottom: 3em;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.1s ease-in-out;

  svg {
    height: 5em;
    width: 3.5em;
    margin-bottom: 0.5em;
    transition: all 0.1s ease-in-out;
  }

  h1 {
    font-size: 1.4em;
    font-weight: 500;
    margin: 0;
    padding: 0;
    color: #fff;
    transition: all 0.1s ease-in-out;

    /* filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.95)); */
  }

  p {
    text-align: center;
    font-style: italic;
    font-weight: 600;
    color: #6fcf97;
  }
  @media (min-width: ${({ theme }) => theme.mobileLarge}) {
    h1 {
      font-size: 1.7em;
      font-weight: 500;
    }
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    h1 {
      font-size: 2em;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    h1 {
      font-size: 2em;
    }
  }
`;

export default StyledHeader;
