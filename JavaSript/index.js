// var a = 10
// console.log(a)

// let a=10
// a=20
// const c=10

// console.log(5==5)  //== sirf value check kerta hai aur ===
// // value aur data dono compare kerta hai aur == assign kerta hai value
// console.log(5==true)
// console.log({}=={})
// console.log(5=='5')
// console.log(5==='5');

//difference null and undefined

//var a = null

//let a = 100
//let to=a==100
//console.log(to);

// let useName="Anjali"
// let lastname="Rajak"
// console.log(`${useName} ${lastname}`);
// console.log(useName+lastname)
// console.log(useName+" "+lastname)


//if-else in js
//let a=true
//let a=5

//if(a)
//if(0)
// if(a=true){
//   console.log("hello");
// }
// else{
//     console.log("hii");
// }
// let a=false
// a?console.log("hii"):console.log("byee");
// console.log(1+1);
// console.log('1'+2)
// console.log('1'-2)

// 28 august

// let arr=[1,2,3,4,5];
//         let sum = arr.reduce((a,b,c,d)=>{
//              return a+b;
//         },10)
//         console.log(sum);


//filter functions accept the conditional statements.

    /*let arr=[1,2,3,4,5,64,3,5,2,5,2,34];

   let data = arr.filter((a,b,c,d)=>{
     return a>2
   })
   console.log(data)*/

//sorting the elementss.By using sort functions.

  /*let arr=[1,2,3,4,5,64,3,5,2,5,2,34];
  let data = arr.sort((a,b,c,d)=>{
     return a-b;
  })

  console.log(data)*/

//objects
//If we write a function in an object then it is called method...

   /*let obj={
     id:1,
     name:"Anjali",
     sum:function(){
          console.log("hello")
     }
  }
  obj.sum()
  //console.log(obj.id)*/

    /*function sum(a){
      console.log(a)
    }
    let obj1={
     id:1
    }
    sum(obj1)*/


//a=5
/*console.log(a);
var a=5*/
 

// hoisting

/*var a=5
var a=()=>{
    console.log("hii")
}
a()*/

//pure functionn

  /*function sum(){
  console.log("hii");
  }
  sum()*/

//impure function

   /*let a=5
   function sum(){
   a+=5;
   return a
  }
  console.log(sum());
  console.log(sum());*/

//{
  //let a=10  
  /*var a=10  //var ko kabhi bhi khi se bhi declare kr skte haii isse hum block ke bhar bhi acess kr skte hai . It is functional scope
//  console.log(a);
}
console.log(a);*/ // variable is not declared 
  

/*let a=10   // let ko block ke bhar access nhi kr skte hai .It is block scope
{
  let a=30
}
console.log(a)*/

/*function sum(){
  var a=5
}
console.log(a);*/


// Array

/*let arr =[1,3,4,6,78,89]
arr.push(11) // add the element at last
arr.pop      // removes the element from last
arr.unshift(101) // adds the element in the first position 
arr.shift()  // removes the element from first position 
console.log(arr);*/

//HOF - Higher order function 
// a function that only returns a function. koi bhi function jo apne argument m koi function contain kare

/*function outer(){
  function inner(){
    console.log("inner");
  
  }
  return inner
}
let a=outer()
a()*/

/*function outer(a){
  a()

}
function inner(){
  console.log("hii")
}

outer (inner)*/

// console.log(typeof(true));
// console.log(typeof(typeof(true)));
// console.log((typeof(5)));

// let arr=[2,"hello",true]
// for (let i=0;i<arr.length;i++){
//   console.log(arr[i],typeof(arr[i]))
// }

//let arr=[1,2,"hello","hii",true,false]

/*function getString(arr){
  let res=[]
  for(let i of arr){
    if(typeof i == "string")
        res.push (i)
    }
    return res
  }
  console.log(getString(arr))

  function getnumber(arr){
  let res=[]
  for(let i of arr){
    if(typeof i == "number")
        res.push (i)
    }
    return res
  }
  console.log(getnumber(arr))*/

  /*function getString(i){
    return typeof i == "string"
  }

  function getnumber(i){
    return typeof i == "number"
  }

  function getBoolean(i){
    return typeof i == "boolean"
  }

  function getfunction(arr,fun){

    let res=[]
    for(let i of arr){
      if(fun(i)){
        res.push(i)
      }
    }
    return res
  }
  console.log(getfunction(arr,getString))
  console.log(getfunction(arr,getnumber))
  console.log(getfunction(arr,getBoolean))*/

