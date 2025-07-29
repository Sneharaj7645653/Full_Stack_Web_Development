import RestaurantCard from "./RestaurantCard";
import objList from "../utils/mockData";
import { use, useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";    
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    let [restaurantList , setRestaurantList] = useState([]);
    let [filteredRestaurantList , setFilteredRestaurantList] = useState([]);
    let [searchText, setSearchText] = useState("");


    const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1");
    //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData = await data.json();

    
    setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
    setFilteredRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
    //setRestaurantList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
    //setFilteredRestaurantList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []);
  
    };




    useEffect(() => {
        fetchData();
    },[]);


    if(useOnlineStatus() === false) {
        return <h1>Looks like you are offline. Please check your internet connection.</h1>;
    }


    return restaurantList.length === 0 ? (
  <Shimmer />
) : (
  <div className="body p-4">
    <div className="search flex gap-4 mb-4">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/3"
        placeholder="Search restaurants..."
      />
      <button
        onClick={() => {
          if (searchText.trim() === "") {
            setFilteredRestaurantList(restaurantList);
            return;
          }
          const filteredList = restaurantList.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurantList(filteredList);
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Search 🔍
      </button>
    </div>

    <div className="filter mb-6">
      <button
        className="filter-btn px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        onClick={() => {
          const filteredList = restaurantList.filter(
            (restaurant) => restaurant.info.avgRating > 4.0
          );
          setFilteredRestaurantList(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>

    <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredRestaurantList.map((restaurant) => (
        <Link
          to={"/restaurants/" + restaurant.info.id}
          key={restaurant.info.id}
          className="block"
        >
          <RestaurantCard resData={restaurant} />
        </Link>
      ))}
    </div>
  </div>
);
};

export default Body;



