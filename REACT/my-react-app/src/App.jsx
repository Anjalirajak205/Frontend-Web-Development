// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'

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
 
// import React, {useState} from "react"
// import Home from './Home'
//const App = () =>{
 // console.log("hii");
  // let [state,SetState]= useState(0)
  // function fun1(){
    //SetState(state+1)
      //SetState("green")
  //     if(state=='red'){
  //       SetState("gold")
  //     }else{
  //       SetState("red")
  //     }
  // }
  //  return (
    // <div style={{backgroundColor:state}}>
    //    <h2>{state}</h2>
    //    <button onClick={fun1}>click</button>
    //    <Home/>
    //    </div>
    // <div>
    //   <Home/>
    // </div>

    // <div>
    //   <hello/>
    // </div>

  //)


//} //rafce

// 06 october

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

// 08 october

// import React, {useState} from 'react'

// const App = () => {
//   let[show,setShow] =  useState({})
//   let [data,SetData]=   useState({
//       name:"",
//       email:"",
//       password:""
//     })

  

//      function fun1(e){
//        let  {name,value}=e.target
//        SetData({...data,[name]:value})
//        console.log(data);
      
//       // console.log(e.target);
//     }

//     function done(){
//       setShow({...data})
//       console.log(show);
//     }

//   return (
//     <div>
//       {/* <h2>{input}</h2> */}
      
//       <input   type='text'  name='name' value ={data.name} onChange={fun1}  placeholder='Name'/>
//       <br></br>
//       <br></br>
      
//       <input  type='email' name='email' placeholder='email' onChange={fun1}  value={data.email}/>
//       <br></br>
//       <br></br>

//       <input  type='password' name='password' value={data.password}  onChange={fun1}  placeholder='password'/>
//       <br></br>
//       <br></br>

//       <button onClick={done}>click</button>
//       <br></br>
//       <br />

//       {show.name} 
//       <h2>{show.email}</h2>
//       <p>{show.password}</p>
      


//     </div>
//   )
// }
// export default App

import React ,{useState}from 'react'
// import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
   let [apiData,SetData]=     useState([])
    let [filteredddData,SetFilteredddData]=     useState([])


   let [cart,SetCart]=    useState([])
   console.log(cart,"h=dekhooooo");

  return (
    <div>
    {/* <SignUp/>
    <Login/> */}

    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
       <Route   path='/'  element={<Home cart={cart} SetCart={SetCart}   apiData={apiData} SetData={SetData} filteredddData={filteredddData}    SetFilteredddData={SetFilteredddData}  />} />
      <Route   path='/SignUp'    element={<SignUp/>}/>
      <Route   path='/Login'    element={<Login/>}/>
      
    </Routes>
     
    </div>
  )
}

export default App

