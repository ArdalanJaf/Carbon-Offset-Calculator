import { createSlice } from "@reduxjs/toolkit";

let today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

export const formDataSlice = createSlice({
  name: "formData",
  initialState: {
    annualCO2Emissions: 0, // decimal numbers turned to Int in back end
    treePurchases: [
      { date: { month: currentMonth, year: currentYear }, trees: 0 },
    ], // array item = { date: 0, trees: 0 }
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
    setAnnualCO2Emissions: (state, action) => {
      state.annualCO2Consumption = action.payload;
    },
    addPurchase: (state, action) => {
      state.treePurchases.push(action.payload);
    },
    deletePurchase: (state, action) => {
      state.treePurchases.push(action.payload);
    },
  },
});

export const {
  setFormData,
  setAnnualCO2Emissions,
  addPurchase,
  deletePurchase,
} = formDataSlice.actions;

export default formDataSlice.reducer;
