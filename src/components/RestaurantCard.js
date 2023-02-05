import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-blue-300 hover:bg-blue-400">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold xl">{name}</h2>
      <h3>{cuisines.join(",  ")}</h3>
      <h4>{lastMileTravelString} away</h4>
    </div>
  );
};

export default RestaurantCard;
