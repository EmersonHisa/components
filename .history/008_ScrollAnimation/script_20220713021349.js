const boxes = document.querySelectorAll(".box");

checkSpace();
window.addEventListener("scroll", checkSpace);
function checkSpace() {
  const toTop = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < toTop) {
        
    }
  });
}
