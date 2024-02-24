import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="m-2 p-2 w-40 h-auto rounded-lg bg-gray-200 hover:bg-gray-500">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};

// Higher Order Component

//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    console.log("PROMOTED", props);
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
