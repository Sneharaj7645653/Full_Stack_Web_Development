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
  // <div className="menu">
  //   <h1>{name}</h1>
  //   <p>{cuisines.join(", ")}</p>
  //   <p>Delivery Time: {sla.deliveryTime} mins</p>
  //   <p>{costForTwoMessage}</p>
  //   <h2>name</h2>
  //   <p></p>
  //   <ul>
  //       {newList.map((item, index) =>
  //           item.card?.card?.title ? <li key={index}>{item.card.card.title}</li> : null
  //       )}
  //   </ul>
  // </div>
  <div className="menu p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
  <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
  <p className="text-gray-600 italic">{cuisines.join(", ")}</p>
  <p className="text-gray-700">
    🚚 Delivery Time: <span className="font-semibold">{sla.deliveryTime} mins</span>
  </p>
  <p className="text-green-600 font-medium">{costForTwoMessage}</p>

  <h2 className="text-2xl font-semibold text-blue-700 mt-4">🍽️ Menu</h2>
  <p className="text-sm text-gray-500">Available items:</p>

  <ul className="list-disc list-inside space-y-1 text-gray-700">
    {newList.map((item, index) =>
      item.card?.card?.title ? (
        <li
          key={index}
          className="hover:text-blue-500 transition-colors duration-200"
        >
          {item.card.card.title}
        </li>
      ) : null
    )}
  </ul>
</div>
); 

};

export default Menu;