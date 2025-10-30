import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// importing axios for API call
import axios from "axios";
// importing sonner fro notification
import { toast } from "sonner";
// import from Components
import CategoriesCircle from "../Components/CategoriesCircle";
import SlidingImages from "../Components/SlidingImages";
import HomePageCard from "../Components/HomePageCard";
// import skeleton
import HomePageSkeleton from "../Components/LoaderComponents/SkeletonLoaders/HomePageSkeleton";
// importing from motion
import { motion } from "framer-motion";
// import from Hook
import playSound from "../Hooks/playSound";

const Home = () => {
  const errorSound = "/Sound/Error.mp3";
  const [Loader, setLoader] = useState(false);
  // Category section Array
  const category = [
    {
      name: "Laptops",
      img: "💻",
      cate: "laptops",
    },
    {
      name: "Mobiles",
      img: "📱",
      cate: "smartphones",
    },
    {
      name: "Watch",
      img: "⌚",
      cate: "mens-watches",
    },
    {
      name: "Shirt",
      img: "👕",
      cate: "mens-shirts",
    },
    {
      name: "Beauty",
      img: "💅",
      cate: "beauty",
    },
    {
      name: "Shoes",
      img: "👠",
      cate: "womens-shoes",
    },
    {
      name: "Furniture",
      img: "🛋️",
      cate: "furniture",
    },
    {
      name: "Skincare",
      img: "🧼",
      cate: "skin-care",
    },
    {
      name: "Sunglasses",
      img: "👓",
      cate: "sunglasses",
    },
    {
      name: "Tops",
      img: "👚",
      cate: "tops",
    },
  ];
  // Fetch data from API using Axios
  // Mobile Phones
  const [mobile, setMobile] = useState([]);
  useEffect(() => {
    async function fetchMobile() {
      try {
        setLoader(true);
        const response = await axios.get(
          `https://dummyjson.com/products/category/smartphones`
        );
        setMobile(response.data.products);
        setLoader(false);
      } catch (error) {
        //  Axios Error Display
        let errorMessage = "An unknown error occurred.";
        if (error.response) {
          const status = error.response.status;
          const data = error.response.data;
          if (status === 404) {
            errorMessage = `Resource not found: 404`;
          } else if (status >= 500) {
            errorMessage = `Server Error (${status}): Please try again later.`;
          } else if (data.message) {
            errorMessage = `Error (${status}): ${data.message}`;
          }
        } else if (error.request) {
          errorMessage =
            "Network Error: Could not connect to the server. Check your connection.";
        } else {
          errorMessage = `Application Error: ${error.message}`;
        }
        toast.error(errorMessage, {
          duration: 5000,
        });
        playSound(errorSound);
        setLoader(false);
      }
    }
    // fetchMobile();
  }, []);
  // Laptops
  const [laptop, setLaptop] = useState([]);
  useEffect(() => {
    async function fetchLaptop() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/laptops`
        );
        setLaptop(response.data.products);
      } catch (error) {
        //  Axios Error Display
        let errorMessage = "An unknown error occurred.";
        if (error.response) {
          const status = error.response.status;
          const data = error.response.data;
          if (status === 404) {
            errorMessage = `Resource not found: 404`;
          } else if (status >= 500) {
            errorMessage = `Server Error (${status}): Please try again later.`;
          } else if (data.message) {
            errorMessage = `Error (${status}): ${data.message}`;
          }
        } else if (error.request) {
          errorMessage =
            "Network Error: Could not connect to the server. Check your connection.";
        } else {
          errorMessage = `Application Error: ${error.message}`;
        }
        toast.error(errorMessage, {
          duration: 5000,
        });

        setLoader(false);
      }
    }
    // fetchLaptop();
  }, []);
  //Watch
  const [watch, setWatch] = useState([]);
  useEffect(() => {
    async function fetchWatch() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/mens-watches`
        );
        setWatch(response.data.products);
      } catch (error) {
        //  Axios Error Display
        let errorMessage = "An unknown error occurred.";
        if (error.response) {
          const status = error.response.status;
          const data = error.response.data;
          if (status === 404) {
            errorMessage = `Resource not found: 404`;
          } else if (status >= 500) {
            errorMessage = `Server Error (${status}): Please try again later.`;
          } else if (data.message) {
            errorMessage = `Error (${status}): ${data.message}`;
          }
        } else if (error.request) {
          errorMessage =
            "Network Error: Could not connect to the server. Check your connection.";
        } else {
          errorMessage = `Application Error: ${error.message}`;
        }
        toast.error(errorMessage, {
          duration: 5000,
        });

        setLoader(false);
      }
    }
    // fetchWatch();
  }, []);
  //Shirt
  const [shirt, setShirt] = useState([]);
  useEffect(() => {
    async function fetchShirt() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/mens-shirts`
        );
        setShirt(response.data.products);
      } catch (error) {
        //  Axios Error Display
        let errorMessage = "An unknown error occurred.";
        if (error.response) {
          const status = error.response.status;
          const data = error.response.data;
          if (status === 404) {
            errorMessage = `Resource not found: 404`;
          } else if (status >= 500) {
            errorMessage = `Server Error (${status}): Please try again later.`;
          } else if (data.message) {
            errorMessage = `Error (${status}): ${data.message}`;
          }
        } else if (error.request) {
          errorMessage =
            "Network Error: Could not connect to the server. Check your connection.";
        } else {
          errorMessage = `Application Error: ${error.message}`;
        }
        toast.error(errorMessage, {
          duration: 5000,
        });
        setLoader(false);
      }
    }
    // fetchShirt();
  }, []);
  // Forward to product Detail page with ID
  const navigate = useNavigate();
  const Product = (id) => {
    navigate(`/productdetail/${id}`);
  };
  return (
    <div>
      {Loader ? (
        <HomePageSkeleton />
      ) : (
        <>
          {/* Category */}
          <div className="flex items-center justify-center gap-3 p-3 overflow-y-hidden">
            {category.map((data) => (
              <motion.div whileTap={{ scale: 0.9 }} key={data.name}>
                <CategoriesCircle
                  logo={data.img}
                  name={data.name}
                  cate={data.cate}
                />
              </motion.div>
            ))}
          </div>
          {/* Sliding Images */}
          {/* <SlidingImages /> */}
          {/* Main Contents */}
          <div className="p-2 ">
            {/* Mobile Phones */}
            <>
              {/* Title */}
              <h1 className="flex items-start text-3xl font-bold text-blue-400 pl-2 md:pl-0 md:justify-center md:text-5xl ">
                Mobile Phones
              </h1>
              {/* Gride */}
              <div className=" mt-5 md:mt-8 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
                {mobile.map((data) => (
                  <div key={data.id}>
                    <HomePageCard
                      id={data.id}
                      img={data.thumbnail}
                      name={data.title}
                      price={Math.floor(data.price * 83)}
                      dis={data.discountPercentage}
                    />
                  </div>
                ))}
              </div>
            </>
            {/* Laptops */}
            <>
              {/* Title */}
              <h1 className="flex items-start text-3xl font-bold text-blue-400 pl-2 md:pl-0 md:justify-center md:text-5xl ">
                Laptops
              </h1>
              {/* Gride */}
              <div className=" mt-5 md:mt-8 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
                {laptop.map((data) => (
                  <div key={data.id}>
                    <HomePageCard
                      id={data.id}
                      img={data.thumbnail}
                      name={data.title}
                      price={Math.floor(data.price * 83)}
                      dis={data.discountPercentage}
                    />
                  </div>
                ))}
              </div>
            </>
            {/* Watch */}
            <>
              {/* Title */}
              <h1 className="flex items-start text-3xl font-bold text-blue-400 pl-2 md:pl-0 md:justify-center md:text-5xl ">
                Mens Watches
              </h1>
              {/* Gride */}
              <div className=" mt-5 md:mt-8 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
                {watch.map((data) => (
                  <div key={data.id}>
                    <HomePageCard
                      id={data.id}
                      img={data.thumbnail}
                      name={data.title}
                      price={Math.floor(data.price * 83)}
                      dis={data.discountPercentage}
                    />
                  </div>
                ))}
              </div>
            </>
            {/* Shirt */}
            <>
              {/* Title */}
              <h1 className="flex items-start text-3xl font-bold text-blue-400 pl-2 md:pl-0 md:justify-center md:text-5xl ">
                Mens Shirt
              </h1>
              {/* Gride */}
              <div className=" mt-5 md:mt-8 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
                {shirt.map((data) => (
                  <div key={data.id}>
                    <HomePageCard
                      id={data.id}
                      img={data.thumbnail}
                      name={data.title}
                      price={Math.floor(data.price * 83)}
                      dis={data.discountPercentage}
                    />
                  </div>
                ))}
              </div>
            </>
          </div>
        </>
      )}
    </div>
  );
};
export default Home;
