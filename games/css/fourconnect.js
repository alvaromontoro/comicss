class FourConnect extends HTMLElement {
  colors = ["#fe5", "#fc6", "#f82", "#d55"];
  errors = [];
  groups = [];
  buttons = [];
  board = null;
  already = null;
  mistakes = null;

  static get observedAttributes() {
    return ['data'];
  }

  addMistake() {
    this.mistakes.appendChild(document.createElement("span"));
    this.mistakes.setAttribute("aria-label", `${this.errors.length} errors`);
  }

  showError(deactivateBoard = false, showAlready = false) {
    const selected = this.board.querySelectorAll("[data-selected]");
    this.already.classList.toggle("hidden", !showAlready);
    for (let n = 0; n < 4; n++) {
      selected[n].classList.toggle("shake", true);
      setTimeout(() => {
        if (n===0 && !showAlready) { this.addMistake(); }
        selected[n].classList.toggle("shake", false);
        delete selected[n].dataset.selected;
        this.already.classList.toggle("hidden", true);
        this.board.inert = deactivateBoard;

        if (n === 0 && this.errors.length === 4) {
          this.showGameOver();
        }
      }, 1000);
    }
  }

  sameGroup(selected) {
    return (
      selected[0].dataset.d === selected[1].dataset.d && 
      selected[1].dataset.d === selected[2].dataset.d && 
      selected[2].dataset.d === selected[3].dataset.d
    );
  }

  generateSequence(selected) {
    return [...selected].sort().reduce((ac, el) => ac+el.dataset.i, "");
  }

  updateOrderValue(selected, order) {
    for (let n = 0; n < 4; n++) {
      selected[n].disabled = true;
      selected[n].style.order = order;
      selected[n].style.background = this.colors[selected[n].dataset.d];
      delete selected[n].dataset.selected;
      this.board.inert = false;
    }
  }

  markCorrect(selected) {

    const order = 10 - this.board.querySelectorAll("button[disabled]").length / 4;

    if (!document.startViewTransition) {
      this.updateOrderValue(selected, order);
      if (this.board.querySelectorAll("button[disabled]").length === 16) {
        this.showWin();
      }
    } else {
      // Run updateActiveItem() via startViewTransition()
      const transition = document.startViewTransition(() => {
        this.updateOrderValue(selected, order);
        if (this.board.querySelectorAll("button[disabled]").length === 16) {
          this.showWin();
        }
      });

    }

  }

  showWin() {
    this.shadow.querySelector(".scrim-good").classList.toggle("visible", true);
  }

  showGameOver() {
    this.shadow.querySelector(".scrim-bad").classList.toggle("visible", true);
  }

  showResults() {
    for (let x = 0; x < 4; x++) {
      const div = document.createElement("div");
      div.style.backgroundColor = this.colors[x];

      const title = document.createElement("h2");
      title.textContent = this.groups[x];
      div.appendChild(title);

      const p = document.createElement("p");
      p.textContent = [...this.board.querySelectorAll(`:scope > [data-d="${x}"]`)].map(el => el.textContent).join(", ");
      div.appendChild(p);

      this.board.appendChild(div);
    }

    this.board.querySelectorAll(":scope > button").forEach(el => el.remove());
    this.shadow.querySelectorAll(".scrim").forEach(el => el.classList.remove("visible"));
  }

  initalizeValues() {
    this.colors = ["#fe5", "#fc6", "#f82", "#d55"];
    this.errors = [];
    this.groups = [];
    this.buttons = [];
    if (this.board) {
      this.mistakes.textContent = "";
      this.board.inert = false;
    }
  }

  generateBoard() {
    // empty the board
    this.board.textContent = "";

    // read data
    const data = JSON.parse(decodeURIComponent(this.getAttribute("data")));
    const buttons = [];

    this.groups = data.map(el => el.name);

    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        const button = document.createElement("button");
        button.dataset.i = String(x*4 + y).padStart(2, '0');
        button.dataset.d = x;
        button.textContent = data[x].values[y];
        button.addEventListener("click", () => {
          if (!button.disabled) {
            if (!button.dataset.selected) {
              button.dataset.selected = "true";
              const selected = this.board.querySelectorAll("[data-selected]");
              if (selected.length === 4) {
                this.board.inert = true;
                setTimeout(() => {
                  if (this.sameGroup(selected)) {
                    this.markCorrect(selected);
                  } else {
                    const seq = this.generateSequence(selected);
                    if (this.errors.indexOf(seq) > -1) {
                      this.showError(false, true);
                    } else {
                      this.errors.push(seq);
                      if (this.errors.length === 4) {
                        this.showError(true);
                      } else {
                        this.showError();
                      }
                    }
                  }
                }, 1000);
              }
            } else {
              delete button.dataset.selected;
            }
          }
        });
        // this.board.appendChild(button);
        buttons.push(button);
      }
    }

    // shuffle buttons
    for (let x = 0; x < 100; x++) {
      const c1 = Math.floor(Math.random() * buttons.length);
      const c2 = Math.floor(Math.random() * buttons.length);

      const aux = buttons[c1];
      buttons[c1] = buttons[c2];
      buttons[c2] = aux;
    }

    for (let x = 0; x < buttons.length; x++) {
      this.board.appendChild(buttons[x]);
    }
  }

  connectedCallback() {
    // set up basic elements based on template
    this.board = this.shadow.querySelector(".board");
    this.already = this.shadow.querySelector(".already-guessed");
    this.mistakes = this.shadow.querySelector(".mistakes-made");

    this.shadow.querySelector(".scrim-good button").addEventListener("click", this.showResults.bind(this));
    this.shadow.querySelector(".scrim-bad button").addEventListener("click", this.showResults.bind(this));

    if (this.getAttribute("data")) {
      this.initalizeValues();
      this.generateBoard();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue && name === 'data' && this.board) {
      this.initalizeValues();
      this.generateBoard();
    }
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.shadow = shadow;

    shadow.innerHTML = `
<style>
article {
  --size: 100cqi;
  --gap: 1em;
  --font: 1.5cqi;
  container-type: inline-size;
  width: 100%;
  margin: auto;

  @media (width > 600px) {
    --size: 500px;
    width: var(--size);
  }

  @media (width > 1000px) {
    --size: 750px;
    --font: 1.25cqi;
  }
}

h2 {
  font-weight: 400;
}

.board {
  font-size: var(--font);
  width: var(--size);
  height: var(--size);
  display: grid;
  align-items: end;
  justify-content: end;
  gap: var(--gap);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  @media (width > 1000px) {
    height: calc(var(--size) * 0.6);
  }

  > div {
    grid-column: 1 / 5;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    flex-direction: column;
    height: 100%;
    font-size: 2em;
    color: #000;
    border-radius: 0.5em;

    > * {
      margin: 0;
    }
  }

  button {
    font-size: 2.2em;
    position: relative;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0.25em;
    background: light-dark(#ddd, #666);
    color: light-dark(#000, #eee);
    font-weight: 500;
    order: 1;
    transition: background-color 0.25s, color 0.25s, order 0.25s;
    view-transition-name: match-element;

    &[data-selected] {
      background: light-dark(#666, #ddd);
      color: light-dark(#eee, #000);
    }

    &.shake {
      animation: shake 0.2s infinite;
    }

    &[style*="order"] {
      color: #000;
    }
  }
}

@keyframes shake {
  0%, 100% { translate: 0; }
  25% { translate: -5%; }
  75% { translate: 5%; }
}

.mistakes-made,
.already-guessed {
  visibility: visible;
  margin-block: 2em;
  font-size: 1vmin;
  text-align: center;
  max-width: var(--size);

  &.hidden {
    visibility: hidden;
  }

  span {
    font-size: 2.5em;
  }
}

.mistakes-made {
  display: flex;
  gap: 1em;
  justify-content: center;

  span {
    width: 1.5em;
    height: 1.5em;
    display: inline-block;
    position: relative;

    &::before, &::after {
      content: "";
      width: 100%;
      height: 12%;
      position: absolute;
      top: 50%;
      lefT: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: red;
      border-radius: 1.5em;
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}

.scrim {
  position: fixed;
  inset: 0;
  background: #0008;
  backdrop-filter: blur(0.5em);
  place-items:center;
  display: none;
  z-index: 1000;
  view-transition-name: match-element;
  
  &.visible {
    display: grid;
  }

  > div {
    background: var(--bg);
    border-radius: 0.5em;
    padding: 2em;
    font-family: Helvetica, sans-serif;
    max-width: 300px;
    width: 80%;

    h2 {
      margin-block: 0 2rem;
      font-weight: 400;
    }

    p {
      margin-block: 1rem;
      font-weight: 300;
    }

    button {
      border: 1px solid #0000;
      background: var(--fg);
      color: var(--bg);
      border-radius: 0.5em;
      padding: 1em;
      font-size: 1em;
    }
  }
}
</style>
<article class="connect-4">
  <div class="already-guessed hidden" role="alert">
    <span>Already guessed connection</span>
  </div>

  <div class="board"></div>

  <div class="mistakes-made" aria-label="0 mistakes"></div>

  <section class="scrim scrim-good">
    <div role="alert">
      <h2>Congratulations!!</h2>
      <p>You solved the puzzle!</p>
      <button>Show results</button>
    </div>
  </section>

  <section class="scrim scrim-bad">
    <div role="alert">
      <h2>Game over</h2>
      <p>Sorry, you didn't solve it in 4 attemps</p>
      <button>Show solution</button>
    </div>
  </section>
</article>
    `;
  }
}

window.customElements.define('four-connect', FourConnect);
