import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";

const App = () => (
  <>
    <Header />
    <Body />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page Not Found</h1>
  },
  {
    path: "/about",
    element: <About />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// Use RouterProvider to supply the router to your app
root.render(<RouterProvider router={router} />);




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
