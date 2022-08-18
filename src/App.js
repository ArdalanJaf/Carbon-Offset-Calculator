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
import StyledBackground from "./components/styles/Background.styled";
import ConfigButton from "./components/ConfigButton";
import Footer from "./components/Footer";

function App() {
  const resultData = useSelector((state) => state.resultData);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledBackground style={{ backgroundImage: `url('/sky.jpg')` }} />
      <ConfigButton />
      <Container>
        <Header />
        <Flex>
          <div>
            <Form />
          </div>
          {resultData.stats && (
            <div>
              {resultData.stats && <Summary />}
              <Graphs />
            </div>
          )}
        </Flex>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
