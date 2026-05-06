const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const height = (document.querySelector("#height").value)
    const weight = (document.querySelector("#weight").value)
    const res = document.querySelector("#result")

    if (height === " " || height < 0 || isNaN(height)) {
        res.innerHTML = "Please enter a valid height"
    }
    else if (weight === " " || height < 0 || isNaN(weight)){
        res.innerHTML = "Please enter a valid weight"
    }
    else {
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        res.innerHTML = BMI 
    }
})


