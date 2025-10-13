import React, { useState } from "react";
import Arrow from "../Components/Arrow";
import { FaBox, FaHeart, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import {
  FaHome,
  FaInfoCircle,
  FaShoppingCart,
  FaThLarge,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Animation Variable for Mobile nav
  const sidebarVariants = {
    // hidden state
    hidden: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
    // Visible state
    visible: {
      x: "0%",
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
  };
  return (
    <>
      {/* Main Nav */}
      <div className="flex items-center flex-col z-50 sticky gap-2 w-full bg-blue-400 p-2 ">
        {/* Top Nav */}
        <div className="flex items-center justify-between w-full px-3 md:gap-3">
          {/* logo   */}
          <p className="font-bold text-2xl md:text-3xl ">SigmaMart</p>
          {/* Search */}
          <div className="hidden md:flex items-center w-full ">
            <input
              type="text"
              placeholder="Search Product ..."
              className="w-full p-2 rounded-tl-md rounded-bl-md text-[black] bg-[white] placeholder:text-blue-400 focus:outline-none "
            />
            {/* Button */}
            <motion.button
              className="p-3 rounded-tr-md rounded-br-md bg-[white] "
              whileTap={{ scale: 0.9 }}
            >
              <FaMagnifyingGlass className="fill-blue-400  " />
            </motion.button>
          </div>
          <div className="flex gap-2 ">
            {/* Cart */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-xl md:text-2xl "
            >
              <FaShoppingCart />
            </motion.button>
            {/* Menu */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? (
                <Arrow height={"30px"} stroke="#000000" />
              ) : (
                <Arrow
                  height={"30px"}
                  className="rotate-180 "
                  stroke="#000000"
                />
              )}
            </motion.button>
          </div>
        </div>
        {/* Bottom Nav */}
        <div className="flex md:hidden w-full items-center px-3 ">
          {/*  Search */}
          <input
            type="text"
            placeholder="Search Product ..."
            className="w-full p-2 rounded-tl-md rounded-bl-md text-[black] bg-[white] placeholder:text-blue-400 focus:outline-none "
          />
          {/* Button */}
          <motion.button
            className="p-3 rounded-tr-md rounded-br-md bg-[white] "
            whileTap={{ scale: 0.9 }}
          >
            <FaMagnifyingGlass className="fill-blue-400  " />
          </motion.button>
        </div>
      </div>
      {/* Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute w-full h-screen flex "
            key="mobile-nav"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Blur div */}
            <motion.div
              className="w-[50%] md:w-[80%] h-screen backdrop-blur-sm"
              onClick={() => setMenuOpen(!menuOpen)}
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            {/* Main nav */}
            <div className="w-[50%] md:w-[20%] p-5 bg-blue-400 flex flex-col gap-3 ">
              <p
                className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {" "}
                <FaHome className={`fill-white `} /> Home
              </p>
              <p
                className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaHeart className={`fill-white `} /> Wishlist
              </p>
              <p
                className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaThLarge className={`fill-white `} /> Categories
              </p>
              <p
                className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaBox className={`fill-white `} /> Order
              </p>
              <p
                className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaInfoCircle className={`fill-white `} /> About Us
              </p>
              <p
                className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaUser className={`fill-white `} /> Profile
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
