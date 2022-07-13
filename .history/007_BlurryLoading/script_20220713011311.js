let text = 0;
const timer = setInterval(trigger(), 30);
function trigger() {
  text++;
  if (text === 100) {
    clearTimeout(timer);
  }
}

function scale(num, outmax, outmin, inmax, inmin) {
    return (num-inmin)
}