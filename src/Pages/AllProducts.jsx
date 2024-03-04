import React from 'react'
import MiddleMain from '../Component/MiddleMain'
import Category from '../Component/Category'
import Product from '../Component/Product'
import { useState } from 'react'

function AllProducts() {
    const [view_prd, setView_prd] = useState(false)// to swap the view of category and Product Components
    const [prdListID, setprdListID] = useState('')
    const subCatClick = (childData) => {
      setView_prd(true)
      setprdListID(childData)
    }

    // console.log(prdListID)

    
    return (
        <>
            <div className='basemiddle'>
                <MiddleMain heading='All Products' />
                <Category subCatFunc={subCatClick}/>                
                {view_prd &&                
                <Product subId={prdListID}/>}
            </div>


        </>
    )
}

export default AllProducts
