import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: {
    preferences: "",
    beanType: "",
    quantity: "",
    grindOption: "",
    deliveries: "",
  },
  shipmentPrice: "",
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
    calculatePrice(state) {
      switch (state.options.deliveries) {
        case "Every week": {
          state.finalPrice = parseFloat(state.shipmentPrice) * 4;
          break;
        }
        case "Every 2 weeks": {
          state.finalPrice = parseFloat(state.shipmentPrice) * 2;
          break;
        }
        default: {
          state.finalPrice = parseFloat(state.shipmentPrice);
        }
      }
    },
    clear() {
      return initialState;
    },
  },
});

export default orderSlice.reducer;

export const { updateOption, updateShipmentPrice, calculatePrice, clear } =
  orderSlice.actions;

export const getOptions = (state) => state.order.options;

export const getFinalPrice = (state) => state.order.finalPrice;
