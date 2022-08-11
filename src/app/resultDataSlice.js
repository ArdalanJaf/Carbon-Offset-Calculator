import { createSlice } from "@reduxjs/toolkit";

export const resultDataSlice = createSlice({
  name: "resultData",
  initialState: {},
  reducers: {
    setResultData: (state, action) => {
      state.graphData = action.payload.graphData;
      state.stats = action.payload.stats;
    },
  },
});

export const { setResultData } = resultDataSlice.actions;

export default resultDataSlice.reducer;
