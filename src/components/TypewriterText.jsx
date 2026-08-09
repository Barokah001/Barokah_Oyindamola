import { useEffect, useState } from "react";

const TypewriterText = ({ text, speed = 45, className = "", showCursor = true }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayText(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="inline-block w-[2px] h-[1em] bg-accent align-middle ml-0.5 animate-pulse" />}
    </span>
  );
};

export default TypewriterText;