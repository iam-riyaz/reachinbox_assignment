import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./slice.js";

const store = configureStore({
  reducer: emailReducer
});

export default store


