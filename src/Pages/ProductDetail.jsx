import React from "react";
// import motion
import { motion } from "framer-motion";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
// import skeleton
import ProductDetailSkeleton from "../Components/LoaderComponents/SkeletonLoaders/ProductDetailSkeleton.jsx";
// import Images
import PhoneImage from "/thumbnail.webp";
import { FaShoppingCart } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
const ProductDetail = () => {
  // useScrollToTop();
  return (
    <div>
      <ProductDetailSkeleton />
      {/* Only Visible on Laptop */}
      <div className="hidden md:block">
        {/* Image and Info */}
        <div className=" w-full flex">
          {/* Sliding Product Image */}
          <img src={PhoneImage} alt="N/A" className="w-[50%] p-2 " />
          {/* product information */}
          <div className="w-[50%] p-5 ">
            {/* Product name */}
            <h1 className="p-2 text-5xl font-bold ">Samsung A22 4G</h1>
            {/* product dis */}
            <p className="p-5 text-2xl mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              minus adipisci labore odio illum ipsa accusamus!
            </p>
            {/* Rating, Price & discount */}
            <div className="w-full flex gap-3 mt-5">
              <p className=" p-5 text-2xl border border-green-500 bg-green-300 rounded-xl w-30 flex items-center justify-center ">
                4.5 ⭐
              </p>
              {/* Price & Discount */}
              <div className="flex w-70 p-5 gap-3 items-center">
                <p className="text-3xl font-bold ">20,000</p>
                <p className="text-2xl text-green-400 ">20% off</p>
              </div>
            </div>
            {/* Add to Cart And Buy now Button */}
            <div className="w-full flex gap-2 p-5 mt-5 ">
              {/* Add to cart */}
              <motion.button
                className="flex items-center justify-center border border-blue-500 rounded-md p-3 gap-2 w-[50%] bg-blue-400/30 text-2xl font-bold hover:bg-blue-500/30 cursor-pointer"
                whileTap={{ scale: 0.9 }}
              >
                <FaShoppingCart /> Cart
              </motion.button>
              {/* Buy now */}
              <motion.button
                className="flex items-center justify-center border border-blue-500 rounded-md p-3 gap-2 w-[50%] bg-blue-400/30 text-2xl font-bold hover:bg-blue-500/30 cursor-pointer"
                whileTap={{ scale: 0.9 }}
              >
                <FaBox /> Buy now
              </motion.button>
            </div>
            {/* Short Info */}
            <div className="flex w-full gap-5 justify-evenly mt-5">
              {/* info 1 */}
              <div className="p-2 flex flex-col justify-center items-center">
                <div className="h-30 w-30 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30  ">
                  1
                </div>
                <p className="text-md font-bold flex justify-center">
                  7 Day Return
                </p>
              </div>
              {/* info 2 */}
              <div className="p-2 flex flex-col justify-center items-center">
                <div className="h-30 w-30 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30  ">
                  2
                </div>
                <p className="text-md font-bold flex justify-center">
                  7 Day Return
                </p>
              </div>
              {/* info 3 */}
              <div className="p-2 flex flex-col justify-center items-center">
                <div className="h-30 w-30 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30  ">
                  3
                </div>
                <p className="text-md font-bold flex justify-center">
                  7 Day Return
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Detail Info */}
        <h1 className="flex justify-center text-5xl font-bold mt-5 text-blue-400 ">
          All details
        </h1>
        {/* Product Detail table */}
        <div className="p-2 mt-5">
          <table className="w-full text-left bg-blue-400/30 border-2 border-blue-500">
            <tbody>
              {/* Category */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Category</td>
                <td className="border border-blue-500 p-2 ">Category</td>
              </tr>
              {/* Brand */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Brand</td>
                <td className="border border-blue-500 p-2 ">Brand</td>
              </tr>
              {/* Return Policy */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Return Policy</td>
                <td className="border border-blue-500 p-2 ">Return Policy</td>
              </tr>
              {/* Shipping */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Shipping</td>
                <td className="border border-blue-500 p-2 ">Shipping</td>
              </tr>
              {/* Stock */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Stock</td>
                <td className="border border-blue-500 p-2 ">Stock</td>
              </tr>
              {/* Warrenty */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Warrenty</td>
                <td className="border border-blue-500 p-2 ">Warrenty</td>
              </tr>
              {/* Weight */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Weight</td>
                <td className="border border-blue-500 p-2 ">Weight</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Only Visible on Mobile */}
      <div className="flex md:hidden flex-col mt-2 justify-center">
        {/* Product Sliding Image */}
        <img src={PhoneImage} alt="N/A" className="w-full h-100" />
        {/* Product Name */}
        <h1 className="text-2xl font-bold ml-5 ">Samsung A22 4G</h1>
        {/* Product Dis */}
        <p className="p-5 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          minus adipisci labore odio illum ipsa accusamus!
        </p>
        {/* Rating */}
        <div className="ml-5 border w-30 flex items-center justify-center text-2xl rounded-md border-green-500 bg-green-300 ">
          4.2⭐
        </div>
        {/* Price & Discount */}
        <div className="flex gap-2 items-center mt-1 ">
          {/* Price */}
          <p className=" ml-5 p-3 text-xl font-bold ">19,000</p>
          {/* Discount */}
          <p className="text-green-400 ">20% off</p>
        </div>
        {/* Add to Cart And Buy Now Button */}
        <div className="w-full flex gap-2 p-5 ">
          {/* Add to cart */}
          <motion.button
            className="flex items-center justify-center border border-blue-500 rounded-md p-3 gap-2 w-[50%] bg-blue-400/30 text-2xl font-bold hover:bg-blue-500/30 cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            <FaShoppingCart /> Cart
          </motion.button>
          <motion.button
            className="flex items-center justify-center border border-blue-500 rounded-md p-3 gap-2 w-[50%] bg-blue-400/30 text-2xl font-bold hover:bg-blue-500/30 cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            <FaBox /> Buy now
          </motion.button>
        </div>
        {/* Short Info */}
        <div className="flex w-full gap-3 justify-center">
          {/* info 1 */}
          <div className="p-2 flex flex-col justify-center items-center">
            <div className="h-20 w-20 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30  ">
              1
            </div>
            <p className="text-md font-bold flex justify-center">
              7 Day Return
            </p>
          </div>
          {/* info 2 */}
          <div className="p-2 flex flex-col justify-center items-center">
            <div className="h-20 w-20 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30  ">
              2
            </div>
            <p className="text-md font-bold flex justify-center">
              7 Day Return
            </p>
          </div>
          {/* info 3 */}
          <div className="p-2 flex flex-col justify-center items-center">
            <div className="h-20 w-20 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30  ">
              3
            </div>
            <p className="text-md font-bold flex justify-center">
              7 Day Return
            </p>
          </div>
        </div>
        {/* Detail Info */}
        <h1 className="flex justify-center text-3xl font-bold mt-5 text-blue-400 ">
          All details
        </h1>
        {/* Product Detail table */}
        <div className="p-2">
          <table className="w-full text-left bg-blue-400/30 border-2 border-blue-500">
            <tbody>
              {/* Category */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Category</td>
                <td className="border border-blue-500 p-2 ">Category</td>
              </tr>
              {/* Brand */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Brand</td>
                <td className="border border-blue-500 p-2 ">Brand</td>
              </tr>
              {/* Return Policy */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Return Policy</td>
                <td className="border border-blue-500 p-2 ">Return Policy</td>
              </tr>
              {/* Shipping */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Shipping</td>
                <td className="border border-blue-500 p-2 ">Shipping</td>
              </tr>
              {/* Stock */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Stock</td>
                <td className="border border-blue-500 p-2 ">Stock</td>
              </tr>
              {/* Warrenty */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Warrenty</td>
                <td className="border border-blue-500 p-2 ">Warrenty</td>
              </tr>
              {/* Weight */}
              <tr className="border border-blue-500  ">
                <td className="font-bold p-2 ">Weight</td>
                <td className="border border-blue-500 p-2 ">Weight</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
