import React from "react";
import "./ProductCard.css";
import { ADD_TO_CART} from "../Redux/Reducer/Redux_Cart";
import { useDispatch } from "react-redux";

function ProductCard({ item, handleProductDetail }) {
  const dispatchAction = useDispatch();

  return (
    <>
      <div className="productcardbase">
        <div
          className="productimage"
          onClick={() => {
            handleProductDetail(item);
          }}
        >
          <img src={item.images[0]} alt="" />
        </div>
        <div className="productdetail">
          <h4>{item.title}</h4>
          <div className="itemPrice">
            <span>
              <strong>Rs {item.price.toFixed(2)}</strong>
            </span>
            <span>
              <s>Rs 1500</s>
            </span>
            <span>{item.discountPercentage}% OFF</span>
          </div>
          <div className="button">
            <button
              className="mybtn"
              onClick={() => {
                console.log("Bought");
              }}
            >
              Buy Now
            </button>
            <button
              className="mybtn"
              onClick={() => {
                dispatchAction(ADD_TO_CART(item));
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
