var inputNumber = document.querySelector(".main-input");
var mobileInputNumber = document.querySelector(".mobile-main-input");
var resultArea = document.querySelectorAll(".info");
var tryesQuantity = document.querySelectorAll(".counter-quantity");
var totalTryesQuantity = document.querySelectorAll(".counter-total-quantity");
var percentsArea = document.querySelectorAll(".counter-percent");
var score = document.querySelectorAll(".counter-score");
var button = document.querySelector(".button");
var keyBoardsPull = document.querySelectorAll(".button-keyboard");
var random = randomNumber()
var guessesPercents = 0
var trying = 0
var sessionTryes = 0
var guess = 0
var miss = 0
var clearTrig = 0
var r = 0
var s = 0
var p = 0
var ttQ = 0
var tQ = 0


start()
for (var i = keyBoardsPull.length - 1; i >= 0; i--) {  
    keyBoardsPull[i].addEventListener("click", useKeyboard);}
button.addEventListener("click", game);



function game() {
  if (clearTrig === 1){
    sessionTryes = 0
    clearTrig = 0
    tryesQuantity.textContent = tryesQuantity.textContent.toString() 
  } 
  console.log(random)
  if (parseInt(inputNumber.value) || parseInt(mobileInputNumber.value) === random) {guessNumber()}
  else {noneGuessNumber()}
  calcPersents()
}






function start() {
  for ( tQ = tryesQuantity.length - 1; tQ >= 0; tQ--) {
    tryesQuantity[tQ].textContent  = 0
  }
  totalTryesQuantity.textContent = 0
  for ( ttQ = tryesQuantity.length - 1; ttQ >= 0; ttQ--) {
    tryesQuantity[ttQ].textContent  = 0
  }
  tryesQuantity.textContent = 0
  for ( p = percentsArea.length - 1; p >= 0; p--) {
    percentsArea[p].textContent  = 0
  }
  for ( s = score.length - 1; s >= 0; s--) {
    score[s].textContent  = 4
  }
  sessionTryes = 0
}

function randomNumber() {
  return  Math.floor(Math.random() * (11 - 1) + 1)
}

function guessNumber() {
  trying = trying + 1
  guess = guess + 1
  sessionTryes = sessionTryes + 1
  for ( tQ = tryesQuantity.length - 1; tQ >= 0; tQ--) {
    tryesQuantity[tQ].textContent  = sessionTryes.toString()
  }
  for ( ttQ = totalTryesQuantity.length - 1; ttQ >= 0; ttQ--) {
    totalTryesQuantity[ttQ].textContent  = trying.toString()
  }
 
  for ( r = resultArea.length - 1; r >= 0; r--) {
    resultArea[r].value = 'You guessed.' + '\n' + 'New rnd is ready'
  }
  for ( s = score.length - 1; s >= 0; s--) {
    score[s].textContent  = parseInt(score[0].textContent, 10) + 3
  }
  inputNumber.value = ' '
  mobileInputNumber.value = ' '
  clearTrig = 1
  random = randomNumber()
}

function noneGuessNumber() {
  trying = trying + 1
  miss = miss + 1
  sessionTryes = sessionTryes + 1
  for ( tQ = tryesQuantity.length - 1; tQ >= 0; tQ--) {
    tryesQuantity[tQ].textContent  = sessionTryes.toString()
  }
  for ( ttQ = totalTryesQuantity.length - 1; ttQ >= 0; ttQ--) {
    totalTryesQuantity[ttQ].textContent  = trying.toString()
  }
  for ( s = score.length - 1; s >= 0; s--) {
    score[s].textContent  = parseInt(score[0].textContent, 10) - 1
  } 
  if (parseInt(inputNumber.value) || parseInt(mobileInputNumber.value) < random ){
    for ( r = resultArea.length - 1; r >= 0; r--){
      resultArea[r].value = 'Too low'
    }
  }
  if (parseInt(inputNumber.value) || parseInt(mobileInputNumber.value) > random ) {
    for ( r = resultArea.length - 1; r >= 0; r--){
      resultArea[r].value = 'Too high'
    }
  }
  inputNumber.value = ' '
  mobileInputNumber.value = ' '
}

function calcPersents() {
  guessesPercents = Math.floor((guess/trying)*100)
  for ( p = percentsArea.length - 1; p >= 0; p--) {
    percentsArea[p].textContent  = percentsArea.textContent = guessesPercents.toString() + '%'
  }
  percentsArea.textContent = guessesPercents.toString() + '%'
}

function useKeyboard(evt) {
  if (evt.currentTarget.textContent === 'Del'){
    mobileInputNumber.value = ' '
  }
  else if (evt.currentTarget.textContent === 'Compare'){
    game()
    
  } 
  else  {
    mobileInputNumber.value = mobileInputNumber.value + evt.currentTarget.textContent
  }
}





