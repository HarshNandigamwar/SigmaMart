import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductDetailSkeleton = () => {
  return (
    <div className="p-5">
      {/* Mobile skeleton */}
      <div className="block md:hidden ">
        <div>
          {/* Product Image, name & detail  */}
          <Skeleton height="500px" />
          <Skeleton height="30px" width="200px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </div>
        {/* Buttons */}
        <div className="mt-5">
          <Skeleton height="50px" />
        </div>
        <div className="flex items-center justify-center gap-4 mt-3">
          <Skeleton borderRadius="100%" height="80px" width="80px" />
          <Skeleton borderRadius="100%" height="80px" width="80px" />
          <Skeleton borderRadius="100%" height="80px" width="80px" />
        </div>

        {/* Info */}
        <div className=" mt-5">
          <Skeleton height="30px" width="200px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </div>
      </div>
      {/* Laptop skeleton */}
      <div className=" ">
        {/* Img */}
        <div>
          <Skeleton width="100%" height="500px" baseColor="red" />
          <Skeleton height="50px" width="40%" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
