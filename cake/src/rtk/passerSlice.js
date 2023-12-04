import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCB: "",
};

const passerSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    setDataCB: (state, action) => {
      console.log(action);
      state.dataCB = action.payload.cb;
    },
  },
});

export default passerSlice;
export const { setDataCB } = passerSlice.actions;
