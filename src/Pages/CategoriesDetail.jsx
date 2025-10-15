import React from "react";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
// import skeleton
import CategoriesDetailSkeleton from "../Components/LoaderComponents/SkeletonLoaders/CategoriesDetailSkeleton";
// import from components
import HomePageCard from "../Components/HomePageCard";
//import Images
import PhoneImage from "/thumbnail.webp";
const CategoriesDetail = () => {
  const phone = [
    {
      id: 1,
      img: PhoneImage,
      name: "S22",
      price: "21,990",
    },
    {
      id: 2,
      img: PhoneImage,
      name: "S22",
      price: "21,990",
    },
    {
      id: 3,
      img: PhoneImage,
      name: "S22",
      price: "21,990",
    },
    {
      id: 4,
      img: PhoneImage,
      name: "S22",
      price: "21,990",
    },
    {
      id: 5,
      img: PhoneImage,
      name: "S22",
      price: "21,990",
    },
    {
      id: 6,
      img: PhoneImage,
      name: "S22",
      price: "21,990",
    },
    {
      id: 7,
      img: PhoneImage,
      name: "S22",
      price: "21,990",
    },
    {
      id: 8,
      img: PhoneImage,
      name: "S22",
      price: "21,990",
    },
    {
      id: 9,
      img: PhoneImage,
      name: "S22",
      price: "21,990",
    },
    {
      id: 10,
      img: PhoneImage,
      name: "S22",
      price: "21,990",
    },
  ];

  return (
    <div>
      <CategoriesDetailSkeleton />
      <div className="pt-2 ">
        {/* Title */}
        <h1 className="flex text-3xl font-bold text-blue-400 pl-2 md:pl-0 justify-center md:text-5xl ">
          Mobile Phones
        </h1>
        {/* Gride */}
        <div className=" mt-5 md:mt-8 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
          {phone.map((data) => (
            <div key={data.id}>
              <HomePageCard
                img={data.img}
                name={data.name}
                price={data.price}
                dis={data.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesDetail;
