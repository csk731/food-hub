import CDN_PREFIX_URL from "../utils/constants";

const RestaurantCard = ({ restData }) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = restData.info;
  
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={CDN_PREFIX_URL + cloudinaryImageId}
      />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <h5>⭐️ {avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>Delivery time: {sla.slaString}</h5>
      </div>
    </div>
  );
}

export default RestaurantCard;