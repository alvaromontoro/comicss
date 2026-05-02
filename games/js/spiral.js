const board = document.querySelector(".board");
const dialog = document.querySelector("#congrats");
dialog.className = "congrats-processed";

const button = document.createElement("button");
button.textContent = "Close";
button.addEventListener("click", () => dialog.close());
dialog.appendChild(button);

function checkWin() {
  const inputs = document.querySelectorAll(".board input:invalid");
  if (inputs.length === 0) {
    dialog.showModal();
  }
}

board.addEventListener("keydown", e => {
  const input = e.target;
  
  if (e.key === 'Backspace' || e.key === 'Delete') {
    if (input.value === '') {
      document.querySelector(`label[data-order="${input.parentNode.dataset.order-1}"] input`)?.focus();
    } else {
      input.value = '';
    }
    return;
  }
  
  if (e.key.length === 1 && ((e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z'))) {
    input.value = e.key;
    document.querySelector(`label[data-order="${input.parentNode.dataset.order/1+1}"] input`)?.focus();
    e.preventDefault();
  }

  checkWin();
})

// document.querySelectorAll("input").forEach((el, idx) => {
//   if (idx !== 0) { el.value = el.pattern[1]; }
// });