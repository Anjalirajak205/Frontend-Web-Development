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

import React ,{useEffect, useState} from 'react'
import './App.css'
const Home = ()=>{
  let [apiData,SetData]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/recipes").then((res)=>{
      return res.json()

    }).then((data)=>{
      console.log(data.recipes);
      SetData(data.recipes)
    })
  },[])
  function deletee(id){
   let newArr= apiData.filter((a,b)=>{
      return b!==id
    })
    SetData(newArr)
  }
  return (
      <div>
        {
          apiData.map((a,index)=>{
            return(<>
            <div id='card'>
              <img src={a.image}/>
              <p>{a.name}</p>
              <button onClick={()=>deletee(index)}>delete</button>
              </div>
              </>)
          })
        }
      </div>
  )
}
export default Home