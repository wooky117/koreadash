const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event) {
  const deleteItem = event.target.parentElement;
  deleteItem.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  span.innerText = newToDo;
  li.appendChild(button);
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
  
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  paintToDo(newToDo);
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);