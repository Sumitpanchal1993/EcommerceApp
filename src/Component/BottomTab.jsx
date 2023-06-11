import React from 'react'
import './BottomTab.css'
const tab_data = [
    {
        id: 0,
        imagesrc: 'some text here',
        title: ' Toshiba'
    }
]

function BottomTab() {
    return (
        <div className=' flexcen bottomtab'>
            <div className='flexcen'>
                <span className="material-symbols-outlined">home</span>
            </div>
        </div>
    )
}

export default BottomTab
