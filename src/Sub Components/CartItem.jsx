import React from "react";
import userLogo from "../Media/Userlogo.jpg";
import "./CartItem.css";

function CartItem() {
  return (
    <>

    <div className="cartItemBase">
      <div className="prdImage">
        <img src={userLogo} alt="" />
      </div>

      <div className="prdDetail">
        <h4>Product Title</h4>
        <p>Detail of the Product like companty Brand etc</p>
        <p>Seller Detail</p>
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
            <strong>Rs 650</strong>
          </span>
          <span>
            <s>Rs 1500</s>
          </span>
          <span>65% OFF</span>
        </div>
        <div className="itemReturn">
          <span><strong>14 days</strong></span> 
          <span>return available</span>
        </div>
        <div><button className="mybtn">Remove</button></div>
      </div>
    </div>
    </>
  );
}

export default CartItem;
