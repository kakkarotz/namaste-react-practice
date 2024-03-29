import React from "react";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  console.log(items, "ITEMS");

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch add item

    dispatch(addItem(item));
  };

  return (
    <div>
      {items &&
        items.map((item) => (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left"
          >
            <div className="flex justify-between relative">
              <div>
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    {" "}
                    - ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="relative">
                <img src={CDN_URL + item.card.info.imageId} className="w-24" />
                <button
                  className=" p-1 rounded-lg bg-white shadow-lg absolute right-0 bottom-0 text-xs"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
