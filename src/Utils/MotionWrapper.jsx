import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({ children, delay = 0, direction = "y" }) => {
  let initialPos = {};

  switch (direction) {
    case "y":
      initialPos = { y: 30 };
      break;
    case "-y":
      initialPos = { y: -30 };
      break;
    case "x":
      initialPos = { x: 30 };
      break;
    case "-x":
      initialPos = { x: -30 };
      break;
    default:
      initialPos = { y: 30 };
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...initialPos }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
