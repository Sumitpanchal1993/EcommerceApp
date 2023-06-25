import React, {useState } from 'react'






function Demo() {
const [data, setData] = useState([])

const clickHandle = ()=>{
    let p = [];
    let k = document.getElementById('input').value
    p.push(k)
    setData([...data, k])
    
}
console.log(data)

  return (
    <>
    <div>
    <input type="tea.appendChildxt"  id= 'input' onChange={()=>{}}/>

    <button onClick={clickHandle}>show it</button>
    </div>
    <div id='show'>
        {data.map((item, index)=>{
            return(
                <p key={index}>{item}</p>
            )
        })}
    </div>
</>
  )
}

export default Demo
