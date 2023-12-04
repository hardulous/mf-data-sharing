import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cake: 0,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state.cake += 1;
    },
  },
});

export default cakeSlice;
export const { buyCake } = cakeSlice.actions;
