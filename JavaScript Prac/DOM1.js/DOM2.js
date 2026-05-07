//Four Pillars of DOM

//1.Selecting of an element

const a = document.querySelector("h1")
// console.log(a);

//2.Changing HTML

// const b = document.querySelector("h1")
// b.innerHTML= "My name is Lakhan"
// console.log(b)
document.querySelector("h1").innerHTML="My name is Coder"


//3.Changing CSS

// const c = document.querySelector("h1")
// c.style.backgroundColor="red"

document.querySelector("h1").style.color="white";



//4.Event Listner