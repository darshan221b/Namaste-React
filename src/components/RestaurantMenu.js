import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo(id);
  }, []);

  async function getRestaurantInfo(id) {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=12.2958104&lng=76.6393805&menuId=${id}`
    );
    const restaurant = await response.json();
    console.log(restaurant);
  }
  return (
    <div>
      <h1>Restaurant id: {id}</h1>
      <h2> Namaste</h2>
    </div>
  );
};

export default RestaurantMenu;
