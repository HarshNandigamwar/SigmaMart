import React from "react";
// import from Hooks
import useScrollToTop from "../Hooks/useScrollToTop.js";
// import Skeleton
import CartSkeleton from "../Components/LoaderComponents/SkeletonLoaders/CartSkeleton";
// import from components
import MobileCartCard from "../Components/CartCards/MobileCartCard";
import LaptopCartCard from '../Components/CartCards/LaptopCartCard'
//import Images
import PhoneImage from "/thumbnail.webp";
const Cart = () => {
  const name = "Samsung A22 4G";
  const price = "20,000";
  return (
    <div>
      <CartSkeleton />
      {/* Only visible in mobile */}
      <div className="flex md:hidden flex-col p-2 ">
        <MobileCartCard img={PhoneImage} name={name} price={price} />
      </div>
      {/* Only visible in laptop */}
      <div className="hidden md:flex flex-col p-2 ">
<LaptopCartCard img={PhoneImage} name={name} price={price}/>
      </div>
    </div>
  );
};

export default Cart;
