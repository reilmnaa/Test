let num = document.querySelectorAll('.num')
let display = document.getElementById("display")
let clear = document.getElementById("ac")
let erase = document.getElementById("e")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let multiply = document.getElementById("multiply")
let division = document.getElementById("dev")
let dotbtn = document.getElementById("dot")
let percentbtn = document.getElementById("percent")
let equal = document.getElementById("equal")
let firstNum;
let operator;
let secondNum;

function show(number) {
  display.value += number;
}

function e() {
  display.value = display.value.slice(0, -1)
}

function dot() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function percent() {
  display.value = Number(display.value) / 100;
}

function setOperator(op) {
  firstNum = Number(display.value);
  operator = op;
  display.value = "";
}

function calculate() {
  let secondNum = Number(display.value);
  if (operator === "+") {
    display.value = firstNum + secondNum;
  } else if (operator === "-") {
    display.value = firstNum - secondNum;
  } else if (operator === "×") {
    display.value = firstNum * secondNum;
  } else if (operator === "÷") {
    display.value = firstNum / secondNum;
  }
  }

function clearall() {
  display.value = ""
}

num.forEach(numbutton => {
  numbutton.addEventListener("click", () => {
    show(numbutton.textContent)
  });
});

clear.addEventListener("click", clearall)
erase.addEventListener("click", e)
dotbtn.addEventListener("click", dot)
percentbtn.addEventListener("click", percent)
plus.addEventListener("click", () => {
  setOperator("+");
})
minus.addEventListener("click", () => {
  setOperator("-");
})
multiply.addEventListener("click", () => {
  setOperator("×");
})
division.addEventListener("click", () => {
  setOperator("÷");
})
equal.addEventListener("click", calculate)
