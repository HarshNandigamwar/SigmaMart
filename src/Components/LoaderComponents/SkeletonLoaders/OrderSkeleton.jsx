import React from "react";
// importing skeleton
import Skeleton from "react-loading-skeleton";

const OrderSkeleton = () => {
  return (
    <>
      {/* Laptop Skeleton */}
      <div className="hidden md:flex items-center w-full p-5 gap-3">
        <div className="w-[50%]">
          <Skeleton baseColor="#1e1e1e1e" height="500px" />
        </div>
        <div className="w-[50%]">
          <Skeleton baseColor="#1e1e1e1e" height="50px" />
          <Skeleton baseColor="#1e1e1e1e" height="50px" />
          <Skeleton baseColor="#1e1e1e1e" height="50px" />
          <Skeleton baseColor="#1e1e1e1e" height="50px" />
          <Skeleton baseColor="#1e1e1e1e" height="50px" />
          <Skeleton baseColor="#1e1e1e1e" height="50px" />
          <Skeleton baseColor="#1e1e1e1e" height="50px" />
          <Skeleton baseColor="#1e1e1e1e" height="50px" />
          <Skeleton baseColor="#1e1e1e1e" height="50px" />
        </div>
      </div>
      {/* Mobile Skeleton */}
      <div className=" flex md:hidden flex-col p-5">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Skeleton baseColor="#1e1e1e1e" width="200px" height="200px" />
          <Skeleton baseColor="#1e1e1e1e" width="200px" height="20px" />
          <Skeleton baseColor="#1e1e1e1e" width="100px" height="20px" />
        </div>
        <div className="flex flex-col gap-2 justify-center mt-5">
          <Skeleton baseColor="#1e1e1e1e" width="100%" />
          <Skeleton baseColor="#1e1e1e1e" width="100%" />
          <Skeleton baseColor="#1e1e1e1e" width="100%" />
          <Skeleton baseColor="#1e1e1e1e" width="100%" />
          <Skeleton baseColor="#1e1e1e1e" width="100%" />
          <Skeleton baseColor="#1e1e1e1e" width="100%" />
          <Skeleton baseColor="#1e1e1e1e" width="100%" />
          <div className="flex items-center justify-center">
            <Skeleton baseColor="#1e1e1e1e" width="200px" height="30px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSkeleton;
