let currentWord = "";
let currentPos = [];
let isDragging = false;
let lastDraggedIndex = -1;
const game = document.querySelector(".game-main")
const board = document.querySelector(".board");
const currentWordContainer = document.querySelector(".current-word");
const buttons = document.querySelectorAll(".board button");
const clearButton = document.querySelector(".buttons button:nth-child(1)");
const submitButton = document.querySelector(".buttons button:nth-child(2)");
const dialog = document.querySelector("#congrats");

dialog.querySelector("button").addEventListener("click", () => dialog.close());

clearButton.addEventListener("click", clear);
submitButton.addEventListener("click", function() {
  const check = checkWord();
  
  if (check.valid) {
    document.querySelectorAll(".board .active").forEach(el => {
      el.classList.toggle("active", false);
      el.classList.toggle("solved", true);
    })
    clear();
    checkWin();
  } else {
    // clear()
    showAnimation(check);
  }
});

function checkWin() {
  const buttons = document.querySelectorAll(".board .solved").length;
  if (buttons === 48) {
    dialog.showModal();
    game.setAttribute("inert", true);
  }
}

function showAnimation(check) {
  game.setAttribute("inert", true);
  currentWordContainer.textContent = check.reason;
  document.querySelectorAll(".board .active").forEach(el => el.classList.toggle("animated", true));
  
  setTimeout(clear, 750);
}

function checkWord() {
  let word = -1;
  
  if (currentPos.length <= 3) {
    return ({ valid: false, reason: "Too short"});
  }
  
  for (let x = 0; x < currentPos.length; x++) {
    const button = document.querySelector(`.board button:nth-child(${currentPos[x] + 1})`);
    if (x === 0) { 
      word = button.dataset.word;
      if (button.dataset.letter !== "0") {
        return ({ valid: false, reason: "Not a puzzle word"});
      }
    }
    
    if (word !== button.dataset.word) {
      return ({ valid: false, reason: "Not same word"});
    }
    
    if (button.dataset.letter / 1 !== x) {
      return ({ valid: false, reason: "Not in order"});
    }   
  }
  
  if (document.querySelector(`.board button[data-word="${word}"][data-letter="${currentPos.length}"]`)) {
    return ({ valid: false, reason: "Missing letters"});
  }
  
  return ({ valid: true, reason: currentWord });;
}

function clear() {
  currentPos = [];
  currentWord = "";
  isDragging = false;
  lastDraggedIndex = -1;
  currentWordContainer.textContent = "";
  document.querySelectorAll(".board button.active").forEach(button => {
    button.classList.remove("active");
    button.classList.toggle("animated", false);
    button.dataset.dir = "";
  });
  game.removeAttribute("inert");
}

function getDirection(index, prev) {
  if (index === prev - 1 && prev % 6 !== 0) { return "left"; }
  if (index === prev + 1 && index % 6 !== 0) { return "right"; }
  if (index === prev + 6) { return "bottom"; }
  if (index === prev - 6) { return "top"; }
  if (index === prev + 7 && index % 6 !== 0) { return "bottom-right"; }
  if (index === prev + 5 && prev % 6 !== 0) { return "bottom-left"; }
  if (index === prev - 5 && index % 6 !== 0) { return "top-right"; }
  if (index === prev - 7 && prev % 6 !== 0) { return "top-left"; }

  return "";
}

function isNeighbor(index, prev) {
  return currentPos.length === 0 || getDirection(index, prev) !== "";
}

function removeLastSelection(button, index) {
  const prev = currentPos[currentPos.length - 1];

  if (index !== prev) {
    return;
  }

  currentPos.pop();
  currentWord = currentWord.slice(0, -1);
  button.classList.toggle("active", false);

  if (currentWord.length > 0) {
    document.querySelector(`.board button:nth-child(${currentPos[currentPos.length - 1] + 1})`).dataset.dir = "";
  }
}

function addSelection(button, index) {
  const prev = currentPos[currentPos.length - 1];

  if (!isNeighbor(index, prev)) {
    return;
  }

  button.classList.toggle("active", true);
  currentWord += button.textContent;
  currentPos.push(index);

  if (currentPos.length > 1) {
    document.querySelector(`.board button:nth-child(${currentPos[currentPos.length - 2] + 1})`).dataset.dir = getDirection(index, prev);
  }
}

function updateCurrentWord() {
  currentWordContainer.textContent = currentWord;
}

function handleSelection(button, index) {
  if (button.classList.contains("solved")) {
    return;
  }

  if (button.classList.contains("active")) {
    removeLastSelection(button, index);
    updateCurrentWord();
    return;
  }

  addSelection(button, index);
  updateCurrentWord();
}

function stopDragging() {
  isDragging = false;
  lastDraggedIndex = -1;
}

function getButtonAtPoint(x, y) {
  const element = document.elementFromPoint(x, y);
  if (element && element.classList.contains("board") === false) {
    return element.closest(".board button");
  }
  return null;
}

buttons.forEach((button, index) => {
  button.addEventListener("pointerdown", function(event) {
    if (event.button !== 0 || button.classList.contains("solved")) {
      stopDragging();
      return;
    }

    isDragging = true;
    lastDraggedIndex = index;
    handleSelection(button, index);
    event.preventDefault();
  });
});

board.addEventListener("pointermove", function(event) {
  if (!isDragging) {
    return;
  }

  const button = getButtonAtPoint(event.clientX, event.clientY);
  if (!button) {
    return;
  }

  const buttonIndex = Array.from(buttons).indexOf(button);
  if (buttonIndex === -1 || lastDraggedIndex === buttonIndex) {
    return;
  }

  lastDraggedIndex = buttonIndex;
  handleSelection(button, buttonIndex);
  event.preventDefault();
});

board.addEventListener("pointerleave", stopDragging);
window.addEventListener("pointercancel", stopDragging);
window.addEventListener("pointerup", stopDragging);
