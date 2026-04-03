const cwg = {
  WIDTH: 25, // total number of columns
  HEIGHT: 30, // total number of rows
  PUZZLEID: 0, // unique identifier for the current puzzle, used for saving/loading
  
  currentDirection: 'across', // Track the current direction (across or down)
  active: null, // actively current focused input
  cw: document.querySelector('#crossword'), // the crossword board
  inputs: document.querySelectorAll('#crossword input[pattern]'), // all the input fields in the crossword
  scrim: document.querySelector('.scrim'), // the overlay used for showing the solution and messages
  tools: document.querySelector('.game-tools'), // the container for game buttons like check and clear

  // resets the game values when loading a new puzzle
  _updateValues: function(width, height, id) {
    cwg.WIDTH = width;
    cwg.HEIGHT = height;
    cwg.PUZZLEID = id;
  },

  // TEST: add all the values in the right place
  _testAddValues: function() {
    cwg.inputs.forEach((i, idx) => {
      if (idx !== 0) {
        i.value = i.getAttribute('pattern')[1];
      }
    });
  },

  // add a close button to the solution modal
  _updateScrim: function() {
    cwg.scrim.setAttribute('class', 'scrim-processed');
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      cwg.scrim.classList.remove('open');
    });
    cwg.scrim.querySelector('div').appendChild(closeButton);
  },

  // create new button for clearing puzzle
  _clearButton: function() {
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', () => {
      if (!confirm('Are you sure you want to clear the puzzle?')) {
        return;
      }
      cwg.inputs.forEach(input => {
        input.classList.toggle('invalid', false);
        input.value = '';
      });
      cwg.scrim.classList.remove('open');
      cwg.savePuzzle();
    });
    cwg.tools.querySelector('.game-buttons').appendChild(clearButton);
  },

  // boostx the functionality of the check solution button
  _checkButton: function() {
    const checkButton = document.querySelector('#check-puzzle');
    checkButton.setAttribute('id', 'check-puzzle-processed');
    checkButton.addEventListener('click', () => {
      cwg.inputs.forEach(input => input.classList.toggle('invalid', input.value !== '' && !input.checkValidity()));
      cwg.checkSolution();
    });
  },

  // add event listeners to inputs to track the active input
  _inputsActiveFocus: function() {
    cwg.inputs.forEach(input => {
      input.addEventListener('focus', () => {
        cwg.active = input;
      });
      input.addEventListener('click', () => {
        cwg.active = input;
      });
      input.setAttribute('inputmode', 'none'); // disable mobile keyboard
    });
  },

  // initialize the tabbing functionality
  _updateFocusableInputs: function(direction = 'across') {
    cwg.inputs.forEach((input) => {
      if (input.matches('label:is([data-o="b"], [data-o="a"]) input') && direction === 'across') {
        input.tabIndex = 0;
      } else if (input.matches('label:is([data-o="b"], [data-o="d"]) input') && direction === 'down') {
        input.tabIndex = 0;
      } else {
        input.tabIndex = -1;
      }
    });
  },

  // load a previous state of the puzzle from localStorage, if it exists
  _loadPuzzle: function() {
    const data = JSON.parse(localStorage.getItem(`crossword-puzzle-${cwg.PUZZLEID}`) || '[]');
    if (data.length === cwg.inputs.length) {
      cwg.inputs.forEach((input, idx) => input.value = data[idx]);
    }
  },

  // save the current state of the puzzle to localStorage
  savePuzzle: function() {
    const data = Array.from(cwg.inputs).map(input => input.value);
    localStorage.setItem(`crossword-puzzle-${cwg.PUZZLEID}`, JSON.stringify(data));
  },

  // check if there are still invalid/missing letters and show the solution if the puzzle is complete
  checkSolution: function() {
    const error = cwg.cw.querySelector('input:invalid');
    if (!error) {
      cwg.scrim.classList.add('open');
    }

    cwg.savePuzzle();
  },

  // moves to the next input based on current direction
  _moveNext: function(input) {
    const label = input.parentElement;

    if (cwg.currentDirection === 'across') {
      const idx = label.dataset.a / 1;
      const next = document.querySelector(`label[data-a="${idx + 1}"] input`);

      if (next) {
        next.focus();
        cwg.active = next;
      } else {
        document.querySelector('label[data-d="1"] input').focus();
        cwg.active = document.querySelector('label[data-d="1"] input');
        cwg.currentDirection = 'down';
      }
    } else {
      const idx = label.dataset.d / 1;
      document.querySelector(`label[data-d="${idx + 1}"]`)?.focus();
      cwg.active = document.querySelector(`label[data-d="${idx + 1}"] input`) || input;
    }
  },

  // moves to the previous input based on current direction
  _movePrevious: function(input) {
    const label = input.parentElement;

    if (cwg.currentDirection === 'across') {
      const idx = label.dataset.a / 1;
      const prev = document.querySelector(`label[data-a="${idx - 1}"] input`)?.focus();
      cwg.active = prev || input;
    } else {
      const idx = label.dataset.d / 1;
      const prev = document.querySelector(`label[data-d="${idx - 1}"] input`);

      if (prev) {
        prev.focus();
        cwg.active = prev;
      } else {
        document.querySelector("input[data-last-across]").focus();
        cwg.currentDirection = 'across';
        cwg.active = document.querySelector("input[data-last-across]");
      }
    }
  },

  // moved right based on current position (if possible)
  _moveRight: function(input) {
    const label = input.parentElement;
    const tiles = label.parentElement.children;
    const index = [...tiles].indexOf(label);
    const max = index + cwg.WIDTH - index % cwg.WIDTH;
    const pos = index + 1;

    if (pos < max && tiles[pos] && tiles[pos].tagName.toLowerCase() !== 'span') {
      tiles[pos].focus();
      cwg.active = tiles[pos];
      return true;
    } else {
      return false;
    }
  },

  // moved left based on current position (if possible)
  _moveLeft: function(input) {
    const label = input.parentElement;
    const tiles = label.parentElement.children;
    const index = [...tiles].indexOf(label);
    const min = Math.floor(index / cwg.WIDTH) * cwg.WIDTH;
    const pos = index - 1;

    if (pos >= min && tiles[pos] && tiles[pos].tagName.toLowerCase() !== 'span') {
      tiles[pos].focus();
      cwg.active = tiles[pos];
      return true;
    } else {
      return false;
    }
  },

  // moved up based on current position (if possible)
  _moveUp: function(input) {
    const label = input.parentElement;
    const tiles = label.parentElement.children;
    const index = [...tiles].indexOf(label);
    const pos = index - cwg.WIDTH;
    if (tiles[pos] && tiles[pos].tagName.toLowerCase() !== 'span') {
      tiles[pos].focus();
      cwg.active = tiles[pos];
      return true;
    } else {
      return false;
    }
  },

  // moved down based on current position (if possible)
  _moveDown: function(input) {
    const label = input.parentElement;
    const tiles = label.parentElement.children;
    const index = [...tiles].indexOf(label);
    const pos = index + cwg.WIDTH;
    if (tiles[pos] && tiles[pos].tagName.toLowerCase() !== 'span') {
      tiles[pos].focus();
      cwg.active = tiles[pos];
      return true;
    } else {
      return false;
    }
  },

  _attachInputListeners: function() {
    cwg.cw.addEventListener('keydown', (event) => {
      const input = event.target;

      if (event.key === 'Tab') {
        if (!event.shiftKey && cwg.currentDirection === 'across' && input.parentElement.dataset.lastAcross === "") {
          event.preventDefault();
          cwg.currentDirection = 'down';
          cwg._updateFocusableInputs('down');
          document.querySelector('label[data-d="1"] input').focus();
        }
      }

      if (event.key === 'Backspace' || event.key === 'Delete') {
        if (input.value === '') {
          cwg._movePrevious(input);
        }
        input.value = '';
        return;
      }

      if (event.key.length === 1 && (event.key >= 'a' && event.key <= 'z' || event.key >= 'A' && event.key <= 'Z')) {
        input.value = event.key.toUpperCase();
        event.preventDefault();
        cwg._moveNext(input);
        cwg.checkSolution();
        input.classList.toggle('invalid', false);
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        let moved = false;
        if (event.key === 'ArrowRight') {
          moved = cwg._moveRight(input);
        } else {
          moved = cwg._moveLeft(input);
        }
        if (moved) {
          cwg.currentDirection = 'across';
          cwg._updateFocusableInputs('across');
        }
        return;
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        let moved = false;
        if (event.key === 'ArrowDown') {
          moved = cwg._moveDown(input);
        } else {
          moved = cwg._moveUp(input);
        }
        if (moved) {
          cwg.currentDirection = 'down';
          cwg._updateFocusableInputs('down');
        }
        return;
      }
    });
  },

  // initializes the game, setting up event listeners and buttons
  initialize: function(id = 0, width = 25, height = 30) {
    // boost the puzzle with JS
    cwg._updateScrim();
    cwg._clearButton();
    cwg._checkButton();
    cwg._inputsActiveFocus();
    cwg._updateFocusableInputs('across');
    
    // add event listeners for keyboard input
    cwg._attachInputListeners();

    // initialize the puzzle values and load the previous state if it exists
    cwg._updateValues(width, height, id);
    cwg._loadPuzzle();
  }
};




function addKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
  letters.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => {
      // const active = document.activeElement;
      // if (active.tagName.toLowerCase() === 'input') {
      //   active.value = letter;
      //   moveNext(active);
      //   checkSolution();
      //   active.classList.toggle('invalid', false);
      // }
      console.log('clicked', letter, active);
      // setTimeout(() => {
      //   console.log("dispatch")
        active.dispatchEvent(new KeyboardEvent('keydown', { key: letter, bubbles: true }));
      // }, 0);
    });
    keyboard.appendChild(button);
    if (letter === "P" || letter === "L") {
        keyboard.appendChild(document.createElement('br'));
      }
  });
  document.body.appendChild(keyboard);
}




