const asyncExample = async () => {
    return a ;
}


//Using promise based value
// asyncExample()
// .then((result)=>{
// console.log(`Result is : ${result}`);
// })
// .catch((err)=>{console.log(`The error is:  ${err}`)});


//Same using Async-Await
// const result = await asyncExample();
// console.log("Result ==========",result);

// The code above will give an error beause we called without async function
// const result1 =  asyncExample();
// console.log("Result1 value is ==========",result1);

const newResult = async () => {

    try{
        const result = await asyncExample();
        console.log("Result ==========",result);
    }catch(err){
        console.log("Error is:", err);
    }

    
}
newResult();

