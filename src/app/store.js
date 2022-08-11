import { configureStore } from "@reduxjs/toolkit";
// import formTrackerReducer from "./formTracker";
import resultDataReducer from "./resultDataSlice";

export const store = configureStore({
  reducer: {
    resultData: resultDataReducer,
    // formTracker: formTrackerReducer,
  },
});
