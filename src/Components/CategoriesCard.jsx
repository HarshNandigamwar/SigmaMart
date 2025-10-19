import React from "react";
import {  useNavigate } from "react-router-dom";
const CategoriesCard = ({ img, name, cate }) => {
  const navigate = useNavigate();
  // Forward to categories Detail with categories data.
  const CategoriesDetail = (categories) => {
    navigate(`/categoriesdetail/${categories}`);
  };
 
  return (
    <div
      className="p-2 bg-blue-400/30 rounded-md cursor-pointer"
      onClick={() => CategoriesDetail(cate)}
    >
      <img
        src={img || "/ImageNotA.jpg"}
        alt={name}
        className="rounded-md w-full h-30 md:h-40 object-cover md:object-fill "
      />
      <p className="text-2xl font-bold flex justify-center">{name} </p>
    </div>
  );
};

export default CategoriesCard;
