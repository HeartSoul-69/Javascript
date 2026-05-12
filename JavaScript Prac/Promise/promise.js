//1st Method 
const PromiseOne = new Promise(function (resolve, reject){
    //Do an async task 
    //DB calls , cryptography , network
    setTimeout(function () {
        console.log("Async Timeout");
        resolve()
    },1000)
})

PromiseOne.then(function(){
    console.log("Promise Consumed");
})


//2nd method 
new Promise(function (resolve,reject){
    setTimeout(function (){
        console.log ("Ansync Timeout 2")
        resolve()
    },1000)
}).then(function (){
    console.log("Promise consumed 2")
})


//3rd Promise
const Promise3 = new Promise (function (resolve,reject) {
    setTimeout(function(){
        resolve({username:"Anurag" , email : "anurag@gmail.com"})
    },1000)
})

Promise3.then(function (User) {
    console.log(User)
})


//4rth Promise

const PromiseFour = new Promise (function (resolve,  reject) {
    setTimeout(function (){
        let error = true
        if (!error) {
            resolve({username:"Anurag" , Password:"123"})
        } 
        else {
            reject("Error : Something went wrong!!!")
        }
    },1000)
})

//PromiseFour.then().catch() 

PromiseFour
.then(function (User) {
    console.log(User)
    return User.username
})
.then((username)=> {
    console.log(username);
})
.catch ((error) => {
    console.log(error)
})
.finally (() => {
    console.log("The Promise is either resolved or rejected")
})


//Promise 5
const PromiseFive = new Promise(function (resolve,reject){ 
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({Username :"Bhondurag" , Password : "6969"})
        }
        else {
            reject("error : something went wrong")
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()