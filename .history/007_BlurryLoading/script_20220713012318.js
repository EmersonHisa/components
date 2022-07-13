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
  text.style.opacity = `${scale(loading, 0, 1, 100, 0)}`;
  bg.style.filter = `blur(${scale(loading, 0, 5, 100, 0)}px)`;
}

function scale(num, outmax, outmin, inmax, inmin) {
  return ((num - inmin) * (outmax - outmin)) / (inmax - inmin) + outmin;
}
