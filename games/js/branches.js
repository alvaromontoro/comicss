let currentWord = "";
let currentPos = [];
const game = document.querySelector(".game-main")
const currentWordContainer = document.querySelector(".current-word");
const buttons = document.querySelectorAll(".board button");
const clearButton = document.querySelector(".buttons button:nth-child(1)");
const submitButton = document.querySelector(".buttons button:nth-child(2)");
const dialog = document.querySelector("#congrats");

congrats.querySelector("button").addEventListener("click", () => congrats.close());

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
    congrats.showModal();
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
  currentWordContainer.textContent = "";
  document.querySelectorAll(".board button.active").forEach(button => {
    button.classList.remove("active");
    button.classList.toggle("animated", false);
    button.dataset.dir = "";
  });
  game.removeAttribute("inert");
}

buttons.forEach((button, index) => {
  button.addEventListener("click", function(e) {
    const prev = currentPos[currentPos.length - 1];
    if (button.classList.contains("active") || button.classList.contains("solved")) {
      if (index === prev) {
        currentPos.pop();
        currentWord = currentWord.slice(0, -1);
        button.classList.toggle("active", false);
        
        if (currentWord.length > 0) {
          document.querySelector(`.board button:nth-child(${currentPos[currentPos.length - 1] + 1})`).dataset.dir = "";
        }
      }
    } else {
      // check that it's a neighbor of the previous one      
      if (
        currentPos.length === 0 || // no letter selected 
        (index === prev - 1 && prev % 6 !== 0) || // letter before and not last
        (index === prev + 1 && index % 6 !== 0) || // letter after and not first
        (index === prev + 6) || // one row lower
        (index === prev - 6) || // one row lower
        (index === prev + 7 && index % 6 !== 0) || // diagonal bottom right
        (index === prev + 5 && prev % 6 !== 0) || // diagonal bottom left
        (index === prev - 5 && index % 6 !== 0) || // diagonal top right
        (index === prev - 7 && prev % 6 !== 0) // diagonal top left
      ) {
        button.classList.toggle("active", true);
        currentWord += button.textContent;
        currentPos.push(index);

        if (currentPos.length > 1) {
          let dir = "";
          if (index === prev - 1 && prev % 6 !== 0) { dir = "left" }
          if (index === prev + 1 && index % 6 !== 0) { dir = "right" }
          if (index === prev + 6) { dir = "bottom" }
          if (index === prev - 6) { dir = "top" }
          if (index === prev + 7 && index % 6 !== 0) { dir = "bottom-right" }
          if (index === prev + 5 && prev % 6 !== 0) { dir = "bottom-left" }
          if (index === prev - 5 && index % 6 !== 0) { dir = "top-right" } 
          if (index === prev - 7 && prev % 6 !== 0) { dir = "top-left" }
          
          document.querySelector(`.board button:nth-child(${currentPos[currentPos.length - 2] + 1})`).dataset.dir = dir;
        }
      }
    }
    
    currentWordContainer.textContent = currentWord;
  })
})
