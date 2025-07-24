import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f9f9f9",
};


const RestaurantCard = (props) => {
    let {resData: Data} = props;
    
    const {name,cloudinaryImageId,avgRating,sla,costforTwo,cuisines} = Data?.info; //Optional chaining to avoid errors if Data or info is undefined
    
    return (
        <div className="res-card" style={styleCard}>
            <img src={CDN_URL+Data.info.cloudinaryImageId} alt="restaurant-image"></img>
            <div>
                <h3>{name}</h3>
                <p>Rating: {avgRating} ⭐️</p>
                <p>Delivery Time: {sla.deliveryTime} mins</p>
                <p>{costforTwo}</p>
                <p><b>Cuisines:</b> {cuisines.join(" ")}</p>
            </div>
            
            
        </div>
    );
};
export default RestaurantCard;



