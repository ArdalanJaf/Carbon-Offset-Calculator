import styled from "styled-components";

const Background = styled.div`
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  max-width: 100vw;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export default Background;
