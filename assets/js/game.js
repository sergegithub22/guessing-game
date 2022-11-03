var inputNumber = document.querySelector(".main-input");
var resultArea = document.querySelector(".info");
var tryesQuantity = document.querySelector(".counter-quantity");
var totalTryesQuantity = document.querySelector(".counter-total-quantity");
var percentsArea = document.querySelector(".counter-percent");
var score = document.querySelector(".counter-score");
var button = document.querySelector(".button");
var random = randomNumber()
var guessesPercents = 0
var trying = 0
var sessionTryes = 0
var guess = 0
var miss = 0
var clearTrig = 0


start()
console.log(tryesQuantity.textContent)
function game(evt) {
  if (clearTrig === 1){
    sessionTryes = 0
    clearTrig = 0
    tryesQuantity.textContent = tryesQuantity.textContent.toString() 
  } 
  console.log(random)
  if (parseInt(inputNumber.value) === random) {guessNumber()}
  else {noneGuessNumber()}
  calcPersents()
  console.log(tryesQuantity.textContent)
}

button.addEventListener("click", game);

function start() {
  totalTryesQuantity.textContent = 0
  tryesQuantity.textContent = 0
  percentsArea.textContent = 0
  score.textContent = 4
  sessionTryes = 0
}
function randomNumber() {
  return  Math.floor(Math.random() * (11 - 1) + 1)
}
function guessNumber() {
  trying = trying + 1
  guess = guess + 1
  sessionTryes = sessionTryes + 1
  tryesQuantity.textContent = sessionTryes.toString()
  totalTryesQuantity.textContent = trying.toString()
  score.textContent  = parseInt(score.textContent, 10) + 3
  resultArea.value = 'You guessed.' + '\n' + 'New rnd is ready'
  inputNumber.value = ' '
  clearTrig = 1
  random = randomNumber()
}
function noneGuessNumber() {
  trying = trying + 1
  miss = miss + 1
  sessionTryes = sessionTryes + 1
  tryesQuantity.textContent = sessionTryes.toString()
  totalTryesQuantity.textContent = trying.toString()
  score.textContent  = parseInt(score.textContent, 10) - 1
  if (parseInt(inputNumber.value) < random ){
    resultArea.value = 'Too low'
  }
  if (parseInt(inputNumber.value) > random ) {
    resultArea.value = 'Too high'
  }
}
function calcPersents() {
  guessesPercents = Math.floor((guess/trying)*100)
  percentsArea.textContent = guessesPercents.toString() + '%'
}






