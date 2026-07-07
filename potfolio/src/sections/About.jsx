import React from "react";
import { motion } from "framer-motion";
import RevealText from "../components/RevealText";
import SectionEyebrow from "../components/SectionEyebrow";
import CountUp from "../components/CountUp";

const SPECS = [
  { label: "Location", value: "Chennai · Bengaluru" },
  { label: "Focus", value: "Frontend Engineering (React/TypeScript)" },
  { label: "Education", value: "MCA, Presidency College" },
  { label: "Availability", value: "Actively looking" },
];

const STATS = [
  { num: "2+", label: "Years Building" },
  { num: "15+", label: "Projects Shipped" },
  { num: "12", label: "OSS Releases" },
  { num: "∞", label: "Coffees" },
];

const About = () => {
  return (
    <section className="app" id="About">
      <div className="section">
        <SectionEyebrow number="01">About</SectionEyebrow>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-16 items-end mt-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <RevealText
              as="p"
              delay={0.08}
              className="font-display font-medium text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.16] tracking-tight text-ink dark:text-paper"
            >
              A passionate builder who thrives on shipping{" "}
              <span className="accent-word">end-to-end products</span> —
              sustainable, scalable systems that create real{" "}
              <span className="font-serif italic font-normal text-copper dark:text-copper-bright">
                impact
              </span>
              .
            </RevealText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-x-6 gap-y-8 font-mono"
          >
            {STATS.map((s) => (
              <div key={s.label} className="border-t border-line dark:border-line-dark pt-4">
                <div className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink dark:text-paper">
                  <CountUp value={s.num} />
                </div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-slate dark:text-slate-bright mt-1.5">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 mt-12 border-t border-line dark:border-line-dark pt-8">
          {SPECS.map((spec) => (
            <div key={spec.label}>
              <dt className="font-mono text-xs uppercase tracking-wide text-slate dark:text-slate-bright">
                {spec.label}
              </dt>
              <dd className="font-display text-ink dark:text-paper text-base mt-1">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
