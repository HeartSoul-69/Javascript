//Q1. Create a Promise that resolves with "Hello World" after 2 seconds
// Q4. Consume a rejected Promise using .catch()
// Q5. Create a Promise that returns the sum of two numbers after 1 second

const getPromise = new Promise (function (resolve , reject){
    setTimeout(function (){
        resolve("Hellow World")
    },2000)
})

getPromise.then(function (message){
    console.log(message)
})


// Q2. Create a Promise that rejects with "Something went wrong" after 1 second

const getpromise2 = new Promise (function (resolve , reject){
    setTimeout(function (){
        let error = true;
        if (!error) {
            resolve("Hellow Mitro")
        }
        else {
            reject("Something went wrong bye mitro")
        }
    },1000)
})

getpromise2.then(function (message){
    console.log(message)
})
.catch (function (error){
    console.log(error)
})

// Q3. Consume a Promise using .then() and print the resolved value