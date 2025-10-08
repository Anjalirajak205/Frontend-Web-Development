import React, {useState} from 'react'

const SignUp = () => {
  let[show,setShow] =  useState({})
  let [data,SetData]=   useState({
      name:"",
      email:"",
      password:""
    })

  

     function fun1(e){
       let  {name,value}=e.target
       SetData({...data,[name]:value})
       console.log(data);
      
      // console.log(e.target);
    }

    function done(){
      setShow({...data})
      console.log(show);
    }

  return (
    <div>
      {/* <h2>{input}</h2> */}
      <fieldset><legend>SignUp</legend>
      
      <input   type='text'  name='name' value ={data.name} onChange={fun1}  placeholder='Name'/>
      <br></br>
      <br></br>
      
      <input  type='email' name='email' placeholder='email' onChange={fun1}  value={data.email}/>
      <br></br>
      <br></br>

      <input  type='password' name='password' value={data.password}  onChange={fun1}  placeholder='password'/>
      <br></br>
      <br></br>

      <button onClick={done}>click</button>
      </fieldset>
      
      <br></br>
      <br />
      
      {show.name}
      <h2>{show.email}</h2>
      <p>{show.password}</p>
      


    </div>
  )
}
export default SignUp

