import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";

const Header = () => {

    const [btnName , setBtnName] = useState("Login");




    return (
        <div id="header">
            <div className="logoContainer">
                <img src={LOGO_URL} alt="logo-image"></img>
            </div>
            <div className="navContainer">
                <ul>
                    <li><button><Link to={"/"}>Home</Link></button></li>
                    <li><button><Link to={"/about"}>About</Link></button></li>
                    <li><button><Link to={"/contacts"}>Contacts</Link></button></li>
                    <li><button><Link to={"/about"}>Cart</Link></button></li>
                    <li><button className="login" onClick={()=>{setBtnName(btnName=="Login"?"Logout":"Login")}}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;