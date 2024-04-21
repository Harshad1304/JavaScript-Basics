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