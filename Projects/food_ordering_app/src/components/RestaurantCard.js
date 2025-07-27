import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f9f9f9",
};


const RestaurantCard = (props) => {
    let {resData: Data} = props;
    
    const {name,cloudinaryImageId,avgRating,sla,costForTwo,cuisines} = Data?.info; //Optional chaining to avoid errors if Data or info is undefined
    return (
        // <div className="res-card" style={styleCard}>
        //     <img src={CDN_URL+cloudinaryImageId} alt="restaurant-image"></img>
        //     <div>
        //         <h3>{name}</h3>
        //         <p>Rating: {avgRating} ⭐️</p>
        //         <p>Delivery Time: {sla.deliveryTime} mins</p>
        //         <p>{costForTwo}</p>
        //         <p><b>Cuisines:</b> {cuisines.join(" ")}</p>
        //     </div>
            
            
        // </div>
        <div className="res-card bg-white rounded-lg shadow-md overflow-hidden w-72 hover:shadow-xl transition-shadow duration-300" style={styleCard}>
            <img
                src={CDN_URL + cloudinaryImageId}
                alt="restaurant-image"
                className="h-48 w-full object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-yellow-600 font-medium">Rating: {avgRating} ⭐️</p>
                <p className="text-sm text-gray-600">Delivery Time: {sla.deliveryTime} mins</p>
                <p className="text-sm text-gray-700">{costForTwo}</p>
                <p className="text-sm text-gray-600"><b>Cuisines:</b> {cuisines.join(" ")}</p>
            </div>
        </div>
    );
};
export default RestaurantCard;



