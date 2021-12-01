let firstBoxes = document.querySelectorAll(".first li");
firstBoxes.forEach((box, index) => {
  box.addEventListener("click", (event) => {
    event.target.innerText = index + 1;

    setTimeout(() => {
      event.target.innerText = "";
    }, 5000);
  });
});

let secondBox = document.querySelector(".second");

secondBox.addEventListener("click", (event) => {
  let text = event.target.dataset.text;
  event.target.innerText = text;

  setTimeout(() => {
    event.target.innerText = "";
  }, 5000);
});
