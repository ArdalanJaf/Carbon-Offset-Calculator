import styled from "styled-components";

const StyledGraphTooltip = styled.div`
  background-color: rgb(200, 200, 200, 0.8);
  border-radius: 10px;
  padding: 0.1em 0.5em;
  box-shadow: 15px 30px 40px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-weight: 600;
  /* color: #fff; */

  h4 {
    color: #666;
  }
  p {
    font-size: 0.9em;
    color: #888;
  }

  span {
    font-size: 1.1em;
  }
`;

export default StyledGraphTooltip;
