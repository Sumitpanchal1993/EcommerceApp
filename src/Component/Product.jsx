import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Product.css'
import ProductDetail from '../Component/ProductDetail'
import Cart from '../Pages/Cart'


const sample_prd_img = 'https://cpimg.tistatic.com/05772391/b/4/Canon-Printer-Ink.jpg';

let  a1 = '643e7a9fdb684bac5851d8e9';
let  a2 = '643e7a9fdb684bac5851d8ea';// no data
let  a3 = '643e7a9fdb684bac5851d8e8';

function Product(props) {
  const [prd_list, setPrd_list] = useState([]);
  const [popup, setPopup] = useState(false);
  // const [clickedItem, setClickedItem] = useState('')
  // console.log(clickedItem)

  let url = `https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_${a3}.json`
  useEffect(() => {
    axios.get(url)
      .then((resp) => { setPrd_list(resp.data.result)})
  }, [props.subId])

  console.table(prd_list);
  
  return (
    <>
      <div className='prd_list'>
        {prd_list.map((item, index) => {
          return (
            <div onClick={() => { setPopup(true); console.log(item._id) }} key={index}>
              <span className="material-symbols-outlined">favorite</span>
              <img src={sample_prd_img} alt="img" />
              <h4>{item.itemDescription}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          )
        })}
      </div>
      {/* POPUP Component */}
      {popup &&
        <div className='popup'>
          <div className='close'>
            <span className="material-symbols-outlined" onClick={() => {setPopup(false)}}>close</span>
          </div>
          <div>
            <ProductDetail />
          </div>
          <hr />
          <div>
            <Cart />
          </div>

        </div>
      }
    </>
  )
}

export default Product


Product.defaultProps = {
  subId: '643e7a9edb684bac5851d8e0'
}