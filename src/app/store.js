import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "./formDataSlice";

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});
