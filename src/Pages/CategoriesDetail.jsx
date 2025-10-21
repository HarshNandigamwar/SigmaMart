import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// importing axios for API call
import axios from "axios";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
import playSound from "../Hooks/playSound";
// import skeleton
import CategoriesDetailSkeleton from "../Components/LoaderComponents/SkeletonLoaders/CategoriesDetailSkeleton";
// import from components
import HomePageCard from "../Components/HomePageCard";
// importing from motion
import { motion } from "framer-motion";
// importing from sonner
import { toast } from "sonner";

const CategoriesDetail = () => {
  // Scroll on top when page load.
  useScrollToTop();
  const [loader, setloader] = useState(false);
  // Fetch data of selected categories
  const { categorie } = useParams();
  const [details, setdetails] = useState([]);
  const errorSound = "/Sound/Error.mp3";
  useEffect(() => {
    async function fetchCategories() {
      try {
        setloader(true);
        const response = await axios.get(
          `https://dummyjson.com/products/category/${categorie}`
        );
        setdetails(response.data.products);
        setloader(false);
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
        setloader(false);
      }
    }
    fetchCategories();
  }, [categorie]);

  return (
    <div>
      {loader ? (
        <CategoriesDetailSkeleton />
      ) : (
        <div className="pt-2 ">
          {/* Title */}
          <h1 className="text-4xl font-extrabold mb-8 text-center flex items-center justify-center gap-2 text-blue-500">
            {categorie}
          </h1>
          {/* Gride */}
          <div className=" mt-5 md:mt-8 overflow-x-hidden w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center">
            {details.map((data) => (
              <motion.div whileTap={{ scale: 0.9 }} key={data.id}>
                <div key={data.id}>
                  <HomePageCard
                    id={data.id}
                    img={data.thumbnail}
                    name={data.title}
                    price={Math.floor(data.price * 83)}
                    dis={data.discountPercentage}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesDetail;
