/**
 * Simple JavaScript Calculator
 * Supports operations, memory, and history
 */

let memory = null;
let history = [];

/**
 * Save operation history
 */
function saveHistory(operation) {
  history.push(operation);

  if (history.length > 10) {
    history.shift();
  }
}

/**
 * Addition
 */
function add(a, b) {
  const result = a + b;
  saveHistory(`${a} + ${b} = ${result}`);
  return result;
}

/**
 * Subtraction
 */
function subtract(a, b) {
  const result = a - b;
  saveHistory(`${a} - ${b} = ${result}`);
  return result;
}

/**
 * Multiplication
 */
function multiply(a, b) {
  const result = a * b;
  saveHistory(`${a} * ${b} = ${result}`);
  return result;
}

/**
 * Division
 */
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }

  const result = a / b;
  saveHistory(`${a} / ${b} = ${result}`);
  return result;
}

/**
 * Exponent
 */
function exponent(a, b) {
  const result = a ** b;
  saveHistory(`${a} ^ ${b} = ${result}`);
  return result;
}

/**
 * Square Root
 */
function squareRoot(num) {
  const result = Math.sqrt(num);
  saveHistory(`√${num} = ${result}`);
  return result;
}

/**
 * Store value in memory
 */
function storeMemory(value) {
  memory = value;
}

/**
 * Recall memory value
 */
function recallMemory() {
  return memory;
}

/**
 * Clear memory
 */
function clearMemory() {
  memory = null;
}

/**
 * Show history
 */
function showHistory() {
  console.log("History:");
  history.forEach(item => console.log(item));
}

/**
 * Clear history
 */
function clearHistory() {
  history = [];
}


/* Example usage */

console.log(add(7,2));        // 8
console.log(multiply(5,7));   // 24
console.log(exponent(3,4));   // 8
console.log(squareRoot(20));  // 4

storeMemory(100);
console.log("Memory:", recallMemory());

showHistory();