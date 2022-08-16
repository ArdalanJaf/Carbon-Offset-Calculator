import "./normalize.css";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Flex from "./components/styles/Flex.styled";
import Form from "./components/form/Form";
import Summary from "./components/results/Summary";
import Graphs from "./components/results/Graphs";
import Container from "./components/styles/Container.styled";

import GlobalStyles from "./components/styles/GlobalStyles.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import Background from "./components/styles/Background.styled";

function App() {
  const resultData = useSelector((state) => state.resultData);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Background style={{ backgroundImage: `url('/sky.jpg')` }}>
        <Container>
          <Header />
          <Flex>
            <div className="flexedContainer">
              <Form />
              {resultData.stats && <Summary />}
            </div>
            {resultData.stats && (
              <div className="flexedContainer">
                <Graphs />
              </div>
            )}
          </Flex>
        </Container>
      </Background>
    </ThemeProvider>
  );
}

export default App;
