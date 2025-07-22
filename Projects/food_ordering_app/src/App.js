import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>Hello from React + Parcel! 🚀</h1>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);