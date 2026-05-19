//Q1. Create a Promise that resolves with "Hello World" after 2 second

const Getpromise = new Promise (function (resolve, reject){
    setTimeout(function (){
        resolve("Hellow World")
    },2000)
})
.then((value) => {
    console.log(value)
})

//Q6. Create a function that returns a Promise resolving with user data:
//{name: "Anurag", age: 18}
const getprmoise2 = new Promise (function(resolve , reject){
    const User = {
        name: "Anurag", 
        age: 18
    };

    resolve(User)        
});

getprmoise2.then(function(details){
    console.log(details)
})