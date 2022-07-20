const focusTimer = document.querySelector("#pomodoro-focus");
const restTimer = document.querySelector("#pomodoro-rest");
const focusBtn = document.querySelector("#pomodoro-focus span");
const restBtn = document.querySelector("#pomodoro-rest span");
const alram = new Audio("./src/뿅.mp3");

const TIMERHIDDEN_CLASSNAME = "timerhidden";

let pomoInterval;
let restInterval;
let studyTime = 10;
let restTime = 5;

function focusStart(){
  pomoFocus();
  pomoInterval = setInterval(pomoFocus, 1000);
}

function restStart(){
  pomoRest();
  restInterval = setInterval(pomoRest, 1000);
}

function pomoFocus(){
    const min = String(Math.floor(studyTime/60)).padStart(2,0);
    const sec = String(studyTime % 60).padStart(2,0);
    focusTimer.innerHTML = `<div id="startfocus">${min} : ${sec}</div>`;
    studyTime--;
    if (studyTime < 0){
      clearInterval(pomoInterval);
      focusTimer.classList.add(TIMERHIDDEN_CLASSNAME);
      restTimer.classList.remove(TIMERHIDDEN_CLASSNAME);
      alram.play();
      }
  }

function pomoRest(){
    const min = String(Math.floor(restTime/60)).padStart(2,0);
    const sec = String(restTime % 60).padStart(2,0);
    restTimer.innerHTML = `<div id="startrest">${min} : ${sec}</div>`;
    restTime--;
    if (restTime < 0){ 
      clearInterval(restInterval);
      restTimer.classList.add(TIMERHIDDEN_CLASSNAME);
      focusTimer.classList.remove(TIMERHIDDEN_CLASSNAME);
      alram.play();
    }
}


focusBtn.addEventListener("click",focusStart);
restBtn.addEventListener("click",restStart);



function focusBtnMouseOver(){
  focusTimer.style.opacity = "100%";
}
function focusBtnMouseOut(){
  focusTimer.style.opacity = "80%";
}

focusBtn.addEventListener("mouseover",focusBtnMouseOver);
focusBtn.addEventListener("mouseout",focusBtnMouseOut);



function restBtnMouseOver(){
  restTimer.style.opacity = "100%";
}
function restBtnMouseOut(){
  restTimer.style.opacity = "80%";
}

restBtn.addEventListener("mouseover",restBtnMouseOver);
restBtn.addEventListener("mouseout",restBtnMouseOut);