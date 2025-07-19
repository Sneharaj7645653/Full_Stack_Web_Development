// JavaScript Basics: Variables
// 1. var Hoisting
console.log("1. var Hoisting");
console.log(a); // undefined
var a = 10;
console.log(a); // 10

console.log("\n------------------\n");

// 2. let and const Hoisting (TDZ)
console.log("2. let and const Hoisting");
// console.log(b); // Uncommenting this will throw ReferenceError
let b = 20;
// console.log(c); // Uncommenting this will throw ReferenceError
const c = 30;

console.log("\n------------------\n");

// 3. Function Scope with var
console.log("3. Function Scope with var");
function testVar() {
  if (true) {
    var x = 5;
  }
  console.log(x); // 5
}
testVar();

console.log("\n------------------\n");

// 4. Block Scope with let and const
console.log("4. Block Scope with let and const");
function testLetConst() {
  if (true) {
    let y = 10;
    const z = 15;
  }
  // console.log(y); // Uncommenting this will throw ReferenceError
  // console.log(z); // Uncommenting this will throw ReferenceError
}
testLetConst();

console.log("\n------------------\n");

// 5. Redeclaring Variables
console.log("5. Redeclaring Variables");
var a = 1;
var a = 2; // Allowed
console.log(a);

// let b = 1;
// let b = 2; // Uncommenting this will throw SyntaxError

// const c = 1;
// const c = 2; // Uncommenting this will throw SyntaxError

console.log("\n------------------\n");

// 6. const and Object Mutation
console.log("6. const and Object Mutation");
const obj = { name: "Sneha" };
obj.name = "Raj"; // Allowed
console.log(obj);

// obj = {}; // Uncommenting this will throw TypeError

console.log("\n------------------\n");

// 7. Function and Variable Hoisting Together
console.log("7. Function and Variable Hoisting Together");

sayHi(); // Works

function sayHi() {
  console.log("Hi there!");
}

// greet(); // Uncommenting this will throw TypeError

var greet = function () {
  console.log("Hello!");
};