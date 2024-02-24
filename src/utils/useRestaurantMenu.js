import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(resId, "RESID");
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data, "USE");
  };

  return resInfo;
};

export default useRestaurantMenu;
