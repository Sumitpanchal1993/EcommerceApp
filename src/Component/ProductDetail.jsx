import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {addToCart} from '../Redux/Action/Action'
import axios from 'axios'

import './ProductDetail.css'


let icon = 'https://tiimg.tistatic.com/fp/1/005/733/6-color-refill-ink-for-epson-desktop-printer-l800-l801--945.jpg'
let bigimg = 'https://www.nationaltenders.com/upload/events/1481622198_1467973744_Krishna2.jpg'



export default function ProductDetail() {
  const dispatch = useDispatch();

  const [prdData, setPrdData] = useState([])

  let urlprd = 'https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_643e7a9fdb684bac5851d8e9.json'
  useEffect(() => {
    axios.get(urlprd)
      .then((res) => { setPrdData(res.data.result)})
  }, []) 
  
  return (
    <>
      {prdData.map((item, index) => {
        return (
          <div className='product_base' key={index}>
            <div>
              <h3>{item.itemDescription}</h3>
            </div>
            <div className='prd_img'>
              <span id='fav' className="material-symbols-outlined">favorite</span>
              <div className='big_prd_img'>
                <img src={item.productImages[0]} />
              </div>
              <div className='small_prd_img'>
                <div className='thumbnail'>
                  <img src={icon} />
                </div>
                <div className='thumbnail'>
                  <img src={icon} />
                </div>
                <div className='thumbnail'>
                  <img src={icon} />
                </div>
                <div className='thumbnail'>
                  <img src={icon} />
                </div>
              </div>
            </div>
            <p>#000768</p>
            <div className='prd_title'>
              <h3>{item.itemDescription}</h3>
              <span><h3>$500</h3></span>
            </div>
            <div>
              <p>Google Fonts is a library of 1531 open source font families and APIs for convenient use via CSS and Android. The library also has delightful and beautifully crafted icons for common actions and items. Download them for use in your digital products for Android, iOS, and web.</p>
            </div>
            <div className='color'>
              <h4>Please Select Colour Description</h4>
              {item.variants.map((colors, index) => {
                return (
                  <div className='color_opn' key={index}>{colors.colorDescription}</div>
                )
              })
              }
            </div>

          </div>

        )

      })}

      <div className='color'>
        <h4>Please Select Package Description</h4>
        <div className='color_opn'>RBN 1 Liter</div>
        <div className='color_opn'>5 Liter Bottle AK- RCT (467A)</div>
        <div className='color_opn'>NM 1 Liter</div>
        <div className='color_opn'>1Liter Rounded XT 45 Bottle</div>
        <div className='color_opn'>5 Liter RIB Can</div>
      </div>
      <div className='color'>
        <h4>Enter Quantity</h4>
        <input type='text' />
        <p>Minimum Order Quantity 12*</p>
      </div>

      <div className='color'>
        <input type='checkBox' />
        <span>Need Urgent Order</span>
      </div>
      <div className='cartbtn flexcen'>
        <button className='splBtn' onClick={()=>{dispatch(addToCart)}}>Add</button>
      </div>


    </>
  )
}