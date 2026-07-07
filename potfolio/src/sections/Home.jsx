import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { client } from "../client";
import images from "../Constant/images";
import MagneticLink from "../components/MagneticLink";
import Marquee from "../components/Marquee";
import TiltCard from "../components/TiltCard";

const TICKER = [
  "React","HTML5","CSS3","Javascript", "TypeScript", "Next.js", "GraphQL", "Node.js", "Tailwind CSS", "MongoDB", "Redux",
];

const BADGES = [
  { label: "Open to Work", delay: 0 },
  { label: "Fast Turnaround", delay: 0.8 },
  { label: "Full-Stack", delay: 1.2 },
];

const DEFAULT_BIO =
  "I'm Meganathan R. — a frontend engineer shipping end-to-end products from Chennai / Bengaluru. Sturdy code, quietly delightful UI.";

const REVEAL_DELAY = 1.85;

const lineVariants = {
  hidden: { y: "110%" },
  show: { y: "0%" },
};

function Home() {
  const [testimonials, setTestimonials] = useState({});
  const heroRef = useRef(null);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0.96]);
  const marqueeY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -24]);

  useEffect(() => {
    const query = '*[_type == "testimonials"][0]';
    client.fetch(query).then((data) => {
      if (data) setTestimonials(data);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="pt-[64px] sm:pt-[112px] app min-h-screen flex flex-col relative overflow-hidden"
      id="Home"
    >
      {/* Layered dark-mode backdrop: a vertical tone shift (not flat black) plus a single
          soft accent glow behind the headline. Scoped to this section only — the rest of
          the site keeps the flat ink-900 surface, so the hero reads as the "premium" layer. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:bg-gradient-to-b dark:from-[#12151a] dark:via-ink-900 dark:to-ink-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[8%] -translate-x-1/2 w-[70vw] max-w-[820px] h-[380px] opacity-0 dark:opacity-100 blur-[110px] transition-opacity duration-700 bg-[radial-gradient(circle,rgba(224,130,76,0.28)_0%,rgba(224,130,76,0)_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <motion.div
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        className="section !pb-0 flex-1 flex flex-col justify-center relative z-10"
      >
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-14 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: REVEAL_DELAY, ease: "easeOut" }}
              className="inline-flex items-center gap-3 font-mono uppercase tracking-[0.24em] text-xs text-pine dark:text-pine-bright"
            >
              <span className="w-2 h-2 rounded-full bg-pine dark:bg-pine-bright animate-pulse" />
              Actively looking &middot; 2026
            </motion.div>

            <h1 className="font-display font-semibold tracking-tight text-ink dark:text-paper text-[12vw] sm:text-[7vw] lg:text-[5.4vw] leading-[0.96] mt-5">
              <span className="reveal-line">
                <motion.span
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  transition={{ duration: 0.8, delay: REVEAL_DELAY + 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  I build interfaces
                </motion.span>
              </span>
              <span className="reveal-line">
                <motion.span
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  transition={{ duration: 0.8, delay: REVEAL_DELAY + 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  that turn <span className="accent-word">users</span>
                </motion.span>
              </span>
              <span className="reveal-line">
                <motion.span
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  transition={{ duration: 0.8, delay: REVEAL_DELAY + 0.34, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  into customers.
                </motion.span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: REVEAL_DELAY + 0.6, ease: "easeOut" }}
              className="flex flex-wrap items-end justify-between gap-8 mt-10"
            >
              <p className="para !mt-0 max-w-md">
                {testimonials.feedback || DEFAULT_BIO}
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticLink href="#Projects" data-cursor="" className="btn-primary">
                  View Projects
                </MagneticLink>
                <MagneticLink
                  href={testimonials.resume || "#Contact"}
                  target={testimonials.resume ? "_blank" : undefined}
                  rel="noreferrer"
                  data-cursor=""
                  className="btn-outline"
                >
                  Download Resume
                </MagneticLink>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: REVEAL_DELAY + 0.3, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[340px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-sm border border-pine dark:border-pine-bright"
              />
              <TiltCard className="relative rounded-sm overflow-hidden border border-line dark:border-line-dark shadow-[0_40px_80px_-24px_rgba(0,0,0,0.35)] dark:shadow-[0_50px_90px_-20px_rgba(0,0,0,0.6)]">
                <img
                  src={images.profile01}
                  alt="Meganathan R."
                  draggable="false"
                  className="block w-full h-auto grayscale contrast-[1.06] brightness-[.96] select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pine/60 dark:to-pine-bright/30 mix-blend-soft-light pointer-events-none" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white bg-black/40 px-2.5 py-1.5 rounded-sm backdrop-blur-[2px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-pine-bright" />
                  Online
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white">
                  Meganathan R. &mdash; FE Engineer
                </div>
              </TiltCard>

              {BADGES.map((badge, i) => (
                <span
                  key={badge.label}
                  style={{ animationDelay: `${badge.delay}s` }}
                  className={`hidden sm:inline-flex absolute items-center gap-1.5 font-mono text-xs text-ink dark:text-paper bg-paper dark:bg-panel-dark border border-line dark:border-line-dark rounded-sm px-3 py-2 shadow-lg animate-floaty ${
                    i === 0
                      ? "-top-4 -right-4"
                      : i === 1
                      ? "top-1/3 -left-8"
                      : "-bottom-4 right-6"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      i === 1 ? "bg-copper dark:bg-copper-bright" : "bg-pine dark:bg-pine-bright"
                    }`}
                  />
                  {badge.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue: reinforces there's more below without competing with the headline.
            Hidden on small screens where the marquee ticker already anchors the fold. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: REVEAL_DELAY + 1.1 }}
          className="hidden sm:flex absolute bottom-0 right-6 lg:right-10 flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate dark:text-slate-bright [writing-mode:vertical-lr]">
            Scroll
          </span>
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? {} : { y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-copper dark:from-copper-bright to-transparent"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: REVEAL_DELAY + 0.9 }}
        style={{ y: marqueeY }}
        className="mt-16 border-t border-line dark:border-line-dark bg-ink py-4"
      >
        <Marquee items={TICKER} className="text-paper/70" />
      </motion.div>
    </section>
  );
}

export default Home;
