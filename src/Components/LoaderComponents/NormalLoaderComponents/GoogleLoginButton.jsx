import React from "react";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa6";

const GoogleLoginButton = ({ loading, children, type, ...props }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      type={type}
      className={`flex w-full items-center justify-center px-4 py-2 rounded-md mt-4 mb-5 bg-blue-400/30 border border-blue-500 text-black font-bold shadow gap-2 cursor-pointer text-xl disabled:opacity-60 ${
        loading ? "cursor-progress" : ""
      }`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-60"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : (
        // <p>
        //   {" "}
        //   <FaGoogle className="fill-orange-400" />
        // </p>
        <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
      )}
      {loading ? "Login..." : children}
    </motion.button>
  );
};

export default GoogleLoginButton;
