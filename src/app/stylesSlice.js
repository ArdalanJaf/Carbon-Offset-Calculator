import { createSlice } from "@reduxjs/toolkit";

export const stylesSlice = createSlice({
  name: "styles",
  initialState: {},
  reducers: {
    setStyles: (state, action) => {
      state.graphData = action.payload.graphData;
      state.stats = action.payload.stats;
    },
  },
});

export const { setResultData } = stylesSlice.actions;

export default stylesSlice.reducer;
