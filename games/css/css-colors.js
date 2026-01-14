function Game() {
  inputs = document.querySelectorAll("input[type='text']");
  previousKey = null;
  
  const nextElement = el => {
    const next = el.nextElementSibling;
    if (next) {
      return next;
    } else {
      const nextRow = el.parentNode.nextElementSibling;
      if (nextRow) {
        return nextRow.querySelector("input:nth-child(2)");
      }
    }
    return el;
  }
  
  const previousElement = el => {
    const prev = el.previousElementSibling;
    if (prev && !prev.readOnly) {
      return prev;
    } else {
      const prevRow = el.parentNode.previousElementSibling;
      if (prevRow) {
        return prevRow.querySelector("input:last-child");
      }
    }
    return el;
  }
  
  for (let x = 0; x < inputs.length; x++) {
    inputs[x].tabIndex = !inputs[x].previousElementSibling ? "0" : "-1";
    
    inputs[x].addEventListener("keydown", e => {
      const key = e.code;
      const el = e.currentTarget;
      previousKey = key;

      if (key === "Tab") {
//         if (el.dataset.firstTile || el.dataset.lastTile) {
//           return;
//         }
        
//         e.preventDefault();
//         return e.shiftKey ? previousElement(el)?.focus() : nextElement(el)?.focus();
        return;
      }
      
      e.preventDefault();

      // if letter: write/repolace the latetter
      if (key >= "KeyA" && key <= "KeyZ") {
        if (!el.readOnly) { el.value = key.substr(-1) }
        nextElement(el)?.focus();
      }

      if (key === "Backspace") {
        const oldValue = el.value;
        if (!el.readOnly) { el.value = ""; }

        const prev = el.previousElementSibling || previousElement(el);
        if (oldValue === "" || el.readOnly) {
          if (!prev?.readOnly) {
            prev.value = "";
          }
          prev.focus();
        }
      }
      
      if (key === "ArrowRight") {
        el.nextElementSibling?.focus();
      }
      
      if (key === "ArrowDown") {
        const row = el.parentNode.dataset.row / 1;
        const col = el.dataset.letter / 1;
        document.querySelector(`[data-row="${row+1}"] [data-letter="${col}"]`)?.focus();
      }
      
      if (key === "ArrowUp") {
        const row = el.parentNode.dataset.row / 1;
        const col = el.dataset.letter / 1;
        document.querySelector(`[data-row="${row-1}"] [data-letter="${col}"]`)?.focus();
      }
      
      if (key === "ArrowLeft") {
        el.previousElementSibling?.focus();
      }
    });
  }
}

const game = new Game();
