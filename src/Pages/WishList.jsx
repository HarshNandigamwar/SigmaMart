import React, { useEffect, useState } from "react";
import { FaSpinner, FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
// importing axios for API call
import axios from "axios";
// importing from sonner
import { toast } from "sonner";
// import Skeleton
import CartSkeleton from "../Components/LoaderComponents/SkeletonLoaders/CartSkeleton.jsx";
// importing from context
import { useWishlist } from "../Context/WishlistProvider.jsx";

const Wishlist = () => {
  useScrollToTop();

  const {
    wishlistItems,
    loading: wishlistLoading,
    toggleWishlist,
  } = useWishlist();

  const [deletingId, setDeletingId] = useState(null);

  const [detailedWishlist, setDetailedWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (wishlistLoading) return;

    if (wishlistItems.length === 0) {
      setDetailedWishlist([]);
      setLoading(false);
      return;
    }

    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const fetchPromises = wishlistItems.map((id) =>
          axios.get(`https://dummyjson.com/products/${id}`)
        );

        const responses = await Promise.all(fetchPromises);

        const products = responses.map((res) => res.data);
        setDetailedWishlist(products);
      } catch (error) {
        console.error("Error fetching wishlist details:", error);
        toast.error("Could not load all items in wishlist.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, [wishlistItems, wishlistLoading]);
  const handleRemove = async (itemId) => {
    if (deletingId) return;

    setDeletingId(itemId);

    try {
      await toggleWishlist(itemId, true);
    } catch (error) {
      console.error("Failed to remove item from wishlist:", error);
      toast.error("Could not remove item. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  if (wishlistLoading || loading) {
    return <CartSkeleton />;
  }

  if (detailedWishlist.length === 0 && !loading) {
    return (
      <div className="flex flex-col w-full h-screen items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Your Wishlist is Empty 😔
        </h2>
        <p className="text-gray-500 mt-2">
          Browse the store and save your favorite items!
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
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl text-center font-bold mb-8 gap-2 text-blue-500">
        Wishlist ({detailedWishlist.length})
      </h1>

      <div className="space-y-4">
        {detailedWishlist.map((item) => {
          const isDeleting = deletingId === item.id;
          return (
            <div
              key={item.id}
              className="flex border border-blue-500 rounded-md p-4 shadow-md items-center transition hover:shadow-lg"
            >
              {/* Image */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md mr-4 cursor-pointer"
                onClick={() => navigate(`/productdetail/${item.id}`)}
              />

              <div className="flex-grow">
                {/* Title */}
                <h2
                  className="text-lg font-semibold hover:text-indigo-600 cursor-pointer"
                  onClick={() => navigate(`/productdetail/${item.id}`)}
                >
                  {item.title}
                </h2>
                {/* Price */}
                <p className="text-xl font-bold text-indigo-700">
                  ₹ {Math.floor(item.price * 83)}
                </p>
                <p className="text-sm text-gray-500">Stock: {item.stock}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-2 ml-4">
                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.id)}
                  disabled={isDeleting}
                  className="text-red-500 p-2 flex items-center justify-center"
                  title="Remove from Wishlist"
                >
                  {isDeleting ? (
                    <FaSpinner className="animate-spin text-red-500" />
                  ) : (
                    <FaTrash className="text-red-500" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
 
export default Wishlist;
