import React from 'react'

function Bill(props) {
  return (
    <>
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
                            <p><span>Office:</span> 28 Vivekanand Colony Moti Bunglaw Indore</p>
                        </div>
                        <div className='price'>
                            <p>Item Total</p>
                            <p id='total'></p>
                        </div>
                        <div className='price'>
                            <p>SGST @ 9%</p>
                            <p id='sgst'></p>
                        </div>
                        <div className='price'>
                            <p>CGST @ 9%</p>
                            <p id='cgst'></p>
                        </div>
                        <div className='price'>
                            <p>IGST @ 9%</p>
                            <p id='igst'></p>
                        </div>
                        <div className='price'>
                            <p>Taxable Amount</p>
                            <p id='totalTax'></p>
                        </div>
                        <div className='price'>
                            <h3>Order Total</h3>
                            <p id='grandTotal'></p>
                        </div>
                    </div>


                    <div className='cartbtn flexcen'>
                        <button onClick={() => { alert('Order Placed') }}>Place Order</button>
                        <button onClick={() => {props.clrfunc()}}>Clear Cart</button>
                        
                    </div>
                </>
  )
}

export default Bill 
