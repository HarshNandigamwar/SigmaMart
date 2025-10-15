import React from "react";

const HomePageCard = ({ img, name, price, dis }) => {
  return (
    <div className="rounded-md p-2 cursor-pointer">
      <div className="bg-blue-400/30 rounded-xl ">
        <img src={img} alt={name} />
      </div>
      <p className="text-xl ml-2">{name}</p>
      <div className="flex gap-2">
        <p className="ml-2">{price}</p>
        <p className="text-green-500">{dis}</p>
      </div>
    </div>
  );
};

export default HomePageCard;
