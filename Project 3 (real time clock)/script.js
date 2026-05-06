const clock = document.querySelector("#clock")

let date = new Date()
setInterval(function(time){
    let date = new Date();
    //console.log(date.toLocaleDateString())
    clock.innerHTML = date.toLocaleDateString();
},1000) 
   
