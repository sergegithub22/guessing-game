var mobileInputNumber = document.querySelector(".mobile-main-input");
var resultArea = document.querySelector(".info");
var totalTryesQuantity = document.querySelector(".counter-total-quantity");
var percentsArea = document.querySelector(".counter-percent");
var keyBoardsPull = document.querySelectorAll(".button-keyboard");
var mainHeader = document.querySelector(".header");
var random = randomNumber()
var guessesPercents = 0
var trying = 0
var sessionTryes = 0
var guess = 0
var miss = 0
var clearTrig = 0
var buttonTheme = document.querySelector(".button-theme")
var newGame
var AttemptsLeft


start()
for (var i = keyBoardsPull.length - 1; i >= 0; i--) {  
    keyBoardsPull[i].addEventListener("click", useKeyboard);}
buttonTheme.addEventListener("click", theme);

function game() {
  if (newGame === 1) {
    start()
  }
  if (clearTrig === 1){
    sessionTryes = 0
    clearTrig = 0 
  }  
  if (parseInt(mobileInputNumber.value) === random) {guessNumber()}
  else {noneGuessNumber()}
  calcPersents()
}

function start() {
  totalTryesQuantity.textContent = 30
  percentsArea.textContent  = 0

  sessionTryes = 0
  trying = 0
  AttemptsLeft = 30
  guess = 0
  newGame = 0
}

function randomNumber() {
  return  Math.floor(Math.random() * (11 - 1) + 1)
}

function guessNumber() {
  trying = trying + 1
  guess = guess + 1
  sessionTryes = sessionTryes + 1
  AttemptsLeft = AttemptsLeft - 1
  totalTryesQuantity.textContent  = AttemptsLeft.toString()
  resultArea.value = 'You guessed.' + '\n' + 'Random number was: ' + random + '\n' + 'New rnd is ready' 

  mobileInputNumber.value = ' '
  clearTrig = 1
  
  if (AttemptsLeft === 0) {
    resultArea.value = 'You guessed.' + '\n' + 'Random number was: ' + random + '\n' + 'New game is ready'
    newGame = 1
  }
  random = randomNumber()
}

function noneGuessNumber() {
  trying = trying + 1
  miss = miss + 1
  sessionTryes = sessionTryes + 1
  AttemptsLeft = AttemptsLeft - 1
  totalTryesQuantity.textContent  = AttemptsLeft.toString()

  if (AttemptsLeft === 0) {
    if (parseInt(mobileInputNumber.value) < random ){
    resultArea.value = mobileInputNumber.value + ' Too low' + '\n' + 'Random number was: ' + random + '\n' + 'New game is ready'
    }
    if (parseInt(mobileInputNumber.value) > random ) {
      resultArea.value = mobileInputNumber.value + ' Too high' + '\n' + 'Random number was: ' + random + '\n' + 'New game is ready'
    }
    newGame = 1
  }
  else {
    if (parseInt(mobileInputNumber.value) < random ){
    resultArea.value = mobileInputNumber.value + ' Too low'  
    }
    if (parseInt(mobileInputNumber.value) > random ) {
      resultArea.value = mobileInputNumber.value + ' Too high'
    }
  }
  
  mobileInputNumber.value = ' '
}

function calcPersents() {
  guessesPercents = Math.round((guess/trying)*100)
  percentsArea.textContent = guessesPercents.toString() + '%'
}

