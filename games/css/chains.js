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

document.querySelector(".check").addEventListener("click", () => {
  if (document.querySelector(":invalid")) {
    scrimBad.classList.toggle("visible", true);
  } else {
    scrimGood.classList.toggle("visible", true);
  }
})


window.mobileCheck = function() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
};

// disabling the JS logic on mobile because Android's virtual keyboard doesn't play nice with keycodes and keyEvents
if (!mobileCheck()) {
  // allow better keyboard experience
  document.querySelectorAll(".chain input").forEach(input => {
    input.addEventListener("keydown", e => {

      // tab or space: nothing (moves or deletes)
      if (["Tab","Space"].indexOf(e.code) >= 0) {
        return;
      }
      
      // delete/backspace: delete cell and move to previous
      if (e.code === "Backspace") {
        input.value = "";
        input.previousElementSibling?.focus();
      }
      
      // letter key: add key and move to next input
      if (e.code >= "KeyA" && e.code <= "KeyZ") {
        input.value = e.code[3];
        input.nextElementSibling?.focus();
      }
      
      // add navigation with arrows
      if (e.code === "ArrowLeft") {
        input.previousElementSibling?.focus();
      }
      if (e.code === "ArrowRight") {
        input.nextElementSibling?.focus();
      }
      
      // prevent typing again
      e.preventDefault();
    })
  })


}