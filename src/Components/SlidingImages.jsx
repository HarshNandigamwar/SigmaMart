import React, { useState, useEffect } from "react";
// importing motion for animation
import { motion, AnimatePresence } from "framer-motion";
// Import Images
// Image for Mobile
let Img1 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1760936806/1_y0g7n1.png";
let Img2 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1760936793/2_f38sea.jpg";
let Img3 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1760936794/3_rojg3k.jpg";
let Img4 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1760936800/4_mvvp76.jpg";
let Img5 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1760936847/5_hmtu8l.png";

// Image for tablet & Laptops
let Img6 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1760936800/6_ni1dtl.jpg";
let Img7 = "https://res.cloudinary.com/darmatnf2/image/upload/7_bfpeve.png";
let Img8 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1760936853/8_gnp1ae.png";
let Img9 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1760936858/9_bj7m7t.png";
let Img10 =
  "https://res.cloudinary.com/darmatnf2/image/upload/v1760936798/10_wzukym.jpg";

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
