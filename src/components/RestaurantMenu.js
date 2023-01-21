import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [isApiError, setIsApiError] = useState(false);

  useEffect(() => {
    getRestaurantInfo(id);
  }, []);

  const getRestaurantInfo = async (id) => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/v4/full?lat=12.2958104&lng=76.6393805&menuId=${id}`
      );
      const json = await response.json();
      setRestaurant(json?.data);
      console.log(json);
    } catch (err) {
      console.log(err);
      setIsApiError(true);
    }
  };
  return isApiError ? (
    <h1>Menu API error</h1>
  ) : !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>{restaurant?.name}</h1>
        <h2>Restaurant id: {id}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.cuisines.join(", ")}</h3>
        <h3>{restaurant?.locality}</h3>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1> Menu </h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}> {item.name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
