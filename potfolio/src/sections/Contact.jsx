import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiArrowRight } from "react-icons/fi";
import { client } from "../client";
import RevealText from "../components/RevealText";
import SectionEyebrow from "../components/SectionEyebrow";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const FALLBACK_LINKS = {
  github: "https://github.com/Meganathanrbm",
  linkedin: "https://linkedin.com/in/meganathanrbm",
  twitter: "#",
};

const Contact = () => {
  const formRef = useRef(null);
  const [formSubmit, setFormSubmit] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [socials, setSocials] = useState({});

  useEffect(() => {
    const query = '*[_type == "testimonials"][0]';
    client.fetch(query).then((data) => {
      if (data) setSocials(data);
    });
  }, []);

  const formSubmitted = (e) => {
    e.preventDefault();
    setError(false);

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError(true);
      return;
    }

    setSending(true);
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setSending(false);
        setFormSubmit(true);
      })
      .catch(() => {
        setSending(false);
        setError(true);
      });
  };

  return (
    <section id="Contact" className="app">
      <div className="section">
        <SectionEyebrow number="04" numberClassName="text-pine-bright">Contact</SectionEyebrow>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <RevealText
              as="h2"
              className="font-display font-bold tracking-tight text-ink dark:text-paper text-5xl sm:text-6xl lg:text-7xl leading-[0.95]"
            >
              Let's build <span className="font-serif italic font-normal text-pine-bright">something</span> good.
            </RevealText>

            <a
              href="mailto:meganathanrbm@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-base sm:text-lg text-ink dark:text-paper mt-8 border-b border-pine-bright pb-1 w-fit hover:text-pine-bright transition-colors"
            >
              meganathanrbm@gmail.com
              <span className="text-pine-bright">&#8599;</span>
            </a>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={socials.github || FALLBACK_LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-chip"
              >
                GitHub
              </a>
              <a
                href={socials.linkedin || FALLBACK_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-chip"
              >
                LinkedIn
              </a>
              <a
                href={socials.twitter || FALLBACK_LINKS.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="social-chip"
              >
                Twitter
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {!formSubmit ? (
              <form ref={formRef} onSubmit={formSubmitted} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="label">Name</label>
                    <input
                      type="text"
                      name="username"
                      className="field-input mt-2"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="emailID"
                      className="field-input mt-2"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="label">Message</label>
                  <textarea
                    placeholder="Tell me about the project…"
                    name="message"
                    rows="4"
                    className="field-input mt-2 resize-none"
                    required
                  ></textarea>
                </div>
                {error && (
                  <p className="font-mono text-xs text-copper dark:text-copper-bright">
                    Something went wrong sending that — try emailing me directly at
                    meganathanrbm@gmail.com instead.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-pine self-start disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Message"}
                  {!sending && <FiArrowRight className="w-4 h-4" />}
                </button>
              </form>
            ) : (
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-pine-bright">
                &check; Thanks — I'll reply soon
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
