import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByTwo: (state) => {
      state.count += 2;
    },
  },
});

export const { increment, decrement, incrementByTwo } = counterSlice.actions;
export default counterSlice.reducer;
