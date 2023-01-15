import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const filterData = (searchTxt, restaurantList) => {
  return restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
};

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); // To create state variable

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.2958104&lng=76.6393805&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restoList  = data?.data?.cards[2]?.data?.data?.cards;
    setRestaurantList(restoList);
    setFilteredRestaurants(restoList);
  }

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
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
