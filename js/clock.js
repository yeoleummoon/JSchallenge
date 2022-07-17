const clockForm = document.querySelector("#mainpage_clock");
const calenderForm = document.querySelector("#mainpage_calender");

const dayString = ["일","월","화","수","목","금","토"];

function realTime(){
  const clock = new Date();
  const hours = String(clock.getHours()).padStart(2,0);
  const minutes = String(clock.getMinutes()).padStart(2,0);
  const seconds = String(clock.getSeconds()).padStart(2,0);
  const month = clock.getMonth() + 1;
  const date = clock.getDate();
  const day = dayString[clock.getDay()];
  clockForm.innerText = `${hours} : ${minutes} : ${seconds}`;
  calenderForm.innerText = `${month}월 ${date}일 (${day})`;
}

realTime();
setInterval(realTime, 1000);

