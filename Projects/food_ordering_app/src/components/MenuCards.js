import { useState } from "react";
import MenuCard from "./MenuCard";
const MenuCards = (props) => {
  const { data , showItems, setShowIndex } = props;
  
  return (
    data.map((item, index) => {
      return (
        <div key={index} className="hidden menu-card bg-white rounded-lg shadow-md p-4 mb-4 " >
          <MenuCard
            title={item.card.info.name}
            description={item?.card?.info?.description?.split("(")[0]?.split("|")?.join("|")}
            price={item.card.info.price? item.card.info.price : item.card.info.defaultPrice}
            image={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId || undefined}    
            isBestseller={item.card.info.isBestseller}
            isVeg={item?.card?.info?.isVeg ? 1 : 0}
          
          />
        </div>  
      )
    }
  )
  )  ;


  }

export default MenuCards;