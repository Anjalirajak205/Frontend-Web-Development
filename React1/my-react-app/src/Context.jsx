// import { createContext} from "react"
import { Children, createContext, useEffect,useReducer} from "react";

let Context=createContext()

export default Context

const ContextP=({children})=>{
    let data={
        apiData:[],
        cart:[]
    }

    function reducer(apiData,action){
        if(action.type=="FETCH_DATA"){
            return{
               apiData:action.payload
            }
        }
    }

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then((res)=>{
            return res.json()

        }).then((data)=>{
            dispatch({type:"FETCH_DATA",payload:data.recipes})
        })

    },[])

    let[val,dispatch]= useReducer(reducer,data)
    return(<div>
       <Context.Provider>
        {children}
        </Context.Provider> 
    </div>)
}