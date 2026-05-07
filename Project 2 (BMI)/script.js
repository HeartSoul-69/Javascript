const form = document.querySelector("form")

form.addEventListener("submit" , function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const res = document.querySelector("#result")

    if (height === " " || height < 0 || isNaN(height)) {
        res.innerHTML =     `Please enter a valid height ${height}`
    }
    else if (weight === " " || weight < 0  || isNaN(weight)){
        res.innerHTML = `Please enter a valid weight ${weight}`
    }
    else {
        const BMI  = (weight/((height*height)/10000)).toFixed(2)
        res.innerHTML = `<span>${BMI}</span>`
    }
   
})


