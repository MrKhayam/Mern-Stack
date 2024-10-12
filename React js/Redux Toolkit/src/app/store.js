import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../features/countSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
