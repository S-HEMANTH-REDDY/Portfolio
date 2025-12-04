import { Mail, Linkedin, Github, MapPin, Lightbulb } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-8 lg:mb-10 animate-fade-in">
          Get In Touch
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 lg:mb-16 animate-fade-in-slow leading-relaxed" style={{ animationDelay: "0.1s" }}>
          I believe the best ideas bloom when shared—so if you've got a spark, a concept, or even a wild thought, I'd love to hear it.
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <a
            href="mailto:hemanth1729hr@gmail.com"
            className="glass-card p-6 lg:p-8 rounded-2xl shadow-medium hover:shadow-xl transition-all group animate-scale-in hover-lift cursor-pointer"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="p-4 lg:p-5 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-medium text-base lg:text-lg">Email</div>
                <div className="text-sm lg:text-base text-muted-foreground">hemanth1729hr@gmail.com</div>
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/hemanth-reddy-uf/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 lg:p-8 rounded-2xl shadow-medium hover:shadow-xl transition-all group animate-scale-in hover-lift cursor-pointer"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="p-4 lg:p-5 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                <Linkedin className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-medium text-base lg:text-lg">LinkedIn</div>
                <div className="text-sm lg:text-base text-muted-foreground">Connect with me</div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/S-HEMANTH-REDDY"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 lg:p-8 rounded-2xl shadow-medium hover:shadow-xl transition-all group animate-scale-in hover-lift cursor-pointer"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="p-4 lg:p-5 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                <Github className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-medium text-base lg:text-lg">GitHub</div>
                <div className="text-sm lg:text-base text-muted-foreground">View my code</div>
              </div>
            </div>
          </a>

          <div
            className="glass-card p-6 lg:p-8 rounded-2xl shadow-medium animate-scale-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="p-4 lg:p-5 bg-accent/10 rounded-2xl">
                <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-medium text-base lg:text-lg">Location</div>
                <div className="text-sm lg:text-base text-muted-foreground">Gainesville, FL</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 lg:pt-10 animate-fade-in-slow" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://s-hemanth-reddy.github.io/IDEA_Flow/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 lg:px-10 lg:py-5 lg:text-lg bg-accent/10 hover:bg-accent/20 text-accent rounded-full font-medium transition-all hover:scale-105 hover-lift cursor-pointer"
          >
            <Lightbulb className="w-5 h-5 lg:w-6 lg:h-6" />
            Share Your Ideas
          </a>
        </div>

        <div className="text-sm text-muted-foreground animate-fade-in-slow mt-12" style={{ animationDelay: "0.7s" }}>
          <p>© 2025 Hemanth Reddy Sankaramaddi. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
