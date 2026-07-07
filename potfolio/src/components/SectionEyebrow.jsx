import React from "react";
import RevealText from "./RevealText";

const SectionEyebrow = ({
  number,
  children,
  className = "",
  numberClassName = "text-copper dark:text-copper-bright",
}) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <RevealText
      as="p"
      className="shrink-0 font-mono uppercase tracking-[0.16em] text-xs text-slate dark:text-slate-bright"
    >
      <span className={numberClassName}>({number})</span> {children}
    </RevealText>
    <span aria-hidden="true" className="hidden sm:block h-px flex-1 bg-line dark:bg-line-dark" />
  </div>
);

export default SectionEyebrow;
