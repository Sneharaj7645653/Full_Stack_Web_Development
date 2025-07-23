import RestaurantCard from "./RestaurantCard";
import objList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">🔍  Search </div>
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