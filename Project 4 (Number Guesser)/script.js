//to generate random numbers
let randomNum = parseInt(Math.random()*100+1);

// submit button
const submit = document.querySelector("#submit")

//guess box
const UserInput = document.querySelector("#guessField") 

//previous guesses
const guessSlot = document.querySelector(".guess") 

//guesses remaining
const remaining = document.querySelector(".lastResult")

//guess is low or high
const lowOrhigh = document.querySelector(".lowOrhigh")

//result 
const StartOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = [] ; //Create empty array
let numGuess  = 1  ;  //starting countdown guess  

let PlayGame = true ;

if(PlayGame) {
        submit.addEventListener("click" , function (e) {
            e.preventDefault()
            const input = parseInt(UserInput.value);
            //console.log(guess);
            validateGuess(input);
        });
    }

//validate guesses - are numbers b/w 1-100
function validateGuess(guess){
    if (guess < 0 || guess > 100 || isNaN(guess)) {
        alert(`Please enter a valid number`)
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over <br> Random number was ${randomNum}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}



// is number right ? 
function checkGuess(guess){
    if (guess === randomNum) {
        displayMessage("You guessed it right")
    }
    else if (guess < randomNum) {
        displayMessage ("Your number is too loww")
    }
    else if (guess > randomNum) {
        displayMessage ("Your number is too high")
    }
}



////interact with DOM - functions => less the countdown of guesses and take guesses in arr clean the input 
function displayGuess(guess){
    UserInput.value  = " "
    guessSlot.innerHTML += `${guess} , ` 
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}


//display whether low or high
function displayMessage(message){
    lowOrhigh.innerHTML = `<h3> ${message} </h3>`
}


function endGame(){
    UserInput.value = " "
    UserInput.setAttribute('disabled' , "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="start">New Game</h2>`
    PlayGame = false;
    StartOver.appendChild(p)
    newGame()
}

function newGame(){
    const GameButton = document.querySelector("#start")
    GameButton.addEventListener("click" , function (e) {
        randomNum = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess =  1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11-numGuess}`
        UserInput.removeAttribute("disabled")
        StartOver.removeChild(p)
        PlayGame = true ;
        
    })
}

