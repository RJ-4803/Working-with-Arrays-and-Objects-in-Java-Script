const products = [
  {name: "Keyboard", price: 2500, qty: 2},
  {name: "Mouse", price: 1500, qty: 3 },
  {name: "Monitor", price: 22000, qty: 1}
];

// Use .reduce() to calculate the total value
const totalInventoryValue = products.reduce((accumulator, product) => {
  // 1. Calculate the value of the current product: price * quantity
  const productValue = product.price * product.qty;

  // 2. Add the product's value to the running accumulator (total)
  return accumulator + productValue;
}, 0); // The '0' is the initial value of the accumulator

console.log("Product Summary");
console.log("Keyboard Value: 2500 * 2 = 5000");
console.log("Mouse Value:    1500 * 3 = 4500");
console.log("Monitor Value: 22000 * 1 = 22000");

console.log("\nTotal Inventory Value:", totalInventoryValue);
// Output: 31500 (5000 + 4500 + 22000)