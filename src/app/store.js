import { configureStore } from "@reduxjs/toolkit";
import yamsReducer from "../features/yams/yamsSlice";

export const store = configureStore({
  reducer: {
    yams: yamsReducer,
  },
});
