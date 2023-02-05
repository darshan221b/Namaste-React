import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo(resId);
  }, []);

  const getRestaurantInfo = async (resId) => {
    const response = await fetch(FETCH_MENU_URL + resId);
    const json = await response.json();
    setRestaurant(json?.data);
  };
  return restaurant;
};

export default useRestaurant;
