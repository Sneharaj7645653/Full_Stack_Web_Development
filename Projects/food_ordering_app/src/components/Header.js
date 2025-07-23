import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;