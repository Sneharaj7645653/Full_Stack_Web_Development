import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useMenu from "../utils/useMenu";



const Menu = () => {

    const {restaurantId} = useParams();
    const receivedData = useMenu(restaurantId);
    const resInfo = receivedData;

    console.log(restaurantId);    
    
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