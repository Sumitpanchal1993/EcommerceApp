import React from "react";
// import userLogo from "../Media/Userlogo.jpg";
import "./CartItem.css";
import {REMOVE_FROM_CART } from "../Redux/Reducer/Redux_Cart";
import { useDispatch } from "react-redux";

function CartItem({itemData}) {
  const dispatchAction =useDispatch()
  return (
    <>

    <div className="cartItemBase">
      <div className="prdImage">
        <img src={itemData.images[0]} alt="" />
      </div>

      <div className="prdDetail">
        <h4>{itemData.title}</h4>
        <p>{itemData.description}</p>
        <p>{itemData.brand}</p>
        <div className="selection">
          <span>
            <label htmlFor="size">Sizes</label>
            <select name="sixe" id="">
              <option value="">XXL</option>
              <option value="">XL</option>
              <option value="">L</option>
              <option value="">M</option>
              <option value="">S</option>
            </select>
          </span>
          <span>
            <label htmlFor="qty">Quantity</label>
            <select name="qty" id="">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
            </select>
          </span>
          <span>Only 1 left</span>
        </div>
        <div className="itemPrice">
          <span>
            <strong>Rs {itemData.price}</strong>
          </span>
          <span>
            <s>Rs {itemData.price}</s>
          </span>
          <span>{Math.ceil(itemData.discountPercentage)}%</span>
        </div>
        <div className="itemReturn">
          <span><strong>14 days</strong></span> 
          <span>return available</span>
        </div>
        <div><button className="mybtn" onClick={()=>{dispatchAction(REMOVE_FROM_CART(itemData))}}>Remove</button></div>
      </div>
    </div>
    </>
  );
}

export default CartItem;
