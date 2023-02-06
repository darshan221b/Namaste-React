import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
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
            <li key={item.id}>
              {item.name} -{" "}
              <button
                className="p-1 bg-green-200"
                onClick={() => {
                  addFoodItem(item);
                }}
              >
                {" "}
                Add{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
