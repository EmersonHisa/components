const labels = document.querySelectorAll(".form-control");

labels.forEach((label)=> {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx)=> `<span style=>`)
})