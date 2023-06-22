import React from 'react'

function CartTable(props) {
    return (
        <>
            <div id='colList'>
                <div className='cartTabHD'>
                    <div className='cartHead'>
                        <div style={{ width: '10rem' }}>Products</div>
                        <div>Quantity</div>
                        <div>Price</div>
                        <div>Edit</div>
                    </div>
                    <div className='cartBody'>
                        {props.cartItem.map((item, index, array) => {
                            return (
                                <div key={index} className='cartRow'>
                                    <div>
                                        <div className='flexcen prd'>
                                            <div><img src="https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png" alt="" /></div>
                                            <div>
                                                <h4>{item.name}</h4>
                                                <p>{item.color}|{item.volume}|{item.packing}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>{item.qty}</div>
                                    <div>${item.price}</div>
                                    <div>
                                        <span className="material-symbols-outlined" onClick={() => { }}>close</span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTable
