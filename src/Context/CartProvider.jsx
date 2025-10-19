import React, { createContext, useContext, useState, useEffect } from "react";
// importing from firebase.js
import { db } from "../firebase";
// importing from firebase
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
// importing from context
import { useAuth } from "./AuthProvider";
// importing from sonner
import { toast } from "sonner";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const { currentUser, loading: authLoading } = useAuth(); // Auth context se user mila
  const [cartItems, setCartItems] = useState([]); // Cart mein sirf Product IDs hongi
  const [loading, setLoading] = useState(true);

  //  1. Cart Data Load Hora jab user login ho
  useEffect(() => {
    if (authLoading || !currentUser) {
      setCartItems([]);
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      setLoading(true);
      // Firebase mein har user ka Cart ek separate document hoga
      const cartDocRef = doc(db, "carts", currentUser.uid);
      const docSnap = await getDoc(cartDocRef);

      if (docSnap.exists()) {
        // Agar Cart exist karta hai, toh IDs ko state mein load karo
        setCartItems(docSnap.data().items || []);
      } else {
        // Agar Cart exist nahi karta, toh naya document banao
        await setDoc(cartDocRef, { items: [] });
        setCartItems([]);
      }
      setLoading(false);
    };
    fetchCart();
  }, [currentUser, authLoading]); 

  // Adding cart item in firebase
  const addToCart = async (productId) => {
    if (!currentUser) return false;
    const cartDocRef = doc(db, "carts", currentUser.uid);
    await setDoc(
      cartDocRef,
      {
        items: arrayUnion(productId),
      },
      { merge: true }
    ); 
    setCartItems((prev) => [...prev, productId]);
    return true;
  };

  // Removing cart item from firebase
  const removeFromCart = async (productId) => {
    if (!currentUser) return;
    const cartDocRef = doc(db, "carts", currentUser.uid);
    // Firestore se ID ko array se hatana
    await updateDoc(cartDocRef, {
        items: arrayRemove(productId) 
    });
    // Local state ko update karo
    setCartItems(prev => prev.filter(id => id !== productId));
    toast.info("Item removed from cart.");
};

  const value = {
    cartItems,
    loading,
    addToCart,
    cartCount: cartItems.length, 
    removeFromCart,
  };

  return (
  <CartContext.Provider value={value}>
    {children}
    </CartContext.Provider>
    )
};
