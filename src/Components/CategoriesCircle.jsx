import React from "react";
import { useNavigate } from "react-router-dom";
const CategoriesCircle = ({ logo, name, cate }) => {
  const navigate = useNavigate();
  // Forward to categories Detail with categories data.
  const CategoriesDetail = (categories) => {
    navigate(`/categoriesdetail/${categories}`);
  };
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer">
      <div className="bg-blue-400/20 h-[80px] w-[80px] rounded-full flex items-center justify-center " onClick={() => CategoriesDetail(cate)}>
        <p className="text-4xl">{logo}</p>
      </div>
      <p className="text-xl font-bold ">{name}</p>
    </div>
  ); 
};

export default CategoriesCircle;
