import { useState, useEffect } from "react";
import { CDN_MENUCARDS } from "../utils/constants";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    const fetchData = async () => {
        const data = await fetch(CDN_MENUCARDS + resId);
        const json = await data.json();
        setResInfo(json.data);
      };
      useEffect(() => {
        fetchData();
      }, []);

    return resInfo;
}

export default useRestaurantMenu;