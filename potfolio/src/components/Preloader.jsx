import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setPercent(100);
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1400;

    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setPercent(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[90] bg-ink flex flex-col items-center justify-center"
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="font-display text-paper text-2xl sm:text-3xl mb-6">
            Meganathan<span className="text-copper-bright">.</span>
          </p>
          <div className="w-[220px] sm:w-[280px] h-px bg-paper/20 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-pine-bright"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="font-mono text-paper/60 text-xs mt-4 tabular-nums">
            {String(percent).padStart(3, "0")}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
