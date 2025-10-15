import React from "react";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
import { FaHeart } from "react-icons/fa6";
//import Images
import PhoneImage from "/thumbnail.webp";
// import Skeleton
import CartSkeleton from "../Components/LoaderComponents/SkeletonLoaders/CartSkeleton";
// importing motion
import { motion } from "framer-motion";
const Wishlist = () => {
  return (
    <div>
      <CartSkeleton />
      <div className="p-5">
        <h1 className="text-blue-500 text-5xl font-bold text-center mt-2 mb-3 ">
          Wishlist 
        </h1>
        <div className="p-5 border border-blue-500 rounded-md bg-blue-400/30 flex items-center justify-evenly ">
          {/* Product Image */}
          <img src={PhoneImage} alt="N/A" className="w-20" />
          <FaHeart className="text-4xl fill-red-400 " />
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="border p-2 px-3 rounded-md border-red-500 bg-red-400/30 text-xl "
          >
            Remove
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
