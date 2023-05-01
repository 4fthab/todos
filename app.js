let todos = [];

getTodos();

function getTodos() {
  const sotredTodos = localStorage.getItem("todos");
  if (sotredTodos) {
    todos = JSON.parse(sotredTodos);
    createList();
  }
}

function setTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function submitHandler(event) {
  event.preventDefault();
  const inputElement = document.querySelector("#text");
  if (inputElement.value) {
    todos.push(inputElement.value);
    createItem(inputElement.value);
    setTodos(todos);
  }
  inputElement.value = "";
}

function createItem(todo) {
  const contentElement = document.getElementById("content");

  const item = document.createElement("li");
  item.className = "content__item";

  const spanElement = document.createElement("span");
  spanElement.innerText = todo;

  const buttonElement = document.createElement("button");
  buttonElement.textContent = "X";
  buttonElement.className = "icon-btn";
  buttonElement.onclick = deleteItem.bind(this, todo);

  item.appendChild(spanElement);
  item.appendChild(buttonElement);

  contentElement.appendChild(item);
}

function createList() {
  const contentElement = document.getElementById("content");
  contentElement.innerHTML = "";

  todos.forEach((todo) => createItem(todo));
}

function deleteItem(todo) {
  todos = todos.filter((item) => item !== todo);
  setTodos(todos);
  createList();
}

// createList();

// const formElement = document.querySelector("#form");

// formElement.addEventListener("submit", submitHandler);
