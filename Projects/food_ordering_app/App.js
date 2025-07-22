import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div id="header">
            <div className="logoContainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BdwR2X16RrHC8QyJ5NXEZh83oY65HMqjBg&s" alt="logo-image"></img>
            </div>
            <div className="navContainer">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}


const App = () => {
  return (
    <Header />
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);