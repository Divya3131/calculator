let currentNumber = "";
let previousNumber = "";
let operation = "";

function addNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function addDecimalPoint() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    document.getElementById("display").value = currentNumber;
  }
}

function addOperation(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operation = op;
  }
}

function calculate() {
  if (previousNumber !== "" && currentNumber !== "" && operation !== "") {
    let result;
    switch (operation) {
      case
 
"+":
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case
 
"-":
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case
 
"*":
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case
 
"/":
        result = parseFloat(previousNumber) / parseFloat(currentNumber);

        
break;
    }
    currentNumber = result.toString();
    previousNumber = "";
    operation = "";
    document.getElementById("display
