const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // same as document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function (event) {
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", dlelteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
