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
import { Link } from 'react-router-dom'
const Home = ({cart,SetCart,  apiData,SetData,filteredddData,SetFilteredddData}) => {

  let arr=[1,2,3,4,5]
      let arr1=[6,7,8,...arr]
      console.log(arr1,"rrrr");
      console.log("heheheheh");
  
      // let[apiData, SetData] = useState([])
      // let[filterData,setFilterData]=useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes").then((res) => {
      return res.json()

    }).then((data) => {
      console.log(data.recipes);
      SetData(data.recipes)
      SetFilteredddData(data.recipes)
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

      <> 
      <Link  to={'/cart'}>  
       <button>add to Cart {cart.length}</button>
       </Link>

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
              {/* <button onClick={() => deletee(index)}>delete</button> */}
              
             
            </div>
          </>)
        })

      }

    </div>
    </>
  )
}
export default Home

// 28 september

// import React, { useEffect, useState } from 'react'
// import './App.css'

// const Home = () => {
//     let [apiData, setApiData] = useState([])
//     let [filterData, setFilterData] = useState([])
//     useEffect(()=>{
//         fetch("https://dummyjson.com/recipes").then((res)=>{
//             return res.json();
//         }).then((data)=>{
//             console.log(data.recipes);
//             setApiData(data.recipes);
//             setFilterData(data.recipes);
//         })
//     },[])
//     function del(id){
//         let x = apiData.filter((a,b)=>{
//             return b !== id;
//         })
//         setFilterData(x);
//     }
//     function save(id){
//         let x = apiData.find((a, b)=>{
//             return b == id;
//         })
//         localStorage.setItem("img", JSON.stringify(x));
//     }
//     function sort(x){
//         if(x == 's'){
//             let data = apiData.filter((a, b)=>{
//                 return a.mealType[0] == "Snack";
//             })
//             setFilterData(data);
//         }
//         else if(x == 'l'){
//             let data = apiData.filter((a, b)=>{
//                 return a.mealType[0] == "Lunch";
//             })
//             setFilterData(data);;
//         }
//         else if(x == 'd'){
//             let data = apiData.filter((a, b)=>{
//                 return a.mealType[0] == "Dinner";
//             })
//             setFilterData(data);
//         }
//     }
//     // Sorting logic
//     // let arr = [1,2,5,6,9,2,3,4,5];
//     // let data = arr.sort((a,b)=>{
//     //     return a - b; //Ascending Order Sorting
//     //     // return b - a; //Descending Order Sorting
//     // })
//     // console.log(data);

//     function asc(){
//         let data = [...apiData].sort((a,b)=>{
//             return a.rating - b.rating;
//         })
//         setFilterData(data);
//     }
//     function dec(){
//         let data = [...apiData].sort((a,b)=>{
//             return b.rating - a.rating;
//         })
//         setFilterData(data);
//     }
//   return (
//     <>
//     <div className="nav">
//         {/* Also filter based on ratings */}
//         <button onClick={asc}>ASC</button>
//         <button onClick={dec}>DEC</button>
//         <button onClick={()=>sort('s')}>Snack</button>
//         <button onClick={()=>sort('l')}>Lunch</button>
//         <button onClick={()=>sort('d')}>Dinner</button>
//     </div>
//     <section className='all'>
//     {
//         filterData.map((a, b)=>{
//             return(
//                 <>
//                 <div id='card'>
//                     <img src={a.image}/>
//                     <p>{a.name}</p>
//                     <p>Rating: {a.rating}</p>
//                     <div className="btns">
//                         <button onClick={()=>del(b)}>Delete</button>
//                         <button onClick={()=>save(b)}>Save</button>
//                     </div>
//                 </div>
//                 </>
//             )
//         })
//     }
//     </section>
//     </>
//   )
// }

// export default Home



