const bg = document.querySelector(".bg");
const text = document.querySelector(".text");
let loading = 0;
let timer = setInterval(trigger, 30);
function trigger() {
  loading++;
  if (loading === 100) {
    clearTimeout(timer);
  }
  text.innerHTML = loading + "%";
  text.style.opacity = `${scale(loading, 1, 0, 100, 0)}`;
  bg.style.filter = ``
}

function scale(num, outmax, outmin, inmax, inmin) {
  return ((num - inmin) * (outmax - outmin)) / (inmax - inmin) + outmin;
}
