const randomColor = function (){
    const Hex = "0123456789ABCDEF"  //stores the digits that will randomized 
    let color = "#"

    for (let i = 0 ; i<6 ; i++){
        color += Hex[Math.floor(Math.random()*16)]
    }
    return color
}

let IntervalID

document.querySelector(".start").addEventListener("click", function () {
    if (!IntervalID) {
        IntervalID = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
        }, 1000);
    }
})

document.querySelector(".stop").addEventListener("click" , function () {
    clearInterval(IntervalID)
    IntervalID = null
})``````````