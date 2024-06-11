import React from "react";
import "./Cart.css";
import CartItem from "../Sub Components/CartItem";
import Bill from '../Sub Components/Bill'

function Cart() {
  return (
    <div className="cartBase">
      <div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div>
        <Bill />
      </div>
    </div>
  );
}

export default Cart;
