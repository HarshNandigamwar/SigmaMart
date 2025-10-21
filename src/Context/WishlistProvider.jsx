import React, { createContext, useContext, useState, useEffect } from "react";
// importing from firebase.js
import { db } from "../firebase.js";
// importing from firebase
import {
  doc,
  getDoc,
  setDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
// importing from context
import { useAuth } from "./AuthProvider.jsx";
// importing from sonner
import { toast } from "sonner";
// import from Hook
import playSound from "../Hooks/playSound.js";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);
const successfulSound = "/Sound/Successful.mp3";
export const WishlistProvider = ({ children }) => {
  const { currentUser, loading: authLoading } = useAuth();
  const [wishlistItems, setWishlistItems] = useState([]); // Product IDs store honge
  const [loading, setLoading] = useState(true);

  //  Wishlist Data Load hora he
  useEffect(() => {
    if (authLoading || !currentUser) {
      setWishlistItems([]);
      setLoading(false);
      return;
    }

    const fetchWishlist = async () => {
      setLoading(true);
      // Wishlist document 'wishlists' collection mein user ID se banega
      const wishlistDocRef = doc(db, "wishlists", currentUser.uid);
      const docSnap = await getDoc(wishlistDocRef);

      if (docSnap.exists()) {
        setWishlistItems(docSnap.data().items || []);
      } else {
        // Agar document nahi hai, toh naya document banao
        await setDoc(wishlistDocRef, { items: [] });
        setWishlistItems([]);
      }
      setLoading(false);
    };
    fetchWishlist();
  }, [currentUser, authLoading]);

  // Item Add Karne Ka Function
  const toggleWishlist = async (productId, currentStatus) => {
    if (!currentUser) return false;

    const wishlistDocRef = doc(db, "wishlists", currentUser.uid);

    // Firestore operation setDoc + merge: true use karein taaki document hamesha exist kare
    const updateOperation = currentStatus
      ? arrayRemove(productId) // Agar already hai, toh remove karo
      : arrayUnion(productId); // Agar nahi hai, toh add karo

    await setDoc(
      wishlistDocRef,
      {
        items: updateOperation,
      },
      { merge: true }
    );

    // Local state ko update karo
    setWishlistItems((prev) =>
      currentStatus
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );

    toast[currentStatus ? "info" : "success"](
      currentStatus ? "Removed from Wishlist." : "Added to Wishlist!"
    );
    playSound(successfulSound);
    return true;
  };

  const value = {
    wishlistItems,
    loading,
    toggleWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
