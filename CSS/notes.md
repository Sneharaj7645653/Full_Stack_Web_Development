
# 🎨 CSS Styling & Layout Notes

A comprehensive guide to key CSS concepts: styling, selectors, layout models, and responsive design.

---

## 🖌️ Styling in HTML

### 1. **Inline Styles**
Directly added to an element using the `style` attribute.

```html
<p style="color: red;">This is red text.</p>
```

### 2. **Internal CSS**
Placed inside a `<style>` tag in the `<head>`.

```html
<style>
  p {
    color: blue;
  }
</style>
```

### 3. **External CSS**
A separate `.css` file linked using `<link>`.

```html
<link rel="stylesheet" href="styles.css">
```

---

## 🧱 Types of CSS

- **Inline CSS** – Quick, but not reusable.
- **Internal CSS** – Good for small projects.
- **External CSS** – Best practice for maintainability.

---

## 📦 Box Model

Describes the rectangular boxes generated for elements.

1. **Content** – Actual text/image.
2. **Padding** – Space around content.
3. **Border** – Surrounds padding.
4. **Margin** – Space outside the border.

---

## 🎯 CSS Selectors

Used to target HTML elements.

| Selector        | Description                          | Example                     |
|----------------|--------------------------------------|-----------------------------|
| `*`            | Universal selector                   | `* { margin: 0; }`          |
| `element`      | Type selector                        | `p { color: blue; }`        |
| `.class`       | Class selector                       | `.highlight { color: red; }`|
| `#id`          | ID selector                          | `#main { font-size: 20px; }`|
| `[attr=value]` | Attribute selector                   | `input[type="text"] {}`     |

---

## 🔗 CSS Combinators

Define relationships between selectors.

| Combinator | Symbol | Meaning                              | Example                         |
|------------|--------|--------------------------------------|---------------------------------|
| Descendant | (space)| All matching inside another element  | `div p {}`                      |
| Child      | `>`    | Direct children only                 | `ul > li {}`                    |
| Adjacent   | `+`    | Immediate next sibling               | `h1 + p {}`                     |
| General    | `~`    | All following siblings               | `h1 ~ p {}`                     |

---

## ✅ Pseudo-Classes

Target elements based on state or structure.

| Pseudo-Class         | Description                          | Example                         |
|----------------------|--------------------------------------|----------------------------------|
| `:hover`             | On mouse hover                       | `a:hover { color: red; }`        |
| `:focus`             | When element is focused              | `input:focus { border: blue; }`  |
| `:first-child`       | First child of parent                | `p:first-child {}`               |
| `:last-child`        | Last child of parent                 | `li:last-child {}`               |
| `:nth-child(n)`      | The nth child                        | `li:nth-child(2) {}`             |
| `:nth-of-type(n)`    | The nth of its type                  | `p:nth-of-type(2) {}`            |
| `:not(selector)`     | All except the selector              | `div:not(.active) {}`            |
| `:checked`           | Checked inputs                       | `input:checked {}`               |
| `:disabled` / `:enabled` | Disabled/enabled elements       | `button:disabled {}`             |
| `:empty`             | Elements with no children            | `div:empty {}`                   |

---

## 🪄 Pseudo-Elements

Target parts of elements.

| Pseudo-Element       | Description                          | Example                            |
|----------------------|--------------------------------------|------------------------------------|
| `::before`           | Inserted before content              | `p::before { content: "* "; }`     |
| `::after`            | Inserted after content               | `div::after { content: "✓"; }`     |
| `::first-letter`     | First letter of text                 | `p::first-letter { font-size: 200%; }` |
| `::first-line`       | First line of text                   | `p::first-line { color: navy; }`   |
| `::selection`        | Highlighted text                     | `::selection { background: yellow; }`  |

---

## 👶 `:nth-child()` Patterns

- `li:nth-child(odd)` – Odd items
- `li:nth-child(even)` – Even items
- `li:nth-child(3n)` – Every third item
- `li:nth-child(-n+3)` – First 3 items

```css
li:nth-child(odd) {
  background-color: #f0f0f0;
}
```

---

## 📦 Flexbox

For 1D layouts (row/column).

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
```

Key Properties:

- `display: flex`
- `flex-direction`
- `justify-content`
- `align-items`

---

## 🔲 CSS Grid

For 2D layouts (rows & columns).

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

Key Properties:

- `display: grid`
- `grid-template-columns`
- `grid-gap` / `gap`

---

## 📱 Media Queries

Make websites responsive to screen size.

```css
@media (max-width: 768px) {
  body {
    background: lightgray;
  }
}
```

Common Breakpoints:

- `600px` – phones
- `768px` – tablets
- `1024px` – laptops

---

✨ **Happy Styling!** Make your web pages elegant, accessible, and responsive with the power of CSS.


---

## 🎞️ CSS Animations

CSS animations let you animate transitions from one style to another.

### 🔧 Key Properties

- `@keyframes` – Defines the animation steps.
- `animation-name` – Name of the keyframe.
- `animation-duration` – How long the animation runs.
- `animation-timing-function` – Acceleration curve (`ease`, `linear`, etc.)
- `animation-delay` – Wait time before starting.
- `animation-iteration-count` – Number of repeats.
- `animation-direction` – `normal`, `reverse`, `alternate`, etc.

### 🎬 Example

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.box {
  animation-name: slideIn;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
```

```html
<div class="box">I slide in!</div>
```

### ✨ Shorthand

```css
animation: slideIn 1s ease-out 0s 1 forwards;
```

### 🌀 Transition vs Animation

| Feature     | Transition                           | Animation                          |
|-------------|--------------------------------------|------------------------------------|
| Trigger     | Requires state change (e.g., hover)  | Can run automatically              |
| Control     | Limited to start/end                 | Full timeline via keyframes        |
| Use Case    | Simple effects                       | Complex sequences or loops         |

