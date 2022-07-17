const todoForm = document.querySelector("#todo-form");
const todoFormInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list");
const todoTitle = document.querySelector(".mainpage_center h2");

todoTitle.innerText = "TO DO LIST !"

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = `💜 ${newTodo.text}`; 
  const cancelButton = document.createElement("button");
  cancelButton.innerText = "❌";
  cancelButton.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(cancelButton);
  todoList.appendChild(li);
}

function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo = todoFormInput.value;
  todoFormInput.value = "";
  const newToDoObj = {
    text : newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}