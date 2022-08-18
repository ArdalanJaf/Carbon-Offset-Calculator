import styled from "styled-components";

const StyledConfig = styled.div`
  padding: 1em;
  background-color: #fff;
  border-radius: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);
  box-shadow: 15px 30px 40px 5px rgba(0, 0, 0, 0.5);
  width: 375px;

  h2 {
    margin-bottom: 1em;
  }
  label {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.5em;
    /* font-size: 0.9em; */

    input {
      /* width: 20%; */
    }

    span {
      flex: 1;
      text-align: end;
      font-size: 1.2em;
    }
  }
  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default StyledConfig;
