const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const xbtn = document.querySelector(".sidebar-header i");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-bar");
});
xbtn.addEventListener("click", () => {
  sidebar.classList.remove("show-bar");
});
