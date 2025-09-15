// Example 1: Declaring a constant number
const PI = 3.14159;
console.log(PI); // 3.14159

// Example 2: Declaring a constant string
const name = "Meya";
console.log(name); // "Meya"

// Example 3: Declaring a constant array (you can change contents, not reassign)
const fruits = ["apple", "banana", "mango"];
fruits.push("orange"); // allowed
console.log(fruits); // ["apple", "banana", "mango", "orange"]

// Example 4: Declaring a constant object
const car = {
  brand: "Toyota",
  model: "Corolla",
};
car.model = "Camry"; // allowed (changing property)
console.log(car); // { brand: "Toyota", model: "Camry" }

// Example 5: Trying to reassign a const variable (will throw error)
const age = 25;
// age = 30; // ❌ TypeError: Assignment to constant variable.
