import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { lazy } from "react";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Contacts = lazy(() => import("./components/Contacts"));
const Cart = lazy(() => import("./components/Cart"));
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
        element: <Suspense fallback={<h1>Loading</h1>}><About /></Suspense>,
      },
      {
        path: "/contacts",
        element: <Suspense fallback={<h1>Loading</h1>}><Contacts /></Suspense>
      },
      {
        path: "/cart",
        element: <Suspense fallback={<h1>Loading</h1>}><Cart /></Suspense>
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/restaurants/:restaurantId",
        element: <Menu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>
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
