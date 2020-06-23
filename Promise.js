const promiseExample = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(20)
        },2000);
    
    });

    // promise.then((yes)=>console.log("yes")).catch((no)=>console.log("no"))

    console.log("name is =====",promise);
console.log("SseondRum");

}

const myName = promiseExample();

