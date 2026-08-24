// promise = An object that manages asynchronous operations. Wrap a promise object around {asynchronous code} 
// "I promise to return a value"
//Pending -> Resolved or Rejected
//new Promise ((resolve, rejevct) => {
// asynchronous code})

//1.Cook Food
//2.Eat Food
//3.Poop

function Cook () {
    return new Promise ((resolve , reject) => {
        setTimeout (() => {
            resolve ("You Cooked the Foodu...")
        },1500)
    })
}

function Khao () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve("You Ate the Foodu...")
        },2500)
    })
}

function Hago  () {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            resolve("You did the pupu...")
        },500  )
    })
}

Cook().then((value) => {
    console.log(value)
    return Khao()
}).then((value) => {
    console.log(value)
    return Hago ()
}).then((value)=> {
    console.log(value);
}).finally(() => {
    console.log("All tasks are completed")
})