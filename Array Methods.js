// Array Methods
//Task 2.1: Transforming Arrays

//Use the array of numbers below:
//const numbers = [2, 5, 8, 10, 12];

console.log("const numbers array [2, 5, 8, 10, 12]");
const numbers = [2, 5, 8, 10, 12];

//Use .map() to create a new array that doubles each number
console.log(numbers);
const doubledNumbers = numbers.map(num => num * 2);
console.log("\nDoubled Array (map):", doubledNumbers); 

//Use .filter() to keep only numbers greater than 6
const filteredNumbers = numbers.filter(num => num > 6);
console.log("\nNumbers > 6 (filter):", filteredNumbers); 

//Use .reduce() to find the sum of all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("\nSum of all numbers (reduce):", sum); 

//Task 2.2: Searching and Sorting

//Check if 8 is in the array (includes() method).
const includesEight = numbers.includes(8);
console.log("\nDoes the array include 8? (includes):", includesEight); 


//Find the index of 10.
const indexOfTen = numbers.indexOf(10);
console.log("\nIndex of 10 (indexOf):", indexOfTen); 


//Sort the array in ascending order.
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log("\nSorted Array (sort):", sortedNumbers);
