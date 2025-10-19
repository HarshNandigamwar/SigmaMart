import React, { useEffect, useState } from "react";
import {
  FaBox,
  FaClock,
  FaTruck,
} from "react-icons/fa";
// importing from context
import { useAuth } from "../Context/AuthProvider.jsx";
// importing from firebase.js
import { db } from "../firebase.js";
// importing from firebase
import { collection, query, where, orderBy, getDocs } from "firebase/firestore"; 
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
// import Skeleton
import CartSkeleton from "../Components/LoaderComponents/SkeletonLoaders/CartSkeleton";
// importing from sonner
import { toast } from "sonner";

const OrderHistory = () => {
  // Scroll on top when page load
  useScrollToTop();
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      return;
    }
    // Fetching order history from firebase
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const ordersCollectionRef = collection(db, "orders");
        const q = query(
          ordersCollectionRef,
          where("userId", "==", currentUser.uid),
          orderBy("orderedAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        const fetchedOrders = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          orderedAt:
            doc.data().orderedAt?.toDate().toLocaleDateString() || "N/A",
        }));
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching order history:", error);
        toast.error("Failed to load order history.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [currentUser]);

  // Loading Skeleton
  if (loading) {
    return <CartSkeleton />;
  }
// Display when no item found
  if (orders.length === 0) {
    return (
      <div className="text-center p-10">
        <h2 className="text-3xl font-bold text-gray-800">No Orders Found</h2>
        <p className="text-gray-500 mt-2">You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-8 text-center flex items-center justify-center gap-2 text-blue-500">
        <FaBox className="text-blue-500" /> Order History
      </h1>
{/* Main Grid */}
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-blue-500 rounded-lg p-5 shadow-lg bg-white transition hover:shadow-xl"
          >
            <div className="flex justify-between items-start border-b pb-3 mb-3">
              <div>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <FaClock /> Ordered On:{" "}
                  <span className="font-medium text-gray-700">
                    {order.orderedAt}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  Order ID: {order.id.substring(0, 8)}...
                </p>
              </div>
              {/* Order status & Price */}
              <div className="text-right">
                {/* Order Status */}
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100`}
                >
                  <FaTruck className="mr-1" /> {order.orderStatus}
                </span>
                {/* Product price */}
                <p className="text-2xl font-bold text-indigo-700 mt-1">
                  ₹ {Math.floor(order.totalAmount * 83)}
                </p>
              </div>
            </div>
{/* Product Image, title & payment option */}
            <div className="flex items-center">
              <img
                src={order.productThumbnail}
                alt={order.productTitle}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              {/* Product title and payment method */}
              <div>
                {/* Product Title */}
                <h3 className="text-lg font-semibold">{order.productTitle}</h3>
                {/* Payment method */}
                <p className="text-sm text-gray-600">
                  Payment: {order.paymentMethod}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
