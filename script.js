let currentInput = '';
let currentOperation = null;
let previousInput = '';
let memes = [
  " mei toh printing enginerr huu ",
  "engineering kar rha hu calculator wali ",
  "sattar mei asa kya jodi diya baba ",
  "Chhoti chhoti batein..", 
  "Abey yeh kya tha?!", 
  "roo leta hu ", 
  "1+1 = 11",
  "ham saat 7 hai ",
  "Saanp seedi moment!"
];

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
  displayMeme();
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  currentOperation = null;
  previousInput = '';
  document.getElementById('meme-area').innerText = '';
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function displayMeme() {
  const meme = memes[Math.floor(Math.random() * memes.length)];
  document.getElementById('meme-area').innerText = meme;
}
