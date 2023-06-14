import React from 'react'
import MiddleMain from '../Component/MiddleMain'
import Category from '../Component/Category'
import Product from '../Component/Product'
import { useState } from 'react'

function AllProducts() {
    const[view_prd, setView_prd] = useState(false)

    const subCatClick = ()=>{
        setView_prd(true)
    }


    return (
        <>
            <div className='basemiddle'>
                <MiddleMain heading='All Products' />
                <Category subCatFunc={subCatClick}/>                
                {view_prd &&                
                <Product/>}
            </div>


        </>
    )
}

export default AllProducts
