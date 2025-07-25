import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import Menu from "./components/Menu";





const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/restaurants/:restaurantId",
        element: <Menu />
      }
    ],
    errorElement: <Error /> 
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
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
