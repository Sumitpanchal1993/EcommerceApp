import React from "react";
import "./Home.css";
import men from'../Media/Mens.jpg';
import women from'../Media/women.jpeg';
import kids from'../Media/kids.jpeg';
import nike from '../Media/nike.jpg'
import adidas from '../Media/Adidas_logo.png';
import puma from '../Media/puma.png'

function Home() {
  return (
    <>
      <div className="homeBase">
        <div className="offer">Existing offers</div>
        <div className="trending">Trending Now</div>
        <h3>Shop By Category</h3>
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
        <h3>Shop By Brand</h3>
        <div className="brand">
            <div>
            <img src={nike} alt="" />
            <h4>Nike</h4>
            </div>
            <div>
            <img src={adidas} alt="" />
            <h4>Nike</h4>
            </div>
            <div>
            <img src={puma} alt="" />
            <h4>Nike</h4>
            </div>
            <div>
            <img src={puma} alt="" />
            <h4>Nike</h4>
            </div>
            <div>
            <img src={nike} alt="" />
            <h4>Nike</h4>
            </div>
            <div>
            <img src={nike} alt="" />
            <h4>Nike</h4>
            </div>
            <div>
            <img src={nike} alt="" />
            <h4>Nike</h4>
            </div>
           
        </div>
        <h3>Shop By Price Range</h3>
        <div className="pricerange category">
            <div><h3>Upto 99</h3></div>
            <div><h3>Upto 199</h3></div>
            <div><h3>Upto 299</h3></div>
            <div><h3>Upto 399</h3></div>
            <div><h3>Upto 499</h3></div>
            <div><h3>Upto 599</h3></div>
            <div><h3>Upto 699</h3></div>
            <div><h3>Upto 799</h3></div>
            <div><h3>Upto 899</h3></div>
            <div><h3>Upto 999</h3></div>
            <div><h3>Upto 1099</h3></div>
            <div><h3>Upto 2099</h3></div>
            <div><h3>Upto 3099</h3></div>
            <div><h3>Upto 4099</h3></div>
            </div>
      </div>
    </>
  );
}

export default Home;
