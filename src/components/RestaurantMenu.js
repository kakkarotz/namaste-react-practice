import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null || resInfo.length == 0) return <Shimmer />;

  // console.log(resInfo, "RESINFO");
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.["card"]?.["@type"]
    );
  // console.log(categories, "CATEGORIES");

  return (
    <>
      {resInfo.length === 0 || resInfo === null ? (
        <Shimmer />
      ) : (
        <div className="text-center">
          <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
          {/* categories accordian */}
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={showIndex === index ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
