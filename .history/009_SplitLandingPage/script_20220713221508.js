const left = document.querySelector(".left");
const right = document.querySelector(".right");
left.addEventListener("mouseenter", () => {
  left.classList.add("active");
});
left.addEventListener("mouseleave", () => {
    left.classList.remvoe("active");
  });