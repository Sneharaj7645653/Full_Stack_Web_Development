
# 📘 JavaScript Functions - Complete Guide

Functions are one of the fundamental building blocks in JavaScript. This guide covers all the important concepts associated with functions in JS, with helpful emojis to make learning more engaging! 🚀

---

## 🔹 What is a Function?
A function is a reusable block of code that performs a specific task.

```js
function greet() {
  console.log("Hello!");
}
```

---

## 🧾 Function Declaration vs Expression

### 📌 Function Declaration
```js
function sayHi() {
  console.log("Hi!");
}
```

### 📌 Function Expression
```js
const sayHello = function() {
  console.log("Hello!");
};
```

---

## 🧠 First-Class Functions
Functions in JavaScript can be:
- Assigned to variables ✅
- Passed as arguments ✅
- Returned from other functions ✅

---

## 🪄 Arrow Functions (ES6)
Shorter syntax for writing functions:

```js
const add = (a, b) => a + b;
```

---

## 🔁 Callback Functions
Functions passed as arguments to other functions:

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded!");
  }, 1000);
}
```

---

## ⛓️ Higher-Order Functions
A function that takes another function as argument or returns a function.

```js
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}
```

---

## 🧱 IIFE (Immediately Invoked Function Expression)
Executes immediately after creation:

```js
(function() {
  console.log("IIFE runs immediately!");
})();
```

---

## 🎯 Closures
A function that remembers variables from its lexical scope even when the function is executed outside that scope.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
```

---

## 📦 Function Parameters and Arguments
You can pass data to functions using parameters and receive using arguments.

```js
function sum(a, b) {
  return a + b;
}
```

---

## 🧰 Default Parameters
Provide default values if none are passed.

```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
```

---

## 📚 Rest Parameters
Combine multiple arguments into an array.

```js
function logAll(...args) {
  console.log(args);
}
```

---

## ✂️ Function Binding
You can bind a function to a specific context using `bind()`.

```js
const obj = { name: "Sneha" };
function printName() {
  console.log(this.name);
}
const boundFunc = printName.bind(obj);
boundFunc(); // Sneha
```

---

## 🔁 Recursion
A function that calls itself.

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

---

## ✅ Pure Functions
Same input always returns the same output and has no side effects.

---

## 🚫 Hoisting
Function declarations are hoisted, meaning you can call them before they’re defined.

```js
sayHi();
function sayHi() {
  console.log("Hi!");
}
```

Function expressions are **not** hoisted.

---

## 🧩 Anonymous Functions
Functions without names, usually used in callbacks or expressions.

```js
setTimeout(function() {
  console.log("Anonymous function!");
}, 1000);
```

---

## 🛠️ Named Function Expressions
Useful for recursion and debugging.

```js
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};
```

---

## 🧠 Currying
Breaking a function with multiple arguments into a series of unary (one-argument) functions.

```js
function curry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
```

---

## 🧘 Debouncing
Limits function execution rate. Often used in search bars or window resize.

```js
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
```

---

## 📉 Throttling
Ensures a function is only called once every set interval.

```js
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

---

Happy Coding! 💻✨
