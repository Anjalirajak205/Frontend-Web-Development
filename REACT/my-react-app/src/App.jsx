// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// const App=()=>{
//   return(<><h1>hello</h1>
//   <h4>hii</h4></>)
// }
// export default App

//  <form>
//   <input/>
//   <button>Click</button>
//  </form>
//  </div>
//  }   

/*const App = ()=>{
  let count=0

  function fun1(){
    count+=1
    console.log(count);

  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={fun1}>click</button>

    </div>

  )
}
export default App */

// 23 september
 
import React, {useState} from "react"
import Home from './Home'
const App = () =>{
 // console.log("hii");
  let [state,SetState]= useState(0)
  function fun1(){
    //SetState(state+1)
      //SetState("green")
      if(state=='red'){
        SetState("gold")
      }else{
        SetState("red")
      }
  }
   return (
    // <div style={{backgroundColor:state}}>
    //    <h2>{state}</h2>
    //    <button onClick={fun1}>click</button>
    //    <Home/>
    //    </div>
    <div>
      <Home/>
    </div>

  )

} //rafce
export default App

