import RestaurantCard from "./RestaurantCard";
import objList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
    let [restaurantList , setRestaurantList] = useState([data]);
    return (
        <div className="body">
            <div className="search">🔍  Search </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = restaurantList.filter((restaurant) => restaurant.info.avgRating > 4.0);
                    setRestaurantList(filteredList);
                    console.log("Top Rated Restaurants Filter Applied");
                    
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    objList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
                    })
                }
            </div>
        </div>
    );
};

export default Body;