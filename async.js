//This is just a practice section for asynchronous functions`
//Call back functions
//setTimeout(console.log("Hello"), 500) //in 500 ms call console.log

//returns an error to showcase error handling in promises.
new Promise((_,reject)=> reject(new Error("Fail")))
.then(()=>{
    console.log("Handler1")
}).catch(e =>{
    console.log("Caught an error: " + e);
    return "Nothing";
}).then(value=> console.log("Handler 2", value));
