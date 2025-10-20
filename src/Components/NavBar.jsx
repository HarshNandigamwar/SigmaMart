import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBox, FaHeart, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import {
  FaHome,
  FaInfoCircle,
  FaShoppingCart,
  FaThLarge,
} from "react-icons/fa";
// import from components
import Arrow from "../Components/Arrow";
import { useAuth } from "../Context/AuthProvider.jsx";
// importing motion
import { AnimatePresence, motion } from "framer-motion";
// importing sonner fro notification
import { toast } from "sonner";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  // Add to cart Button
  const { currentUser } = useAuth();
  function cart() {
    if (currentUser) {
      navigate("/cart");
    } else {
      toast.warning("Please login to proceed.", {
        action: {
          label: "Login",
          onClick: () => navigate("/login"),
        },
      });
    }
  }
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
  // Placeholder text change in every 2 second
  const placeholders = [
    "Upgrade your style with MEN'S SHIRTS today!",
    "Find the perfect pair of WOMEN'S SHOES!",
    "Discover the latest SMARTPHONES & gadgets.",
    "Unwind with luxurious SKIN CARE routines.",
    "Need new FURNITURE? Browse our selection!",
    "Time for a new look? Check out TOPS!",
    "Accessorize: Explore our range of SUNGLASSES.",
    "Gift yourself some BEAUTY essentials.",
    "Invest in a classic MEN'S WATCHES.",
    "Boost productivity with powerful LAPTOPS.",
  ];
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholders[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % placeholders.length;
        setCurrentPlaceholder(placeholders[newIndex]);
        return newIndex;
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  // Search product
  let [inputValue, setInputValue] = useState("");
  let productList = [
    "smartphones",
    "laptops",
    "beauty",
    "furniture",
    "womens-shoes",
    "mens-shirts",
    "skin-care",
    "sunglasses",
    "tops",
    "mens-watches",
  ];
  function Search() {
    const trimmedInput = inputValue.trim();
    const normalizedInput = trimmedInput.toLowerCase();
    if (trimmedInput === "") {
      toast.warning("Search Something");
      setInputValue("");
      return;
    }
    if (productList.includes(normalizedInput)) {
      navigate(`/categoriesdetail/${normalizedInput}`);
      setInputValue("");
    } else {
      toast.error("The item you search is not available yet.");
      setInputValue("");
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      Search();
      event.preventDefault();
    }
  };

  return (
    <>
      {/* Main Nav */}
      <div className="flex items-center flex-col z-50 sticky gap-2 w-full bg-blue-400 p-2 ">
        {/* Top Nav */}
        <div className="flex items-center justify-between w-full px-3 md:gap-3">
          {/* logo   */}
          <NavLink to={"/"}>
            <p className="font-bold text-2xl md:text-3xl ">SigmaMart</p>
          </NavLink>
          {/* Search */}
          <div className="hidden md:flex items-center w-full ">
            <input
              type="text"
              placeholder={currentPlaceholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full p-2 rounded-tl-md rounded-bl-md text-[black] bg-[white] placeholder:text-blue-400 focus:outline-none"
            />
            {/* Button */}
            <motion.button
              className="p-3 rounded-tr-md rounded-br-md bg-[white] "
              whileTap={{ scale: 0.9 }}
              onClick={() => Search()}
            >
              <FaMagnifyingGlass className="fill-blue-400  " />
            </motion.button>
          </div>
          <div className="flex gap-2 ">
            {/* Cart */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-xl md:text-2xl "
              onClick={() => cart()}
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
            placeholder={currentPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-2 rounded-tl-md rounded-bl-md text-[black] bg-[white] placeholder:text-blue-400 focus:outline-none "
          />
          {/* Button */}
          <motion.button
            className="p-3 rounded-tr-md rounded-br-md bg-[white] "
            whileTap={{ scale: 0.9 }}
            onClick={() => Search()}
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
              {/* Home */}
              <NavLink to={"/"}>
                <p
                  className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FaHome className={`fill-white `} /> Home
                </p>
              </NavLink>
              {/* wishlist */}
              <NavLink to={"wishlist"}>
                <p
                  className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FaHeart className={`fill-white `} /> Wishlist
                </p>
              </NavLink>
              {/* categories */}
              <NavLink to={"categories"}>
                <p
                  className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FaThLarge className={`fill-white `} /> Categories
                </p>
              </NavLink>
              {/* Order History */}
              <NavLink to={"orderhistory"}>
                <p
                  className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FaBox className={`fill-white `} /> My Orders
                </p>
              </NavLink>
              {/* About Us */}
              <NavLink to={"about"}>
                <p
                  className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FaInfoCircle className={`fill-white `} /> About Us
                </p>
              </NavLink>
              {/* Profile */}
              <NavLink to={"profile"}>
                <p
                  className={`  flex items-center gap-3 text-xl font-bold p-2 `}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FaUser className={`fill-white `} /> Profile
                </p>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
