const body = document.querySelector("#main");
const arrow = document.querySelector(".cursor");

body.addEventListener("mousemove", function(dets){
    // console.log(dets)
    arrow.style.left = dets.x +"px"
    arrow.style.top = dets.y +"px"
})