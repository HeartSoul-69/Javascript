const a = document.querySelectorAll(".button")
const b = document.querySelector("body")

a.forEach(function (button) {
    button.addEventListener("click" , function(e){
        if (e.target.id === "grey") {
            b.style.backgroundColor = e.target.id
        }
        if (e.target.id === "yellow") {
            b.style.backgroundColor = e.target.id
        }
        if (e.target.id === "white") {
            b.style.backgroundColor = e.target.id
        }
        if (e.target.id === "green") {
            b.style.backgroundColor = e.target.id
        }
    })
})

