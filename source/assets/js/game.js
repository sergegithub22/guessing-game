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
var buttonTheme = document.querySelectorAll(".theme-btn")
var rulesBtn = document.querySelectorAll('.rules-btn');
var themeIcon = document.querySelectorAll(".icon-theme use");
var rulesIcon = document.querySelectorAll(".icon-rules use");
var newGame
var AttemptsLeft


start()

for (var i = keyBoardsPull.length - 1; i >= 0; i--) {  
  keyBoardsPull[i].addEventListener("click", useKeyboard);
  }
for (var bt = buttonTheme.length - 1; bt >= 0; bt--){  
  buttonTheme[bt].addEventListener("click", theme);
  }
console.log(buttonTheme)
function game() {
  if (newGame === 1) {
    start()
  }
  if (clearTrig === 1){
    sessionTryes = 0
    clearTrig = 0 
  }  
  if ((parseInt(mobileInputNumber.value) < 1) || (parseInt(mobileInputNumber.value) > 10 )){
    alert('Number must be between 1 and 10 inclusevly. Press "<--" to clear entry field')
    return
  }
  else{
    if (parseInt(mobileInputNumber.value) === random) {guessNumber()}
    else {noneGuessNumber()}
    calcPersents()
    }
  
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
  var markedText = document.querySelectorAll(".text--marked");
 

  
  console.log(themeIcon[0].attributes[0].value)
  
  if (buttonTheme[0].id === 'dark'){
    for (var bt = buttonTheme.length - 1; bt >= 0; bt--){
      buttonTheme[bt].addEventListener("mouseover", (event) => {
        for (var ti = themeIcon.length - 1; ti >= 0; ti--){
          themeIcon[ti].style.fill = 'black';
          themeIcon[ti].style.transition = "0.1s";
        }   
      });
      buttonTheme[bt].addEventListener("mouseout", (event) => {
        for (var ti = themeIcon.length - 1; ti >= 0; ti--){  
          themeIcon[ti].style.fill = 'gray';
        }
      });
    }
    for (var rb = rulesBtn.length - 1; rb >= 0; rb--){
      rulesBtn[rb].addEventListener("mouseover", (event) => {
        for (var ri = rulesIcon.length - 1; ri >= 0; ri--){
          rulesIcon[ri].style.fill = 'black';
          rulesIcon[ri].style.transition = "0.1s";
        }   
      });
      rulesBtn[rb].addEventListener("mouseout", (event) => {
        for (var ri = rulesIcon.length - 1; ri >= 0; ri--){  
          rulesIcon[ri].style.fill = 'gray';
        }
      });
    }
    for (var ri = rulesIcon.length - 1; ri >= 0; ri--){  
      rulesIcon[ri].style.fill = 'gray';
      rulesIcon[ri].style.transition = "2.5s";
    }
    for (var ti = themeIcon.length - 1; ti >= 0; ti--){
      themeIcon[ti].attributes[0].value = 'assets/img/sprite.svg#light';
      themeIcon[ti].style.fill = 'gray';
      themeIcon[ti].style.transition = "2.5s";

    }
    for (var rb = rulesBtn.length - 1; rb >= 0; rb--){
      rulesBtn[rb].style.fill = 'gray';
      rulesBtn[rb].style.transition = "0.5s";
    }
    
    body.style.backgroundColor = 'lightgray';
    body.style.transition = "2.5s";
    
    for (var txt = text.length - 1; txt >= 0; txt--){
      text[txt].style.color = 'black'
      text[txt].style.transition = "2.5s";
    }
    for (var mt = markedText.length - 1; mt >= 0; mt--){
      markedText[mt].style.color = '#0064f0'
      markedText[mt].style.transition = "2.5s";
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
      buttonNumber[bn].style.fill = "black";
      buttonNumber[bn].style.borderColor = 'gray';
      buttonNumber[bn].style.boxShadow = 'gray 0px 0px 4px'
      buttonNumber[bn].style.transition = "2.5s";
      buttonNumber[bn].addEventListener("mousedown", (event) =>{
        event.currentTarget.style.transition = "0s";
        event.currentTarget.style.borderColor = 'white';
        event.currentTarget.style.color = "white";   
        event.currentTarget.style.fill = "white";   
      });
      buttonNumber[bn].addEventListener("mouseup", (event) =>{
        event.currentTarget.style.transition = "0s";
        event.currentTarget.style.borderColor = 'gray';
        event.currentTarget.style.color = 'black';
        event.currentTarget.style.fill = 'black';
      });
     }
    for (var bn = buttonNumber.length - 1; bn >= 0; bn--){
      buttonNumber[bn].addEventListener("touchstart", (event) =>{
        event.currentTarget.style.transition = "0s";
        event.currentTarget.style.color = "white";
        event.currentTarget.style.fill = "white";
        event.currentTarget.style.borderColor = 'white';
      });     
    }
    for (var bn = buttonNumber.length - 1; bn >= 0; bn--){
      buttonNumber[bn].addEventListener("touchend", (event) =>{
        event.currentTarget.style.transition = "0s";
        event.currentTarget.style.color = "black";
        event.currentTarget.style.fill = "black";
        event.currentTarget.style.borderColor = 'gray';  
      });     
    }
    buttonTheme[0].id = 'light'
  }
  else if (buttonTheme[0].id === 'light') {
    for (var bt = buttonTheme.length - 1; bt >= 0; bt--){
      buttonTheme[bt].addEventListener("mouseover", (event) => {
        for (var ti = themeIcon.length - 1; ti >= 0; ti--){
          themeIcon[ti].style.fill = 'white';
          themeIcon[ti].style.transition = "0.1s";
        }   
      });
      buttonTheme[bt].addEventListener("mouseout", (event) => {
        for (var ti = themeIcon.length - 1; ti >= 0; ti--){  
          themeIcon[ti].style.fill = '#388BFF';
        }
      });
    }
    for (var rb = rulesBtn.length - 1; rb >= 0; rb--){
      rulesBtn[rb].addEventListener("mouseover", (event) => {
        for (var ri = rulesIcon.length - 1; ri >= 0; ri--){
          rulesIcon[ri].style.fill = 'white';
          rulesIcon[ri].style.transition = "0.1s";
        }   
      });
      rulesBtn[rb].addEventListener("mouseout", (event) => {
        for (var ri = rulesIcon.length - 1; ri >= 0; ri--){  
          rulesIcon[ri].style.fill = '#388BFF';
        }
      });
    }
    for (var ri = rulesIcon.length - 1; ri >= 0; ri--){  
      rulesIcon[ri].style.fill = '#388BFF';
      rulesIcon[ri].style.transition = "0.5s";
    }
    for (var ti = themeIcon.length - 1; ti >= 0; ti--){
      themeIcon[ti].attributes[0].value = 'assets/img/sprite.svg#dark';
      themeIcon[ti].style.fill = '#388BFF';
      themeIcon[ti].style.transition = "2.5s";
      body.style.backgroundColor = 'gray';

      
    }
     for (var rb = rulesBtn.length - 1; rb >= 0; rb--){
      rulesBtn[rb].style.fill = '#388BFF';
      rulesBtn[rb].style.transition = "2.5s";
    }
    body.style.backgroundColor = '#000C17'
    body.style.transition = "2.5s";
    
    for (txt = text.length - 1; txt >= 0; txt--){
      text[txt].style.color = '#78B0FF'
      text[txt].style.transition = "2.5s";
    }
    for (var mt = markedText.length - 1; mt >= 0; mt--){
      markedText[mt].style.color = '#a39600';
      markedText[mt].style.transition = "2.5s";
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
    info.style.borderColor  = '#002252'
    info.style.transition = "2.5s";
    for (bn = buttonNumber.length - 1; bn >= 0; bn--){
      buttonNumber[bn].style.backgroundColor = "black";
      buttonNumber[bn].style.color = "#388BFF";
      buttonNumber[bn].style.fill = "#388BFF";
      buttonNumber[bn].style.borderColor = '#002252';
      buttonNumber[bn].style.boxShadow = '#002252 0px 0px 4px'
      buttonNumber[bn].style.transition = "2.5s";
      buttonNumber[bn].addEventListener("mousedown", (event) =>{
        event.currentTarget.style.transition = "0s";
        event.currentTarget.style.borderColor = 'white';
        event.currentTarget.style.color = "white";   
        event.currentTarget.style.fill = "white";   
      });
      buttonNumber[bn].addEventListener("mouseup", (event) =>{
        event.currentTarget.style.transition = "0s";
        event.currentTarget.style.borderColor = '#002252';
        event.currentTarget.style.color = '#388BFF';
        event.currentTarget.style.fill = '#388BFF';
      });
     }
     for (var bn = buttonNumber.length - 1; bn >= 0; bn--){
      buttonNumber[bn].addEventListener("touchstart", (event) =>{
        event.currentTarget.style.transition = "0s";
        event.currentTarget.style.color = "white";
        event.currentTarget.style.fill = "white";
        event.currentTarget.style.borderColor = 'white';
      });     
    }
    for (var bn = buttonNumber.length - 1; bn >= 0; bn--){
      buttonNumber[bn].addEventListener("touchend", (event) =>{
        event.currentTarget.style.transition = "0s";
        event.currentTarget.style.color = "#388BFF";
        event.currentTarget.style.fill = "#388BFF";
        event.currentTarget.style.borderColor = '#002252';  
      });     
    }
    rulesBtn[rb].addEventListener("touchend", (event) => {
      for (var ri = rulesIcon.length - 1; ri >= 0; ri--){  
        rulesIcon[ri].style.fill = '#388BFF';
      }
    });
    buttonTheme[0].id = 'dark'
  }
}
  


var main = document.querySelector('.main');
var rulesHeader = document.querySelectorAll('.mobile-game__header');


var rulesSection = document.querySelector('.rules');
var rulesHide = true;


for (var rb = rulesBtn.length - 1; rb >= 0; rb--){ 
rulesBtn[rb].addEventListener( 'click', function() {
  console.log(rulesIcon)
  if (rulesHide === true){
    switch(true){
      case (window.matchMedia('(min-width: 1000px)').matches):
        main.style.maxWidth = "850px";
        main.style.gridTemplateColumns = "350px auto";
        break;
      case (window.matchMedia('(max-width: 1000px) and (min-width: 599px)').matches):
        main.style.maxWidth = "55%";
        main.style.gridTemplateColumns = "1fr";
        break; 
      case (window.matchMedia('(max-width: 600px) and (min-width: 499px)').matches):
        main.style.maxWidth = "85%";
        main.style.gridTemplateColumns = "1fr";
        break;
      case (window.matchMedia('(max-width: 500px)').matches):
        main.style.maxWidth = "95%";
        main.style.gridTemplateColumns = "1fr";
        break;
      default:
        break;
    }

    rulesSection.classList.remove('visually-hidden');
    rulesHide = false;
    return
  }
  if (rulesHide === false){

    switch(true){
      case (window.matchMedia('(min-width: 1000px)').matches):
        main.style.maxWidth = "350px";
        main.style.gridTemplateColumns = "1fr";
        rulesSection.classList.add('visually-hidden');
        break;
      case (window.matchMedia('(max-width: 1000px) and (min-width: 599px)').matches):
        main.style.maxWidth = "55%";
        main.style.gridTemplateColumns = "1fr";
        break; 
      case (window.matchMedia('(max-width: 600px) and (min-width: 499px)').matches):
        main.style.maxWidth = "85%";
        main.style.gridTemplateColumns = "1fr";
        break;
      case (window.matchMedia('(max-width: 500px)').matches):
        main.style.maxWidth = "95%";
        main.style.gridTemplateColumns = "1fr";
        break;
      default:
        break;
    }

    rulesHide = true;
    return
  }
  
});
}
 
for (var rb = rulesBtn.length - 1; rb >= 0; rb--){  
rulesBtn[rb].addEventListener("touchend", () =>{
  main.classList.toggle('flipped');
 
});
}


if (window.matchMedia('(min-width: 1000px)').matches) {

  rulesBtn[0].classList.add('visually-hidden');
  buttonTheme[0].classList.add('visually-hidden');
  rulesHeader[0].style.justifyContent = 'center';

  main.style.transition = "0.05s";
  mainHeader.style.border = '0px'
  mainHeader.style.boxShadow = 'none'
  
} 
if (window.matchMedia('(max-width: 1000px)').matches) {
  rulesSection.classList.remove('visually-hidden')
  main.style.transition = "1s";
 
  
} 





