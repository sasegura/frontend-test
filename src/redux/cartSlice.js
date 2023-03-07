import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    url: "/",
  },
  reducers: {
    incrementCartElements: (state, action) => {
      state.quantity = action.payload.count;
    },
    modifyUrl: (state, action) => {
      state.url = action.payload.url;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementCartElements, modifyUrl } =
  cartSlice.actions;
