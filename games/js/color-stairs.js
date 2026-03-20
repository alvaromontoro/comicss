function Game() {
  inputs = document.querySelectorAll("input[type='text']");
  previousKey = null;

  const nextElement = el => {
    const next = el.nextElementSibling;
    if (next?.readOnly) {
      if (next.nextElementSibling) {
        return next.nextElementSibling;
      }
      const nextRow = el.parentNode.nextElementSibling;
      if (nextRow) {
        return nextRow.querySelector("input:nth-child(1)");
      }
    } else {
      if (next) {
        return next;
      }
      const nextRow = el.parentNode.nextElementSibling;
      if (nextRow) {
        return nextRow.querySelector("input:nth-child(1)");
      }
    }
    return el;
  }

  const previousElement = el => {
    const prev = el.previousElementSibling;
    if (prev?.readOnly) {
      return prev.previousElementSibling;
    } else {
      if (prev) {
        return prev;
      }
      const prevRow = el.parentNode.previousElementSibling;
      if (prevRow) {
        return prevRow.querySelector("input:nth-last-child(2)");
      }
    }
    return el;
  }

  for (let x = 0; x < inputs.length; x++) {
    inputs[x].tabIndex = inputs[x].previousElementSibling ? "-1" : "0";
    
    inputs[x].addEventListener("keydown", e => {
      const key = e.code;
      const el = e.currentTarget;
      previousKey = key;
      
      if (key === "Tab") {
        return;
      }

      e.preventDefault();

      if (!el.readOnly) {
        // if letter: write/repolace the latetter
        if (key >= "KeyA" && key <= "KeyZ") {
          el.value = key.substr(-1);
          nextElement(el)?.focus();
        }
      }

      if (key === "Backspace") {
        const oldValue = el.value;
        if (!el.readOnly) {
          el.value = "";
        }

        const prev = previousElement(el);
        if (oldValue === "") {
          if (!el.readOnly) {
            prev.value = "";
          }
          prev.focus();
        }
      }

      if (key === "ArrowRight") {
        el.nextElementSibling?.focus();
      }

      if (key === "ArrowLeft") {
        el.previousElementSibling?.focus();
      }
    });
  }

  const scrim = document.querySelector(".scrim")
  scrim.setAttribute("id", "scrim-processed");
  scrim.classList = '';
  const button = document.createElement("button");
  button.textContent = "Close Dialog";
  button.style = "margin-top: 1em; width: 100%;"
  button.addEventListener("click", () => {
    scrim.classList.remove("visible");
  });
  scrim.querySelector("div").appendChild(button);

  document.querySelectorAll("input[pattern]").forEach(input => input.addEventListener("keyup", () => {
      if (!document.querySelector(":invalid")) {
        scrim.classList.toggle("visible", true);
      }
    })
  );
}

const game = new Game();
