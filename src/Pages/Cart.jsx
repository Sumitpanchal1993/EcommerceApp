import React, { useEffect, useState, useContext, createContext } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import './Cart.css'
import EmptyCart from '../Component/EmptyCart'
import { cdata } from '../StaticData/CartData'
import CartTable from '../Component/CartTable'
import Bill from '../Component/Bill'
import { useReducer } from 'react'

export const CartContext = createContext();

export  const reducer = (state, action)=>{
    switch (action.type){
     case  'REMOVE_ITEM':
        return {
            ...state, item: state.item.filter((curElem)=>{
                return curElem.id !== action.payload
            })
        };
    
       default:
        return state; 
    }
  }

 

const initialState ={
    item : cdata, 
    total: 0
}

//Rates for Tax
const rates = { SGST: 9, CGST: 9, IGST: 9 }

function Cart() {
    const [cartItem, setCartItem] = useState()
    const [cartis, setCartis] = useState(false)  //for empty cart
    const [total, setTotal] = useState(0)

// function action to remove the item
    const removeItem = (id)=>{
        return dispatch(
        {type: 'REMOVE_ITEM',
        payload: id}
        )}
 // Reducer Functions
 const [state, dispatch] = useReducer(reducer, initialState)

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


     //function to collapse the cart list
     function listColapse (){
        if(document.getElementById('colList').style.height === '23rem'){
            document.getElementById('colList').style.height = 'auto';
            document.getElementById('colList').style.transition= 'height 2s ease-out';
        }
        else{
            document.getElementById('colList').style.height = '23rem'
        }
      }


    useEffect(()=>{bill(total, rates)}, [total])
    // bill(total, rates)
    return (
        <>

        <CartContext.Provider value={{...state, removeItem}}>
            <div className="base">
                {cartis &&
                    <EmptyCart />
                }
                {!cartis &&
                    <CartTable cartItem={cartItem} />
                }
                {!cartis && 
                <Bill clrfunc = {clearCart}  viewfunc= {listColapse} />
                }

            </div>
          </CartContext.Provider>
        </>
    )
}

export default Cart