function useKeyboard(evt) {
  if (evt.currentTarget.id === 'del'){
    mobileInputNumber.value = ' '
  }
  else if (evt.currentTarget.id === 'compare'){
    game() 
  } 
  else if (evt.currentTarget.classList.contains('button-number')) {
    mobileInputNumber.value = mobileInputNumber.value + evt.currentTarget.textContent
  }
}
function theme() {
  var body = document.querySelector("body");
  var sectionRules = document.querySelector(".rules");
  var sectionSettings = document.querySelector(".settings");
  var sectionGame = document.querySelector(".game__item");
  var sectionGameItem = document.querySelector(".mobile-game");
  var headerHi = document.querySelector(".header__hi");
  var headerDescription = document.querySelector(".header__description");
  var buttonNumber = document.querySelectorAll(".button-keyboard");
  var info = document.querySelector(".info");
  var input = document.querySelector(".mobile-main-input");
  var text = document.querySelectorAll(".text--blue");
  var headersText = document.querySelectorAll(".sections__header");
  var countersHeaderText = document.querySelectorAll(".counter-header-text");
  var countersText = document.querySelectorAll(".text--violet");
  
  
  if (buttonTheme.id === 'dark'){
    body.style.backgroundColor = 'lightgray'
    body.style.transition = "2.5s";
    
    for (var txt = text.length - 1; txt >= 0; txt--){
      text[txt].style.color = 'black'
      text[txt].style.transition = "2.5s";
    }
    for (var htxt = headersText.length - 1; htxt >= 0; htxt--){
      headersText[htxt].style.color = '#005c61'
      headersText[htxt].style.transition = "2.5s";
    }
    for (var chtxt = countersHeaderText.length - 1; chtxt >= 0; chtxt--){
      countersHeaderText[chtxt].style.color = '#005c61'
      countersHeaderText[chtxt].style.transition = "2.5s";
    }
    for (var ct = countersText.length - 1; ct >= 0; ct--){
      countersText[ct].style.color = '#0064f0'
      countersText[ct].style.transition = "2.5s";
    }    
    sectionRules.style.backgroundColor = 'lightgray'
    sectionRules.style.borderColor  = 'gray'
    sectionRules.style.boxShadow = 'gray 0px 0px 13px'
    sectionRules.style.transition = "2.5s";
    
//    sectionSettings.style.backgroundColor = 'lightgray'
//    sectionSettings.style.borderColor  = 'gray'
//    sectionSettings.style.boxShadow = 'gray 0px 0px 13px'
//    sectionSettings.style.transition = "2.5s";
    
    sectionGame.style.backgroundColor  = 'lightgray'
    sectionGame.style.transition = "2.5s";
    
    sectionGameItem.style.borderColor  = 'gray'
    sectionGameItem.style.backgroundColor = 'lightgray'
    sectionGameItem.style.boxShadow = 'gray 0px 0px 13px'
    sectionGameItem.style.transition = "2.5s";
    
    input.style.borderColor  = 'gray'
    input.style.backgroundColor = 'lightgray'
    input.style.boxShadow = 'gray 0px 0px 4px'
    input.style.transition = "2.5s";
    input.style.color = 'black'
    
    info.style.backgroundColor = 'lightgray'
    info.style.color = '#0053c7'
    info.style.transition = "2.5s";
    for (var bn = buttonNumber.length - 1; bn >= 0; bn--){
      buttonNumber[bn].style.backgroundColor = "lightgray";
      buttonNumber[bn].style.color = "black";
      buttonNumber[bn].style.borderColor = 'gray';
      buttonNumber[bn].style.boxShadow = 'gray 0px 0px 4px'
      buttonNumber[bn].style.transition = "2.5s";
      buttonNumber[bn].addEventListener("mousedown", (event) =>{
        event.target.style.borderColor = 'white';
        buttonNumber[bn].style.transition = "0.1s";
      });
      // buttonNumber[bn].addEventListener("mouseup", (event) =>{
      //   event.target.style.borderColor = 'gray';
      // });
    

    }
    for (var bn = buttonNumber.length - 1; bn >= 0; bn--){
      buttonNumber[bn].addEventListener("touchstart", (event) =>{
        event.target.style.transition = "0.1s";
        event.target.style.borderColor = 'white';
        
      });     
    }
    for (var bn = buttonNumber.length - 1; bn >= 0; bn--){
      buttonNumber[bn].addEventListener("touchend", (event) =>{
        event.target.style.transition = "0.1s";
        event.target.style.borderColor = 'gray';
       
      });     
    }
     // buttonNumber[bn].addEventListener("mouseup", (event) =>{
      //   event.target.style.borderColor = 'gray';
      // });
//    headerHi.style.color = 'black'
//    headerHi.style.transition = "2.5s";
//    headerDescription.style.color = 'black'
//    headerDescription.style.transition = "2.5s";

    buttonTheme.textContent = 'dark theme'
    buttonTheme.id = 'light'
  }
  else if (buttonTheme.id === 'light') {
    body.style.backgroundColor = '#000C17'
    body.style.transition = "2.5s";
    
    for (txt = text.length - 1; txt >= 0; txt--){
      text[txt].style.color = '#78B0FF'
      text[txt].style.transition = "2.5s";
    }
    for (htxt = headersText.length - 1; htxt >= 0; htxt--){
      headersText[htxt].style.color = '#009DA6'
      headersText[htxt].style.transition = "2.5s";
    }
    for (chtxt = countersHeaderText.length - 1; chtxt >= 0; chtxt--){
      countersHeaderText[chtxt].style.color = '#009DA6'
      countersHeaderText[chtxt].style.transition = "2.5s";
    }
    for (ct = countersText.length - 1; ct >= 0; ct--){
      countersText[ct].style.color = '#78B0FF'
      countersText[ct].style.transition = "2.5s";
    }
    
    sectionRules.style.backgroundColor = 'black'
    sectionRules.style.borderColor  = '#002252'
    sectionRules.style.boxShadow = '#002252 0px 0px 13px'
    sectionRules.style.transition = "2.5s";
    
//    sectionSettings.style.backgroundColor = 'black'
//    sectionSettings.style.borderColor  = '#002252'
//    sectionSettings.style.boxShadow = '#002252 0px 0px 13px'
//    sectionSettings.style.transition = "2.5s";
    
    sectionGame.style.backgroundColor  = 'black'
    sectionGame.style.transition = "2.5s";
    
    sectionGameItem.style.borderColor  = '#002252'
    sectionGameItem.style.backgroundColor = 'black'
    sectionGameItem.style.boxShadow = '#002252 0px 0px 13px'
    sectionGameItem.style.transition = "2.5s";
    
    input.style.borderColor  = '#002252'
    input.style.backgroundColor = 'black'
    input.style.boxShadow = '#002252 0px 0px 4px'
    input.style.transition = "2.5s";
    input.style.color = '#388BFF'
    
    info.style.backgroundColor = 'black'
    info.style.color = '#0053c7'
    info.style.transition = "2.5s";
    for (bn = buttonNumber.length - 1; bn >= 0; bn--){
      buttonNumber[bn].style.backgroundColor = "black";
      buttonNumber[bn].style.color = "#388BFF";
      buttonNumber[bn].style.borderColor = '#002252';
      buttonNumber[bn].style.boxShadow = '#002252 0px 0px 4px'
      buttonNumber[bn].style.transition = "2.5s";
    }
//    headerHi.style.color = '#78B0FF'
//    headerHi.style.transition = "2.5s";
//    headerDescription.style.color = '#4d97ff'
//    headerDescription.style.transition = "2.5s";
    
    buttonTheme.textContent = 'light theme'
    buttonTheme.id = 'dark'
  }
}
  

var card = document.querySelector('#set_n_desc');
var main = document.querySelector('.main');
card.addEventListener( 'click', function() {
  main.classList.toggle('flipped');
  if(card.textContent === 'game') {
    card.textContent = 'description/settings'
  }
  else {
    card.textContent = 'game'
  }
});



if (window.matchMedia('(min-width: 600px)').matches) {
  card.classList.add('visually-hidden');
  mainHeader.style.border = '0px'
  mainHeader.style.boxShadow = 'none'
} 





//$( ".sections__header" ).click(function() {
//  $( ".rules" ).animate({
//    
//  }, 300, function() {
//    $( ".rules" ).addClass("visually-hidden")
//  } );
//});







//$( ".sections__header" ).click(function() {
//  $( ".rules" ).slideToggle( "slow" );
//});




