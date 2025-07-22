import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div id="header">
            <div className="logoContainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BdwR2X16RrHC8QyJ5NXEZh83oY65HMqjBg&s" alt="logo-image"></img>
            </div>
            <div className="navContainer">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = {
    backgroundColor: "#e7dbdbff",
};

const resObj = {
"id": "1003414",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
"locality": "Chhindwara",
"areaName": "Parasia Road",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.3,
"parentId": "721",
"avgRatingString": "4.3",
"totalRatingsString": "153",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 13.1,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "13.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-07-23 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
};







const RestaurantCard = (props) => {
    let {resData: Data} = props;
    return (
        <div className="res-card" style={styleCard}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+Data.cloudinaryImageId} alt="restaurant-image"></img>
            <h3>{Data.name}</h3>
            <p>Rating: {Data.avgRating} ⭐️</p>
            <p>Delivery Time: {Data.sla.deliveryTime} mins</p>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">🔍  Search </div>
            <div className="res-container">
                <RestaurantCard resData={resObj}/>
                {/* <RestaurantCard resName="CDE" resRating="3.5" resDeliveryTime="20"/>
                <RestaurantCard resName="QWE" resRating="4.5" resDeliveryTime="10"/>
                <RestaurantCard resName="YUI" resRating="2.3" resDeliveryTime="32"/>
                <RestaurantCard resName="TYH" resRating="2.2" resDeliveryTime="38"/>
                <RestaurantCard resName="HYU" resRating="2.1" resDeliveryTime="22"/>
                <RestaurantCard resName="HYT" resRating="4.5" resDeliveryTime="45"/>
                <RestaurantCard resName="TYU" resRating="2.7" resDeliveryTime="12"/>
                <RestaurantCard resName="NJH" resRating="2.8" resDeliveryTime="16"/>
                <RestaurantCard resName="HGF" resRating="1.5" resDeliveryTime="19"/>
                <RestaurantCard resName="ERT" resRating="3.5" resDeliveryTime="25"/> */}
                {/* Repeat res-card for more restaurants */}
            </div>
        </div>
    );
};

const App = () => {
  return (
    <><Header /><Body /></>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);