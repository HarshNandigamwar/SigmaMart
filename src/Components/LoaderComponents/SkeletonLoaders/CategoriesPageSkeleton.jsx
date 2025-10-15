import React from "react";
import Skeleton from "react-loading-skeleton";

const CategoriesPageSkeleton = () => {
  const skeleton = 12;
  return (
    <div className="p-5">
      {/* Title */}
      <div className="flex items-center justify-center">
        <Skeleton width="250px" height="30px" baseColor="#1e1e1e1e " />
      </div>
      {/* gride */}
      <div className="mt-5 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
        {Array.from({ length: skeleton }, (_, index) => (
          <div key={index}>
            <Skeleton width="150px" height="180px" baseColor="#1e1e1e1e " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPageSkeleton;
