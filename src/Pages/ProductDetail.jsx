import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaBox } from "react-icons/fa6";
import { FaShieldAlt, FaStamp, FaTag } from "react-icons/fa";
// importing axios for API call
import axios from "axios";
// importing motion for animation
import { motion } from "framer-motion";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
// import skeleton
import ProductDetailSkeleton from "../Components/LoaderComponents/SkeletonLoaders/ProductDetailSkeleton.jsx";
// importing from sonner
import { toast } from "sonner";
// import from components
import AddToCartButton from "../Components/AddToCartButton.jsx";

const ProductDetail = () => {
  // Scroll on top when page load.
  useScrollToTop();
  const [loader, setloader] = useState(true);
  const { id } = useParams();
  // Fetch Data from API using id
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchProduct() {
      try {
        setloader(true);
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        //  Axios Error Display
        let errorMessage = "An unknown error occurred.";
        if (error.response) {
          const status = error.response.status;
          const data = error.response.data;
          if (status === 404) {
            errorMessage = `Resource not found: 404`;
          } else if (status >= 500) {
            errorMessage = `Server Error (${status}): Please try again later.`;
          } else if (data.message) {
            errorMessage = `Error (${status}): ${data.message}`;
          }
        } else if (error.request) {
          errorMessage =
            "Network Error: Could not connect to the server. Check your connection.";
        } else {
          errorMessage = `Application Error: ${error.message}`;
        }
        toast.error(errorMessage, {
          duration: 5000,
        });
        setloader(false);
      } finally {
        setloader(false);
      }
    }
    fetchProduct();
  }, [id]);
  // Navigate to order page with product ID
  const navigate = useNavigate();
  const Order = (id) => {
    navigate(`/order/${id}`);
  };

  return (
    <div>
      {loader ? (
        <ProductDetailSkeleton />
      ) : (
        <div>
          {/* Only Visible on Laptop */}
          <div className="hidden md:block">
            {/* Image and Info */}
            <div className=" w-full flex">
              {/* Sliding Product Image */}
              <img
                src={product.thumbnail || "/ImageNotA.jpg"}
                alt={product.title}
                className="w-[50%] p-2 "
              />
              {/* product information */}
              <div className="w-[50%] p-5 ">
                {/* Product name */}
                <h1 className="p-2 text-5xl font-bold ">{product.title}</h1>
                {/* product dis */}
                <p className="p-5 text-2xl mt-5">{product.description}</p>
                {/* Rating, Price & discount */}
                <div className="w-full flex items-center justify-evenly gap-3 mt-5">
                  <p
                    className={` h-15 w-25 text-2xl border border-green-500 bg-green-300 rounded-xl flex items-center justify-center ${
                      product.rating > 4.5
                        ? "bg-green-400 border-green-500"
                        : product.rating > 3
                        ? "bg-orange-400 border-orange-500"
                        : "bg-red-400 border-red-500"
                    } `}
                  >
                    {product.rating}⭐
                  </p>
                  {/* Price & Discount */}
                  <div className="flex p-5 gap-5 items-center">
                    <p className="text-3xl font-bold ">
                      ₹ {Math.floor(product.price * 83)}
                    </p>
                    <p className="text-2xl text-green-400 ">
                      {product.discountPercentage}% off
                    </p>
                  </div>
                </div>
                {/* Add to Cart And Buy now Button */}
                <div className="w-full flex gap-2 p-5 mt-5 ">
                  {/* Add to cart */}
                  <AddToCartButton
                    productId={product.id}
                    productName={product.title}
                  />
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
                    <div className="h-30 w-30 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30 text-2xl  ">
                      <FaStamp />
                    </div>
                    <p className="text-md font-bold flex justify-center text-center">
                      {product.brand || "N/A"}
                    </p>
                  </div>
                  {/* info 2 */}
                  <div className="p-2 flex flex-col justify-center items-center">
                    <div className="h-30 w-30 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30 text-2xl  ">
                      <FaShieldAlt />
                    </div>
                    <p className="text-md text-center font-bold flex justify-center">
                      {product.warrantyInformation}
                    </p>
                  </div>
                  {/* info 3 */}
                  <div className="p-2 flex flex-col justify-center items-center">
                    <div className="h-30 w-30 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30 text-2xl  ">
                      <FaTag />
                    </div>
                    <p className="text-md text-center font-bold flex justify-center">
                      {product.discountPercentage}% off
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
                    <td className="border border-blue-500 p-2 ">
                      {" "}
                      {product.category}
                    </td>
                  </tr>
                  {/* Brand */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Brand</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.brand || "N/A"}
                    </td>
                  </tr>
                  {/* Return Policy */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Return Policy</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.returnPolicy}
                    </td>
                  </tr>
                  {/* Shipping */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Shipping</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.shippingInformation}
                    </td>
                  </tr>
                  {/* Stock */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Stock</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.stock > 1
                        ? ` ${product.stock} item Available`
                        : "Not available"}
                    </td>
                  </tr>
                  {/* Warrenty */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Warrenty</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.warrantyInformation}
                    </td>
                  </tr>
                  {/* Weight */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Weight</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.weight * 28}g
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Only Visible on Mobile */}
          <div className="flex md:hidden flex-col mt-2 justify-center">
            {/* Product Sliding Image */}
            <img
              src={product.thumbnail || "/ImageNotA.jpg"}
              alt={product.title}
              className="w-full h-100"
            />
            {/* Product Name */}
            <h1 className="text-2xl font-bold ml-5 ">{product.title}</h1>
            {/* Product Dis */}
            <p className="p-5 text-xl">{product.description}</p>
            {/* Rating */}
            <div
              className={`ml-5 border w-30 flex items-center justify-center text-2xl rounded-md ${
                product.rating > 4.5
                  ? "bg-green-400 border-green-500"
                  : product.rating > 3
                  ? "bg-orange-400 border-orange-500"
                  : "bg-red-400 border-red-500"
              } `}
            >
              {product.rating}⭐
            </div>
            {/* Price & Discount */}
            <div className="flex gap-2 items-center mt-1 ">
              {/* Price */}
              <p className=" ml-5 p-3 text-xl font-bold ">
                ₹ {Math.floor(product.price * 83)}
              </p>
              {/* Discount */}
              <p className="text-green-400 ">
                {product.discountPercentage}% off
              </p>
            </div>
            {/* Add to Cart And Buy Now Button */}
            <div className="w-full flex gap-2 p-5 ">
              {/* Add to cart */}
              <AddToCartButton
                productId={product.id}
                productName={product.title}
              />
              {/* Buy now Button */}
              <motion.button
                onClick={() => Order(product.id)}
                className="flex items-center justify-center border border-blue-500 rounded-md p-3 gap-2 w-[50%] bg-blue-400/30 text-xl font-bold hover:bg-blue-500/30 cursor-pointer"
                whileTap={{ scale: 0.9 }}
              >
                <FaBox /> Buy now
              </motion.button>
            </div>
            {/* Short Info */}
            <div className="flex w-full justify-evenly gap-3">
              {/* info 1 */}
              <div className="p-2 flex flex-col justify-center items-center">
                <div className="h-20 w-20 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30  ">
                  <FaStamp />
                </div>
                <p className="text-md text-center font-bold flex justify-center">
                  {product.brand || "N/A"}
                </p>
              </div>
              {/* info 2 */}
              <div className="p-2 flex flex-col justify-center items-center">
                <div className="h-20 w-20 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30  ">
                  <FaShieldAlt />
                </div>
                <p className="text-md text-center font-bold flex justify-center">
                  {product.warrantyInformation}
                </p>
              </div>
              {/* info 3 */}
              <div className="p-2 flex flex-col justify-center items-center">
                <div className="h-20 w-20 border border-blue-500 rounded-full flex items-center justify-center bg-blue-400/30  ">
                  <FaTag />
                </div>
                <p className="text-md text-center font-bold flex justify-center">
                  {product.discountPercentage}% off
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
                    <td className="border border-blue-500 p-2 ">
                      {product.category}
                    </td>
                  </tr>
                  {/* Brand */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Brand</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.brand || "N/A"}
                    </td>
                  </tr>
                  {/* Return Policy */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Return Policy</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.returnPolicy}
                    </td>
                  </tr>
                  {/* Shipping */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Shipping</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.shippingInformation}
                    </td>
                  </tr>
                  {/* Stock */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Stock</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.stock > 1
                        ? ` ${product.stock} item Available`
                        : "Not available"}
                    </td>
                  </tr>
                  {/* Warrenty */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Warrenty</td>
                    <td className="border border-blue-500 p-2 ">
                      {" "}
                      {product.warrantyInformation}
                    </td>
                  </tr>
                  {/* Weight */}
                  <tr className="border border-blue-500  ">
                    <td className="font-bold p-2 ">Weight</td>
                    <td className="border border-blue-500 p-2 ">
                      {product.weight * 28}g
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
