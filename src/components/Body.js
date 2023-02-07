import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); // To create state variable
  const [isApiError, setIsApiError] = useState(false);
  const { user, setUser } = useContext(UserContext);

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

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Sorry!! you are not online!!</h1>;
  }

  return isApiError ? (
    <h1>API error</h1>
  ) : !restaurantList.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-blue-300 my-2">
        <input
          data-testid="search-input"
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />

        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-400 rounded hover:bg-purple-500"
          onClick={() => {
            const data = filterData(searchTxt, restaurantList);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        ></input>
      </div>
      <div className="flex flex-wrap" data-testid="restaurant-list">
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
