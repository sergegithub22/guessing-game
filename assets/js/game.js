var newGame,AttemptsLeft,mobileInputNumber=document.querySelector(".mobile-main-input"),resultArea=document.querySelector(".info"),totalTryesQuantity=document.querySelector(".counter-total-quantity"),percentsArea=document.querySelector(".counter-percent"),keyBoardsPull=document.querySelectorAll(".button-keyboard"),mainHeader=document.querySelector(".header"),random=randomNumber(),guessesPercents=0,trying=0,sessionTryes=0,guess=0,miss=0,clearTrig=0,buttonTheme=document.querySelectorAll(".theme-btn"),rulesBtn=document.querySelectorAll(".rules-btn"),themeIcon=document.querySelectorAll(".icon-theme use"),rulesIcon=document.querySelectorAll(".icon-rules use"),btnScreenBoardInRules=document.querySelectorAll(".bnt-scr-board-in-rules");start();for(var i=keyBoardsPull.length-1;0<=i;i--)keyBoardsPull[i].addEventListener("click",useKeyboard);for(var bt=buttonTheme.length-1;0<=bt;bt--)buttonTheme[bt].addEventListener("click",theme);function game(){1===newGame&&start(),1===clearTrig&&(clearTrig=sessionTryes=0),parseInt(mobileInputNumber.value)<1||10<parseInt(mobileInputNumber.value)?alert('Number must be between 1 and 10 inclusevly. Press "<--" to clear entry field'):((parseInt(mobileInputNumber.value)===random?guessNumber:noneGuessNumber)(),calcPersents())}function start(){totalTryesQuantity.textContent=30,percentsArea.textContent=0,AttemptsLeft=30,newGame=guess=trying=sessionTryes=0}function randomNumber(){return Math.floor(10*Math.random()+1)}function guessNumber(){trying+=1,guess+=1,sessionTryes+=1,AttemptsLeft-=1,totalTryesQuantity.textContent=AttemptsLeft.toString(),resultArea.value="You guessed.\nRandom number was: "+random+"\nNew rnd is ready",mobileInputNumber.value=" ",clearTrig=1,0===AttemptsLeft&&(resultArea.value="You guessed.\nRandom number was: "+random+"\nNew game is ready",newGame=1),random=randomNumber()}function noneGuessNumber(){trying+=1,miss+=1,sessionTryes+=1,AttemptsLeft-=1,totalTryesQuantity.textContent=AttemptsLeft.toString(),0===AttemptsLeft?(parseInt(mobileInputNumber.value)<random&&(resultArea.value=mobileInputNumber.value+" Too low\nRandom number was: "+random+"\nNew game is ready"),parseInt(mobileInputNumber.value)>random&&(resultArea.value=mobileInputNumber.value+" Too high\nRandom number was: "+random+"\nNew game is ready"),newGame=1):(parseInt(mobileInputNumber.value)<random&&(resultArea.value=mobileInputNumber.value+" Too low"),parseInt(mobileInputNumber.value)>random&&(resultArea.value=mobileInputNumber.value+" Too high")),mobileInputNumber.value=" "}function calcPersents(){guessesPercents=Math.round(guess/trying*100),percentsArea.textContent=guessesPercents.toString()+"%"}function useKeyboard(e){"del"===e.currentTarget.id?mobileInputNumber.value=" ":"compare"===e.currentTarget.id?game():e.currentTarget.classList.contains("button-number")&&(mobileInputNumber.value=mobileInputNumber.value+e.currentTarget.textContent)}function theme(){var e=document.querySelector("body"),t=document.querySelector(".rules"),r=(document.querySelector(".settings"),document.querySelector(".game__item")),l=document.querySelector(".mobile-game"),n=(document.querySelector(".header__hi"),document.querySelector(".header__description"),document.querySelectorAll(".button-keyboard")),s=document.querySelector(".info"),o=document.querySelector(".mobile-main-input"),a=document.querySelectorAll(".text--blue"),i=document.querySelectorAll(".sections__header"),u=document.querySelectorAll(".counter-header-text"),c=document.querySelectorAll(".text--violet"),d=document.querySelectorAll(".text--marked");if("dark"===buttonTheme[0].id){for(var m=buttonTheme.length-1;0<=m;m--)buttonTheme[m].addEventListener("mouseover",e=>{for(var t=themeIcon.length-1;0<=t;t--)themeIcon[t].style.fill="black",themeIcon[t].style.transition="0.1s"}),buttonTheme[m].addEventListener("mouseout",e=>{for(var t=themeIcon.length-1;0<=t;t--)themeIcon[t].style.fill="gray"});for(var y=rulesBtn.length-1;0<=y;y--)rulesBtn[y].addEventListener("mouseover",e=>{for(var t=rulesIcon.length-1;0<=t;t--)rulesIcon[t].style.fill="black",rulesIcon[t].style.transition="0.1s"}),rulesBtn[y].addEventListener("mouseout",e=>{for(var t=rulesIcon.length-1;0<=t;t--)rulesIcon[t].style.fill="gray"}),rulesBtn[y].addEventListener("touchstart",e=>{for(var t=rulesIcon.length-1;0<=t;t--)rulesIcon[t].style.fill="white"}),rulesBtn[y].addEventListener("touchend",e=>{for(var t=rulesIcon.length-1;0<=t;t--)rulesIcon[t].style.fill="gray"});for(var h=rulesIcon.length-1;0<=h;h--)rulesIcon[h].style.fill="gray",rulesIcon[h].style.transition="2.5s";for(var g=btnScreenBoardInRules.length-1;0<=g;g--)btnScreenBoardInRules[g].style.fill="black",btnScreenBoardInRules[g].style.transition="2.5s";for(var b=themeIcon.length-1;0<=b;b--)themeIcon[b].attributes[0].value="assets/img/sprite.svg#light",themeIcon[b].style.fill="gray",themeIcon[b].style.transition="2.5s";for(y=rulesBtn.length-1;0<=y;y--)rulesBtn[y].style.fill="gray",rulesBtn[y].style.transition="0.5s";e.style.backgroundColor="lightgray",e.style.transition="2.5s";for(var f=a.length-1;0<=f;f--)a[f].style.color="black",a[f].style.transition="2.5s";for(var p=d.length-1;0<=p;p--)d[p].style.color="#0064f0",d[p].style.transition="2.5s";for(var v=i.length-1;0<=v;v--)i[v].style.color="#005c61",i[v].style.transition="2.5s";for(var w=u.length-1;0<=w;w--)u[w].style.color="#005c61",u[w].style.transition="2.5s";for(var x=c.length-1;0<=x;x--)c[x].style.color="#0064f0",c[x].style.transition="2.5s";t.style.backgroundColor="lightgray",t.style.borderColor="gray",t.style.boxShadow="gray 0px 0px 13px",t.style.transition="2.5s",r.style.backgroundColor="lightgray",r.style.transition="2.5s",l.style.borderColor="gray",l.style.backgroundColor="lightgray",l.style.boxShadow="gray 0px 0px 13px",l.style.transition="2.5s",o.style.borderColor="gray",o.style.backgroundColor="lightgray",o.style.boxShadow="gray 0px 0px 4px",o.style.transition="2.5s",o.style.color="black",s.style.backgroundColor="lightgray",s.style.color="#0053c7",s.style.transition="2.5s";for(var I=n.length-1;0<=I;I--)n[I].style.backgroundColor="lightgray",n[I].style.color="black",n[I].style.fill="black",n[I].style.borderColor="gray",n[I].style.boxShadow="gray 0px 0px 4px",n[I].style.transition="2.5s",n[I].addEventListener("mousedown",e=>{e.currentTarget.style.transition="0s",e.currentTarget.style.borderColor="white",e.currentTarget.style.color="white",e.currentTarget.style.fill="white"}),n[I].addEventListener("mouseup",e=>{e.currentTarget.style.transition="0s",e.currentTarget.style.borderColor="gray",e.currentTarget.style.color="black",e.currentTarget.style.fill="black"});for(I=n.length-1;0<=I;I--)n[I].addEventListener("touchstart",e=>{e.currentTarget.style.transition="0s",e.currentTarget.style.color="white",e.currentTarget.style.fill="white",e.currentTarget.style.borderColor="white"});for(I=n.length-1;0<=I;I--)n[I].addEventListener("touchend",e=>{e.currentTarget.style.transition="0s",e.currentTarget.style.color="black",e.currentTarget.style.fill="black",e.currentTarget.style.borderColor="gray"});buttonTheme[0].id="light"}else if("light"===buttonTheme[0].id){for(m=buttonTheme.length-1;0<=m;m--)buttonTheme[m].addEventListener("mouseover",e=>{for(var t=themeIcon.length-1;0<=t;t--)themeIcon[t].style.fill="white",themeIcon[t].style.transition="0.1s"}),buttonTheme[m].addEventListener("mouseout",e=>{for(var t=themeIcon.length-1;0<=t;t--)themeIcon[t].style.fill="#388BFF"});for(y=rulesBtn.length-1;0<=y;y--)rulesBtn[y].addEventListener("mouseover",e=>{for(var t=rulesIcon.length-1;0<=t;t--)rulesIcon[t].style.fill="white",rulesIcon[t].style.transition="0.1s"}),rulesBtn[y].addEventListener("mouseout",e=>{for(var t=rulesIcon.length-1;0<=t;t--)rulesIcon[t].style.fill="#388BFF"}),rulesBtn[y].addEventListener("touchstart",e=>{for(var t=rulesIcon.length-1;0<=t;t--)rulesIcon[t].style.fill="white"}),rulesBtn[y].addEventListener("touchend",e=>{for(var t=rulesIcon.length-1;0<=t;t--)rulesIcon[t].style.fill="#388BFF"});for(h=rulesIcon.length-1;0<=h;h--)rulesIcon[h].style.fill="#388BFF",rulesIcon[h].style.transition="0.5s";for(g=btnScreenBoardInRules.length-1;0<=g;g--)btnScreenBoardInRules[g].style.fill="#388BFF",btnScreenBoardInRules[g].style.transition="2.5s";for(b=themeIcon.length-1;0<=b;b--)themeIcon[b].attributes[0].value="assets/img/sprite.svg#dark",themeIcon[b].style.fill="#388BFF",themeIcon[b].style.transition="2.5s",e.style.backgroundColor="gray";for(y=rulesBtn.length-1;0<=y;y--)rulesBtn[y].style.fill="#388BFF",rulesBtn[y].style.transition="2.5s";for(e.style.backgroundColor="#000C17",e.style.transition="2.5s",f=a.length-1;0<=f;f--)a[f].style.color="#78B0FF",a[f].style.transition="2.5s";for(p=d.length-1;0<=p;p--)d[p].style.color="#a39600",d[p].style.transition="2.5s";for(v=i.length-1;0<=v;v--)i[v].style.color="#009DA6",i[v].style.transition="2.5s";for(w=u.length-1;0<=w;w--)u[w].style.color="#009DA6",u[w].style.transition="2.5s";for(x=c.length-1;0<=x;x--)c[x].style.color="#78B0FF",c[x].style.transition="2.5s";for(t.style.backgroundColor="black",t.style.borderColor="#002252",t.style.boxShadow="#002252 0px 0px 13px",t.style.transition="2.5s",r.style.backgroundColor="black",r.style.transition="2.5s",l.style.borderColor="#002252",l.style.backgroundColor="black",l.style.boxShadow="#002252 0px 0px 13px",l.style.transition="2.5s",o.style.borderColor="#002252",o.style.backgroundColor="black",o.style.boxShadow="#002252 0px 0px 4px",o.style.transition="2.5s",o.style.color="#388BFF",s.style.backgroundColor="black",s.style.color="#0053c7",s.style.borderColor="#002252",s.style.transition="2.5s",I=n.length-1;0<=I;I--)n[I].style.backgroundColor="black",n[I].style.color="#388BFF",n[I].style.fill="#388BFF",n[I].style.borderColor="#002252",n[I].style.boxShadow="#002252 0px 0px 4px",n[I].style.transition="2.5s",n[I].addEventListener("mousedown",e=>{e.currentTarget.style.transition="0s",e.currentTarget.style.borderColor="white",e.currentTarget.style.color="white",e.currentTarget.style.fill="white"}),n[I].addEventListener("mouseup",e=>{e.currentTarget.style.transition="0s",e.currentTarget.style.borderColor="#002252",e.currentTarget.style.color="#388BFF",e.currentTarget.style.fill="#388BFF"});for(I=n.length-1;0<=I;I--)n[I].addEventListener("touchstart",e=>{e.currentTarget.style.transition="0s",e.currentTarget.style.color="white",e.currentTarget.style.fill="white",e.currentTarget.style.borderColor="white"});for(I=n.length-1;0<=I;I--)n[I].addEventListener("touchend",e=>{e.currentTarget.style.transition="0s",e.currentTarget.style.color="#388BFF",e.currentTarget.style.fill="#388BFF",e.currentTarget.style.borderColor="#002252"});buttonTheme[0].id="dark"}}for(var main=document.querySelector(".main"),rulesHeader=document.querySelectorAll(".mobile-game__header"),rulesSection=document.querySelector(".rules"),rulesHide=!0,rb=rulesBtn.length-1;0<=rb;rb--)rulesBtn[rb].addEventListener("click",function(){if(!0===rulesHide){switch(!0){case window.matchMedia("(min-width: 1000px)").matches:main.style.maxWidth="850px",main.style.gridTemplateColumns="350px auto";break;case window.matchMedia("(max-width: 1000px) and (min-width: 599px)").matches:main.style.maxWidth="55%",main.style.gridTemplateColumns="1fr";break;case window.matchMedia("(max-width: 600px) and (min-width: 499px)").matches:main.style.maxWidth="85%",main.style.gridTemplateColumns="1fr";break;case window.matchMedia("(max-width: 500px)").matches:main.style.maxWidth="95%",main.style.gridTemplateColumns="1fr"}rulesSection.classList.remove("visually-hidden"),rulesHide=!1}else if(!1===rulesHide){switch(!0){case window.matchMedia("(min-width: 1000px)").matches:main.style.maxWidth="350px",main.style.gridTemplateColumns="1fr",rulesSection.classList.add("visually-hidden");break;case window.matchMedia("(max-width: 1000px) and (min-width: 599px)").matches:main.style.maxWidth="55%",main.style.gridTemplateColumns="1fr";break;case window.matchMedia("(max-width: 600px) and (min-width: 499px)").matches:main.style.maxWidth="85%",main.style.gridTemplateColumns="1fr";break;case window.matchMedia("(max-width: 500px)").matches:main.style.maxWidth="95%",main.style.gridTemplateColumns="1fr"}rulesHide=!0}});for(rb=rulesBtn.length-1;0<=rb;rb--)rulesBtn[rb].addEventListener("touchend",()=>{main.classList.toggle("flipped")});window.matchMedia("(min-width: 1000px)").matches&&(rulesBtn[0].classList.add("visually-hidden"),buttonTheme[0].classList.add("visually-hidden"),rulesHeader[0].style.justifyContent="center",main.style.transition="0.05s",mainHeader.style.border="0px",mainHeader.style.boxShadow="none"),window.matchMedia("(max-width: 1000px)").matches&&(rulesSection.classList.remove("visually-hidden"),main.style.transition="1s");