import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || reduceMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setActive(true);
        setLabel(target.getAttribute("data-cursor") || "");
      } else if (e.target.closest("a, button")) {
        setActive(true);
        setLabel("");
      } else {
        setActive(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[70] rounded-full bg-pine dark:bg-pine-bright pointer-events-none"
        style={{ x, y, width: 6, height: 6, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[70] rounded-full border border-ink/60 dark:border-paper/60 pointer-events-none flex items-center justify-center font-mono text-[10px] uppercase tracking-wide text-ink dark:text-paper bg-paper/70 dark:bg-ink-900/70 backdrop-blur-[1px]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: active ? (label ? 72 : 44) : 24,
          height: active ? (label ? 72 : 44) : 24,
          opacity: 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {label}
      </motion.div>
    </>
  );
};

export default Cursor;
