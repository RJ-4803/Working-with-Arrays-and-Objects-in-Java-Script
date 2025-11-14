// Arrays – Basics

//Task 1.1: Creating and Accessing Arrays

console.log("Create fruits array")

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits); 

//Print the first and last item in the array.
console.log("\nFirst fruit:",fruits[0]); 
console.log("Last fruit:",fruits[fruits.length-1]);

//Add a new fruit at the end of the array.
console.log("\nAdd a Pineapple in the array");
fruits.push("Pineapple") // Adds "Pineapple" to fruits
console.log(fruits); 

//Remove the second fruit.
console.log("\nAdd a Banana in the array");
fruits.splice(1, 1);
console.log(fruits);

//Find the length of the array.
console.log("\nFinal length of array:",fruits.length);

//Task 1.2: Looping Through an Array

console.log("\nLooping Through an Array");
fruits.forEach((fruit) => {
    console.log(fruit);
});
