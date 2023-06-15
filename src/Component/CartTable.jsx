import React from 'react'

function CartTable(props) {
    return (
        <>
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
                    {props.cartItem.map((item, index) => {
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
                                    <span className="material-symbols-outlined" onClick={()=>{}}>close</span>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default CartTable
