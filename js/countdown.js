const dDayForm = document.querySelector("#d-day");
const dDayTitle = document.querySelector("#d-day div");
const dDayOne = dDayForm.querySelector("#newyear");

dDayTitle.innerText = "COUNTDOWN";


function countDown(){
  const newyear = new Date("2023-01-01 00:00:00");
  const now = new Date;
  const gap = newyear - now;
  const gapDay = Math.floor(gap / (1000 * 60 * 60 * 24));
  dDayOne.innerHTML = `✨2023년까지✨</br> D-${gapDay}`;
}

countDown();
setInterval(countDown, 1000);