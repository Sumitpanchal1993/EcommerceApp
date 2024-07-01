import React, { useEffect, useState } from "react";
//import { useDispatch } from "react-redux"; //to see the current getValue
import ProductCard from "../Sub Components/ProductCard";
import "./AllProducts.css";
import { useSelector } from "react-redux";

function AllProducts() {
  const [fetchData, setFetchData] = useState([]);
  // const cartData = useSelector((state)=>{console.log(state.redux_cart)})
  // const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((rawdata) => rawdata.json())
      .then((data) => setFetchData(data.products))
      .catch((error) => {
        console.warn(error.message);
      });
  }, []);

  return (
    <>
      <div className="allProductsBase">
        {fetchData.map((item) => {
          return <ProductCard item={item} key={item.id}/>;
        })}
      </div>
    </>
  );
}

export default AllProducts;
