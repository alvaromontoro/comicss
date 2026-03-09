// Track the current direction (across or down)
let currentDirection = 'across';
const MAX = 103; // total number of words
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

// check if there are still invalid/missing letters
function checkSolution() {
  const error = cw.querySelector('input:invalid');
  if (!error) {
    scrim.classList.add('open');
  }
}

// initialize the tabbing functionality
function updateFocusableInputs(direction = 'across') {
  inputs.forEach((input) => {
    if (input.matches('label:is([data-o="b"], [data-o="a"]) input') && direction === 'across') {
      input.tabIndex = 0;
    } else if (input.matches('label:is([data-o="b"], [data-o="d"]) input') && direction === 'down') {
      input.tabIndex = 0;
    } else {
      input.tabIndex = -1;
    }
  });
}
updateFocusableInputs('across');

function moveNext(input) {
  const label = input.parentElement;

  if (currentDirection === 'across') {
    const idx = label.dataset.a / 1;
    const next = document.querySelector(`label[data-a="${idx + 1}"]`);

    if (next) {
      next.focus();
    } else {
      document.querySelector("input[data-first-down]").focus();
      currentDirection = 'down';
    }
  } else {
    const idx = label.dataset.d / 1;
    document.querySelector(`label[data-d="${idx + 1}"]`)?.focus();
  }
}

function movePrevious(input) {
  const label = input.parentElement;

  if (currentDirection === 'across') {
    const idx = label.dataset.a / 1;
    const prev = document.querySelector(`label[data-a="${idx - 1}"]`)?.focus();
  } else {
    const idx = label.dataset.d / 1;
    const prev = document.querySelector(`label[data-d="${idx - 1}"]`);

    if (prev) {
      prev.focus();
    } else {
      document.querySelector("input[data-last-across]").focus();
      currentDirection = 'across';
    }
  }
}

function moveRight(input) {
  const label = input.parentElement;
  const tiles = label.parentElement.children;
  const index = [...tiles].indexOf(label);
  const max = index + 25 - index%25;
  const pos = index + 1;

  // the for loop is to move/limit movement across the whole row, not only word
  // for (let pos = index + 1; pos < max; pos++) {
    if (pos < max && tiles[pos] && tiles[pos].tagName.toLowerCase() !== 'span') {
      tiles[pos].focus();
      return true;
    } else {
      return false;
    }
  // }
}

function moveLeft(input) {
  const label = input.parentElement;
  const tiles = label.parentElement.children;
  const index = [...tiles].indexOf(label);
  const min = Math.floor(index / 25) * 25;
  const pos = index - 1;

  // the for loop is to move/limit movement across the whole row, not only word
  // for (let pos = index - 1; pos >= min; pos--) {
    if (pos >= min && tiles[pos] && tiles[pos].tagName.toLowerCase() !== 'span') {
      tiles[pos].focus();
      return true;
    } else {
      return false;
    }
  // }
}

function moveUp(input) {
  const label = input.parentElement;
  const tiles = label.parentElement.children;
  const index = [...tiles].indexOf(label);
  const pos = index - 25;
  if (tiles[pos] && tiles[pos].tagName.toLowerCase() !== 'span') {
    tiles[pos].focus();
    return true;
  } else {
    return false;
  }
}

function moveDown(input) {
  const label = input.parentElement;
  const tiles = label.parentElement.children;
  const index = [...tiles].indexOf(label);
  const pos = index + 25;
  if (tiles[pos] && tiles[pos].tagName.toLowerCase() !== 'span') {
    tiles[pos].focus();
    return true;
  } else {
    return false;
  }
}

cw.addEventListener('keydown', (event) => {
  const input = event.target;

  if (event.key === 'Tab') {
    if (!event.shiftKey && currentDirection === 'across' && input.parentElement.dataset.lastAcross === "") {
      event.preventDefault();
      currentDirection = 'down';
      updateFocusableInputs('down');
      document.querySelector('input[data-first-down]').focus();
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
    return;
  }

  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    let moved = false;
    if (event.key === 'ArrowRight') {
      moved = moveRight(input);
    } else {
      moved = moveLeft(input);
    }
    if (moved) {
      currentDirection = 'across';
      updateFocusableInputs('across');
    }
    return;
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    let moved = false;
    if (event.key === 'ArrowDown') {
      moved = moveDown(input);
    } else {
      moved = moveUp(input);
    }
    if (moved) {
      currentDirection = 'down';
      updateFocusableInputs('down');
    }
    return;
  }
});
