




// Track the current direction (across or down)
let currentDirection = 'across';
const MAX = 82; // total number of words
const cw = document.querySelector('#crossword');
const inputs = cw.querySelectorAll('input[pattern]');
const scrim = document.querySelector('.scrim');

// // DELETE! for testing purposes while developing the game
// cw.querySelectorAll('input[pattern]').forEach((i, idx) => {
//   if (idx !== 0) {
//     i.value = i.getAttribute('pattern')[1];
//   }
// });

// add a close button to the solution modal
scrim.setAttribute('class', 'scrim-processed');
const closeButton = document.createElement('button');
closeButton.textContent = 'Close';
closeButton.addEventListener('click', () => {
  scrim.classList.remove('open');
});
scrim.querySelector('div').appendChild(closeButton);


function updateFocusableInputs(direction = 'across') {
  inputs.forEach((input) => {
    if (input.matches('label:is([data-n="b"], [data-n="h"]) input') && direction === 'across') {
      input.tabIndex = 0;
    } else if (input.matches('label:is([data-n="b"], [data-n="v"]) input') && direction === 'down') {
      input.tabIndex = 0;
    } else {
      input.tabIndex = -1;
    }
  });
}

function moveNext(input, limit = false) {
  if (currentDirection === 'across') {
    let next = input.parentElement.nextElementSibling;
    while (next) {
      if (!next.dataset.v) {
        const nextInput = next.querySelector('input');
        if (nextInput && nextInput.value === '') {
          nextInput.focus();
          return;
        }
      }
      next = next.nextElementSibling;
    }
    // if we reached the last one of the horizontals, continue with the first vertical
    cw.querySelector("input").focus();
    currentDirection = 'down';
    updateFocusableInputs('down');
  } else if (currentDirection === 'down') {
    const column = input.dataset.word;
    const letter = input.dataset.letter;
    const nextInput = cw.querySelector(`input[data-word="${column}"][data-letter="${parseInt(letter) + 1}"]`);
    if (nextInput) {
      nextInput.focus();
    } else {
      let col = parseInt(column) + 1;
      while (col <= MAX) {
        const aux = cw.querySelector(`input[data-word="${col}"][data-letter="1"]`);
        if (aux) {
          aux.focus();
          return;
        }
        col++;
      }
    }
  }
}

function movePrevious(input, limit = false) {
  if (currentDirection === 'across') {
    let prev = input.parentElement.previousElementSibling;
    while (prev) {
      if (!prev.dataset.v) {
        const prevInput = prev.querySelector('input');
        if (prevInput && prevInput.value !== '') {
          prevInput.focus();
          return;
        } else if (prevInput) {
          prevInput.focus();
          return;
        }
      }
      prev = prev.previousElementSibling;
    }
  } else if (currentDirection === 'down') {
    const column = input.dataset.word;
    const letter = input.dataset.letter;
    const prevInput = cw.querySelector(`input[data-word="${column}"][data-letter="${parseInt(letter) - 1}"]`);
    if (prevInput) {
      prevInput.focus();
      return;
    } else {
      let col = parseInt(column) - 1;
      while (col >= 1) {
        const aux = cw.querySelector(`input[data-word="${col}"][data-letter="${document.querySelectorAll(`input[data-word="${col}"]`).length}"]`);
        if (aux) {
          aux.focus();
          return;
        }
        col--;
      }
    }
  }
}

function checkSolution() {
  const error = cw.querySelector('input:invalid');
  if (!error) {
    scrim.classList.add('open');
  }
}

cw.addEventListener('keyup', (event) => {
  const input = event.target;

  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    currentDirection = 'across';
    updateFocusableInputs('across');
    if (event.key === 'ArrowRight') {
      moveNext(input);
    } else {
      movePrevious(input);
    }
    return;
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    currentDirection = 'down';
    updateFocusableInputs('down');
    if (event.key === 'ArrowDown') {
      moveNext(input);
    } else {
      movePrevious(input);
    }
    return;
  }

  if (event.key === 'Tab') {
    if (!event.shiftKey && currentDirection === 'across' && input.parentElement.dataset.lasth) {
      event.preventDefault();
      currentDirection = 'down';
      updateFocusableInputs('down');
      document.querySelector('input[data-word="1"][data-letter="1"]').focus();
      
    }
  }

  if (event.key === 'Backspace' || event.key === 'Delete') {
    if (input.value === '') {
      movePrevious(input);
    }
    input.value = '';
    return;
  }

  if (event.key.length === 1 && (event.key >= 'a' && event.key <= 'z' || event.key >= 'A' && event.key <= 'Z')) {
    input.value = event.key.toUpperCase();
    event.preventDefault();
    moveNext(input);
    checkSolution();
  }
});


updateFocusableInputs('across');
