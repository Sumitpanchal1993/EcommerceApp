import React from 'react'
import './Main.css'
import MiddleMain from '../Component/MiddleMain'
import Category from '../Component/Category'


//  let sample_img = 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png'
function Main() {
  return (
    <>
    <div className='basemiddle'>
      <MiddleMain/>
      <Category/>


    </div>
    </>
  )
}

export default Main
