import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchTxt, restaurantList) => {
  return restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
};

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); // To create state variable
  const [isApiError, setIsApiError] = useState(false);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.283007&lng=76.6476158&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restoList = data?.data?.cards[2]?.data?.data?.cards;
      setRestaurantList(restoList);
      setFilteredRestaurants(restoList);
    } catch (err) {
      console.log(err);
      setIsApiError(true);
    }
  };

  return isApiError ? (
    <h1>API error</h1>
  ) : !restaurantList.length ? (
    <Shimmer />
  ) : (
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
        {!filteredRestaurants.length ? (
          <h1>No search matching your query</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
