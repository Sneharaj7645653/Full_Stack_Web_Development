import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useMenu = (restaurantId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenuData();
    }, []);
    const fetchMenuData = async () => {
            const data = await fetch(MENU_URL + restaurantId);
            const jsonData = await data.json();
            setResInfo(jsonData);
        };
    return resInfo;
};

export default useMenu;