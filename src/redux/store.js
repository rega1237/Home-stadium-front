import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homereducer/homereducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: [...logger],
});

export default store;