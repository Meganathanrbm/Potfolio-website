import React from "react";

const Marquee = ({ items, className = "" }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="marquee-track inline-flex">
        {[0, 1].map((copy) => (
          <div key={copy} className="inline-flex">
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} className="inline-flex items-center font-mono text-sm uppercase tracking-wide px-6">
                {item}
                <span className="ml-6 text-copper dark:text-copper-bright">&bull;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
