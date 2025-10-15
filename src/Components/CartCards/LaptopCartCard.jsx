import React from "react";
import { FaBox, FaTrash } from "react-icons/fa6";
// import from motion
import { motion } from "framer-motion";

const LaptopCartCard = ({ img, name, price, pid }) => {
  return (
    <div className="border border-blue-500 bg-blue-400/30 rounded-md p-5 flex gap-3 items-center justify-evenly">
      {/* Product Image */}
      <img src={img} alt={name} className=" w-30" />
      {/* Product name */}
      <p className="text-2xl font-bold">{name}</p>
      {/* Product price */}
      <p className="text-xl">{price}</p>
      {/* buy & remove button */}
      <motion.button
        className="border flex items-center gap-2 p-4 px-8 rounded-md text-xl border-green-500 bg-green-400/30"
        whileTap={{ scale: 0.9 }}
      >
        <FaBox /> Buy now{" "}
      </motion.button>
      <motion.button
        className="border flex items-center gap-2 p-4 px-8 rounded-md text-xl border-red-500 bg-red-400/30"
        whileTap={{ scale: 0.9 }}
      >
        <FaTrash /> Remove{" "}
      </motion.button>
    </div>
  );
};

export default LaptopCartCard;
