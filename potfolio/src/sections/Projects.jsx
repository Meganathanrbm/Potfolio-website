import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { client, urlFor } from "../client";
import RevealText from "../components/RevealText";
import SectionEyebrow from "../components/SectionEyebrow";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [projectsVisible, setProjectsVisible] = useState(true);
  const [peek, setPeek] = useState(null);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    const query2 = '*[_type == "certificates"]';

    client
      .fetch(query)
      .then((data) => setProjects(data.sort((a, b) => a.rank - b.rank)));
    client.fetch(query2).then((data) => setCertificates(data));
  }, []);

  const list = projectsVisible ? projects : certificates;

  const handleMove = (e, image) => {
    setPeek({ image, x: e.clientX, y: e.clientY });
  };

  return (
    <section className="app" id="Projects">
      <div className="section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionEyebrow number="03">Work</SectionEyebrow>
            <RevealText as="h2" className="section-title" delay={0.08}>
              Things I've shipped.
            </RevealText>
          </div>
          <div className="flex gap-8 border-b border-line dark:border-line-dark">
            <button
              onClick={() => setProjectsVisible(true)}
              type="button"
              className={`tab-btn ${projectsVisible ? "active" : ""}`}
            >
              Projects
            </button>
            <button
              onClick={() => setProjectsVisible(false)}
              type="button"
              className={`tab-btn ${!projectsVisible ? "active" : ""}`}
            >
              Certificates
            </button>
          </div>
        </div>

        <div className="mt-10 relative">
          {peek && (
            <div
              className="hidden md:block fixed z-40 w-[260px] h-[170px] rounded-sm overflow-hidden border border-line-dark shadow-[0_30px_60px_rgba(0,0,0,0.4)] pointer-events-none"
              style={{ left: peek.x + 24, top: peek.y - 90 }}
            >
              <img src={peek.image} alt="" className="w-full h-full object-cover" />
            </div>
          )}

          {list.map((item, index) => {
            const image = urlFor(projectsVisible ? item.imageurl : item.imageUrl);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                onMouseEnter={(e) => handleMove(e, image)}
                onMouseMove={(e) => handleMove(e, image)}
                onMouseLeave={() => setPeek(null)}
                data-cursor="View"
                className="group grid grid-cols-[28px_1fr_auto] sm:grid-cols-[40px_1fr_auto] items-center gap-4 sm:gap-8 py-6 sm:py-7 border-t border-line dark:border-line-dark transition-[padding,background-color] duration-300 hover:pl-3 hover:bg-pine/5 dark:hover:bg-pine-bright/5"
              >
                <span className="font-mono text-sm text-slate dark:text-slate-bright">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-semibold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-ink dark:text-paper capitalize truncate">
                  {item.name}
                </span>
                <div className="flex items-center gap-4">
                  {projectsVisible ? (
                    <>
                      <a
                        href={item.livedemo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live demo"
                        onClick={(e) => e.stopPropagation()}
                        className="link-arrow"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Code"
                        onClick={(e) => e.stopPropagation()}
                        className="link-arrow"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                    </>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="link-arrow font-mono text-xs uppercase tracking-wide"
                    >
                      View credential
                    </a>
                  )}
                  <span className="font-mono text-lg text-pine dark:text-pine-bright">&#8599;</span>
                </div>
              </motion.div>
            );
          })}
          <div className="border-t border-line dark:border-line-dark" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
