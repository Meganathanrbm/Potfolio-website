import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const ENABLE_TILT =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TiltCard = ({ className = "", children, ...motionProps }) => {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 20, mass: 0.4 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 20, mass: 0.4 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 10);
    rotateX.set((0.5 - py) * 10);
    el.style.setProperty("--tilt-x", `${px * 100}%`);
    el.style.setProperty("--tilt-y", `${py * 100}%`);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={ENABLE_TILT ? handleMouseMove : undefined}
        onMouseLeave={ENABLE_TILT ? handleMouseLeave : undefined}
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        className={`tilt-card ${className}`}
        {...motionProps}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TiltCard;
