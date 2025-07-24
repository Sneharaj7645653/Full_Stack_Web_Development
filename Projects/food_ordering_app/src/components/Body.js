import RestaurantCard from "./RestaurantCard";
import objList from "../utils/mockData";
import { use, useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";




const Body = () => {
    let [restaurantList , setRestaurantList] = useState([]);

    const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();
    setRestaurantList(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants ?? []);
    };




    useEffect(() => {
        fetchData();
    },[]);






    return restaurantList.length === 0 ? <Shimmer /> : (
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