// closure = jab bhi koi function kisi function ke ander return kerta hai toh 
     // voh apne sath ek copy carry karta hai parent function ki ,toh us function ke ander 
     //value ho ya na ho woh perfectly work krega 

  /*function outer(){
    let user="Anjali"
    function inner(){
      console.log(user)
    }
    return inner
  }
  let a=outer()
  a()*/


  /*setTimeout(()=>{
    console.log("hello");
  },300)

  setInterval(()=>{
    console.log("hiii");
  },300)*/


  /*for (let i=1;i<5;i++){
       setTimeout(()=>{
        console.log(i);
       },1000*i)
  }*/

       //window = It is a global object for js


  /*a=5
  console.log(this.a)  
  console.log(window)*/

 /* let obj={
    id:1,
    name:"hello",
    sum:function(){
      console.log(this)
    }
  }   
  obj.sum()*/

// this keyword: arrow function ke ander this keyword kaam nhi kerta hai woh as a global keyword treat hoga or block ke bhar ki value print krega (a=5)

/*a=5
let obj={
  //id:1,
  a:10,
  //name:"hello",
  sum:()=>{
       console.log(this.a);
  },
  id:1,
  name:"hello",
}
obj.sum()*/

// prototype concept: ek layer dikhti hai or ek layer nhi dikhtii.. It is a hiddenn data type which the hidden proprties of different data used in program.

/*let obj={
  id :1,
  name:"anjali"
}*/
//console.log(obj.toString());


/*let arr=[1,23,345]
console.log(Array.prototype);
console.log(arr.toString());*/

//let arr=[1,12,123,1234]
/*arr.myMap((a,b,c)=>{
  console.log(a)
})*/
/*Array.prototype.myMap=function(callback){
  let res=[]
  for(let i=0;i<this.length;i++){
    res.push(callback(this[i],i,this))
  }
  return res
}

 let data = arr.myMap((a,b,c)=>{
  return c
 })
console.log(data)*/

//Filter Functionss

//let arr=[1,2,3,5,6,7]
// let res=arr.filter((a,b,c)=>{
//   return a>2
// })
// console.log(res)
/*let arr=[1,2,3,5,6,7]
Array.prototype.myFilter=function(cb){
  let res=[]
  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this)){
      res.push(this[i])
    }
  }
  return res
}

let data=arr.myFilter((a,b,c)=>{
  return a%2==1
})
console.log(data);*/


// Asysnchronous Programming 

// insta   problemm

/*function step1(){
  setTimeout(()=>{
    console.log("photo");
  },5000)
}

function step2(){
  setTimeout(()=>{
    console.log("filter");
  },4000)
}

function step3(){
  setTimeout(()=>{
    console.log("caption");
  },3000)
}

function step4(){
  setTimeout(()=>{
    console.log("post");
  },2000)
}

step1()
step2()
step3()
step4()*/

//solution /  call back function 

/*function minus(){
  console.log("hiii");
}

function sum(fn){
  console.log("hello");
  fn()
}

sum(()=>{
  minus()
})*/

// call back hell

/*function step1(fn){
  setTimeout(()=>{
    console.log("photo");
    fn()
  },5000)
}

function step2(fn){
  setTimeout(()=>{
    console.log("filter");
    fn()
  },4000)
}

function step3(fn){
  setTimeout(()=>{
    console.log("caption");
    fn()
  },3000)
}

function step4(fn){
  setTimeout(()=>{
    console.log("post");
    fn()
  },2000)
}

step1(()=>{
  step2(()=>{
    step3(()=>{
       step4(()=>{
        
       })
    })
  })
})*/


console.log('start');

setTimeout(function(){
  console.log('run after 2 seconds');
},2000);

setTimeout(function(){
  console.log('run after 4 seconds');

},4000);

console.log('end')





