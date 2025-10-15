import React from "react";
import Skeleton from "react-loading-skeleton";
const CartSkeleton = () => {
  const cart = 5;
  return (
    <div className="p-5">
      {Array.from({ length: cart }, (_, index) => (
        <div key={index}>
          <Skeleton width="100%" height="80px" baseColor="#1e1e1e1e" />
        </div>
      ))}
    </div>
  );
};

export default CartSkeleton;
