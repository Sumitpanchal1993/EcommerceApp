import React from 'react'
import './Orders.css'
import { useSelector } from 'react-redux'




function Orders() {
  const redux_cart =   useSelector((state)=>{return state.redux_cart})

  
fetch('//dummyjson.com/test')
.then(res => res.json())
.then(data=> console.log(data));
 
  return (
    <>
    <div className='orderBase'>
    <div>

        {redux_cart.map((item)=>{
            return( 
                <h1>Added  Orders
</h1>
             )
        })}
    </div>


    </div>

    </>
  )
}

export default Orders