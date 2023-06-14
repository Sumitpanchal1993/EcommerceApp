import React, { useEffect, useState } from 'react'
import './Cart.css'
import { cdata } from '../StaticData/CartData'

//functio to delete item from cart
function deletecart(cdata, index){
   
}

//Rates for Tax
const rates = {SGST: 9, CGST: 9, IGST: 9}

function Cart() {
    const [cartis, setCartis] = useState(false)
    const [total, setTotal] = useState(20000)

let k = document.querySelectorAll('tr>td:nth-child(3)')
// console.log(Array.from(k))

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
                                    <tr key={index}>
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
                                            <span className="material-symbols-outlined" onClick={deletecart(item.id)}>close</span>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                }
                <div className='seeall'><span>See All</span><span className="material-symbols-outlined">chevron_right</span></div>
                <div className='otherinst'> 
                <h4>Other Instruction</h4>
                <div className='flexcen'>
                <span>Add</span><span className="material-symbols-outlined">chevron_right</span>
                </div>
                </div>
                <div className='bill'>
                <div> <h4>Purchase Order</h4></div>
                <div><input type="text" name="" id="" /></div>
                <div className='address'>
                    <h4>Address</h4>
                    <div className='flexcen'>
                        <span>Add</span><span className="material-symbols-outlined">chevron_right</span>
                    </div>        
                </div>
                <div>
                <p><span>Office:</span> 28 Vivekanand Colony Moti Bunglaw Dewas</p>
                </div>
                <div className='price'>
                    <p>Item Total</p>
                    <p>${total}</p>
                </div>
                <div className='price'>
                    <p>SGST @ 9%</p>
                    <p>${total*(rates.SGST)/100}</p>
                </div>
                <div className='price'>
                    <p>CGST @ 9%</p>
                    <p>${total*(rates.CGST)/100}</p>
                </div>
                <div className='price'>
                    <p>IGST @ 9%</p>
                    <p>${total*(rates.IGST)/100}</p>
                </div>
                <div className='price'>
                    <p>Taxable Amount</p>
                    <p>${total*(rates.SGST)/100+total*(rates.CGST)/100+total*(rates.IGST)/100}</p>
                </div>
                <div className='price'>
                    <h3>Order Total</h3>
                    <p>${total+total*(rates.SGST)/100+total*(rates.CGST)/100+total*(rates.IGST)/100}</p>
                </div>
                </div>
                <div className='cartbtn flexcen'>
                <button>Place Order</button>
                <button>Clear Cart</button>
                </div>
            </div>
                
        </>
    )
}

export default Cart

