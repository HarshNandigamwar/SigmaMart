import React from "react";

const CategoriesCircle = ({ logo, name }) => {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer">
      <div className="bg-blue-400/20 h-[80px] w-[80px] rounded-full flex items-center justify-center ">
        <p className="text-4xl">{logo}</p>
      </div>
      <p className="text-xl font-bold ">{name}</p>
    </div>
  );
};

export default CategoriesCircle;
