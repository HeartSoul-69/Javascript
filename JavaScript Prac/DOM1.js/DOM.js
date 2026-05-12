// const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[3].HTML);

// for(let i=0 ; i<parent.children.length ; i++) {
//     console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.color="orange";

// console.log(parent.firstElementChild.innerHTML);
// console.log(parent.lastElementChild);

// document.querySelector('.day');

// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

//console.log("NODES: ", parent.ChildNodes);


//Creating a node
const div = document.createElement('div')
console.log(div);

div.className = "main";
//div.id = "myId";
div.id = Math.round(Math.random());
div.setAttribute("title", "New Title");
div.style.backgroundColor = "green";
div.style.padding = "12px";
div.innerText = "Anurag Singh";                           // only overwrite the existing

const div = div.createTextNode("Anurag Singh")
div.appendChild(addText)

document.body.appendChild(div)