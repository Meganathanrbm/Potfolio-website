import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../Constant";
import DarkModeToggle from "./DarkModeToggle";
import Marquee from "./Marquee";

const TICKER = ["Actively looking", "Frontend Engineer", "Chennai / Bengaluru"];

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(!menuOpen && currentScrollPos > prevScrollPos && currentScrollPos > 200);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, menuOpen]);

  useEffect(() => {
    const tick = () => {
      setClock(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="app_nav top-0">
      <div
        className={`${visible ? "-translate-y-full" : "translate-y-0"} relative z-50 transition-transform duration-[400ms] ease-in-out`}
      >
        <div className="hidden sm:block bg-ink text-paper border-b border-black/20 py-1.5">
          <Marquee items={TICKER} className="text-paper/80" />
        </div>

        <nav className="relative z-40 flex items-center justify-between sm:px-10 px-6 h-16 sm:h-20 bg-paper/90 dark:bg-ink-900/90 backdrop-blur-sm border-b border-line dark:border-line-dark">
          <Link to="/" className="font-display font-semibold text-xl sm:text-2xl text-ink dark:text-paper shrink-0">
            Meganathan<span className="text-pine dark:text-pine-bright">.</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.14em]">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-ink dark:text-paper hover:text-pine dark:hover:text-pine-bright transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.14em] text-slate dark:text-slate-bright">
              IST &middot; {clock}
            </span>
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="relative w-8 h-6 flex flex-col justify-between"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 11 : 0 }}
                className="h-[1.5px] w-full bg-ink dark:bg-paper origin-center"
                transition={{ duration: 0.25 }}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="h-[1.5px] w-full bg-ink dark:bg-paper"
                transition={{ duration: 0.15 }}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -11 : 0 }}
                className="h-[1.5px] w-full bg-ink dark:bg-paper origin-center"
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-ink flex flex-col justify-center px-8 sm:px-20"
          >
            <ul>
              {navLinks.map((li, i) => (
                <motion.li
                  key={li.title}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: "easeOut" }}
                  className="border-b border-paper/10 py-4 sm:py-5"
                >
                  <a
                    href={li.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-5 group"
                  >
                    <span className="font-mono text-xs text-copper-bright">0{i + 1}</span>
                    <span className="font-display text-4xl sm:text-6xl text-paper group-hover:text-pine-bright transition-colors">
                      {li.title}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
