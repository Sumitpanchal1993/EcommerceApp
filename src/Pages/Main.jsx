import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './Main.css'
import Home from '../Pages/Home'
import AllProducts from './AllProducts';
import Orders from './Orders';
import Favourite from './Favourite';
import NewArrival from './NewArrival';
import ProductDetails from '../Component/ProductDetail'

function Main() {
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
        </Routes>
      </div>
    </>
  )
}

export default Main


//redux checking functionality

// import { incNumber, decNumber } from '../Redux/Action/Action'
// import { useSelector, useDispatch } from 'react-redux'


// const myState = useSelector((arg) => arg.changeNumber);
// const dispatch = useDispatch();


{/* <button onClick={() => dispatch(decNumber())}>Decrement</button>
        <input type="text" value={myState} />
        <button onClick={() => dispatch(incNumber())}>Increment</button> */}