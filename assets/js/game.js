var inputNumber = document.querySelector(".main-input");
var resultArea = document.querySelector(".info");
var tryesQuantity = document.querySelector(".tryes-quantity");
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
console.log(tryesQuantity.value)
function game(evt) {
  if (clearTrig === 1){
    sessionTryes = 0
    clearTrig = 0
    tryesQuantity.value = tryesQuantity.value.toString() 
  } 
  console.log(random)
  if (parseInt(inputNumber.value) === random) {guessNumber()}
  else {noneGuessNumber()}
  calcPersents()
  console.log(tryesQuantity.value)

}




button.addEventListener("click", game);


function start() {
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
  tryesQuantity.value = 'Attempts:' + '\t' +  sessionTryes.toString()
  score.textContent  = parseInt(score.textContent, 10) + 3
  resultArea.value = 'You guess. New rnd is ready'
  inputNumber.value = ' '
  clearTrig = 1
  random = randomNumber()
}
function noneGuessNumber() {
  trying = trying + 1
  miss = miss + 1
  sessionTryes = sessionTryes + 1
  tryesQuantity.value = 'Attempts:' + '\t' + sessionTryes.toString()
  score.textContent  = parseInt(score.textContent, 10) - 1
  if (parseInt(inputNumber.value) < random ){
    resultArea.value = 'Result:' + '\t' + 'Too low'
  }
  if (parseInt(inputNumber.value) > random ) {
    resultArea.value = 'Result:' + '\t' + 'Too big'
  }
}
function calcPersents() {
  guessesPercents = Math.floor((guess/trying)*100)
  percentsArea.textContent = guessesPercents.toString() + '%'
}






