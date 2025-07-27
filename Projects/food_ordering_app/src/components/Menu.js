import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useMenu from "../utils/useMenu";
import MenuCards from "./MenuCards";


const Menu = () => {

    const {restaurantId} = useParams();
    const receivedData = useMenu(restaurantId);
    const resInfo = receivedData;
    
    const name = resInfo?.data?.cards?.[2]?.card?.card?.info?.name || "Name not available";
    const cuisines = resInfo?.data?.cards?.[2]?.card?.card?.info?.cuisines || "cuisines not available";
    const sla = resInfo?.data?.cards?.[2]?.card?.card?.info?.sla || "not available";
    const costForTwoMessage = resInfo?.data?.cards?.[2]?.card?.card?.info?.costForTwoMessage || "not available";


    const list = resInfo?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const newList = list.slice(1, list.length); // Skipping the first card which is usually a header or promotional card
    //resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;


    // console.log(newList);
    // for(let i = 0; i < newList.length; i++) {
    //     console.log(newList[i].card.card.title);
    //     console.log(newList[i].card.card.itemCards);
        
    // }


    return resInfo === null ? (
  <Shimmer />
) : (
  <div className="menu mt-8 p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg space-y-5 border border-gray-200">
  <h1 className="text-3xl font-bold text-gray-800">{name}</h1>

  <p className="text-gray-600 italic">{cuisines.join(", ")}</p>

  <p className="text-gray-700">
    🚚 Delivery Time: <span className="font-semibold">{sla.deliveryTime} mins</span>
  </p>

  <p className="text-green-600 font-medium">{costForTwoMessage}</p>

  <h2 className="text-2xl font-semibold text-blue-700 mt-6">🍽️ Menu</h2>
  <p className="text-sm text-gray-500">Available items:</p>

  <ul className="list-inside space-y-2 text-gray-800 list-none ">
    {newList.map((item, index) =>
      item.card?.card?.title && item?.card?.card?.itemCards? (
        <div key={index} className="hover:bg-gray-100 p-2 rounded-md transition-colors duration-200   items-center">
            <div className="justify-between flex items-center ">
              <li className="hover:text-blue-500 transition-colors duration-200 font-bold text-2xl">{item.card.card.title}</li>
              <button onClick={(e)=>{
                let children = e.target.parentElement.parentNode.children;
                for(let i=1; i<children.length; i++) {
                  if(children[i].classList.contains("visible")) {
                    children[i].classList.remove("visible");
                    children[i].style.display = "none";
                    children[i].classList.add("hidden");
                  } else {
                    children[i].classList.remove("hidden");
                    children[i].classList.add("visible");
                    children[i].style.display = "block";
                  }
                }

              }}>⬇️</button>
            </div>
            <MenuCards data={item?.card?.card?.itemCards}/>
        </div>
      ) : null
    )}
  </ul>
</div>
); 

};

export default Menu;