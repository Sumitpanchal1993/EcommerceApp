import React, { useState } from 'react'
import './Cart.css'
const cdata = [
    {
        id: 1,
        image: 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png',
        name: 'Product Name',
        color: 'greeen',
        volume: '1l',
        packing: 'RGBY',
        qty: 10,
        price: '$500'
    },
    {
        id: 1,
        image: 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png',
        name: 'Product Name',
        color: 'greeen',
        volume: '1l',
        packing: 'RGBY',
        qty: 10,
        price: '$500'
    },
    {
        id: 1,
        image: 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png',
        name: 'Product Name',
        color: 'greeen',
        volume: '1l',
        packing: 'RGBY',
        qty: 10,
        price: '$500'
    },
    {
        id: 2,
        image: 'https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png',
        name: 'Product Name',
        color: 'greeen',
        volume: '1l',
        packing: 'RGBY',
        qty: 10,
        price: '$500'
    }
]


function Cart() {
    const [cartis, setCartis] = useState(false)


    return (
        <>
            <div className="base">
                {cartis &&
                    <div className='flexcen empty'>
                        <img src="https://brandmandir.com/pub/media/porto/web/images/No-items.png" alt="img" />
                        <h1>Items not added yet</h1>
                    </div>
                }

                {!cartis &&
                    <table className='cartTabHD'>
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th>Quantity</th>
                                <th>  Price  </th>
                                <th>  Edit  </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cdata.map((item, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <div className='flexcen prd'>
                                                <div><img src="https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/categories/category1.png" alt="" /></div>
                                                <div>
                                                    <h4>Konica Chrome</h4>
                                                    <p>Magenta|1L.|RNB</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td> 1 </td>
                                        <td> $ 500</td>
                                        <td>
                                            <span className="material-symbols-outlined">close</span>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                }
                <div className='seeall'><span>See All</span><span class="material-symbols-outlined">chevron_right</span></div>
                <div className='otherinst'> 
                <h4>Other Instruction</h4>
                <div className='flexcen'>
                <span>Add</span><span class="material-symbols-outlined">chevron_right</span>
                </div>
                </div>
                <div className='bill'>
                <div> <h4>Purchase Order</h4></div>
                <div><input type="text" name="" id="" /></div>
                <div className='address'>
                    <h4>Address</h4>
                    <div className='flexcen'>
                        <span>Add</span><span class="material-symbols-outlined">chevron_right</span>
                    </div>        
                </div>
                <div>
                <p><span>Office:</span> 28 Vivekanand Colony Moti Bunglaw Dewas</p>
                </div>
                <div className='price'>
                    <p>Item Total</p>
                    <p>$57,350</p>
                </div>
                <div className='price'>
                    <p>SGST 9%</p>
                    <p>$57,350</p>
                </div>
                <div className='price'>
                    <p>CGST 9%</p>
                    <p>$57,350</p>
                </div>
                <div className='price'>
                    <p>IGST 9%</p>
                    <p>$57,350</p>
                </div>
                <div className='price'>
                    <p>Taxable Amount</p>
                    <p>$57,350</p>
                </div>
                </div>
                <div className='price'>
                    <h3>Order Total</h3>
                    <p>$57,350</p>
                </div>
                <div className='cartbtn flexcen'>
                <button>Clear Cart</button>
                <button>Place Order</button>
                </div>
            </div>
                
        </>
    )
}

export default Cart

