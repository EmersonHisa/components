const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
let currentActive = 1;
next.addEventListener("click", () => {
    currentActive++;
    if(currentActive > circles)
});
