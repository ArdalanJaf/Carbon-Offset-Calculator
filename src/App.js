import React from "react";
import Form from "./components/Form";
import { useSelector } from "react-redux";

function App() {
  const resultData = useSelector((state) => state.resultData);

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
