import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";





const App = () => {
  return (
    <><Header /><Body /></>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);




// // module.js
// export const name = 'Alice';
// export function greet() {
//   console.log('Hello, ' + name);
// }
// export default function main() {
//   console.log('This is the default export');
// }


// import mainFunc, { name, greet } from './module.js';

// mainFunc();        // This calls the default export function
// console.log(name); // Outputs: Alice
// greet();           // Outputs: Hello, Alice
