const asyncExample = async () => {
 return 10  ;
}


//Using promise based value
asyncExample()
.then((result)=>{
console.log(`Result is : ${result}`);
})
.catch((err)=>{console.log(`The error is:  ${err}`)});


//Same using Async-Await
// const result = await asyncExample();
// console.log("Result ==========",result);

// The code above will give an error beause we called without async function
 
const newResult = async () => {
    const result = await asyncExample();
    console.log("Result ==========",result);
}
newResult();

