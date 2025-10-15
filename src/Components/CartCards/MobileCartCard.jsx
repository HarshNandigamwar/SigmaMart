import React from "react";
import { FaBox, FaTrash } from "react-icons/fa6";
// import from motion
import { motion } from "framer-motion";
const MobileCartCard = ({ img, name, price, pid }) => {
  return (
    <div className="border p-2 flex flex-col items-center border-blue-500 rounded-2xl bg-blue-400/30">
      {/* product Image */}
      <img
        src={img}
        alt={name}
        className="w-40 flex items-center justify-center"
      />
      {/* Product name */}
      <p className="font-bold text-xl">{name}</p>
      {/* product price */}
      <p className="font-bold">{price}</p>
      {/* Buy & Delete buttons */}
      <div className="flex gap-5 mt-2 items-center justify-evenly">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="border p-2 flex items-center rounded-md px-3 gap-2 border-green-500 bg-green-400/30 "
        >
          <FaBox /> Buy now
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="border p-2 flex items-center rounded-md px-3 gap-2 border-red-500 bg-red-400/30 "
        >
          <FaTrash /> Remove
        </motion.button>
      </div>
    </div>
  );
};

export default MobileCartCard;
