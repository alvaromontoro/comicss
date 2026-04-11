let PUZZLEID = 0;

const inputs = document.querySelectorAll("input[pattern]");
inputs.forEach(i => {
  i.addEventListener("input", savePuzzle);
});

function restartPuzzle() {
  inputs.forEach((i, index) => i.value = index === 0 ? i.value : '');
  savePuzzle();
}

function savePuzzle() {
  const data = Array.from(inputs).map(input => input.value);
  localStorage.setItem(`abcnagrams-puzzle-${PUZZLEID}`, JSON.stringify(data));
}

function loadPuzzle() {
  const data = JSON.parse(localStorage.getItem(`abcnagrams-puzzle-${PUZZLEID}`) || '[]');
  if (data.length === inputs.length) {
    inputs.forEach((input, idx) => input.value = data[idx]);
  }
}

function initializeGame(id) {
  PUZZLEID = id;

  const button = document.createElement("button");
  button.textContent = "Clear puzzle";
  button.style = "margin: auto 0 2em auto; display: flex; align-items: center;";
  button.onclick = restartPuzzle;

  document.querySelector("article").prepend(button);

  loadPuzzle();
}