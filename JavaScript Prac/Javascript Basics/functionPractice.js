// function UserName (name) {
//     return `Hellow ${name}`;
// }
// UserName("Anurag")

// const User = {
//     name : "Anurag",
//     age : "13",
//     city : "Delhi",
// }

// console.log(User.name);                                 // dot notation method
// console.log(User["age"]);                              // block method

// User.email = "anurag@gmail.com";                      // add new property 

// console.log(User["email"]);
// console.log (User);


// const Medium = {
//     name:"Anurag",
//     greet: function() {
//        console.log("Hello Mitra")
//     }
// }

// console.log(Medium.greet())


// const Medium2 = {
//     name:"Anurag",
//     fullname : {
//         firstName:"Anurag",
//         lastName : "Singh",
//     }
// }

// console.log(Medium2.fullname.firstName)
// console.log(Medium2.fullname.lastName)


//looping to check 
const User = {name:"Anurag", age:"16"}

console.log("name" in User);
console.log("age" in User);
console.log("email" in User);