import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Import Images
// Image for Mobile
import Img1 from "/SlidingImages/1.png";
import Img2 from "/SlidingImages/2.jpeg";
import Img3 from "/SlidingImages/3.jpeg";
import Img4 from "/SlidingImages/4.jpeg";
import Img5 from "/SlidingImages/5.png";
// Image for tablet & Laptops
import Img6 from "/SlidingImages/6.jpg";
import Img7 from "/SlidingImages/7.png";
import Img8 from "/SlidingImages/8.png";
import Img9 from "/SlidingImages/9.png";
import Img10 from "/SlidingImages/10.jpeg";
// Import from Components
import Arrow from "./Arrow";

const SlidingImages = (index) => {
  const [current, setCurrent] = useState(0);
  const Image = [Img1, Img2, Img3, Img4, Img5];
  const Image2 = [Img6, Img7, Img8, Img9, Img10];
  // For Mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Image.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [Image.length]);
  // For Tablet and laptop
  useEffect(() => {
    const time = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Image2.length);
    }, 5000);
    return () => clearInterval(time);
  }, [Image2.length]);

  return (
    <div className="p-1">
      {/* Visible Only in Mobile phone */}
      <motion.div
        className="flex md:hidden rounded-md overflow-hidden flex-col transform-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Image Slideshow */}
        <div className="h-44 md:h-52 lg:h-56 w-full overflow-hidden relative group  -z-10">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={Image[current]}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
          {/* Dots */}
          <div className="absolute bottom-2 w-full flex justify-center gap-2">
            {Image.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === current ? "bg-blue-400" : "bg-gray-800"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
      {/* Visible Only in Tablet & Desktops */}
      <motion.div
        className="hidden md:flex mt-2 overflow-hidden flex-col transform-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Image Slideshow */}
        <div className="h-60 w-full overflow-hidden relative group -z-10">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={Image2[current]}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-contain  "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
          {/* Dots */}
          <div className="absolute bottom-2 w-full flex justify-center gap-2">
            {Image2.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === current ? "bg-blue-400" : "bg-gray-800"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SlidingImages;
