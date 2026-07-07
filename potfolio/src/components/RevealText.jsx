import React from "react";
import { motion } from "framer-motion";

const lineVariants = {
  hidden: { y: "110%" },
  visible: { y: "0%" },
};

const RevealText = ({ as: Tag = "span", className = "", children, delay = 0, ...props }) => (
  <Tag className={`reveal-line ${className}`} {...props}>
    {/* Untransformed sensor: whileInView must live on an element that isn't
        itself translated out of the clipped .reveal-line box, or the
        overflow:hidden ancestor permanently zeroes its intersection ratio. */}
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="inline-block"
    >
      <motion.span
        variants={lineVariants}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </motion.span>
  </Tag>
);

export default RevealText;
