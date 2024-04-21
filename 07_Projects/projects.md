# Projects releted to DOM

## Project Link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution Code

## Project 1 Js Code

```javascript
const btn = document.querySelectorAll('.button');
// console.log(btn);

const body = document.querySelector("body");

btn.forEach((btn)=>{
btn.addEventListener('click',((e)=>{
    switch (e.target.id) {
        case 'grey':
            body.style.backgroundColor = e.target.id;
            break;
    case 'white' : 
            body.style.backgroundColor = e.target.id;
            break ; 
    case 'blue' : 
            body.style.backgroundColor = e.target.id;
            break ; 
    case 'yellow' : 
            body.style.backgroundColor = e.target.id;
            break ; 
    case 'magenta' : 
            body.style.backgroundColor = e.target.id;
            break ; 
        default:  body.style.backgroundColor = 'white';
            break;
    }
       
   
}))   
})
```

## Project 1 Code With Function Approch for simple and shorter code

```javascript
const btn = document.querySelectorAll('.button');
// console.log(btn);

const btn = document.querySelectorAll('.button');
// console.log(btn);

const body = document.querySelector("body");

function colorChanger(colorId){
    body.style.backgroundColor = colorId ;   
}


btn.forEach( (btn)=>{
    
    btn.addEventListener('click',(e)=>{
        colorChanger(e.target.id);
        console.log(e.target.id) // Every time we are clicking we are getting the id so we can use that in function to change our backGround color 
    })

} )

```


## Project 2 Code

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height ==="" || height < 0 || isNaN(height)){

        results.innerHTML = "Please give a valid height"

    } else if(weight ==="" || weight < 0 || isNaN(weight)){

        results.innerHTML = "Please give a valid weight"

    } else {

       const bmi = (weight /((height*height)/10000)).toFixed(2);

        if(bmi < 18.6 ) {
            results.innerHTML = `<span> BMI :- ${bmi}</span> <br> Under Weight `
        }
        if(bmi > 18.6 && bmi < 24.9  ) {
            results.innerHTML = `<span> BMI :- ${bmi}</span> <br> Normal Range `
        }
        if(bmi > 24.9 ){ 
          results.innerHTML = `<span> BMI :- ${bmi}</span> <br> OverWeight `
          console.log(bmi)
   }
    }
    
    })

```

## Project 3 (Digital Clock) Code 

```javascript 
const clock = document.getElementById('clock');


setInterval(function(){
    
let date = new Date();

      clock.innerHTML = date.toLocaleTimeString();


},1000)
 
```

## Project 4 (Guesing Game) Code
```javaScript 
let randomNumber = parseInt(Math.random() * 100 + 1 );
// console.log(randomNumber); 
const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const userGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');  
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

 let prevGuess = [];

 let attempts = 1;
 
 let playGane = true;
 
 if(playGane){
    submitBtn.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
         
    })
 }
 
  function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter A valid Number')
    } else if (guess < 1 ){
        alert('Please Enter A Number Greater Than 1 ')
    } else if (guess > 100 ){ 
        alert('Please Enter A Number Less Than 100')
    } else {
        prevGuess.push(guess);
        if(attempts === 11 ){
            displayGuess(guess);
            displayMessage(`Game Over !! Random Number Was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);  
        }
    }
  }
 
 function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You Guessed It Right ');
        endGame();
    } else if (guess < randomNumber){
        displayMessage (`Number is Too low `);
        
    } else if (guess > randomNumber){
        displayMessage (`Number is Too High `);
        
    }
 }

function displayGuess(guess){
    userInput.value = '';
    userGuesses.innerHTML += ` | ${guess}  `;
    attempts++ ;
    remaining.innerHTML = `${11-attempts}`;

}

 function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
 }

 function endGame(){

    userInput.value = '';
    userInput.setAttribute('disabled','');
    submitBtn.setAttribute('disabled','');
    p.classList.add('button'); 
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
    startOver.appendChild(p);
    playGane = false; 
    newGame();
 }

 function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1 );
        prevGuess = [];
        attempts = 1 ; 
        userGuesses.innerHTML = '';
        remaining.innerHTML = `${11-attempts}`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        submitBtn.removeAttribute('disabled');
        startOver.removeChild(p);
        playGane = true;
    })
 }
 ```