import { createSlice } from "@reduxjs/toolkit";

export const redux_cart = createSlice({
  name: "Redux_Cart",
  initialState: [
    {id: 1, name:'Shirt', price:599, },
    {id: 1, name:'Shirt', price:599, },
    {id: 1, name:'Shirt', price:599, },
    {id: 1, name:'Shirt', price:599, },
    {id: 1, name:'Shirt', price:599, },
    {id: 1, name:'Shirt', price:599, },
  ],
  reducers: {
    ADD_TO_CART: (state, action) => {
      return [...state, action.payload];
    },
    REMOVE_FROM_CART: (state, action) => {
        state.filter((item)=>{return item})
    },
  },
});
console.log (redux_cart)


export const { increment, decrement, incrementByAmount } = redux_cart.actions;

export default redux_cart.reducer;
