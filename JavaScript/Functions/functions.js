//JavaScript Functions: Code Examples

// 1. Function Declaration 
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Sneha"));

// 2. Function Expression 
const square = function(num) {
    return num * num;
};
console.log("Square of 5:", square(5));

// 3. Arrow Function 🎯
const add = (a, b) => a + b;
console.log("Sum:", add(3, 7));

// 4. Anonymous Function 
setTimeout(function() {
    console.log("This runs after 1 second!");
}, 1000);

// 5. Immediately Invoked Function Expression (IIFE) ⚡
(function() {
    console.log("IIFE executed!");
})();

// 6. Higher-Order Function 
function operate(a, b, operation) {
    return operation(a, b);
}
console.log("Multiply using HOF:", operate(4, 5, (x, y) => x * y));

// 7. Callback Function 
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 500);
}
fetchData((message) => {
    console.log(message);
});

// 8. Function with Default Parameters 
function welcome(name = "Guest") {
    console.log(`Welcome, ${name}`);
}
welcome();
welcome("Sneha");

// 9. Rest Parameters 
function total(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log("Total:", total(1, 2, 3, 4, 5));

// 10. Function with Return Statement 
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

// 11. Closure 
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log("Closure Counter 1:", counter());
console.log("Closure Counter 2:", counter());

// 12. Currying 
function multiply(a) {
    return function(b) {
        return a * b;
    };
}
const double = multiply(2);
console.log("Curried Result (2 * 5):", double(5));

// 13. Function Hoisting 
hoistedFunc();
function hoistedFunc() {
    console.log("Function hoisted!");
}

// Note: Function expressions and arrow functions are not hoisted