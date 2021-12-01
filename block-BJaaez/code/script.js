let todoInput = document.querySelector("#text");
let ulRoot = document.querySelector(".todo");
let all = document.querySelector("#all");
let active = document.querySelector("#active");
let complete = document.querySelector("#complete");
let clear = document.querySelector("#clear");
let activeButton = "all";

let allTodos = localStorage.getItem("allTodos")
  ? JSON.parse(localStorage.getItem("allTodos"))
  : [];

function addTodo(event) {
  if (event.keyCode === 13 && event.target.value) {
    allTodos.push({
      name: event.target.value,
      isDone: false,
    });
    event.target.value = "";
    createUI();
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  }
}

function handleCheck(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  createUI();
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  createUI();
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

function createUI(data = allTodos) {
  ulRoot.innerHTML = "";
  data.forEach((todo, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.isDone;
    input.setAttribute("data-id", i);
    input.addEventListener("click", handleCheck);
    let p = document.createElement("p");
    p.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "x";
    span.addEventListener("click", handleDelete);
    li.append(input, p, span);
    ulRoot.append(li);
  });
}

all.classList.add("selected");

clear.addEventListener("click", () => {
  allTodos = allTodos.filter((todo) => !todo.isDone);
  createUI();
  activeButton = "clear";
  updateActiveButton();
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
});

active.addEventListener("click", () => {
  let notCompleted = allTodos.filter((todo) => !todo.isDone);
  createUI(notCompleted);
  activeButton = "active";
  updateActiveButton();
});

complete.addEventListener("click", () => {
  let completed = allTodos.filter((todo) => todo.isDone);
  createUI(completed);
  activeButton = "complete";
  updateActiveButton();
});

all.addEventListener("click", () => {
  createUI();
  activeButton = "all";
  updateActiveButton();
});

function updateActiveButton(btn = activeButton) {
  all.classList.remove("selected");
  active.classList.remove("selected");
  complete.classList.remove("selected");
  clear.classList.remove("selected");
  if (btn === "all") {
    all.classList.add("selected");
  }
  if (btn === "active") {
    active.classList.add("selected");
  }
  if (btn === "complete") {
    complete.classList.add("selected");
  }
  if (btn === "clear") {
    clear.classList.add("selected");
  }
}

updateActiveButton();
createUI();
todoInput.addEventListener("keyup", addTodo);
