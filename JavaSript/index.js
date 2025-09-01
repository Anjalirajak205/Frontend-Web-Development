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

console.log(typeof(true));
console.log(typeof(typeof(true)));
console.log((typeof(5)));

let arr=[2,"hello",true]
for (let i=0;i<arr.length;i++){
  console.log(arr[i],typeof(arr[i]))
}






