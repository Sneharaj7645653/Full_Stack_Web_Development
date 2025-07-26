import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnName , setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();



    return (
        <div id="header">
            <div className="logoContainer">
                <img src={LOGO_URL} alt="logo-image"></img>
            </div>
            <div className="navContainer">
                <ul>
                    <li>🛜 : {onlineStatus ? "🟢":"🔴"}</li>
                    <li><button><Link to={"/"}>Home</Link></button></li>
                    <li><button><Link to={"/about"}>About</Link></button></li>
                    <li><button><Link to={"/contacts"}>Contacts</Link></button></li>
                    <li><button><Link to={"/about"}>Cart</Link></button></li>
                    <li><button><Link to={"/grocery"}>Grocery</Link></button></li>
                    <li><button className="login" onClick={()=>{setBtnName(btnName=="Login"?"Logout":"Login")}}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;