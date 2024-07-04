import React from "react";
import "./Cart.css";
import CartItem from "../Sub Components/CartItem";
import Bill from "../Sub Components/Bill";
import { useSelector } from "react-redux";

function Cart() {
  const getStoreData = useSelector((state) => {
    return state.redux_cart;
  });

  return (
    <div className="cartBase">
      <div>
        {getStoreData.map((item) => {
          return <CartItem itemData={item} key={item.id} />;
        })}
      </div>
      <div>
        <Bill />
      </div>
    </div>
  );
}

export default Cart;
