import styled from "styled-components";
import sky700 from "../../images/sky700.jpg";
import sky1000 from "../../images/sky1000.jpg";
import sky1300 from "../../images/sky1300.jpg";
import sky1600 from "../../images/sky1600.jpg";

const StyledBackground = styled.div`
  background-image: url(${sky700});
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-size: cover;

  @media (min-height: ${({ theme }) => theme.height.small}) {
    background-image: url(${sky1000});
  }

  @media (min-height: ${({ theme }) => theme.height.medium}) {
    background-image: url(${sky1300});
  }

  @media (min-height: ${({ theme }) => theme.large}) {
    background-image: url(${sky1600});
  }
`;

export default StyledBackground;
