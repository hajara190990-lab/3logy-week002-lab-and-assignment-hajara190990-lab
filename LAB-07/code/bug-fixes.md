### Bug 1
# Error Type: Syntax Error

# Problem: Missing closing brace } in the function definition.

# Fixed Code:
function greet(name) {
  console.log(`Hello, ${name}`);
}
greet("Alice"); // Hello, Alice

# Debugging: The compiler flagged an unexpected end of input. Adding the missing brace fixed it.

### Bug #2
# Error Type: Runtime Error (Array Index Out of Bounds → undefined)

# Problem: Loop runs until i < 10, but array length is only 5. Accessing beyond index 4 prints undefined.

# Fixed Code:
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Output: 1, 2, 3, 4, 5
Debugging: Adjusted loop condition to i < numbers.length.

### Bug #3
# Error Type: Logical Error

# Problem: Function incorrectly checks n % 2 === 1 (odd numbers). Should check n % 2 === 0.

# Fixed Code:
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false
# Debugging: Tested with even and odd numbers, corrected condition.

### Bug #4
# Error Type: Type Conversion Error

# Problem: "5" + 10 performs string concatenation → "510".

# Fixed Code:
const userInput = "5";
const result = Number(userInput) + 10;
console.log(result); // 15
# Debugging: Explicitly converted string to number using Number().

### Bug #5
# Error Type: Logical Error (Edge Case Handling)

# Problem: Function returns { first: undefined, last: undefined } for empty arrays.

# Fixed Code:
function getFirstAndLast(items) {
  if (items.length === 0) {
    return { first: null, last: null };
  }
  const first = items[0];
  const last = items[items.length - 1];
  return { first, last };
}

console.log(getFirstAndLast([1, 2, 3])); // { first: 1, last: 3 }
console.log(getFirstAndLast([]));        // { first: null, last: null }
# Debugging: Added condition to handle empty arrays gracefully.

 Summary:

Bug #1 → Syntax fix (missing brace)

Bug #2 → Runtime fix (loop condition)

Bug #3 → Logical fix (correct parity check)

Bug #4 → Type conversion fix (string → number)

Bug #5 → Logical fix (empty array handling)

All programs now run correctly and produce the expected output.