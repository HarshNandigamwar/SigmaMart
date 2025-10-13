import React from "react";
import Skeleton from "react-loading-skeleton";
const CategoriesDetailSkeleton = () => {
  const skeleton = 10;
  return (
    <div className="p-5 ">
      {/* Title */}
      <div className="flex items-center justify-center">
        <Skeleton width="250px" height="30px" />
      </div>
      {/* gride */}
      <div className="mt-5 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
        {Array.from({ length: skeleton }, (_, index) => (
          <div key={index}>
            <Skeleton width="150px" height="180px" />
            <Skeleton width="150px" />
            <Skeleton width="100px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesDetailSkeleton;
