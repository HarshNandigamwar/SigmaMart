import React from "react";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
// import skeleton
import CategoriesPageSkeleton from "../Components/LoaderComponents/SkeletonLoaders/CategoriesPageSkeleton.jsx";
// import from components
import CategoriesCard from "../Components/CategoriesCard.jsx";
// import images
import Mobile from "/CategoryImages/mobile.jpeg";
import Laptop from "/CategoryImages/laptops.jpeg";
import Beauty from "/CategoryImages/beauty.jpeg";
import Furniture from "/CategoryImages/furniture.jpeg";
import Shoes from "/CategoryImages/ladyshoo.jpeg";
import Shirt from "/CategoryImages/shirt.jpeg";
import SkinCare from "/CategoryImages/skincare.jpeg";
import Sunglass from "/CategoryImages/sungglass.jpeg";
import Tops from "/CategoryImages/tops.jpeg";
import Watch from "/CategoryImages/watch.jpeg";

const Categories = () => {
  // useScrollToTop();
  const categories = [
    {
      img: Mobile,
      name: "Mobiles",
    },
    {
      img: Laptop,
      name: "Laptop",
    },
    {
      img: Beauty,
      name: "Beauty",
    },
    {
      img: Furniture,
      name: "Furniture",
    },
    {
      img: Shoes,
      name: "Shoes",
    },
    {
      img: Shirt,
      name: "Shirt",
    },
    {
      img: SkinCare,
      name: "Skin Care",
    },
    {
      img: Sunglass,
      name: "Sun Glass",
    },
    {
      img: Tops,
      name: "Tops",
    },
    {
      img: Watch,
      name: "Watch",
    },
  ];
  return (
    <div>
      <CategoriesPageSkeleton />
      <div className="p-5">
        {/* Title */}
        <h1 className="flex justify-center text-3xl font-bold text-blue-400 pl-2 md:pl-0 md:text-5xl ">
          Categories
        </h1>
        {/* Grid */}
        <div className=" mt-5 md:mt-8 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
          {categories.map((data) => (
            <div key={data.name}>
              <CategoriesCard img={data.img} name={data.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
