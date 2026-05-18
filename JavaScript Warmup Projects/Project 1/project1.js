//make a rectangle and when we move mouse on that rectangle on the left side we want to gradually change the color of that rectangle to red and when we move mouse to the right side we want to change the color to blue 

const rect = document.querySelector("#centre");

rect.addEventListener("mousemove", function(details){
    // console.log("Hila dala re")
    const rectPosition = rect.getBoundingClientRect();
    const rectVal = details.clientX-rectPosition.left;
    
    if (rectVal < rectPosition.width/2) {
        // console.log("right")
        const redcolor = gsap.utils.mapRange(
            0,
            rectPosition.width/2,
            255,
            0,
            rectVal,
        );

        gsap.to(rect, {
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease : "power4.out",
        });
    }
    else {
        // console.log("left")
        const bluecolor = gsap.utils.mapRange(
            rectPosition.width/2,
            rectPosition.width,
            0,
            255,
            rectVal,
        );

        gsap.to(rect, {
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease : "power4.out",
        });
    }
})