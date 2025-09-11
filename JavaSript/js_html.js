//console.log(document)

/*let h1= document.getElementById("one")
console.log(h1)
h1.style.color="red"*/

/*let h1=document.getElementsByClassName("two")
console.log(h1)
h1[0].style.color="red"*/

// let h1=document.querySelectorAll(".two") //.denotes class
// console.log(h1)

// let h1=document.querySelectorAll("#one")  //# denotes id
// console.log(h1)

/*let h1 = document.querySelector("#one")
h1.innerText="hii"
console.log(h1.innerText)*/

/*let a=document.querySelector("a")
a.setAttribute("href","https://flipkart.com")
console.log()*/

/*let arr=["https://images.unsplash.com/photo-1757137911040-c9d81879b212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1756850585212-365a3596e74a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1756745679447-73e51d7afe4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1755371034010-51c25321312d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D"
]

const image=document.querySelector("img")
let num=0
setInterval(function(){
    image.setAttribute("src",arr[num])
    num=(num+1)% arr.length
},2000)*/

// applying event methods

// first method:
/*let body=document.querySelector("body")
function fun1(){
    console.log("hello")
    body.style.backgroundColor="yellow"
}*/

// second method:
/*let btn= document.querySelector("button")
let body= document.querySelector("body")
btn.onclick=function(){
    console.log("hello");
    body.style.backgroundColor="red"

}*/

// third method:
/*let btn= document.querySelector("button")
let body= document.querySelector("body")

btn.addEventListener("click",function(){
    body.style.backgroundColor="red"
})*/

// Event on change

/*let inp= document.querySelector("input")
let h2= document.querySelector("h2")
inp.addEventListener("input",(e)=>{
    //console.log("hello")
    //console.log(e.target.value)   // e is a parameter

    h2.innerText=e.target.value
})*/

let formEl= document.querySelector("form")
formEl.addEventListener("submit",(e)=>{
      e.preventDefault()
    
        // console.log(formEl[0].value)
        // console.log(formEl[1].value)
        // console.log(formEl[2].value)

        let data={
            name:formEl[0].value,
            email:formEl[1].value,
            pass:formEl[2].value
        }
        console.log(data);
        localStorage.setItem("formData",JSON.stringify(data))
        //localStorage.removeItem("formData",JSON.stringify(data))
    })

   // let formEl= document.querySelector("form")
/*formEl.addEventListener("submit",(e)=>{
      e.preventDefault()
          let data={
            name:formEl[0],
            email:formEl[1],
            pass:formEl[2]
        }
        console.log(data);
        //localStorage.setItem("formData",JSON.stringify(data))
        localStorage.removeItem("formData",JSON.stringify(data))
    })*/

   let form2= document.querySelector("#form2")
   form2.addEventListener("submit",(e)=>{
    e.preventDefault()
    let saveData=localStorage.getItem("formData")
    let dataObj= JSON.parse(saveData)

    let loginObj ={
        email:form2[0].value,
        pass:form2[1].value

    }
    
    if(dataObj.email==loginObj.email && dataObj.pass==loginObj.pass){
        prompt("Login donee")
    }
    else{
        prompt("error")
    }
    
})

    






