import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";
import { Link } from "react-router";




const Menu = () => {

    const [resInfo , setResInfo] = useState(null); 

    useEffect(() => {
        fetchMenuData();
    }, []);


    const {restaurantId} = useParams();
    console.log(restaurantId);
   
    console.log(restaurantId);
    const fetchMenuData = async () => {
        //const  data = await fetch(MENU_URL + restaurantId);
        const  data = await fetch(MENU_URL+restaurantId);
        const jsonData = await data.json();

        setResInfo(jsonData);
    };
    
    const name = resInfo?.data?.cards?.[2]?.card?.card?.info?.name || "Name not available";
    const cuisines = resInfo?.data?.cards?.[2]?.card?.card?.info?.cuisines || "cuisines not available";
    const sla = resInfo?.data?.cards?.[2]?.card?.card?.info?.sla || "not available";
    const costForTwoMessage = resInfo?.data?.cards?.[2]?.card?.card?.info?.costForTwoMessage || "not available";


    const list = resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const newList = list.slice(1, list.length); // Skipping the first card which is usually a header or promotional card
    //resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;


    //console.log(list);
    for(let i = 0; i < newList.length; i++) {
        console.log(newList[i].card.card.title);
    }


    return resInfo === null ? (
  <Shimmer />
) : (
  <div className="menu">
    <h1>{name}</h1>
    <p>{cuisines.join(", ")}</p>
    <p>Delivery Time: {sla.deliveryTime} mins</p>
    <p>{costForTwoMessage}</p>
    <h2>name</h2>
    <p></p>
    <ul>
        {newList.map((item, index) =>
            item.card?.card?.title ? <li key={index}>{item.card.card.title}</li> : null
        )}
    </ul>
  </div>
); 

};

export default Menu;