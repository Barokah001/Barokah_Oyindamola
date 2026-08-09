import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center bg-paper pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 mb-6 font-mono text-xs text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <TypewriterText text="// available for new projects" speed={35} showCursor={false} />
          </div>

          <h1 className="font-display font-semibold text-5xl md:text-6xl text-navy-950 leading-[1.08] mb-6">
            Barokah
            <br />
            Oyindamola
          </h1>

          <p className="text-lg text-muted mb-4 font-medium">
            Frontend Developer
          </p>

          <p className="text-base text-muted leading-relaxed mb-10 max-w-md">
            I build responsive, accessible web interfaces with React,
            Next.js and TypeScript — with a focus on clean code, considered
            detail and interfaces that hold up under real use.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-950 text-white text-sm font-medium hover:bg-navy-800 transition-colors"
            >
              View my work
              <ArrowRight size={16} />
            </button>
            <a
              href="https://drive.google.com/file/d/1iOw6e4kZKq19BQHLWCOVqxfjBijLAu7i/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center gap-2 px-6 py-3.5 border border-navy-950 text-navy-950 text-sm font-medium hover:bg-navy-950 hover:text-white transition-colors">
                <Download size={16} />
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Code editor window */}
        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="border border-line shadow-lift">
            {/* window chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-line">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full border border-muted/40" />
                <span className="w-2.5 h-2.5 rounded-full border border-muted/40" />
                <span className="w-2.5 h-2.5 rounded-full border border-muted/40" />
              </div>
              <span className="font-mono text-xs text-muted">developer.ts</span>
              <span className="w-10" aria-hidden="true" />
            </div>

            {/* code body */}
            <div className="bg-navy-950 px-6 py-8 font-mono text-[13px] leading-7 overflow-x-auto">
              <pre className="whitespace-pre">
<code>
<span className="text-muted/70">01</span>{"  "}<span className="text-[#7C93B8]">const</span> <span className="text-white">developer</span> <span className="text-[#7C93B8]">=</span> {"{"}
{"\n"}<span className="text-muted/70">02</span>{"    "}name: <span className="text-accent">'Barokah Oyindamola'</span>,
{"\n"}<span className="text-muted/70">03</span>{"    "}role: <span className="text-accent">'Frontend Developer'</span>,
{"\n"}<span className="text-muted/70">04</span>{"    "}stack: [<span className="text-accent">'React'</span>, <span className="text-accent">'Next.js'</span>, <span className="text-accent">'TypeScript'</span>],
{"\n"}<span className="text-muted/70">05</span>{"    "}focus: <span className="text-accent">'clean code, considered UI'</span>,
{"\n"}<span className="text-muted/70">06</span>{"    "}available: <span className="text-[#7C93B8]">true</span>,
{"\n"}<span className="text-muted/70">07</span>{"  "}{"};"}
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;