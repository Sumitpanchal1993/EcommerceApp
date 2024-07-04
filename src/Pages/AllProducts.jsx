import React, { useEffect, useState } from "react";
import ProductCard from "../Sub Components/ProductCard";
import "./AllProducts.css";

function AllProducts() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((rawdata) => rawdata.json())
      .then((data) => setFetchData(data.products))
      .catch((error) => {
        console.warn(error.message);
      });
  }, []);

  const handleProductDetail = (item) => {
    console.log("this product is clicked", item);
  };

  return (
    <>
      <div className="allProductsBase">
        {fetchData.map((item) => {
          return (
            <ProductCard
              item={item}
              key={item.id}
              handleProductDetail={handleProductDetail}
            />
          );
        })}
      </div>
    </>
  );
}

export default AllProducts;
