import React from 'react'
import './SubCategory.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Product from './Product'

const sampleImg = 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png'

function SubCategory(props) {
    const [subData, setSubData] = useState([])
    const [subCatId, setSubCatId] = useState()
    useEffect(() => {
        let myurl = `https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_${props.id}.json`
        axios.get(myurl).then((res) => { setSubData(res.data.result) })
    }, [props.id])
    return (
        <>
            <div className='prdsub'>
                {subData.map((item, index) => {
                    return (
                        <div key={index}  onClick={()=>{setSubCatId(item.subCategoryId);props.func()}}>
                            <img src={item.subCategoryImageURL} alt="" />
                            <p>{item.subCategoryName}</p>
                        </div>
                    )
                })}             
            </div>
            
        </>
    )
}

export default SubCategory

// SubCategory.defaultProps={
// id:'643e7a9edb684bac5851d8e2'
// }