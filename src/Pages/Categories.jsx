import React, { useState } from "react";
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
// importing from motion
import { motion } from "framer-motion";

const Categories = () => {
  // Scroll on top when page load.
  useScrollToTop();
  const categories = [
    {
      img: Mobile,
      name: "Mobiles",
      cate: "smartphones",
    },
    {
      img: Laptop,
      name: "Laptop",
      cate: "laptops",
    },
    {
      img: Beauty,
      name: "Beauty",
      cate: "beauty",
    },
    {
      img: Furniture,
      name: "Furniture",
      cate: "furniture",
    },
    {
      img: Shoes,
      name: "Shoes",
      cate: "womens-shoes",
    },
    {
      img: Shirt,
      name: "Shirt",
      cate: "mens-shirts",
    },
    {
      img: SkinCare,
      name: "Skin Care",
      cate: "skin-care",
    },
    {
      img: Sunglass,
      name: "Sun Glass",
      cate: "sunglasses",
    },
    {
      img: Tops,
      name: "Tops",
      cate: "tops",
    },
    {
      img: Watch,
      name: "Watch",
      cate: "mens-watches",
    },
  ];
  const [loader, setloader] = useState(true);
  // Display Loader for 2 second for Dom has time to Render
  setTimeout(() => {
    setloader(false);
  }, 2000);

  return (
    <div>
      {loader ? (
        <CategoriesPageSkeleton />
      ) : (
        <div className="p-5">
          {/* Title */}
          <h1 className="text-blue-500 text-5xl font-bold text-center mt-2 mb-3 ">
            Categories
          </h1>
          {/* Grid */}
          <div className=" mt-5 md:mt-8 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
            {categories.map((data) => (
              <motion.div whileTap={{ scale: 0.9 }} key={data.name}>
                <CategoriesCard
                  img={data.img}
                  name={data.name}
                  cate={data.cate}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
