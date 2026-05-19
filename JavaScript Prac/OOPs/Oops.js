// const User = {
//     username: "Anurag Singh",
//     LoginCount: 8,
//     SignIn : true,

//     getUserdetails:function(){
//         // console.log("got user details from the database")
//         // console.log(`Username : ${this.username}`);
//         console.log(this)
//     }
// }
// console.log(User.username);
// console.log(User.getUserdetails());

//"new" keyword significance 
function User2(username , SignIn , LoggedIn) {
    this.username = username;
    this.SignIn   = SignIn;
    this.LoggedIn = LoggedIn;

    return this
} 

const userOne = new User2 ("Anurag", 8 , 9);
console.log(userOne)
;
const userTwo = new User2 ("Bittu", 6 , 9 );
console.log(userTwo);