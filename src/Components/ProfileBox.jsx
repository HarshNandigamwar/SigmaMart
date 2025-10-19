import React from "react";
// importing motion for animation
import { motion } from "framer-motion";
const ProfileBox = ({ img, name }) => {
  return (
    <motion.div
      className="border w-full md:min-w-50 p-5 rounded-md flex flex-col gap-5 items-center justify-center border-blue-500 bg-blue-400/30 "
      whileTap={{ scale: 0.9 }}
    >
      {img}
      <p className="md:text-2xl font-bold">{name}</p>
    </motion.div>
  );
};

export default ProfileBox;
