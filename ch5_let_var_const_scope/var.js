const pi = 3.14159;
console.log(pi); // 3.14159

// pi = 3; ❌ Error: Assignment to constant variable

const appName = "MyCoolApp";
console.log("Welcome to", appName); // Welcome to MyCoolApp

const fruits = ["apple", "banana", "mango"];
fruits.push("orange"); // allowed
console.log(fruits); // ["apple", "banana", "mango", "orange"]

// fruits = ["pear"]; ❌ Error: can't reassign a new array


const user = {
  name: "Meya",
  age: 21
};

// You can change properties
user.age = 22;
console.log(user); // { name: "Meya", age: 22 }

// user = { name: "Ali" }; ❌ Error: can't reassign a new object

const TAX_RATE = 0.16;
const price = 100;
const total = price + (price * TAX_RATE);

console.log("Total price with tax:", total); // 116





