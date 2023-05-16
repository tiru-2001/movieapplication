import { configureStore } from "@reduxjs/toolkit";
import movieslice from "./slice";

const store = configureStore({
  reducer: movieslice,
});

export default store;
