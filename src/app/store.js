import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import yamsReducer from "../features/yams/yamsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    yams: yamsReducer,
  },
});
