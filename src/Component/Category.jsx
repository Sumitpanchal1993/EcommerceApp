import React, { useEffect, useState } from 'react'
import './Category.css'
import SubCategory from '../Component/SubCategory'
import axios from 'axios'


//Default Image source
const imgout = 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png'

function Category(props) {
    const [category, setCategory] = useState([]) // to store the fetch data from api
    const [viewSubCat, setViewSubCat] = useState(false) // to show or hide the subcategory items
    const [viewCat, setViewCat] = useState(true)  // to view the sub-cateogry
    const [catId, setCatId] = useState() //to set the clicked category ID
    // const [subCat, setSubCat] = useState(false)

   
    const hideOnClick = ()=>{
        setViewCat(false);
        setViewSubCat(false)
    }  


    //to fetch data  from api 
    const url1 = 'https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json'  // Api given
    useEffect(() => {
        axios.get(url1)
            .then((resp) => { setCategory(resp.data.result) })
    }, [])


    return (
        <>  
            { viewCat &&
            <div className="flexcen">
                {/* <div>
                    <span className="material-symbols-outlined">chevron_left</span>
                </div> */}
                <div className='cat'>
                    {category.map((item, index) => {
                        return (
                            <div key={index} onClick={() => { setCatId(item.categoryId); setViewSubCat(true) }}>
                                <img src={item.categoryImageURL === '' ? imgout : item.categoryImageURL} alt="" />
                                <p>{item.categoryName}</p>
                            </div>
                            )
                        })}
                            {/* Just to Check the scrolling functions these div's were made  uncomment an check functionality */}
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
                            </div> */}
                </div>
                {/* <div>
                    <span className="material-symbols-outlined">chevron_right</span>
                </div> */}
            </div>
            }
            {viewCat &&<hr />}


            {viewSubCat &&
                <SubCategory id={catId} func={props.subCatFunc} func2={hideOnClick} />
            }

        </>
    )
}

export default Category



