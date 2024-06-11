import React from "react";
import "./Home.css";
import men from'../Media/Mens.jpg';
import women from'../Media/women.jpeg';
import kids from'../Media/kids.jpeg';

function Home() {
  return (
    <>
      <div className="homeBase">
        <div className="offer">Existing offers</div>
        <div className="trending">Trending Now</div>
        <div className="category">
            <div>
                <div><img src={men} alt="" /></div>
                <h3>Mens Wear</h3>
            </div>
            <div>
                <div><img src={women} alt="" /></div>
                <h3>Womens Wear</h3>
            </div>
            <div>
                <div><img src={kids} alt="" /></div>
                <h3>Kids Wear</h3>
            </div>
            <div>
                <div><img src={kids} alt="" /></div>
                <h3>Toddler Wear</h3>
            </div>
        </div>
        <div className="brand">
            <div>Nike</div>
            <div>Adidas</div>
            <div>Puma</div>
            <div>Mayra</div>
            <div>John</div>
            <div>Parker</div>
        </div>
        <div className="pricerange">
            <div>upto 99</div>
            <div>upto 199</div>
            <div>upto 299</div>
            <div>upto 399</div>
            <div>upto 499</div>
            <div>upto 599</div>
           
        </div>
      </div>
    </>
  );
}

export default Home;
