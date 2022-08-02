import { createSlice } from "@reduxjs/toolkit";

export const formDataSlice = createSlice({
  name: "formData",
  initialState: {
    annualCO2Consumption: "15.52", // decimal numbers turned to Int in back end
    treePurchases: [], // array item = { date: 0, trees: 0 }
    treeCost: { initial: 120, upkeep: 12, currency: "dollars" },
    maxAnualPurchase: 55,
    maxTreeOffset: {
      anualOffset: 28.5,
      time: "unixTime for 5 years (starts at begining of 6th year)",
    },
  },
  reducers: {
    setFormData: (state, action) => {
      state[action.payload.key] = action.payload.data;
    },
    setAnnualCO2Consumption: (state, action) => {
      state.annualCO2Consumption = action.payload;
    },
  },
});

export const { setFormData, setAnnualCO2Consumption } = formDataSlice.actions;

export default formDataSlice.reducer;
