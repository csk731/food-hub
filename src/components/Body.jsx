import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let lr = [
    {
      info: {
        id: "1",
        name: "Restaurant 1",
        cuisines: ["Cuisine 1", "Cuisine 2"],
        avgRating: 4.5,
        sla: {
          slaString: "30 min",
        },
        cloudinaryImageId: "restaurant1",
      },
    },
    {
      info: {
        id: "2",
        name: "Restaurant 2",
        cuisines: ["Cuisine 3", "Cuisine 4"],
        avgRating: 4.7,
        sla: {
          slaString: "45 min",
        },
        cloudinaryImageId: "restaurant2",
      },
    },
    {
      info: {
        id: "3",
        name: "Restaurant 3",
        cuisines: ["Cuisine 5", "Cuisine 6"],
        avgRating: 4.9,
        sla: {
          slaString: "60 min",
        },
        cloudinaryImageId: "restaurant3",
      },
    },
    {
      info: {
        id: "4",
        name: "Restaurant 4",
        cuisines: ["Cuisine 7", "Cuisine 8"],
        avgRating: 4.3,
        sla: {
          slaString: "40 min",
        },
        cloudinaryImageId: "restaurant4",
      },
    },
    {
      info: {
        id: "5",
        name: "Restaurant 5",
        cuisines: ["Cuisine 9", "Cuisine 10"],
        avgRating: 4.8,
        sla: {
          slaString: "50 min",
        },
        cloudinaryImageId: "restaurant5",
      },
    },
  ];

  // State Variable - listOfRestaurants
  const [listOfRestaurants, setListOfRestaurants] = useState(lr);

  const restDataPath =
    resObj.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

  return (
    <div className="body">
      {/* <div className="search-container">Search</div>   */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const x = listOfRestaurants.filter(
              (rest) => rest.info.avgRating >= 4.8
            );
            setListOfRestaurants(x);
            console.log(x);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {listOfRestaurants.map((rest) => {
          return <RestaurantCard key={rest.info.id} restData={rest} />;
        })}
      </div>
    </div>
  );
};

export default Body;
