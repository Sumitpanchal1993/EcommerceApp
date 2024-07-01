import { createSlice } from "@reduxjs/toolkit";

export const redux_cart = createSlice({
  name: "Redux_Cart",
  initialState: [],
  reducers: {
    ADD_TO_CART: (state, action) => {
      return [...state, action.payload];
    },
    REMOVE_FROM_CART: (state, action) => {
      state = state.filter((item)=>{return item.id !== action.payload.id})
      return state
    },
    
  },
});


export const { ADD_TO_CART, REMOVE_FROM_CART} = redux_cart.actions;

export default redux_cart.reducer;
