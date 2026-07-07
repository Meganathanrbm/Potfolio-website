import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../client";
import SectionEyebrow from "../components/SectionEyebrow";

const TIMELINE = [
  {
    role: "Software Engineer, Frontend (IC1)",
    place: "Growfin, Chennai",
    period: "Sep 2024 — Jul 2026",
  },
  {
    role: "Full Stack Developer (Intern)",
    place: "Grafixui, Avadi, Chennai",
    period: "Mar 2024 — Jun 2024",
  },
  {
    role: "MCA (CGPA 8.5/10)",
    place: "Presidency College, Chennai",
    period: "Aug 2023 — Apr 2025",
  },
  {
    role: "B.Sc. Computer Science",
    place: "Muthurangam Govt. Arts College, Vellore",
    period: "2020 — 2023",
  },
  {
    role: "Higher Secondary",
    place: "St. Joseph's Higher Secondary School",
    period: "2018 — 2020",
  },
];

const Profile = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => setSkills(data));
  }, []);

  return (
    <section id="Profile" className="app bg-panel dark:bg-panel-dark">
      <div className="section">
        <SectionEyebrow number="02">Profile — Experience &amp; Capabilities</SectionEyebrow>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 mt-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate dark:text-slate-bright mb-2">
              Experience
            </p>
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-5 py-6 border-t border-line dark:border-line-dark transition-[padding] duration-300 hover:pl-2"
              >
                <span className="font-mono text-xs text-pine dark:text-pine-bright pt-0.5">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-lg text-ink dark:text-paper">
                    {item.role}
                  </h3>
                  <p className="text-slate dark:text-slate-bright text-sm mt-1">{item.place}</p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-line dark:border-line-dark" />
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate dark:text-slate-bright mb-2">
              Capabilities
            </p>
            {skills.map((item, i) => (
              <div key={i} className="py-5 border-t border-line dark:border-line-dark first:border-t-0">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-pine dark:bg-pine-bright" />
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink dark:text-paper">
                    {item.title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: j * 0.03 }}
                      className="chip"
                    >
                      {skill?.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
