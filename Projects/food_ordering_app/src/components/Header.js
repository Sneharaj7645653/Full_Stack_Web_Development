import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


const Header = () => {

    const [btnName , setBtnName] = useState("Login");




    return (
        <div id="header">
            <div className="logoContainer">
                <img src={LOGO_URL} alt="logo-image"></img>
            </div>
            <div className="navContainer">
                <ul>
                    <li><button>Home</button></li>
                    <li><button>About</button></li>
                    <li><button>Contact</button></li>
                    <li><button>Cart</button></li>
                    <li><button className="login" onClick={()=>{setBtnName(btnName=="Login"?"Logout":"Login")}}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;