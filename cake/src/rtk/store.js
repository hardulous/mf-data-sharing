import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "./cakeSlice";
import passerSlice from "./passerSlice";

const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    dataPasser: passerSlice.reducer,
  },
  middleware: (getDefaultMid) => {
    return getDefaultMid({
      serializableCheck: false,
    });
  },
});

export default store;
