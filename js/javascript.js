const result = document.getElementById("result");
const numbers = document.querySelectorAll(".nums");
const operators = document.querySelectorAll(".oper");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".deleteAll");
const deleteButton = document.querySelector(".delete");

function updateDisplay(value) {
  result.value += value;
  console.log("ra", value);
}

function NumberClick(event) {
  updateDisplay(event.target.value);
}

let operator = "";

function setOperator(event) {
  operator = event.target.value;
  updateDisplay(event.target.value);
}

function calcuate() {
  let arr = result.value.split(operator);
  console.log(parseInt(arr[0]));
  console.log(parseInt(arr[1]));

  switch (operator) {
    case "+":
      result.value = parseInt(arr[0]) + parseInt(arr[1]);
      break;
    case "-":
      result.value = parseInt(arr[0]) - parseInt(arr[1]);
      break;
    case "*":
      result.value = parseInt(arr[0]) * parseInt(arr[1]);
      break;
    case "/":
      result.value = parseInt(arr[0]) / parseInt(arr[1]);
      break;
    default:
      "invalid value";
  }
}
equalButton.addEventListener("click", calcuate);

for (let i of numbers) {
  i.addEventListener("click", NumberClick);
}
for (let i of operators) {
  i.addEventListener("click", setOperator);
}

function acClick(value) {
  result.value = "";
  console.log("hello", value);
}

clearButton.addEventListener("click", acClick);

function cClick(value) {
  result.value = result.value.slice(0, result.value.length - 1);
}
deleteButton.addEventListener("click", cClick);
