import "./normalize.css";
import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import Header from "./components/Header";
import Form from "./components/form/Form";
import Summary from "./components/results/Summary";
import Graphs from "./components/results/Graphs";
import ConfigButton from "./components/ConfigButton";
import Footer from "./components/Footer";
import Container from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles.styled";
import { FlexMain, FlexChild } from "./components/styles/Flex.styled";
import StyledBackground from "./components/styles/Background.styled";

function App() {
  const resultData = useSelector((state) => state.resultData);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledBackground />
      <ConfigButton />
      <Container>
        <Header />
        <FlexMain>
          <FlexChild>
            <Form />
          </FlexChild>
          {resultData.stats && (
            <FlexChild>
              {resultData.stats && <Summary />}
              <Graphs />
            </FlexChild>
          )}
        </FlexMain>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
