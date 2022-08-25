"use strict";
var input = document.getElementById("input"),
  number = document.querySelectorAll(".numbers div"),
  operator = document.querySelectorAll(".operators div"),
  result = document.getElementById("result"), //equal button
  clear = document.getElementById("clear"),
  resultDisplayed = false;
//add click handlers to number buttons
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (e) => {
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (
      resultDisplayed === true &&
      (lastChar === "÷" ||
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "×")
    ) {
      resultDisplayed = "false";
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}
// adding click handlers to operator buttons
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", (e) => {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];
    if (!lastChar) {
      console.log("enter a number first");
    } else if (
      lastChar === "÷" ||
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×"
    ) {
      var newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.innerHTML;
      input.innerHTML = newString;
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}
// adding click handlers to equal button
result.addEventListener("click", (e) => {
  var inputString = input.innerHTML;
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");
});
