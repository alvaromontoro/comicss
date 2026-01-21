// replace inputs with selects
document.querySelectorAll(".container").forEach(container => {
  const selectNum = document.createElement("select");
  selectNum.innerHTML = `<option>--</option><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>`;
  const inputNum = container.querySelector('[placeholder="#"]');
  selectNum.dataset.valid = inputNum.pattern;
  inputNum.replaceWith(selectNum);

  const selectCC = document.createElement("select");
  selectCC.innerHTML = `<option>--</option><option>C</option><option>CC</option>`;
  const inputCC = container.querySelector('[placeholder="C/CC"]');
  selectCC.dataset.valid = inputCC.pattern == "(c|C)" ? "C" : "CC";
  inputCC.replaceWith(selectCC);
});

// rename the messages to avoid CSS solution
const scrimBad = document.querySelector("#scrim-bad");
scrimBad.setAttribute("id", "scrim-bad-processed");
const button1 = document.createElement("button");
button1.textContent = "Close Dialog";
button1.addEventListener("click", () => {
  scrimBad.classList.remove("visible")
});
scrimBad.querySelector("div").appendChild(button1);
const scrimGood = document.querySelector("#scrim-good")
scrimGood.setAttribute("id", "scrim-good-processed");
const button2 = document.createElement("button");
button2.textContent = "Close Dialog";
button2.addEventListener("click", () => {
  scrimGood.classList.remove("visible");
});
scrimGood.querySelector("div").appendChild(button2);

// add logic to the button
document.querySelector("button.check").addEventListener("click", () => {
  const valid = [...document.querySelectorAll("select")].every(el => el.value === el.dataset.valid);
  if (valid) {
    document.querySelector("#scrim-good-processed").classList.add("visible");
    document.querySelector("#scrim-good-processed button").focus();
  } else {
    document.querySelector("#scrim-bad-processed").classList.add("visible");
    document.querySelector("#scrim-bad-processed button").focus();
  }
});