const left = document.querySelector(".left");
const right = document.querySelector(".right");
left.addEventListener("mouseenter", () => {
  left.classList.add("active");
});
left.addEventListener("mouseleave", () => {
  left.classList.remove("active");
});

right.addEventListener("mouseenter", () => {
  right.classList.add("active");
});
right.addEventListener("mouseleave", () => {
  right.classList.remove("active");
});
