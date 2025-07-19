
# JavaScript Basics

## 📦 Variables

In JavaScript, variables are containers used to store data values.

### Declaring Variables

You can declare variables using `var`, `let`, or `const`:

```javascript
var x = 5;      // function-scoped
let y = 10;     // block-scoped
const z = 15;   // block-scoped, constant value
```

### Rules for Naming Variables
- Must begin with a letter, `$`, or `_`.
- Are case sensitive (`myVar` and `myvar` are different).
- Cannot be reserved keywords (e.g., `let`, `class`).

### `var` vs `let` vs `const`
| Keyword | Scope         | Hoisting | Reassignable | Redeclarable |
|---------|---------------|----------|--------------|--------------|
| var     | Function       | Yes      | Yes          | Yes          |
| let     | Block          | No       | Yes          | No           |
| const   | Block          | No       | No           | No           |

---

## 🚀 Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

### Variables

```javascript
console.log(a); // undefined
var a = 5;
```

In the above example, `var a` is hoisted to the top, but the assignment (`= 5`) is not.

```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

For `let` and `const`, the variables are hoisted but not initialized, so accessing them before the declaration causes a `ReferenceError`.

---

🔚 **Note:** Always declare variables at the top of their scope to avoid unexpected behavior due to hoisting.
