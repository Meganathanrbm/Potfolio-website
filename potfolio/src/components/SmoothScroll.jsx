import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance = null;

// Lets other components (e.g. a GSAP ScrollTrigger section) sync to the
// same virtual scroll instead of spinning up a second, competing Lenis.
export const getLenis = () => lenisInstance;

const SmoothScroll = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    let raf;
    const tick = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href").slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -88 });
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
};

export default SmoothScroll;
