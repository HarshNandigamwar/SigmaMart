import React from "react";
// import images
import ImageNotFound from "/ImageNotA.jpg";
// importing from components
import LogOutButton from "../Components/LoaderComponents/NormalLoaderComponents/LogOutButton";
import ProfileBox from "../Components/ProfileBox";
import { FaBox, FaHeart } from "react-icons/fa6";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="p-5 w-full flex flex-col md:flex-row gap-2 ">
      <div className="w-[50%]">
        <div className="flex flex-col gap-5 items-center justify-center p-2 ">
          {/* profile Image */}
          <img
            src={ImageNotFound}
            alt="N/A"
            className="w-80 rounded-full object-cover border-2 border-blue-500 "
          />
          {/* User Name */}
          <h1 className="mt-3 text-4xl font-bold ">Shriharsh Nandigamwar</h1>
          {/* Logout Button */}
          <div className="mt-5 ">
            <LogOutButton children="Logout " loading={false} />
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-center justify-evenly gap-5 ">
        <div className="w-full p-5 flex items-center justify-center gap-5">
          <ProfileBox
            name={"My Orders"}
            img={<FaBox className="text-8xl fill-amber-800 " />}
          />
          <ProfileBox
            name={"My Wishlist"}
            img={<FaHeart className="text-8xl fill-red-500" />}
          />
        </div>
        <div className="w-full p-5 flex items-center justify-center gap-5">
          <ProfileBox
            name={"Cart"}
            img={<FaShoppingCart className="text-8xl" />}
          />
          <ProfileBox
            name={"About Us "}
            img={<FaInfoCircle className="text-8xl " />}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
