import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: {
    preferences: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    deliveries: "",
  },
  shipmentPrice: 0,
  finalPrice: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateOption(state, action) {
      state.options[action.payload.id] = action.payload.value;

      if (action.payload.id === "preferences") {
        if (action.payload.value === "Capsule") {
          state.options.grindOption = null;
        }

        if (
          action.payload.value !== "Capsule" &&
          state.options.grindOption === null
        ) {
          state.options.grindOption = "";
        }
      }
    },
    updateShipmentPrice(state, action) {
      state.shipmentPrice = action.payload;
    },
    clear() {
      return initialState;
    },
  },
});

export default orderSlice.reducer;

export const { updateOption, updateShipmentPrice, clear } = orderSlice.actions;

export const getOptions = (state) => state.order.options;
