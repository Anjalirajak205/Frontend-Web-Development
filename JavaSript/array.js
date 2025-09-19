/*let k=3
let n=Array.length
let wSum=0;
let arr=[1,2,-3,4,5]

for(let i=0;i<k;i++){
    wSum+=arr[i]
}
let maxSum=wSum
for(let i=k;i<n;i++){
    wSum=wSum+arr[i]-arr[i-k]
    if(wSum>maxSum){
        maxSum=wSum
    }
}
console.log(maxSum)*/

let p1 = new Promise((res,rej)=>{
  res()
})

let p2 = new Promise((res,rej)=>{
    rej()
})

let p3 = new Promise((res,rej)=>{
  //  res()
  console.log("hello")
})

/*Promise.all((p1,p2,p3)).then((res)=>{
console.log(res);
})*/

Promise.allSettled(()=>{

})