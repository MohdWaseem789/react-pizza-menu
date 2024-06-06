import React from "react";

const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
  return (
    <div
      className={` flex items-start gap-8 ${soldOut ? "text-gray-500" : ""}`}
    >
      <img
        className={`w-48 h-48 object-cover ${
          soldOut ? "filter grayscale opacity-80" : ""
        }`}
        src={photoName}
        alt={name}
      />
      <div className="flex flex-col gap-2 p-1">
        <h2 className="text-2xl font-normal">{name}</h2>
        <p className="text-base font-light italic flex-grow">{ingredients}</p>
        <p className="text-lg font-medium">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default Pizza;
