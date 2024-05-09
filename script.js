let  randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.Guesses');
const remaining = document.querySelector('.lastresult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.result');

const p = document.createElement('p')


let preguess = []
let numguess = 1

let playgame = true
if (playgame) {
    submit.addEventListener('click',function (e){
        e.preventDefault()
       const guess =  parseInt(userinput.value)
       console.log(guess);
       validateguess(guess)
    })
}
function validateguess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
        
    }
    else if (guess<1) {
        alert('Please enter a number greater than 1')
    }
    else if (guess>100) {
        alert('Please enter a  number less than 100')
    }
    else{
        preguess.push(guess)
        if (numguess === 11) {
            displayguess(guess)
            displaymessage(`Guess Over. Random Number ${randomNumber}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage(`You gussed it right`)
        endgame()
    }
    else if (guess < randomNumber) {
        displaymessage(`Number is too low`)
    }
    else if (guess > randomNumber) {
        displaymessage(`Number is too high`)
    }
}
function displayguess(guess) {
    userinput.value = '';
    guessslot.innerHTML += `${guess} `
    numguess++;
    remaining.innerHTML = `${11-numguess}`
}
function displaymessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`
}
function endgame() {
    userinput.value = ''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="Newgame">Start new Game</h2>`
    startover.appendChild(p)
    playgame = false
    newgame()
}
function newgame() {
   const newgamebutton = document.querySelector('#Newgame')
    newgamebutton.addEventListener('click',function (e) {
        randomNumber = parseInt(Math.random()*100+1);
        preguess = []
        numguess = 1
        guessslot.innerHTML = `${11-numguess}`
        userinput.removeAttribute('disabled')
        startover.removeChild(p)
        playgame = true
    })
}
