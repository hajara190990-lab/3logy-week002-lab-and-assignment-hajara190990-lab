### Bug #1 – Syntax Error
- **Type:** Syntax error (missing parenthesis)  
- **Fix:** Added closing parenthesis  
const result = calculateTotal(10, 5);
Process: Error message showed “Unexpected token.” I checked the line and saw the missing ).

Test: Running now returns 15.

### Bug #2 – Variable Scope Error
Type: Scope error

Fix: Declare variable outside function

let userName = "Alice";
function greetUser() {
  console.log("Hello, " + userName);
}
Process: Variable was inaccessible outside function. Moving it fixed the issue.

Test: Prints “Hello, Alice” and “User logged in: Alice.”

### Bug #3 – Logic Error
Type: Logic inverted

Fix: Corrected condition

function isEven(number) {
  return number % 2 === 0;
}
Process: Function returned true for odd numbers. Changed condition.

Test: isEven(4) → true, isEven(5) → false.

### Bug #4 – Comparison Operator Error
Type: Assignment vs comparison

Fix: Use ===

if (password === "secret123") { ... }
Process: Using = always set password. Changed to ===.

Test: Correctly grants access only for “secret123.”

### Bug #5 – Array Index Error
Type: Off‑by‑one

Fix: Use arr.length - 1

return arr[arr.length - 1];
Process: Arrays are zero‑indexed. Adjusted index.

Test: Last fruit returned correctly.

### Bug #6 – Infinite Loop
Type: Missing increment

Fix: Add i++

while (i <= 10) {
  console.log(i);
  i++;
}
Process: Loop never ended. Added increment.

Test: Prints 1–10 then stops.

### Bug #7 – Function Call Error
Type: Missing argument

Fix: Pass both arguments

const area = calculateArea(10, 5);
Process: Function expected 2 args. Added second.

Test: Returns correct area.

### Bug #8 – String Concatenation Error
Type: Type mismatch

Fix: Convert to numbers

const total = Number(price1) + Number(price2);
Process: Strings were concatenated. Converted to numbers.

Test: addPrices("10","20") → 30.

### Bug #9 – Object Property Access Error
Type: Typo in property name

Fix: Corrected to lastName

student.firstName + " " + student.lastName
Process: Wrong capitalization. Fixed property name.

Test: Returns full name correctly.

### Bug #10 – Complex Logic Error
Type: Missing else if

Fix: Added proper branching

if (score >= 90) return "A";
else if (score >= 80) return "B";
else if (score >= 70) return "C";
else if (score >= 60) return "D";
else return "F";
Process: Only first condition checked. Added else if.

Test: Scores now map correctly to grades.



### Debugging strategies that work:

Read error messages carefully

Use console.log() to check values

Test small pieces of code separately

### Resources I check when stuck:

Class notes and examples

### Reflection  
 The strategies that worked best were reading error messages and breaking code into smaller parts. In the future, I will debug differently by slowing down, checking one line at a time, and keeping my checklist nearby to avoid repeating common mistakes.