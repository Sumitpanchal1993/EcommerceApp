import React from 'react'
import './Category.css'


const imgout = 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png'

function Category() {
    return (
        <div className='flexcen cat'>
            <div>
                <span class="material-symbols-outlined">chevron_left</span>
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
            <div>
            <img src={imgout} alt="" />
            <p>Applications</p>
            </div>
            
            <div>
                <span class="material-symbols-outlined">chevron_right</span>

            </div>

        </div>
    )
}

export default Category
