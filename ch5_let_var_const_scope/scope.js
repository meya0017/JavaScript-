// Global scope
const greeting = "Hello World";

function sayHello() {
  // Function scope
  const name = "Meya";
  console.log(greeting); // ✅ Accessible here
  console.log(name); // ✅ Accessible here
}

sayHello();

console.log(greeting); // ✅ Works (global variable)
// console.log(name);  // ❌ Error: name is not defined

// Block scope with if-statement
if (true) {
  const fruit = "Mango";
  console.log(fruit); // ✅ Accessible here
}
// console.log(fruit); // ❌ Error: fruit is not defined outside block


//EXAPLES OF DIFFERENT SCOPES WITH Var, LET & CONST

// Global scope
var a = 1;
let b = 2;
const c = 3;

console.log("Global:", a, b, c); // 1 2 3

function testSco pe() {
  var x = 10;
  let y = 20;
  const z = 30;

  console.log("Inside function:", x, y, z); // 10 20 30
}

testScope();

// console.log(x, y, z); // ❌ Error: not defined (function scope)


// Block scope with if-statement
if (true) {
  var blockVar = "I am var";
  let blockLet = "I am let";
  const blockConst = "I am const";

  console.log("Inside block:", blockVar, blockLet, blockConst);
}

// `var` ignores block scope → accessible outside
console.log(blockVar);   // ✅ Works: "I am var"

// `let` and `const` respect block scope → not accessible outside
// console.log(blockLet);   // ❌ Error
// console.log(blockConst); // ❌ Error


// Re-declaration & reassignment
var a = 100;  // ✅ allowed (redeclared)
b = 200;      // ✅ reassigned (not redeclared)
c = 300;      // ❌ Error (cannot reassign const)

console.log("After changes:", a, b, c);















