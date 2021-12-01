function main() {
    let btns = document.querySelectorAll(".box");
    let display = document.querySelector(".soln");
    let equal = document.querySelector(".equal");
    let clear = document.querySelector(".clear");
  
    btns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        let text = event.target.dataset.text;
        display.innerText += event.target.dataset.text;
        let bgclr = btn.style.backgroundColor;
  
        btn.style.backgroundColor = "gray";
        setTimeout(() => {
          btn.style.backgroundColor = bgclr;
        }, 250);
      });
    });
  
    clear.addEventListener("click", () => {
      display.innerText = "";
    });
  
    equal.addEventListener("click", () => {
      display.innerText = eval(display.innerText);
    });
    display.innerText = 0;
  }
  
  main();
  