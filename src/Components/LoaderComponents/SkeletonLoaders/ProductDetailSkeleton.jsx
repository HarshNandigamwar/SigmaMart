import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductDetailSkeleton = () => {
  return (
    <div className="p-5">
      {/* Mobile skeleton */}
      <div className="block md:hidden ">
        <div>
          {/* Product Image, name & detail  */}
          <Skeleton height="500px" baseColor="#1e1e1e1e " />
          <Skeleton height="30px" width="200px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
        </div>
        {/* Buttons */}
        <div className="mt-5">
          <Skeleton height="50px" baseColor="#1e1e1e1e " />
        </div>
        <div className="flex items-center justify-center gap-4 mt-3">
          <Skeleton
            borderRadius="100%"
            height="80px"
            width="80px"
            baseColor="#1e1e1e1e "
          />
          <Skeleton
            borderRadius="100%"
            height="80px"
            width="80px"
            baseColor="#1e1e1e1e "
          />
          <Skeleton
            borderRadius="100%"
            height="80px"
            width="80px"
            baseColor="#1e1e1e1e "
          />
        </div>

        {/* Info */}
        <div className=" mt-5">
          <Skeleton height="30px" width="200px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
        </div>
      </div>
      {/* Laptop skeleton */}
      <div className="hidden md:block ">
        {/* Img */}
        <div>
          <Skeleton width="100%" height="500px" baseColor="#1e1e1e1e " />
          <Skeleton height="50px" width="40%" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
          <Skeleton height="20px" baseColor="#1e1e1e1e " />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
