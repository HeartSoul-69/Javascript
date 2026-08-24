//Async/Await = Async = makes a function return a promise 
//              Await = makes an async function wait for a promise 

// Allows you to write asynchronous code in a synchronous manner Async doesnt have resolve or reject parameters. Everything after await is places in an event queue.

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
        },2200)
    })
}

function Hago  () {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> {
            resolve("You did the pupu...")
        },6500  )
    })
}

async function Kaam() {
    try {
    const CookRes = await Cook();
    console.log(CookRes);

    const KhaoRes = await Khao();
    console.log(KhaoRes);

    const HagoRes = await Hago();
    console.log(HagoRes)

    console.log("You finished your Task")
    }
    catch (error){
        console.error(error);
    }

}

Kaam();