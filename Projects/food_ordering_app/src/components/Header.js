import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName , setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div id="header" className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
            <div className="logoContainer">
                <img src={LOGO_URL} alt="logo-image" className="h-12 w-auto"/>
            </div>
            <div className="navContainer">
                <ul className="flex gap-4 items-center text-gray-700">
                    <li>🛜 : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><button className="hover:text-blue-600"><Link to={"/"}>Home</Link></button></li>
                    <li><button className="hover:text-blue-600"><Link to={"/about"}>About</Link></button></li>
                    <li><button className="hover:text-blue-600"><Link to={"/contacts"}>Contacts</Link></button></li>
                    <li><button className="hover:text-blue-600"><Link to={"/about"}>Cart</Link></button></li>
                    <li><button className="hover:text-blue-600"><Link to={"/grocery"}>Grocery</Link></button></li>
                    <li>
                        <button 
                            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            onClick={() => { setBtnName(btnName === "Login" ? "Logout" : "Login") }}
                        >
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;