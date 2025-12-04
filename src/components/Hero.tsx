import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-7xl w-full">
        <div className="space-y-8 lg:space-y-10 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-semibold tracking-tight text-balance">
              Hemanth Reddy
              <span className="block text-muted-foreground">Sankaramaddi</span>
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl text-balance animate-fade-in-slow leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Software Engineer blending full-stack craftsmanship with machine-learning innovation—building intelligent, human-centered systems that make technology feel effortless.
          </p>

          <div className="flex flex-wrap gap-4 lg:gap-6 pt-4 animate-fade-in-slow" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 lg:px-10 lg:py-5 lg:text-lg bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 hover-lift cursor-pointer"
            >
              Get in touch
            </button>
            <a
              href="https://github.com/S-HEMANTH-REDDY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 lg:px-10 lg:py-5 lg:text-lg bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-muted transition-all hover:scale-105 hover-lift cursor-pointer"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
