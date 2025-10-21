import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaSpinner } from "react-icons/fa";
// importing from context
import { useAuth } from "../Context/AuthProvider.jsx";
import { useWishlist } from "../Context/WishlistProvider";
// importing from sonner
import { toast } from "sonner";
// import from Hook
import playSound from "../Hooks/playSound.js";

const WishlistButton = ({ productId }) => {
  const { currentUser } = useAuth();
  const {
    wishlistItems,
    toggleWishlist,
    loading: wishlistLoading,
  } = useWishlist();
  const [isToggling, setIsToggling] = useState(false);
  // Check ki item already wishlist mein hai ya nahi
  const isWished = wishlistItems.includes(productId);
  const errorSound = "/Sound/Error.mp3";

  const handleToggle = async () => {
    if (!currentUser) {
      toast.warning("Please login to add items to your Wishlist.");
      playSound(errorSound);
      return;
    }
    if (wishlistLoading || isToggling) return;
    setIsToggling(true);
    try {
      await toggleWishlist(productId, isWished);
    } catch (error) {
      toast.error("An error occurred. Could not update wishlist.");
      console.error("Wishlist Toggle Failed:", error);
      playSound(errorSound);
    } finally {
      setIsToggling(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isToggling || wishlistLoading}
      className={`p-3 rounded-full transition-colors duration-200 cursor-pointer`}
      aria-label={isWished ? "Remove from Wishlist" : "Add to Wishlist"}
    >
      {isToggling ? (
        <FaSpinner className="animate-spin" />
      ) : isWished ? (
        <FaHeart className="fill-red-500" />
      ) : (
        <FaRegHeart />
      )}
    </button>
  );
};

export default WishlistButton;
