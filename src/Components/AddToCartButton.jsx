import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart} from "react-icons/fa";
import { FaSpinner } from "react-icons/fa6";
// importing from context
import { useAuth } from "../Context/AuthProvider";
import { useCart } from "../Context/CartProvider";
// importing from sonner
import { toast } from "sonner";
// importing motion for animation
import { motion } from "framer-motion";

const AddToCartButton = ({ productId, productName }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { addToCart, cartItems } = useCart();
  const isItemInCart = cartItems.includes(productId);
  const [loader, setLoader] = useState(false);
  const handleAction = async () => {
    if (!currentUser) {
      toast.warning("Please login to proceed.", {
        action: {
          label: "Login",
          onClick: () => navigate("/login"),
        },
      });
      return;
    }
    if (isItemInCart) {
      toast.info("This item is already in your cart!");
      return;
    }
    try {
      setLoader(true);
      await addToCart(productId);
      toast.success(`${productName} added to cart! 🛒`);
      setLoader(false);
    } catch (error) {
      toast.error("Failed to add item. Please try again.");
      setLoader(false);
      console.error("Cart Update Failed:", error);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={handleAction}
      disabled={isItemInCart}
      className={`flex items-center justify-center border border-blue-500 rounded-md p-3 gap-2 w-[50%] bg-blue-400/30 text-xl font-bold hover:bg-blue-500/30 cursor-pointer`}
    >
      {loader ? (
        <div className="text-xl flex items-center justify-center animate-spin ">
          <FaSpinner/>
        </div>
      ) : isItemInCart ? (
        <>✅</>
      ) : (
        <FaShoppingCart />
      )}
      {isItemInCart ? "Done" : "Add to Cart"}
    </motion.button>
  );
};

export default AddToCartButton;
