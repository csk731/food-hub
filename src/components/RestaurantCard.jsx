import CDN_PREFIX_URL from "../utils/constants";

const RestaurantCard = ({ restData }) => {

  const { name, cuisines, avgRating, sla, cloudinaryImageId } = restData.info;
  
  return (
    <div className="restaurant-card">
      {console.log(name)}
      <img
        className="restaurant-logo"
        src={
          CDN_PREFIX_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐️ {avgRating}</h4>
      <h4>Delivery time: {sla.slaString}</h4>
    </div>
  );
}

export default RestaurantCard;