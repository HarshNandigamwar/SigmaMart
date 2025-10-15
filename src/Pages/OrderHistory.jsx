import React from "react";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
//import Images
import PhoneImage from "/thumbnail.webp";
// import Skeleton
import CartSkeleton from "../Components/LoaderComponents/SkeletonLoaders/CartSkeleton";
// importing motion
import { motion } from "framer-motion";

const OrderHistory = () => {
  return (
    <div>
      <CartSkeleton />
      <div className="p-5">
        <h1 className="text-blue-500 text-5xl font-bold text-center mt-2 mb-3 ">
          My Orders
        </h1>
        <div className="p-5 border border-blue-500 rounded-md bg-blue-400/30 flex flex-col md:flex-row justify-evenly ">
          <div className="flex items-center">
            {/* Product Image */}
            <img src={PhoneImage} alt="N/A" className="w-20" />
            <p className="text-2xl font-bold">Samsung A22 4G</p>
          </div>
          <div className="mt-2 flex flex-col justify-center items-center ">
            <p className="text-center">
              Your order has been shipped will be delivered in 5 days.{" "}
            </p>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="border mt-3 p-2 px-3 rounded-md border-green-500 bg-green-400/30 text-xl "
            >
              Buy Again
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
