import React from 'react'
import './BottomTab.css'
const tab_data = [
    {
        id: 0,
        imagesrc: 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/subCategories/subcategory3.png',
        title: ' Toshiba'
    },
    {
        id: 1,
        imagesrc: 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/subCategories/subcategory3.png',
        title: ' Toshiba'
    },
    {
        id: 2,
        imagesrc: 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/subCategories/subcategory3.png',
        title: ' Toshiba'
    },
    {
        id: 3,
        imagesrc: 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/subCategories/subcategory3.png',
        title: ' Toshiba'
    }
]

function BottomTab() {
    return (
        <>
            <div className=' flexcen bottomtab'>
                {tab_data.map((item, index) => {
                    return (
                        <div className='' key={index}>
                            <img src={item.imagesrc} alt="" />
                            <p>{item.title}</p>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default BottomTab
