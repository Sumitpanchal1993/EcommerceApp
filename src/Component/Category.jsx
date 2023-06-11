import React, { useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios'


const imgout = 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png'

function Category() {
    const [category, setCategory]= useState([])
    useEffect(()=>{
        axios.get('https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json').
        then((resp)=>{setCategory(resp.data.result)})
    },[])

    return (
        <div className="flexcen">
            <div>
                <span className="material-symbols-outlined">chevron_left</span>
            </div>
        <div className='cat'>
            {category.map((item, index)=>{
                return(
                    <div key={index}>
                        <img src={item.categoryImageURL===''?imgout:item.categoryImageURL} alt="" />
                        <p>{item.categoryName}</p>
                    </div>
                )
            })}

            <div>
                <img src={imgout} alt="" />
                <p>Applications</p>
            </div>
            <div>
                <img src={imgout} alt="" />
                <p>Applications</p>
            </div>
            <div>
                <img src={imgout} alt="" />
                <p>Applications</p>
            </div>
            <div>
                <img src={imgout} alt="" />
                <p>Applications</p>
            </div>
            {/* <div>
                <img src={imgout} alt="" />
                <p>Applications</p>
            </div>
            <div>
                <img src={imgout} alt="" />
                <p>Applications</p>
            </div>
            <div>
                <img src={imgout} alt="" />
                <p>Applications</p>
            </div> */}
            

        </div>
            <div>
                <span className="material-symbols-outlined">chevron_right</span>

            </div>
        </div>
    )
}

export default Category
