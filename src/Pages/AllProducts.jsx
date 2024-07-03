import React, { useEffect, useState } from "react";
//import { useDispatch } from "react-redux"; //to see the current getValue
import ProductCard from "../Sub Components/ProductCard";
import "./AllProducts.css";
import { useSelector } from "react-redux";
import ReactModal from "react-modal";

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

  const handleProductDetail = (item)=>{
    console.log('this product is clicked', item)
  }

  return (
    <>
      <div className="allProductsBase">
        {fetchData.map((item) => {
          return <ProductCard item={item} key={item.id}  handleProductDetail={handleProductDetail}/>;
        })}
      </div>
      <ReactModal>
        
      </ReactModal>
    </>
  );
}

export default AllProducts;
