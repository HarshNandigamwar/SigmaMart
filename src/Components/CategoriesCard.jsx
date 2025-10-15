import React from "react";

const CategoriesCard = ({ img, name }) => {
  return (
    <div className="p-2 bg-blue-400/30 rounded-md cursor-pointer">
      <img
        src={img}
        alt={name}
        className="rounded-md w-full h-30 md:h-40 object-cover md:object-fill "
      />
      <p className="text-2xl font-bold flex justify-center">{name} </p>
    </div>
  );
};

export default CategoriesCard;
