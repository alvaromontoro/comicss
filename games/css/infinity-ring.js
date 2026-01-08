const inputs = document.querySelectorAll("input");
const scrim = document.querySelector(".scrim");
scrim.removeAttribute("id")

function check() {
  if (
    (
      (document.querySelector("#tile-14").value.toLowerCase() === "sla" && document.querySelector("#tile-13").value.toLowerCase() === "an") ||
      (document.querySelector("#tile-14").value.toLowerCase() === "la" && document.querySelector("#tile-13").value.toLowerCase() === "ans")
    ) &&
    document.querySelector("#tile-12").value.toLowerCase() === "tr" &&
    document.querySelector("#tile-11").value.toLowerCase() === "at" &&
    document.querySelector("#tile-10").value.toLowerCase() === "pe" && 
    document.querySelector("#tile-9").value.toLowerCase() === "re" &&
    document.querySelector("#tile-8").value.toLowerCase() === "fo" && 
    (
      (document.querySelector("#tile-7").value.toLowerCase() === "-be" && document.querySelector("#tile-6").value.toLowerCase() === "st") ||
      (document.querySelector("#tile-7").value.toLowerCase() === "be" && document.querySelector("#tile-6").value.toLowerCase() === "st-")
    ) &&
    document.querySelector("#tile-5").value.toLowerCase() === "re" && 
    document.querySelector("#tile-4").value.toLowerCase() === "fo" && 
    document.querySelector("#tile-3").value.toLowerCase() === "-be" && 
    document.querySelector("#tile-2").value.toLowerCase() === "wrap" && 
    document.querySelector("#tile-1").value.toLowerCase() === "xt-" && 
    document.querySelector("#tile-0").value.toLowerCase() === "te"
  ) {
    scrim.setAttribute("id", "scrim-good");
    scrim.setAttribute("style", "display:grid");
  } else {
    scrim.removeAttribute("id");
    scrim.setAttribute("style", "");
  }
}

for (let x = 0; x < inputs.length; x++) {
  inputs[x].addEventListener("blur", check)
}