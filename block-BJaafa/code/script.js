const frog = document.getElementById("frog");
const rock = document.getElementById("rock");
const score = document.getElementById("score");
function jump() {
  frog.classList.add("jump-animmation");
  setTimeout(() => {
    frog.classList.remove("jump-animmation");
  }, 500);
}

document.addEventListener("keypress", (event) => {
  if (event.keyCode === 32) {
    jump();
  }
});

setInterval(() => {
  score.innerText++;
  const frogTop = parseInt(
    window.getComputedStyle(frog).getPropertyValue("top")
  );
  const rockLeft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left")
  );
  if (rockLeft < 0) {
    rock.style.display = "none";
  } else {
    rock.style.display = "";
  }

  if (rockLeft < 50 && rockLeft > 0 && frogTop > 150) {
    alert(`You got a score of: ${score.innerText}  Play Again ?`);
    location.reload();
  }
}, 50);
