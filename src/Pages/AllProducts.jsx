import React from 'react'
import MiddleMain from '../Component/MiddleMain'
import Category from '../Component/Category'
import SubCategory from '../Component/SubCategory'

function AllProducts() {
    return (
        <>
            <div className='basemiddle'>
                <MiddleMain heading='All Products' />
                <Category />
                <hr/>
                <SubCategory/>
            </div>

        </>
    )
}

export default AllProducts
