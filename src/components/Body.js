import { restaurants } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filterData = (searchTxt, restaurantList) => {
  return restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
};

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restaurants);
  const [searchTxt, setSearchTxt] = useState(""); // To create state variable
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, restaurantList);
            setRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
