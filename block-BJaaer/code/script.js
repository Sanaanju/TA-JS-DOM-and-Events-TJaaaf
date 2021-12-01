let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modalInfo = document.querySelector(".modal-info");
let userInfo = {};

form.addEventListener("submit", (event) => {
  modalInfo.innerHTML = "";
  event.preventDefault();
  let elements = event.target.elements;
  userInfo.name = elements.name.value;
  userInfo.email = elements.email.value;
  userInfo.choices = elements.choices.value;
  userInfo.color = elements.color.value;
  userInfo.range = elements.range.value;
  userInfo.book = elements.book.value;
  userInfo.terms = elements.terms.checked;
  modal.classList.add("open");
  modal.classList.remove("display");
  displayInfo(userInfo);
  let close = document.querySelector(".modal_close");
  close.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.classList.add("display");
  });
});

function displayInfo(data = {}) {
  let h1 = document.createElement("h1");
  h1.innerText = `Hello ${data.name}`;
  let email = document.createElement("p");
  email.innerText = `Email : ${data.email}`;
  let choices = document.createElement("p");
  choices.innerText = `You Love : ${data.choices}`;
  let color = document.createElement("p");
  color.innerText = `Color : ${data.color}`;
  let range = document.createElement("p");
  range.innerText = `Rating :${data.range}`;
  let book = document.createElement("p");
  book.innerText = `Book Genre : ${data.book}`;
  let terms = document.createElement("p");
  terms.innerText = `💥:${
    data.terms === "on"
      ? "You are agree to terms and condition"
      : "you are not agree to terms and condition"
  }`;

  modalInfo.append(h1, email, choices, color, range, book, terms);
}
