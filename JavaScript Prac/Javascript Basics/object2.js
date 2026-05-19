//Singleton Objects using constructor 

const tinderUser = new Object()

tinderUser.id = "1234",
tinderUser.name = "Anurag",
tinderUser.LoggedIn = false

//console.log(tinderUser)


const regularUser = {
    email : "Anu@gmail.com",
    fullName : {
        userfullname : {
            FirstName : "Anurag",
            LastName :"Singh"
        }
    }
}

//console.log (regularUser.fullName.userfullname.FirstName)


const obj1 = { 1: "a" , 2: "b"} 
const obj2 = { 3: "c" , 4: "d"}

//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const obj3 = Object.assign ({},obj1,obj2)                 //  target/source
// console.log(obj3);


const User = [
    {
        id : 1, 
        name:"Anurag",
    },
    {
        id : 3, 
        name:"rag",
    },
    {
        id : 2, 
        name:"Anu",
    }
]

User[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));                       //Both keys & values 

console.log(tinderUser.hasOwnProperty(`isLogged`));            // to check any properties 