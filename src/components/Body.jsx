import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const restData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581"
    );

    const resData = await restData.json();
    const filteredData =
      resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(filteredData);
    setFilteredRestaurants(filteredData);
  };

  //Shimmer UI
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            type="submit"
            onClick={() => {
              const x = listOfRestaurants.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              
              setFilteredRestaurants(x);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const x = listOfRestaurants.filter(
              (rest) => rest.info.avgRating >= 4.2
            );
            setFilteredRestaurants(x);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {filteredRestaurants.map((rest) => {
          return <RestaurantCard key={rest.info.id} restData={rest} />;
        })}
      </div>
    </div>
  );
};

export default Body;
