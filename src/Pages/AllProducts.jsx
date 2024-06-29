import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; //to see the current getValue
import ProductCard from "../Sub Components/ProductCard";
import "./AllProducts.css";

function AllProducts() {
  const [fetchData, setFetchData] = useState([]);
  const dispatch = useDispatch();
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
          return <ProductCard item={item} />;
        })}
      </div>
    </>
  );
}

export default AllProducts;
