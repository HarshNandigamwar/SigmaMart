import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBox, FaHeart } from "react-icons/fa6";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
// importing from hooks
import useScrollToTop from "../Hooks/useScrollToTop";
// import images
import ImageNotFound from "/ImageNotA.jpg";
// importing from components
import LogOutButton from "../Components/LoaderComponents/NormalLoaderComponents/LogOutButton";
import ProfileBox from "../Components/ProfileBox";
// importing from context
import { useAuth } from "../Context/AuthProvider.jsx";
// Importing Toast notification
import { toast } from "sonner";
const Profile = () => {
  // Scroll on top when page load
  useScrollToTop();
  // forward to diff pages
  const navigate = useNavigate();
  function nav(val) {
    navigate(`${val}`);
  }
  const { currentUser, logout } = useAuth();
  const UserImage = currentUser.photoURL;
  const handleLogout = async () => {
    try {
      await logout();
      toast.info("You have been logged out successfully.");
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div className="p-5 w-full flex flex-col items-center md:flex-row gap-2 ">
      <div className="w-[50%]">
        <div className="flex flex-col gap-5 items-center justify-center p-2 ">
          {/* profile Image */}
          <img
            src={UserImage || ImageNotFound}
            alt={currentUser.displayName || "Profile"}
            className="w-80 rounded-full object-cover border-2 border-blue-500 "
          />
          {/* User Name */}
          <p className="md:mt-3 text-[23px] md:text-4xl font-bold ">
            {currentUser.email || "N/A"}
          </p>
          {/* Logout Button */}
          <div className="md:mt-5 ">
            <LogOutButton
              onClick={handleLogout}
              children="Logout "
              loading={false}
            />
          </div>
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-center justify-evenly gap-5 ">
        <div className="w-full p-5 flex items-center justify-center gap-5">
          <div onClick={() => nav(`/orderhistory`)}>
            <ProfileBox
              name={"My Orders"}
              img={<FaBox className="text-8xl fill-amber-800 " />}
            />
          </div>

          <div onClick={() => nav(`/wishlist`)}>
            <ProfileBox
              name={"My Wishlist"}
              img={<FaHeart className="text-8xl fill-red-500" />}
            />
          </div>
        </div>
        <div className="w-full p-5 flex items-center justify-center gap-5">
          <div onClick={() => nav(`/cart`)}>
            <ProfileBox
              name={"Cart"}
              img={<FaShoppingCart className="text-8xl" />}
            />
          </div>

          <div onClick={() => nav(`/about`)}>
            <ProfileBox
              name={"About Us "}
              img={<FaInfoCircle className="text-8xl " />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
