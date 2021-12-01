let input = document.querySelector(`input[type = "text"]`);
let rootElm = document.querySelector(".movies_List");
allMovies = [
  {
    name: "Inception",
    watched: false,
  },
  {
    name: "Krish",
    watched: true,
  },
];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovies();
  }
});

function deleteMovie(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovies();
}

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function createMovies() {
  rootElm.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.classList.add("style-checkbox");
    input.type = "checkbox";
    input.id = i;
    input.checked = movie.watched;
    input.addEventListener("change", handleChange);
    let label = document.createElement("label");
    label.innerText = movie.name;
    label.for = i;
    let span = document.createElement("span");
    span.innerText = "x";
    span.setAttribute("data-id", i);
    span.addEventListener("click", deleteMovie);
    li.append(input, label, span);
    rootElm.append(li);
  });
}

createMovies();
