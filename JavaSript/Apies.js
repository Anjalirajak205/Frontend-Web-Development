/*fetch("apieLink").then((data)=>{
    console.log("data");
}).catch((err)=>{
    console.log(err);
})*/

//Destructurering

/*let obj={
    id:1,
    name:"anjali",
    LastName:"rajak"
    
}
let (id)=obj
console.log(id);*/


/*let ul = document.querySelector("ul")
fetch("https://jsonplaceholder.typicode.com/todos").
then((data)=>{
    return data.json()

}).then((res)=>{
    console.log(res);
    show(res)
})


function show(res){
    for(let i of res){
     let li= document.createElement("li")
     let h4= document.createElement("h4")
     li.innerText=i.id
     h4.innerText=i.title
     ul.append(li,h4)
    }

}*/

let btn=document.querySelector("button")
let inp=document.querySelector("input")
btn.addEventListener("click",()=>{
    let searchText=inp.value

fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).
then((data)=>{
    return data.json()

}).then((res)=>{
    console.log(res);
    show(res)
})
})

function show(res){
    let img = document.querySelector("img")
        let link = res[0].show.image.medium
        img.setAttribute("src",link)
    
}

