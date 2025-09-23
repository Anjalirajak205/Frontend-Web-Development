import React, {useState} from 'react'

const Home = () => {
    //let [count,SetCount]=useState(0)
    
    let data=new Date().toLocaleTimeString()
     let [count,SetCount]=useState()
    setInterval(()=>{
        SetCount(new Date().toLocaleTimeString())
    })

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>SetCount(count+1)}>++</button>
        <button onClick={()=>SetCount(count-1)}>--</button>
        <button onClick={()=>SetCount(0)}>reset</button>
    </div>
  )
}

export default Home