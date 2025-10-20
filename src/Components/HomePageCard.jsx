import React from "react";
import { useNavigate } from "react-router-dom";
import WishlistButton from "./WishlistButton";
const HomePageCard = ({ id, img, name, price, dis }) => {
  // Forward to product Detail page with ID
  const navigate = useNavigate();
  const Product = (id) => {
    navigate(`/productdetail/${id}`);
  };
  return (
    <div className="rounded-md p-2 cursor-pointer ">
      <div className="bg-blue-400/30 rounded-xl ">
        <div className="flex justify-end text-2xl">
          <WishlistButton productId={id} />
        </div>
        <img
          src={img || "/ImageNotA.jpg"}
          alt={name}
          className="flex items-center justify-center"
          onClick={() => Product(id)}
        />
      </div>
      <p className="text-xl ml-2" onClick={() => Product(id)}>
        {name.slice(0, 12)}
      </p>
      <div className="flex gap-2" onClick={() => Product(id)}>
        <p className="ml-2">₹ {price}</p>
        <p className="text-green-500">{dis} %off</p>
      </div>
    </div>
  );
};

export default HomePageCard;
