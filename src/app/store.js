import { configureStore } from "@reduxjs/toolkit";
import resultDataReducer from "./resultDataSlice";

export const store = configureStore({
  reducer: {
    resultData: resultDataReducer,
  },
});
