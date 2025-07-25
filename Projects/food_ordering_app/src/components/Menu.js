import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";


const Menu = () => {

    const [resInfo , setResInfo] = useState(null); 

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1003414&submitAction=ENTER.example.com/menu");
        const jsonData = await data.json();

        console.log(jsonData.data.cards[4]);
        setResInfo(resInfo);
        
    };
    
    //const {name , cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    return resInfo===null? (<Shimmer />) : (
        <div className="menu">
            <h1>Name</h1>
            
            <h1>Menu</h1>
            <p>Welcome to our food ordering app! Here are some of the items you can order:</p>
            <h2>Available Items</h2>
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Pasta</li>
                <li>Salad</li>
            </ul>
        </div>
    );
};

export default Menu;