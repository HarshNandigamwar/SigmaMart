import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaSpinner } from "react-icons/fa6";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
// import Skeleton
import CartSkeleton from "../Components/LoaderComponents/SkeletonLoaders/CartSkeleton";
// importing from context
import { useCart } from "../Context/CartProvider.jsx";
// importing from sonner
import { toast } from "sonner";
// importing axios for API call
import axios from "axios";

const Cart = () => {
  // Scroll on top when page load
  useScrollToTop();
  const navigate = useNavigate();
  const { cartItems, loading: cartLoading, removeFromCart } = useCart();
  const [detailedCart, setDetailedCart] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  // Fetching ALL Product Details
  useEffect(() => {
    if (cartLoading) return;

    if (cartItems.length === 0) {
      setDetailedCart([]);
      setTotalPrice(0);
      setLoading(false);
      return;
    }
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const fetchPromises = cartItems.map((id) =>
          axios.get(`https://dummyjson.com/products/${id}`)
        );

        // Sabhi promises ko ek saath resolve karna
        const responses = await Promise.all(fetchPromises);

        // Responses se data nikalna
        const products = responses.map((res) => res.data);
        setDetailedCart(products);

        //  Total Price Calculate karna
        const total = products.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error("Error fetching cart details:", error);
        toast.error("Could not load all items in cart.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, [cartItems, cartLoading]);

  if (cartLoading || loading) {
    return (
      <div>
        <CartSkeleton />
      </div>
    );
  }

  if (detailedCart.length === 0 && !loading) {
    return (
      <div className="text-center p-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Your Cart is Empty 🛒
        </h2>
        <p className="text-gray-500 mt-2">
          Add some products to continue shopping!
        </p>
        <button
          className="border border-blue-500 bg-blue-400 rounded-md p-2 px-4 mt-5"
          onClick={() => navigate("/")}
        >
          Shop now
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">
        Cart ({detailedCart.length} Items)
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Items List  */}
        <div className="lg:w-3/4 space-y-4">
          {detailedCart.map((item) => {
            const isDeleting = deletingId === item.id;
            return (
              <div
                key={item.id}
                className="flex border border-blue-500 rounded-lg p-4 shadow-sm items-center"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                  onClick={() => navigate(`/productdetail/${item.id}`)}
                />
                <div
                  className="flex-grow"
                  onClick={() => navigate(`/productdetail/${item.id}`)}
                >
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-medium ml-4 "
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <FaSpinner className="animate-spin text-red-500" />
                  ) : (
                    <FaTrash />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Summary  */}
        <div className="lg:w-1/4 bg-gray-50 p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            Order Summary
          </h2>
          <div className="flex justify-between text-lg mb-2">
            <span>Subtotal ({detailedCart.length} items):</span>
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg mb-4">
            <span>Shipping:</span>
            <span className="font-semibold">FREE</span>
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
