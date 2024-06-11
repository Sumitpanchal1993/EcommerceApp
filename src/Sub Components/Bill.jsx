import React from "react";
import "./Bill.css";

function Bill() {
  return (
    <>
      <div className="billBase">
        <div>
          <h3>Price Detail</h3>
        </div>
        <div>
          <span>Total Items</span>
          <span>(5 Items)</span>
        </div>
        <hr />
        <div className="amount">
          <span>Total MRP</span>
          <span>₹400000</span>
        </div>
        <div className="amount">
          <span>Discount on MRP</span>
          <span>₹5000</span>
        </div>
        <div className="amount">
          <span>Coupon Discount</span>
          <span>₹3000</span>
        </div>
        <div className="amount">
          <span>Platform Fees</span>
          <span>₹300</span>
        </div>
        <div className="amount">
          <span>Shipping Fees</span>
          <span>₹200</span>
        </div>
        <hr />
        <div className="amount">
          <span>Total Amount to Pay</span>
          <span>₹32500</span>
        </div>
       
        <div>
          <button className="mybtn">Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Bill;
