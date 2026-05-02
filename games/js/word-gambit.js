const article = document.querySelector(".wordgambit");
const board = article.querySelector(".board");
const hint = article.querySelector(".hint");
const dialog = document.querySelector("#congrats");

dialog.querySelector("button").addEventListener("click", () => dialog.close());


let step = 1;

function getText() {
  const steps = [...board.querySelectorAll("label[data-clicked]")].sort((a,b) => a.dataset.clicked - b.dataset.clicked);

  return steps.reduce((acc, el) => acc + el.textContent, "");
}

function clearClicked(num) {
  const steps = [...board.querySelectorAll("label[data-clicked]")].sort((a,b) => a.dataset.clicked - b.dataset.clicked);
  for (let x = num - 1; x < steps.length; x++) {
    steps[x]?.removeAttribute("data-clicked");
    steps[x].querySelector("input").checked = false;
  }
  if (steps[num-2]) {
    steps[num-2].dataset.current = true;
  }
  step = board.querySelectorAll("label[data-clicked]").length + 1;
}

function highlightPotential() {
  const current = board.querySelector("[data-current]");
  if (current) {
    const idx = current.dataset.idx / 1;

    if (idx - 13 >= 0 && idx % 6 !== 0 && !board.querySelector(`[data-idx="${idx-13}"][data-clicked]`)) {
      board.querySelector(`[data-idx="${idx-13}"]`).dataset.potential = true;
    }
    if (idx - 11 >= 0 && idx % 6 !== 5 && !board.querySelector(`[data-idx="${idx-11}"][data-clicked]`)) {
      board.querySelector(`[data-idx="${idx-11}"]`).dataset.potential = true;
    }
    if (idx - 4 >= 0 && idx % 6 < 4 && !board.querySelector(`[data-idx="${idx-4}"][data-clicked]`)) {
      board.querySelector(`[data-idx="${idx-4}"]`).dataset.potential = true;
    }
    if (idx + 8 < 36 && idx % 6 < 4 && !board.querySelector(`[data-idx="${idx+8}"][data-clicked]`)) {
      board.querySelector(`[data-idx="${idx+8}"]`).dataset.potential = true;
    }
    if (idx + 13 < 36 && idx % 6 !== 5 && !board.querySelector(`[data-idx="${idx+13}"][data-clicked]`)) {
      board.querySelector(`[data-idx="${idx+13}"]`).dataset.potential = true;
    }
    if (idx + 11 < 36 && idx % 6 !== 0 && !board.querySelector(`[data-idx="${idx+11}"][data-clicked]`)) {
      board.querySelector(`[data-idx="${idx+11}"]`).dataset.potential = true;
    }
    if (idx + 4 < 36 && idx % 6 > 1 && !board.querySelector(`[data-idx="${idx+4}"][data-clicked]`)) {
      board.querySelector(`[data-idx="${idx+4}"]`).dataset.potential = true;
    }
    if (idx - 8 >= 0 && idx % 6 > 1 && !board.querySelector(`[data-idx="${idx-8}"][data-clicked]`)) {
      board.querySelector(`[data-idx="${idx-8}"]`).dataset.potential = true;
    }
  }
}

function checkEnd() {
  const labels = board.querySelectorAll("label[data-clicked]");

  if (labels.length !== 36) {
    return false;
  }
  
  return [...labels].every(el => el.dataset.order/1 === el.dataset.clicked-1);
}

board.addEventListener("click", function(e) {
  if (e.target.dataset?.order) {
    e.stopPropagation();
    const label = e.target;
    
    if (document.querySelector("#only-valids").checked && !label.dataset.potential && !label.dataset.clicked && board.querySelector("[data-clicked]")) {
      e.preventDefault();
      return;
    }
    
    board.querySelector("[data-current]")?.removeAttribute("data-current");
    board.querySelectorAll("[data-potential]").forEach(el => el.removeAttribute("data-potential"));

    if (!label.dataset.clicked) {
      label.dataset.clicked = step;
      label.dataset.current = true;
      step++;
    } else {
      e.preventDefault();
      clearClicked(label.dataset.clicked/1);
    }

    highlightPotential();
    hint.innerHTML = getText() + "&nbsp;";
    
    if (checkEnd()) {
      document.querySelector("#congrats").showModal();
    }
  }
});

