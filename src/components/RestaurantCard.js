import { CDN_URL } from "../utils/constants";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, deliveryTime } = resData?.info;

  return (
    <div className="red-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};
