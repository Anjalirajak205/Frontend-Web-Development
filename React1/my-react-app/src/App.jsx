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


// import React ,{useState}from 'react'
// import Home from './Home'
// // import SignUp from './SignUp'
// // import Login from './Login'
// import { Route, Routes } from 'react-router-dom'
// import AddToCart from './AddToCart'

// const App = () => {
//   // let [apiData,SetData]=     useState([])
//   // let [filteredddData,SetFilteredddData]=     useState([])

//   //   let [cart,SetCart]=    useState([])
//   //   console.log(cart,"h=dekhooooo");
    
//   return (
//     <div>
//       {/* <Home/>
//       <SignUp/>
//       <Login/> */}

//       <Routes>

//         {/* <Route   path='/'  element={<Home cart={cart} SetCart={SetCart}   apiData={apiData} SetData={SetData} filteredddData={filteredddData}    SetFilteredddData={SetFilteredddData}  />} />
//         <Route   path='/cart'  element={<AddToCart cart={cart}/>} /> */}
//          <Route   path='/'  element={<Home   />} />     
//          <Route   path='/cart'  element={<AddToCart/>} />

//       </Routes>
//     </div>
//   )
// }

// export default App

// // import React from 'react'
// // import Home from './Home'

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Home from './Home'
// import { Route,Routes } from 'react-router-dom'
// import AddToCart from './AddToCart'

// const App = () => {
  
//   return (
//     <div>
//         <Routes>

//         <Route   path='/'  element={<Home   />} />     
//         <Route   path='/cart'  element={<AddToCart/>} />
//         <Route path='/onepage/:id' element={<OnePage/>} />
        
//         </Routes>
//     </div>
//   )
// }

// export default App

// import React,{useState}from 'react'

// const App = () =>{
//     let [input,SetInput]=useState("")
//     let[data,SetData]=useState([])
//     function fun1(e){
//         SetInput(e.target.value)
//     }
//     function done(){
//       SetData([...data,input])
//     }

//     function d(id){
//       let filterData=data.filter((a,b)=>{
//         return b!=id
//       }) 
//       SetData(filterData)
//     }

//     return(
//         <div>
//            {/* <h2>{input}</h2>  */}
//            <input onChange={fun1}/>
//            <button onClick={done}>click</button>
//            {/* <button onClick={done}>delete</button> */}
//            {
//             data.map((a,index)=>{
//               return(<>
//               <h2>{a}</h2>
//               <button onClick={()=>d(index)}>delete</button>
//               </>)
//             })
//            }
//       </div>
//     )
// }

// export default App

import React from "react"
import { useState } from "react"

const App =()=>{

  let[state,setstate]=useState(0)
  

  function fun1(){

  }
  return(
    <div>
      <button>Start</button>
      <button>Stop</button>
    </div>
  )
}

export default App