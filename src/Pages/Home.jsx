import React from 'react'
import MiddleMain from '../Component/MiddleMain'

function Home() {
  return (
    <>
     <div className='basemiddle'>
        <MiddleMain heading='Dashboard'/>
        <h1>Welcome to A.T. Inks</h1>
        <p>A Large Variety of Inks and Printer is here</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTneK90eNURxJAu60QTxtigFEZYyy-TQHLKIl1RLoJJxw&usqp=CAU&ec=48600113" alt="" />
     </div> 
    </>
  )
}

export default Home
