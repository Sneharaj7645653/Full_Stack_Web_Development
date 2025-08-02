// JavaScript Arrays and Objects - Code Examples

// ===== Arrays =====

// Create and Access Elements
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]); // Banana

// Add/Remove Elements
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Mango"]

// Loop Through Arrays
fruits.forEach(fruit => console.log(fruit));

// Map and Filter
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16]

let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]


// ===== Objects =====

// Create and Access Properties
let person = { name: "Alice", age: 30 };
console.log(person.name); // Alice
console.log(person["age"]); // 30

// Add/Modify/Delete Properties
person.city = "New York";
person.age = 31;
delete person.city;
console.log(person);

// Loop Through Object
for (let key in person) {
    console.log(key, person[key]);
}

// Object Utility Methods
console.log(Object.keys(person)); // ["name", "age"]
console.log(Object.values(person)); // ["Alice", 31]
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 31]]