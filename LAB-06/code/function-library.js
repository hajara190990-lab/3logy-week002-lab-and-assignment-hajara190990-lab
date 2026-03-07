// =======================
// Utility Library
// =======================

/**
 * Reverse a string
 * @param {string} text - Input string
 * @returns {string} Reversed string
 * @example
 * reverseString("welcome"); // "emoclew"
 */
function reverseString(text) {
  return text.split('').reverse().join('');
}

/**
 * Count words in a string
 * @param {string} text - Input text
 * @returns {number} Word count
 * @example
 * countWords("Good Day!"); // 2
 */
function countWords(text) {
  return text.trim().split(/\s+/).length;
}

/**
 * Check if a string is a palindrome
 * @param {string} text - Input string
 * @returns {boolean} True if palindrome
 * @example
 * isPalindrome("misses"); // true
 */
function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Check if a number is prime
 * @param {number} n - Input number
 * @returns {boolean} True if prime
 * @example
 * isPrime(7); // true
 */
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Calculate factorial of a number
 * @param {number} n - Input number
 * @returns {number} Factorial result
 * @example
 * factorial(5); // 120
 */
function factorial(n) {
  if (n < 0) return undefined;
  return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * Get nth Fibonacci number
 * @param {number} n - Position in sequence
 * @returns {number} nth Fibonacci number
 * @example
 * fibonacci(6); // 8
 */
function fibonacci(n) {
  if (n < 0) return undefined;
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

/**
 * Remove duplicate values from array
 * @param {Array} arr - Input array
 * @returns {Array} Array without duplicates
 * @example
 * removeDuplicates([1,2,2,3]); // [1,2,3]
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * Find median of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Median value
 * @example
 * findMedian([1,2,3,4,5]); // 3
 */
function findMedian(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Validate email format
 * @param {string} email - Input email
 * @returns {boolean} True if valid
 * @example
 * isValidEmail("hayd1990@gmail.com"); // true
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validate phone number (basic)
 * @param {string} phone - Input phone number
 * @returns {boolean} True if valid
 * @example
 * isValidPhone("07066182650"); // true
 */
function isValidPhone(phone) {
  const regex = /^\+?\d{10,15}$/;
  return regex.test(phone.replace(/[\s-]/g, ''));
}

// =======================
// Test Runner
// =======================

function runTests() {
  console.log("reverseString:", reverseString("welcome")); // "olleh"
  console.log("countWords:", countWords("Good Day!")); // 2
  console.log("isPalindrome:", isPalindrome("misses")); // true
  console.log("isPrime:", isPrime(7)); // true
  console.log("factorial:", factorial(5)); // 120
  console.log("fibonacci:", fibonacci(6)); // 8
  console.log("removeDuplicates:", removeDuplicates([1,2,2,3])); // [1,2,3]
  console.log("findMedian:", findMedian([1,2,3,4,5])); // 3
  console.log("isValidEmail:", isValidEmail("hayd1990@gmail.com")); // true
  console.log("isValidPhone:", isValidPhone("07066182650")); // true
}

// Run all tests
runTests();
