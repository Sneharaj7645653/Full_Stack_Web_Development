import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#e7dbdbff",
};


const RestaurantCard = (props) => {
    let {resData: Data} = props;
    const {name,cloudinaryImageId,avgRating,sla} = Data?.info; //Optional chaining to avoid errors if Data or info is undefined
    
    return (
        <div className="res-card" style={styleCard}>
            <img src={CDN_URL+Data.info.cloudinaryImageId} alt="restaurant-image"></img>
            <h3>{name}</h3>
            <p>Rating: {avgRating} ⭐️</p>
            <p>Delivery Time: {sla.deliveryTime} mins</p>
        </div>
    );
};
export default RestaurantCard;



