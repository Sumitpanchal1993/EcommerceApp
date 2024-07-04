import React from "react";
import "./Bill.css";
import { useSelector } from "react-redux";

const platformFees = 10;
const shippingFees = 99;
const couponDiscount = 50
function sum(total, num) { 
  return (total += num);
}


function onPlaceOrder (){
  alert('Wow You Have Placed the Order Successfully')
}

function Bill() {
  const redux_cart = useSelector((state) => {return state.redux_cart;});
  let discount = redux_cart.map((item) => {return Number(((item.discountPercentage * item.price) / 100));}).reduce(sum, 0);
  let totalMRP = redux_cart.map((item) => {return item.price;}).reduce(sum, 0);
  let total = (totalMRP-discount-couponDiscount+platformFees+shippingFees);

  return (
    <>
      <div className="billBase">
        <div>
          <h3>Price Detail</h3>
        </div>
        <div>
          <span>Total Items</span>
          <span>({redux_cart.length} Items)</span>
        </div>
        <hr />
        <div className="amount">
          <span>Total MRP</span>
          <span>₹{totalMRP.toFixed(2)}</span>
        </div>
        <div className="amount">
          <span>Discount on MRP</span>
          <span>₹{discount.toFixed(2)}</span>
        </div>
        <div className="amount">
          <span>Coupon Discount</span>
          <span>₹{couponDiscount.toFixed(2)}</span>
        </div>
        <div className="amount">
          <span>Platform Fees</span>
          <span>₹{platformFees.toFixed(2)}</span>
        </div>
        <div className="amount">
          <span>Shipping Fees</span>
          <span>₹{shippingFees.toFixed(2)}</span>
        </div>
        <hr />
        <div className="amount">
          <span>Total Amount to Pay</span>
          <span>₹{total.toFixed(2)}</span>
        </div>

        <div>
          <button className="mybtn" onClick={onPlaceOrder}>Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Bill;
