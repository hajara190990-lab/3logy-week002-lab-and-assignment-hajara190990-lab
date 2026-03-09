// --------------------
// Array Challenges (5)
// --------------------

// 1. Remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,4,4])); // [1,2,3,4]

// 2. Find second largest number
function secondLargest(numbers) {
  const unique = [...new Set(numbers)].sort((a,b) => b-a);
  return unique[1];
}
console.log(secondLargest([10,5,8,10,2])); // 8

// 3. Rotate array by N positions
function rotateArray(arr, n) {
  n = n % arr.length;
  return arr.slice(-n).concat(arr.slice(0, -n));
}
console.log(rotateArray([1,2,3,4,5], 2)); // [4,5,1,2,3]

// 4. Flatten nested array
function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenArray([1,[2,[3,4]],5])); // [1,2,3,4,5]

// 5. Group array items by property
function groupBy(arr, prop) {
  return arr.reduce((acc, item) => {
    const key = item[prop];
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}
console.log(groupBy([{name:"A",age:20},{name:"B",age:20},{name:"C",age:30}], "age"));
// {20:[{A},{B}],30:[{C}]}


// --------------------
// Object Challenges (5)
// --------------------

// 6. Count character frequency
function charFrequency(str) {
  const freq = {};
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log(charFrequency("hello")); // {h:1,e:1,l:2,o:1}

// 7. Merge two objects
function mergeObjects(obj1, obj2) {
  return {...obj1, ...obj2};
}
console.log(mergeObjects({a:1,b:2},{b:3,c:4})); // {a:1,b:3,c:4}

// 8. Convert array to object
function arrayToObject(arr) {
  const obj = {};
  arr.forEach((val, i) => obj[i] = val);
  return obj;
}
console.log(arrayToObject(["apple","banana"])); // {0:"apple",1:"banana"}

// 9. Find most common word
function mostCommonWord(text) {
  const words = text.toLowerCase().split(/\s+/);
  const freq = {};
  for (let w of words) freq[w] = (freq[w]||0)+1;
  return Object.entries(freq).sort((a,b)=>b[1]-a[1])[0][0];
}
console.log(mostCommonWord("apple banana apple orange apple banana")); // "apple"

// 10. Group students by grade
function groupStudents(students) {
  return students.reduce((acc,s)=>{
    if(!acc[s.grade]) acc[s.grade]=[];
    acc[s.grade].push(s.name);
    return acc;
  },{});
}
console.log(groupStudents([{name:"Ali",grade:"A"},{name:"Bola",grade:"B"},{name:"Chi",grade:"A"}]));
// {A:["Ali","Chi"],B:["Bola"]}


// --------------------
// Set Challenges (3)
// --------------------

// 11. Intersection of two arrays
function intersection(arr1, arr2) {
  return [...new Set(arr1)].filter(x => arr2.includes(x));
}
console.log(intersection([1,2,3],[2,3,4])); // [2,3]

// 12. Union of two arrays
function union(arr1, arr2) {
  return [...new Set([...arr1,...arr2])];
}
console.log(union([1,2],[2,3])); // [1,2,3]

// 13. Difference of two arrays
function difference(arr1, arr2) {
  return arr1.filter(x => !arr2.includes(x));
}
console.log(difference([1,2,3],[2,4])); // [1,3]


// --------------------
// Mixed Challenges (2)
// --------------------

// 14. Basic phone book
function PhoneBook() {
  this.contacts = [];
}
PhoneBook.prototype.add = function(name, phone) {
  this.contacts.push({name, phone});
};
PhoneBook.prototype.search = function(name) {
  return this.contacts.find(c => c.name === name);
};
const pb = new PhoneBook();
pb.add("Alice","12345");
pb.add("Bob","67890");
console.log(pb.search("Bob")); // {name:"Bob",phone:"67890"}

// 15. Shopping cart
function ShoppingCart() {
  this.items = {};
}
ShoppingCart.prototype.addItem = function(product, qty=1) {
  this.items[product] = (this.items[product]||0)+qty;
};
ShoppingCart.prototype.removeItem = function(product, qty=1) {
  if(this.items[product]) {
    this.items[product]-=qty;
    if(this.items[product]<=0) delete this.items[product];
  }
};
ShoppingCart.prototype.viewCart = function() {
  return this.items;
};
const cart = new ShoppingCart();
cart.addItem("apple",2);
cart.addItem("banana",1);
cart.removeItem("apple",1);
console.log(cart.viewCart()); // {apple:1,banana:1}
