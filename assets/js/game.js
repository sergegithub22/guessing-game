var mobileInputNumber = document.querySelector(".mobile-main-input");
var resultArea = document.querySelector(".info");
var tryesQuantity = document.querySelector(".counter-quantity");
var totalTryesQuantity = document.querySelector(".counter-total-quantity");
var percentsArea = document.querySelector(".counter-percent");
var score = document.querySelector(".counter-score");
var keyBoardsPull = document.querySelectorAll(".button-keyboard");
var random = randomNumber()
var guessesPercents = 0
var trying = 0
var sessionTryes = 0
var guess = 0
var miss = 0
var clearTrig = 0



start()
for (var i = keyBoardsPull.length - 1; i >= 0; i--) {  
    keyBoardsPull[i].addEventListener("click", useKeyboard);}




function game() {
  if (clearTrig === 1){
    sessionTryes = 0
    clearTrig = 0
    tryesQuantity.textContent = tryesQuantity.textContent.toString() 
  } 
  if (parseInt(mobileInputNumber.value) === random) {guessNumber()}
  else {noneGuessNumber()}
  calcPersents()
}






function start() {
  totalTryesQuantity.textContent = 0
  tryesQuantity.textContent = 0
  percentsArea.textContent  = 0
  score.textContent  = 4
  sessionTryes = 0
}

function randomNumber() {
  return  Math.floor(Math.random() * (11 - 1) + 1)
}

function guessNumber() {
  trying = trying + 1
  guess = guess + 1
  sessionTryes = sessionTryes + 1
  tryesQuantity.textContent  = sessionTryes.toString()
  totalTryesQuantity.textContent  = trying.toString()
  resultArea.value = 'You guessed.' + '\n' +  'Random number was: ' + random + '\n' + 'New rnd is ready' 
  score.textContent  = parseInt(score.textContent, 10) + 3
  mobileInputNumber.value = ' '
  clearTrig = 1
  random = randomNumber()
}

function noneGuessNumber() {
  trying = trying + 1
  miss = miss + 1
  sessionTryes = sessionTryes + 1
  tryesQuantity.textContent  = sessionTryes.toString()
  totalTryesQuantity.textContent  = trying.toString()
  score.textContent  = parseInt(score.textContent, 10) - 1
  if (parseInt(mobileInputNumber.value) < random ){
    resultArea.value = 'Too low'
  }
  if (parseInt(mobileInputNumber.value) > random ) {
    resultArea.value = 'Too high'
  }
  mobileInputNumber.value = ' '
}

function calcPersents() {
  guessesPercents = Math.floor((guess/trying)*100)
  percentsArea.textContent = guessesPercents.toString() + '%'
}

function useKeyboard(evt) {
  if (evt.currentTarget.id === 'del'){
    mobileInputNumber.value = ' '
  }
  else if (evt.currentTarget.id === 'compare'){
    game() 
  } 
  else  {
    mobileInputNumber.value = mobileInputNumber.value + evt.currentTarget.textContent
  }
}





