import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
// importing skeleton
import OrderSkeleton from "../Components/LoaderComponents/SkeletonLoaders/OrderSkeleton";
// import from components
import LoadingButton from "../Components/LoaderComponents/NormalLoaderComponents/LoadingButton";
// importing axios for API call
import axios from "axios";
// importing from sonner
import { toast } from "sonner";
// importing from firebase.js
import {db} from '../firebase.js'
// importing from firebase
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
// importing from context
import { useAuth } from '../Context/AuthProvider.jsx'
const Order = () => {
  // Scroll on top when page load
  useScrollToTop();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
// Fetching data from API using id
const [order,setOrder] = useState("");
useEffect(() => {
  async function fetchOrder() {
    try {
      setLoader(true);
      const response = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setOrder(response.data);      
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
      setLoader(false);
    } finally {
      setLoader(false);
    }
  }
  fetchOrder();
}, [id]);

const { currentUser } = useAuth();
const [isOrdering, setIsOrdering] = useState(false); 
const [formData, setFormData] = useState({ number: '', address: '', payment: 'cash-on-delivery' });

// Main Order function
const handleOrderPlacement = async (e) => {
  e.preventDefault();
  if (!currentUser) {
      toast.error("Please log in to place an order.");
      return;
  }
  if (!order) {
      toast.error("Product details are missing.");
      return;
  }
  setIsOrdering(true);
  // Sending data to firebase firestore
  const orderData = {
      userId: currentUser.uid,
      productId: order.id,
      productTitle: order.title,
      productThumbnail: order.thumbnail,
      orderStatus: "Processing",
      paymentMethod: formData.payment,
      orderedAt: serverTimestamp(),
      totalAmount: order.price * 1 
  };
  try {
      await addDoc(collection(db, "orders"), orderData);
      toast.success("Order Placed Successfully! 🎉");
      navigate('/orderhistory'); 
  } catch (error) {
      console.error("Error placing order: ", error);
      toast.error("Failed to place order. Try again.");
  } finally {
      setIsOrdering(false);
  }
};
// saving form value in setFormData
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevData => ({
      ...prevData, 
      [name]: value 
  }));
};

  return (
    <div>
      {loader ? (
        <OrderSkeleton />
      ) : (
        <>
          {/* Only visible on mobile */}
          <div className="flex md:hidden p-3 w-full  flex-col items-center justify-center ">
            {/* product image */}
            <img
              src={order.thumbnail || "/ImageNotA.jpg"}
              alt={order.title}
              className="flex items-center justify-center w-50"
            />
            {/* Product name */}
            <p className="text-2xl font-bold mt-1">{order.title}</p>
            {/* Product Price */}
            <p className="mt-1 text-xl "> ₹ {Math.floor(order.price * 83)}</p>
            {/* Order Form */} 
            <form onSubmit={handleOrderPlacement} className="space-y-5 mt-5 w-full">
              {/* Number   */}
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm text-blue-500 font-medium mb-2"
                >
                  Number
                </label>
                <input
                  id="number"
                  type="number"
                  name="number"
                  required
                  value={formData.number}
                  onChange={handleChange}
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
           name="address"
                rows="5"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md focus:outline-none text-black"
              ></textarea>
              {/*  Payment Options*/}
              <label
                htmlFor="message"
                className="block text-sm text-blue-500 font-medium mb-2"
              >
                Payment
              </label>
              <select value={formData.payment} name="payment" 
              onChange={handleChange} className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none font-bold">
                <option value="cash-on-delivery">Cash on Delivery</option>
                <option value="credit-card">Credit Card</option>
                <option value="upi">UPI</option>
              </select>             
              {/* Submit Button */}
              <LoadingButton
                type={"submit"}
                loading={isOrdering}
                children={"Buy now"}
            />
            </form>
          </div>
          {/* Only visible on laptop */}
          <div className="hidden md:flex w-full items-center gap-3">
            <div className="w-[50%] p-2 flex flex-col items-center">
              {/* Product image */}
              <img  src={order.thumbnail || "/ImageNotA.jpg"}
              alt={order.title} className=" w-127" />
              {/* Product name */}
              <h1 className="text-center text-5xl mt-2 font-bold ">
           {order.title}
              </h1>
              {/* Product Price */}
              <p className="mt-5 text-2xl font-bold">₹ {Math.floor(order.price * 83)}</p>
            </div>
            <div className=" w-[50%] flex flex-col items-center">
              {/* Order Form */}
              <form onSubmit={handleOrderPlacement} className="space-y-5 mt-5 w-full">
              {/* Number   */}
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm text-blue-500 font-medium mb-2"
                >
                  Number
                </label>
                <input
                  id="number"
                  type="number"
                  name="number"
                  required
                  value={formData.number}
                  onChange={handleChange}
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
           name="address"
                rows="5"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md focus:outline-none text-black"
              ></textarea>
              {/*  Payment Options*/}
              <label
                htmlFor="message"
                className="block text-sm text-blue-500 font-medium mb-2"
              >
                Payment
              </label>
              <select value={formData.payment} name="payment" 
              onChange={handleChange} className="w-full bg-blue-400/30 px-4 py-3 border border-blue-500 rounded-md text-black focus:outline-none font-bold">
                <option value="cash-on-delivery">Cash on Delivery</option>
                <option value="credit-card">Credit Card</option>
                <option value="upi">UPI</option>
              </select>             
              {/* Submit Button */}
              <LoadingButton
                type={"submit"}
                loading={isOrdering}
                children={"Buy now"}
            />
            </form>        
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Order;
