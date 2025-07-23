import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


const Header = () => {

    const [btnName , setBtnName] = useState("LOGIN");




    return (
        <div id="header">
            <div className="logoContainer">
                <img src={LOGO_URL} alt="logo-image"></img>
            </div>
            <div className="navContainer">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li><button className="login" onClick={()=>{setBtnName(btnName=="LOGIN"?"LOGOUT":"LOGIN")}}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;