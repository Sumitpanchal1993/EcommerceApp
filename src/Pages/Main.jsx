import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './Main.css'
import Home from '../Pages/Home'

import { incNumber, decNumber } from '../Redux/Action/Action'
import { useSelector, useDispatch } from 'react-redux'
import AllProducts from './AllProducts';
import Orders from './Orders';
import Favourite from './Favourite';
import NewArrival from './NewArrival';
import ProductDetails from '../Component/ProductDetail'


//  let sample_img = 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png'
function Main() {
  

  const myState = useSelector((arg) => arg.changeNumber);
  const dispatch = useDispatch();
  


  return (
    <>
      <div className='basemiddle'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='allproduct' element={<AllProducts />}></Route>
          <Route path='order' element={<Orders />}></Route>
          <Route path='favourite' element={<Favourite />}></Route>
          <Route path='newarrivals' element={<NewArrival />}></Route>
          <Route path='productdetails' element={<ProductDetails />}></Route>
          {/* <Route path='productlist' element={<Product />}></Route>        */}

        </Routes>
        {/* <button onClick={() => dispatch(decNumber())}>Decrement</button>
        <input type="text" value={myState} />
        <button onClick={() => dispatch(incNumber())}>Increment</button> */}
      </div>
    </>
  )
}

export default Main
