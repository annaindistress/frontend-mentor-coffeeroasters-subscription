import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./components/orderSlice";

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export default store;
