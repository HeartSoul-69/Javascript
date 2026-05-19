//High Order Array Loops

const array = [1, 2, 3, 4, 5];

//for of loop 
for (const num of array ) {             
    //console.log(num);
}

const greet = "Hello World!";

for (const str of greet ) {
   // console.log(`Each char is ${str}`);
}


//Maps
const map = new Map()

map.set("IN","India");
map.set("PAK","Pakistan");
map.set("FR","France");

//console.log(map)

for([key,value] of map) {
  //  console.log(key,`->`,value);
}

//For Objects
const MyObject = {
    js : "Javascript",
    cpp: "C++",
    rb : "ruby",
    swift: "Swift by apple"
}

for (const key in MyObject) {
    //console.log(key);
    //console.log(MyObject[key]);
    console.log(`${key} shortcut is for ${MyObject[key]}`)
}