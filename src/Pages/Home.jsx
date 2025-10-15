import React from "react";
//import Images
import PhoneImage from "/thumbnail.webp";
// import from Components
import CategoriesCircle from "../Components/CategoriesCircle";
import SlidingImages from "../Components/SlidingImages";
import HomePageCard from "../Components/HomePageCard";
// import skeleton
import HomePageSkeleton from "../Components/LoaderComponents/SkeletonLoaders/HomePageSkeleton";
const Home = () => {
  // Category
  const category = [
    {
      name: "Laptops",
      img: "💻",
    },
    {
      name: "Mobiles",
      img: "📱",
    },
    {
      name: "Watch",
      img: "⌚",
    },
    {
      name: "Shirt",
      img: "👕",
    },
    {
      name: "Beauty",
      img: "💅",
    },
    {
      name: "Shoes",
      img: "👠",
    },
    {
      name: "Furniture",
      img: "🛋️",
    },
    {
      name: "Skincare",
      img: "🧼",
    },
    {
      name: "Sunglasses",
      img: "👓",
    },
    {
      name: "Tops",
      img: "👚",
    },
  ];
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
      <HomePageSkeleton />
      {/* Category */}
      <div className="flex items-center justify-center gap-3 p-3 overflow-y-hidden">
        {category.map((data) => (
          <div key={data.name}>
            <CategoriesCircle logo={data.img} name={data.name} />
          </div>
        ))}
      </div>
      {/* Sliding Images */}
      <SlidingImages />
      {/* Main Contents */}
      <div className="p-2 ">
        {/* Title */}
        <h1 className="flex items-start text-3xl font-bold text-blue-400 pl-2 md:pl-0 md:justify-center md:text-5xl ">
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

export default Home;
