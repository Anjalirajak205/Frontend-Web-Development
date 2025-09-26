// import React, {useState} from 'react'

// const Home = () => {
//     //let [count,SetCount]=useState(0)

//     let data=new Date().toLocaleTimeString()
//      let [count,SetCount]=useState()
//     setInterval(()=>{
//         SetCount(new Date().toLocaleTimeString())
//     })

//   return (
//     <div>
//         <h2>{count}</h2>
//         <button onClick={()=>SetCount(count+1)}>++</button>
//         <button onClick={()=>SetCount(count-1)}>--</button>
//         <button onClick={()=>SetCount(0)}>reset</button>
//     </div>
//   )
// }

// export default Home

// 24 september

/*import React ,{useEffect, useState} from 'react'
import './App.css'
const Home = ()=>{*/


/* let [count,SetCount]=useState(0)
 let [city,SetCity]=useState('DELHI')
 useEffect(()=>{
   console.log("hello");
 },[count])

 fetch("https://jsonplaceholder.typicode.com/todos").
 then((res)=>{
   return res.json()
 })*/

/*let [ApiData,SetApiData]=useState([])
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res)=>{
    return res.json()

  }).then((data)=>{
    console.log(data);
    SetApiData(data)
  })
},[])
return (*/
// <div>
//   <h3>{count}</h3>
//   <button onClick={()=>SetCount(count+1)}>Click</button>
//   <h3>{city}</h3>
//   <button onClick={()=>{SetCity("bhopal")}}>Change</button>
// </div>
/* <div>
   {
     ApiData.map((a)=>{
       return(<>
       <p id="num">{a.id}</p>
       <h2>{a.title}</h2>
       </>)
     })
   }
 </div>
)
}
export default Home*/

// 25 september

import React, { useEffect, useState } from 'react'
import './App.css'
const Home = () => {
  let [apiData, SetData] = useState([])
  let[filterData,setFilterData]=useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes").then((res) => {
      return res.json()

    }).then((data) => {
      console.log(data.recipes);
      SetData(data.recipes)
      setFilterData(data.recipes)
    })
  }, [])
  function deletee(id) {

    let newArr = apiData.filter((a, b) => {
      return b !== id
    })
    SetData(newArr)
  }

  function fun1() {
    let Data1 = [...apiData].sort((a, b) => {
      return a.rating - b.rating
    })
    console.log(Data1, "SORTEDD")
    SetData(Data1)
  }

  function fun2() {
    let Data1 = [...apiData].sort((a, b) => {
      return b.rating - a.rating
    })
    console.log(Data1, "SORTEDD")
    SetData(Data1)
  }
  
  function lunch(searchValue){
    let filterData =apiData.filter((a)=>{
      return a.mealType[0]==searchValue
    })
    SetData(filterData)
  }

  function dinner(a){
    let filterData =apiData.filter((a)=>{
      return a.mealType[0]== a
    })
    SetData(filterData)
  }
   

  return (

    <div>
      <div>
        <button onClick={fun1}>Asc</button>
        <button onClick={fun2}>Des</button>
        <button onClick={()=>lunch("Lunch")}>Lunch</button>
        <button onClick={()=>dinner("Dinner")}>Dinner</button>
        <button onClick={()=>lunch("Breakfast")}>Breakfast</button> 
      </div>
      {
        filterData.map((a, index) => {
          return (<>
            <div id='card'>
              <img src={a.image} />
              <p>{a.name}</p>
              <p>Rating: {a.rating}</p>
              <button onClick={() => deletee(index)}>delete</button>
            </div>
          </>)
        })
      }
    </div>
  )
}
export default Home