import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
// importing from context
import { useAuth } from "../Context/AuthProvider";
// importing sonner fro notification
import { toast } from "sonner";

const Footer = () => {
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
  return (
    <>
      <footer className="bg-blue-400 text-black py-12 px-4 font-inter">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:w-[90vw]">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-3xl font-extrabold">SigmaMart</h3>
            </div>
            <p className=" text-sm leading-relaxed">
              Shop Smart, Shop Easy.
              <br />
              Bringing Quality to Your Doorstap.
            </p>
            {/* Social icon */}
            <div className="flex space-x-5 pt-2">
              {/* Github */}
              <a
                href="https://github.com/HarshNandigamwar
"
                target="_blank"
              >
                <FaGithub className="text-2xl " />
              </a>
              {/* x */}
              <a href="https://x.com/Harsh477011?s=09" target="_blank">
                <FaTwitter className="text-2xl" />
              </a>
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold ">Quick Links</h3>
            <ul className="space-y-3">
              {/* Home */}
              <li onClick={() => navigate("/")}>
                <a>Home</a>
              </li>
              {/* About us */}
              <li onClick={() => navigate("/about")}>
                <a>About Us</a>
              </li>
              {/* Cart */}
              <li onClick={() => cart()}>
                <a>Cart Product</a>
              </li>
              {/* Wishlist */}
              <li onClick={() => navigate("/wishlist")}>
                <a>Wishlist</a>
              </li>
              {/* Profile */}
              <li onClick={() => navigate("/profile")}>
                <a>Profile</a>
              </li>
            </ul>
          </div>
          {/* Top Category */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold ">Top Categories</h3>
            <ul className="space-y-3">
              {/* Mobile */}
              <li onClick={() => navigate("/categoriesdetail/smartphones")}>
                <a>Mobiles</a>
              </li>
              {/* Laptops */}
              <li onClick={() => navigate("/categoriesdetail/laptops")}>
                <a>Laptops</a>
              </li>
              {/* beauty */}
              <li onClick={() => navigate("/categoriesdetail/beauty")}>
                <a>Beauty</a>
              </li>
              {/* Watch */}
              <li onClick={() => navigate("/categoriesdetail/mens-watches")}>
                <a>Watch</a>
              </li>
              {/* Sun Glass */}
              <li onClick={() => navigate("/categoriesdetail/sunglasses")}>
                <a>Sun Glasses</a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Contact Developer</h3>
            <p>Rajura, Maharashtra, India</p>
            <a href="shriharshnandigamwar.vercel.app" target="_blank">
              shriharshnandigamwar.vercel.app
            </a>
          </div>
        </div>
        {/* Copy rights */}
        <div className="text-center text-sm pt-10 mt-10 border-t border-[#1e1e1e]">
          <p>Made with ❤️ by Shriharsh</p>
          <p>
            &copy; {new Date().getFullYear()} SigmaMart All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
