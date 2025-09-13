let inp = document.querySelector('input')
let btn = document.querySelector('button')
let ul = document.querySelector('ul')
let btn2= document.querySelector('#btn2')

btn.addEventListener("click",()=>{
    
    let data = inp.value
    let li = document.createElement("li")
    li.innerText=data
    ul.append(li)
    inp.value = " "
    li.addEventListener("click",()=>{
        li.remove()
    })
    btn2.addEventListener("click",()=>{
        li.remove()
    })
})