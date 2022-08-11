import React from "react";
import Form from "./components/Form";
import { useSelector } from "react-redux";
import Summary from "./components/Summary";
import Graphs from "./components/Graphs";

function App() {
  const resultData = useSelector((state) => state.resultData);

  return (
    <div>
      <div>
        <Form />
        {resultData.stats && <Summary />}
      </div>
      <div>{resultData.stats && <Graphs />}</div>
    </div>
  );
}

export default App;
