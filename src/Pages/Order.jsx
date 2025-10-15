import React from "react";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
//import Images
import PhoneImage from "/thumbnail.webp";
// import skeleton
import OrderSkeleton from "../Components/LoaderComponents/SkeletonLoaders/OrderSkeleton";
// import from components
import LoadingButton from "../Components/LoaderComponents/NormalLoaderComponents/LoadingButton";
import { FaMinus, FaPlus } from "react-icons/fa6";
const Order = () => {
  return (
    <div>
      <OrderSkeleton />
      {/* Only visible on mobile */}
      <div className="flex md:hidden p-3 w-full  flex-col items-center justify-center ">
        {/* product image */}
        <img
          src={PhoneImage}
          alt="N/A"
          className="flex items-center justify-center w-50"
        />
        {/* Product name */}
        <p className="text-2xl font-bold mt-1">Samsung A22 4G</p>
        {/* Product Price */}
        <p className="mt-1 text-xl ">20,000</p>
        {/* Order Form */}
        <form className="space-y-5 mt-5 w-full">
          {/* Name   */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-blue-500 font-medium mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none"
            />
          </div>
          {/* Address */}
          <label
            htmlFor="message"
            className="block text-sm text-blue-500 font-medium mb-2"
          >
            Address
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md focus:outline-none text-black"
          ></textarea>
          {/*  Payment Options*/}
          <label
            htmlFor="message"
            className="block text-sm text-blue-500 font-medium mb-2"
          >
            Payment
          </label>
          <select className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none font-bold">
            <option value="cash-on-delivery">Cash on Delivery</option>
            <option value="credit-card">Credit Card</option>
            <option value="upi">UPI</option>
          </select>
          {/* quantity */}
          <label
            htmlFor="message"
            className="block text-sm text-blue-500 font-medium mb-2"
          >
            Quantity
          </label>
          <div className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black flex gap-5 items-center justify-evenly">
            <FaMinus className="fill-red-500" />
            <p className="text-xl font-bold">1</p>
            <FaPlus className="fill-green-500" />
          </div>
          {/* Submit Button */}
          <LoadingButton type={"submit"} loading={false} children={"Buy now"} />
        </form>
      </div>
      {/* Only visible on laptop */}
      <div className="hidden md:flex w-full items-center gap-3">
        <div className="w-[50%] p-2 flex flex-col items-center">
          {/* Product image */}
          <img src={PhoneImage} alt="N/A" className=" w-127" />
          {/* Product name */}
          <h1 className="text-center text-5xl mt-2 font-bold ">
            Samsung A22 4G
          </h1>
          {/* Product Price */}
          <p className="mt-5 text-2xl font-bold">20,000</p>
        </div>
        <div className=" w-[50%] flex flex-col items-center">
          {/* Order Form */}
          <form id="contact-form" className="space-y-5 mt-5 w-full">
            {/* Name   */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-blue-500 font-medium mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none"
              />
            </div>
            {/* Address */}
            <label
              htmlFor="message"
              className="block text-sm text-blue-500 font-medium mb-2"
            >
              Address
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md focus:outline-none text-black"
            ></textarea>
            {/*  Payment Options*/}
            <label
              htmlFor="message"
              className="block text-sm text-blue-500 font-medium mb-2"
            >
              Payment
            </label>
            <select className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none font-bold">
              <option value="cash-on-delivery">Cash on Delivery</option>
              <option value="credit-card">Credit Card</option>
              <option value="upi">UPI</option>
            </select>
            {/* quantity */}
            <label
              htmlFor="message"
              className="block text-sm text-blue-500 font-medium mb-2"
            >
              Quantity
            </label>
            <div className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black flex gap-5 items-center justify-evenly">
              <FaMinus className="fill-red-500" />
              <p className="text-xl font-bold">1</p>
              <FaPlus className="fill-green-500" />
            </div>
            {/* Submit Button */}
            <LoadingButton
              type={"submit"}
              loading={false}
              children={"Buy now"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
