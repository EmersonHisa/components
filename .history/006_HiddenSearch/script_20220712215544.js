const container = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  container.classList.add("active");
});
