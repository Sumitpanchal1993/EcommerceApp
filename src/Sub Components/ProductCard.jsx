import React from "react";
import "./ProductCard.css";
function ProductCard({ item }) {
  return (
    <>
      <div className="productcardbase">
        <div className="productimage">
          <img src={item.images[0]} alt="" />
        </div>
        <div className="productdetail">
          <h4>{item.title}</h4>
          <div className="itemPrice">
            <span>
              <strong>Rs {(item.price * 15).toFixed(2)}</strong>
            </span>
            <span>
              <s>Rs 1500</s>
            </span>
            <span>{item.discountPercentage}% OFF</span>
          </div>
          <div className="button">
            <button className="mybtn">Buy Now</button>
            <button className="mybtn">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
