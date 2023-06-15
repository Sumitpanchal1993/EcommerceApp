import React, { useEffect, useState } from 'react'
import './Cart.css'
import EmptyCart from '../Component/EmptyCart'
import { cdata } from '../StaticData/CartData'
import CartTable from '../Component/CartTable'
import Bill from '../Component/Bill'



//Rates for Tax
const rates = { SGST: 9, CGST: 9, IGST: 9 }

function Cart() {
    const [cartItem, setCartItem] = useState(cdata)
    const [cartis, setCartis] = useState(false)  //for empty cart
    const [total, setTotal] = useState(20000)

 

    //function for cart total
    function bill(total = 15230, rate= rates) {
        let a = document.getElementById('total')
        let b = document.getElementById('sgst')
        let c = document.getElementById('cgst')
        let d = document.getElementById('igst')
        let e = document.getElementById('totalTax')
        let f = document.getElementById('grandTotal')

        a.innerHTML  = total;
        b.innerHTML  = (total * (rate.SGST) / 100);
        c.innerHTML  = (total * (rate.CGST) / 100);
        d.innerHTML  = (total * (rate.CGST) / 100);
        e.innerHTML  = (total * (rate.SGST) / 100 + total * (rate.CGST) / 100 + total * (rate.IGST) / 100);
        f.innerHTML  = (total + total * (rates.SGST) / 100 + total * (rates.CGST) / 100 + total * (rates.IGST) / 100);
    
    }
    // function to Clearcart
    const clearCart =()=>{setCartItem([]); setCartis(true) }

    useEffect(()=>{bill(total, rates)}, [total])
    // bill(total, rates)
    return (
        <>
            <div className="base">
                {cartis &&
                    <EmptyCart />
                }
                {!cartis &&
                    <CartTable cartItem={cartItem} />
                }
                {!cartis && 
                <Bill clrfunc = {clearCart} />
                }

            </div>
        </>
    )
}

export default Cart

