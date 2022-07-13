const bg = document.querySelector(".bg");
const text = document.
let loading = 0;
const timer = setInterval(trigger(), 30);
function trigger() {
    loading++;
  if (loading === 100) {
    clearTimeout(timer);
  }
}

function scale(num, outmax, outmin, inmax, inmin) {
  return ((num - inmin) * (outmax - outmin)) / (inmax - inmin) + outmin;
}
