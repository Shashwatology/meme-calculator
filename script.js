let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function operate(operation) {
  if (currentInput === '') return;
  if (currentOperation !== null) calculate();
  previousInput = currentInput;
  currentOperation = operation;
  currentInput = '';
}

function calculate() {
  if (currentOperation === null || currentInput === '') return;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  let result;
  switch (currentOperation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = null;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  currentOperation = null;
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}