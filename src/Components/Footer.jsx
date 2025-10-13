import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
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
            <div className="flex space-x-5 pt-2">
              <a href="" target="_blank">
                <FaInstagram className="text-2xl " />
              </a>
              <a href="" target="_blank">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold ">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#aboutus">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#worksamples">Work Samples</a>
              </li>
              <li>
                <a href="#contactus">Connect</a>
              </li>
            </ul>
          </div>
        </div>
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
