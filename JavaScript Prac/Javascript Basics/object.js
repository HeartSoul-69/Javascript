//Singleton
Object.create                //controctor method also knows as singleton 

//Object Literal
const MySym = Symbol("key 1")

const JsUser = {
    name : "Anurag",          // unlike array we can define our key a name instead of arr[0],arr[1]
    "Full Name" : "Anurag Singh",
    [MySym] : "my key 1",
    age : 18,
    location : "delhi",
    email : "anurag455singh@gmail.com",
    isLogged : false,
    LastLogin : ["monday","tuesday"],
}

JsUser.email = "Aaloo Bhaji"                    // Use '=' sign to overwrite old data

console.log(JsUser.email);                     // 1st Method to access 
console.log(JsUser["email"]);                  // 2nd method (works fo every type of key)
console.log(JsUser["Full Name"]);

console.log(JsUser[MySym]);

Object.freeze[JsUser]                           // cant be overwrit after this command

JsUser.greet = function () {
    console.log = "Hellow Boyy";
}

JsUser.greet2 = function (){
    console.log = `Wassup my Boyy, ${this["Full Name"]}`
}

console.log(JsUser.greet2());