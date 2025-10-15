import React from "react";
import Skeleton from "react-loading-skeleton";
const HomePageSkeleton = () => {
  const skeleton = 24;
  return (
    <div className=" p-5">
      {/*Categories  */}
      <div className="flex items-center justify-center gap-2 md:gap-6 overflow-x-hidden">
        <div className="flex flex-col gap-2 ">
          <Skeleton
            borderRadius="100%"
            height="80px"
            width="80px"
            baseColor="#1e1e1e1e"
          />
          <Skeleton baseColor="#1e1e1e1e " />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton
            borderRadius="100%"
            height="80px"
            width="80px"
            baseColor="#1e1e1e1e "
          />
          <Skeleton baseColor="#1e1e1e1e " />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton
            borderRadius="100%"
            height="80px"
            width="80px"
            baseColor="#1e1e1e1e "
          />
          <Skeleton baseColor="#1e1e1e1e " />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton
            borderRadius="100%"
            height="80px"
            width="80px"
            baseColor="#1e1e1e1e "
          />
          <Skeleton baseColor="#1e1e1e1e " />
        </div>
        <div className="hidden md:flex gap-2 md:gap-6">
          <div className="flex flex-col gap-2">
            <Skeleton
              borderRadius="100%"
              height="80px"
              width="80px"
              baseColor="#1e1e1e1e "
            />
            <Skeleton baseColor="#1e1e1e1e " />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton
              borderRadius="100%"
              height="80px"
              width="80px"
              baseColor="#1e1e1e1e "
            />
            <Skeleton baseColor="#1e1e1e1e " />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton
              borderRadius="100%"
              height="80px"
              width="80px"
              baseColor="#1e1e1e1e "
            />
            <Skeleton baseColor="#1e1e1e1e " />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton
              borderRadius="100%"
              height="80px"
              width="80px"
              baseColor="#1e1e1e1e "
            />
            <Skeleton baseColor="#1e1e1e1e " />
          </div>
        </div>
      </div>
      {/* Image Slider */}
      <div className="mt-5 ">
        <Skeleton height="200px" borderRadius="10px" />
      </div>
      {/* Title */}
      <div className="mt-5 flex items-start md:items-center md:justify-center">
        <Skeleton
          width="200px"
          height="30px"
          borderRadius="10px"
          baseColor="#1e1e1e1e "
        />
      </div>
      {/* Grid */}
      <div className=" mt-5 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
        {Array.from({ length: skeleton }, (_, index) => (
          <div key={index}>
            <Skeleton width="150px" height="180px" baseColor="#1e1e1e1e " />
            <Skeleton width="150px" baseColor="#1e1e1e1e " />
            <Skeleton width="100px" baseColor="#1e1e1e1e " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageSkeleton;
