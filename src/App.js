import "./normalize.css";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Flex from "./components/styles/Flex.styled";
import Form from "./components/form/Form";
import Summary from "./components/results/Summary";
import Graphs from "./components/results/Graphs";
import Container from "./components/styles/Container.styled";
import Config from "./components/Config";

import GlobalStyles from "./components/styles/GlobalStyles.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import StyledBackground from "./components/styles/Background.styled";
// import Background from "./components/Background";

function App() {
  const resultData = useSelector((state) => state.resultData);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Config />
      <StyledBackground style={{ backgroundImage: `url('/sky.jpg')` }} />
      <Container>
        <Header />
        <Flex>
          <div className="flexedContainer fc1">
            <Form />
          </div>
          {resultData.stats && (
            <div className="flexedContainer fc2">
              {resultData.stats && <Summary />}
              <Graphs />
            </div>
          )}
        </Flex>
      </Container>
    </ThemeProvider>
  );
}

export default App;
