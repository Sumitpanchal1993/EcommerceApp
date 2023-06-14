import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Product.css'


const sample_prd_img = 'https://cpimg.tistatic.com/05772391/b/4/Canon-Printer-Ink.jpg'
function Product(props) {
  const [prd_list, setPrd_list] = useState([])
  let url = `https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_${props.subCategoryId}.json`
  useEffect(() => {
    axios.get(url)
      .then((resp) => { setPrd_list(resp.data.result) })
  }, [])

  console.log(prd_list)
  return (
    <>
      <div className='prd_list'>
        {prd_list.map((item) => {
          return (
            <div>
            <span className="material-symbols-outlined">favorite</span>
              <img src={sample_prd_img} alt="" />
              <h4>{item.itemDescription}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Product


Product.defaultProps = {
  subCategoryId: '643e7a9fdb684bac5851d8e8'
}