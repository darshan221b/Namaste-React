import { IMG_CDN_URL } from "../constants";

const FoodItem = ({
  name,
  description,
  cloudinaryImageId,
  price,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-blue-300 hover:bg-blue-400">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rs {price}</h4>
    </div>
  );
};

export default FoodItem;