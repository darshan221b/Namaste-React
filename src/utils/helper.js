export const filterData = (searchTxt, restaurantList) => {
  return restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
};
