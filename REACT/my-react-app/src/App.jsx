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

import React, {useState} from 'react'

const App = () => {
  let [input,SetInput]=   useState({
      name:"",
      email:"",
      passWord:""
    })

     function fun1(e){
      let  {name,value}=    e.target
      SetInput({...input,[name]:value})
      console.log(input);
      
      // console.log(e.target);
    }

  return (
    <div>
      {/* <h2>{input}</h2> */}
      <input   name='name' value ={input.name} onChange={fun1} type='text' placeholder='Name'/>
      <br></br>
      <br></br>
      <input  name='passWord' value={input.passWord}  onChange={fun1} type='text' placeholder='passWord'/>
      <br></br>
      <input  type='email' name="email" onChange={fun1}  value={input.email}/>

    </div>
  )
}
export default App

