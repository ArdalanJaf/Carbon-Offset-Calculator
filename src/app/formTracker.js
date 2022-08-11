import { createSlice } from "@reduxjs/toolkit";

export const formTracker = createSlice({
  name: "formTracker",
  initialState: {
    treePurchaseBlur: [{ month: false, year: false, trees: false }],
    needSort: false,
  },
  reducers: {
    setBlurTP: (state, action) => {
      const { index, key } = action.payload;
      const { month, year, trees } = state.treePurchaseBlur[index];

      state.treePurchaseBlur[index][key] = true;

      if (
        (key === "month" && year && trees) ||
        (key === "year" && month && trees) ||
        (key === "trees" && month && year)
      ) {
        // console.log("NEEDSORT");
        state.needSort = true;
      }

      //            onBlur={() => dispatch(setBlurTP({ index, key: "month" }))}
    },
    resetBlursTPs: (state) => {
      state.treePurchaseBlur.forEach(
        (tp, i) =>
          (state.treePurchaseBlur[i] = {
            month: false,
            year: false,
            trees: false,
          })
      );
      state.needSort = false;
    },
    totalResetBlursTPS: (state) => {
      state.treePurchaseBlur = [{ month: false, year: false, trees: false }];
      state.needSort = false;
    },
    addBlursTP: (state) => {
      state.treePurchaseBlur.push({ month: false, year: false, trees: false });
    },
    delBlursTP: (state, action) => {
      state.treePurchaseBlur.splice(action.payload, 1);
    },
  },
});

export const {
  setBlurTP,
  resetBlursTPs,
  totalResetBlursTPS,
  addBlursTP,
  delBlursTP,
} = formTracker.actions;

export default formTracker.reducer;
