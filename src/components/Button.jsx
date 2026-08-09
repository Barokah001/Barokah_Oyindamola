import React from "react";

/**
 * variant: "primary" | "outline"
 */
const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";

const variants = {
  primary: "bg-navy-950 text-white hover:bg-navy-800",
  outline: "border border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white",
  ghost: "text-navy-950 hover:text-accent",
};

const Button = ({ name, children, variant = "primary", className = "", ...props }) => {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children ?? name}
    </button>
  );
};

export default Button;