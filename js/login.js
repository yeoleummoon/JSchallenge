const loginForm = document.querySelector("#loginform");
const loginText = document.querySelector("#loginform h2");
const loginInput = document.querySelector("#logininput");
const loginBtn = document.querySelector("#loginbtn");
const greetingForm = document.querySelector("#mainpage");
const greetingText = document.querySelector("#mainpage h2");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

loginText.innerHTML = "당신의 순간을 늘 응원합니다 🙏</br>오늘도 준비되셨나요?";

function handleClickBtn(event){
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME);
const username = loginInput.value;
localStorage.setItem(USERNAME_KEY,username);
paintGreetings(username);
}

function paintGreetings(username){
  greetingText.innerText = `${username}의 공간`;
  greetingForm.classList.remove(HIDDEN_CLASSNAME);
}

function btnMouseOver(){
  loginBtn.style.backgroundColor = "slateblue";
}

function btnMouseOut(){
  loginBtn.style.backgroundColor = "#333";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleClickBtn);
} else {
  paintGreetings(savedUsername);
}

loginBtn.addEventListener("mouseover",btnMouseOver);
loginBtn.addEventListener("mouseout",btnMouseOut);