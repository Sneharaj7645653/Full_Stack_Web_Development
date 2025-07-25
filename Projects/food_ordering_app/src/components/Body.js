import RestaurantCard from "./RestaurantCard";
import objList from "../utils/mockData";
import { use, useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";




const Body = () => {
    let [restaurantList , setRestaurantList] = useState([]);
    let [filteredRestaurantList , setFilteredRestaurantList] = useState([]);
    let [searchText, setSearchText] = useState("");


    const fetchData = async () => {
    //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1");
    const jsonData = await data.json();
    setRestaurantList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
    setFilteredRestaurantList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
    console.log(jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    };




    useEffect(() => {
        fetchData();
    },[]);






    return restaurantList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                <button onClick={()=>{
                    if (searchText.trim() === "") {
                        setFilteredRestaurantList(restaurantList);
                        return;
                    }
                    const filteredList = restaurantList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurantList(filteredList);
                }}> Search  🔍</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = restaurantList.filter((restaurant) => restaurant.info.avgRating > 4.0);
                    setRestaurantList(filteredList);                    
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurantList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
                    })
                }
            </div>
        </div>
    );
};

export default Body;