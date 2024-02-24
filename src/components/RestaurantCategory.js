import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && data?.itemCards ? (
          <ItemList items={data?.itemCards} />
        ) : (
          data?.categories?.map((categoryItem) => (
            <ItemList items={categoryItem?.itemCards} />
          ))
        )}
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
