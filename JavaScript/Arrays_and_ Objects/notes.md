# JavaScript Arrays and Objects - Notes

## 1. Arrays in JavaScript

### What is an Array?
- An **array** is a special variable used to store **multiple values** in a single variable.
- Each value is stored at a **numeric index** (starting from 0).

### Creating Arrays
```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = new Array(1, 2, 3, 4);
```

### Accessing Array Elements
```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
```

### Array Properties
- **length** → Returns the number of elements.
```javascript
console.log(fruits.length); // 3
```

### Common Array Methods
- **push()** → Add to end.
- **pop()** → Remove from end.
- **shift()** → Remove from start.
- **unshift()** → Add to start.
- **slice()** → Extract elements.
- **splice()** → Add/remove elements.
- **forEach()** → Loop through array.
- **map()** → Returns new array after applying a function.
- **filter()** → Returns array with filtered values.
- **reduce()** → Accumulates values to a single result.

---

## 2. Objects in JavaScript

### What is an Object?
- An **object** is a collection of **key-value pairs**.
- Keys are **strings** (or Symbols), values can be **any data type**.

### Creating Objects
```javascript
let obj1 = { name: "John", age: 25 };
let obj2 = new Object({ name: "John", age: 25 });
```

### Accessing Object Properties
```javascript
let person = { name: "Alice", age: 30 };
console.log(person.name); // Alice
console.log(person["age"]); // 30
```

### Adding/Modifying Properties
```javascript
person.city = "New York";
person.age = 31;
```

### Deleting Properties
```javascript
delete person.city;
```

### Looping Through Objects
```javascript
for (let key in person) {
    console.log(key, person[key]);
}
```

### Object Methods
- **Object.keys(obj)** → Returns array of keys.
- **Object.values(obj)** → Returns array of values.
- **Object.entries(obj)** → Returns array of key-value pairs.
- **hasOwnProperty(key)** → Checks if key exists.
