import RestaurantCard from "./RestaurantCard";
import objList from "../utils/mockData";
import { use, useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";




const Body = () => {
    let [restaurantList , setRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    console.log(jsonData.data.cards[0]);
    setRestaurantList(jsonData);

};


if(restaurantList.length === 0) {
    return <Shimmer />; 
}

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
                    restaurantList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
                    })
                }
            </div>
        </div>
    );
};

export default Body;