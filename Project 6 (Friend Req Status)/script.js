// const isStatus = document.querySelector("h5")
// const addFriend = document.querySelector("#addit")
// const removeFriend = document.querySelector("#remove")

// addFriend.addEventListener("click",function(){
//     isStatus.innerHTML = "Friends";
//     isStatus.style.color = "green";
// })

// removeFriend.addEventListener("click",function(){
//     isStatus.innerHTML="Stranger";
//     isStatus.style.color = "red";
// })

const isStatus = document.querySelector("h5");
const btn = document.querySelector("#addit");

let check = true;

btn.addEventListener("click",function (){
    if (check ==  true){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        btn.innerHTML = "Remove"
        check = false;
    }

    else { 
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        check = true;
    }
    
})