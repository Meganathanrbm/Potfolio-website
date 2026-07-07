import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line dark:border-line-dark">
      <div className="section !py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.14em] text-slate dark:text-slate-bright">
        <p>
          Meganathan R.<span className="text-pine-bright">.</span> &mdash; Frontend Engineer
        </p>
        <p>Chennai / Bengaluru &middot; IST</p>
        <p>&copy; {year} &middot; Built with care</p>
      </div>
    </footer>
  );
};

export default Footer;
