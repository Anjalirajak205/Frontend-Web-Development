let inp= document.querySelector("input")
let button= document.querySelectorAll("button")
//console.log(button)

for(let btn of button){
    btn.addEventListener("click",()=>{
        //console.log(hegehe)
        let text =btn.innerText

        if(text=="C"){
           inp.value=""
        }
        else if(text==="="){
            
            inp.value = eval(inp.value);
          
    }
        else{
            inp.value=inp.value+text
        }
        
    })

}

