import profileImage from "@/assets/profile-placeholder.png";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-6 lg:space-y-8 animate-slide-in-left">
            <div className="w-48 h-48 lg:w-56 lg:h-56 mx-auto md:mx-0 mb-8 rounded-full overflow-hidden shadow-medium">
              <img 
                src={profileImage} 
                alt="Hemanth Reddy Sankaramaddi" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight">
              About Me
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              MS in Computer Science student at University of Florida with a passion for transforming 
              complex ideas into clean, scalable solutions—whether it's architecting end-to-end applications, 
              optimizing algorithms, or designing intuitive user experiences.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Currently working as a Research Assistant at UF IFAS, developing ML pipelines and full-stack 
              monitoring solutions. My journey includes internship experience at DRDO working on computational 
              geometry and aerial object detection. Always learning, always building.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:gap-8 animate-slide-in-right">
            <div className="glass-card p-6 lg:p-8 rounded-2xl shadow-medium space-y-2 hover:scale-105 transition-all cursor-pointer">
              <div className="text-3xl lg:text-5xl font-display font-semibold text-accent">MS</div>
              <div className="text-sm lg:text-base text-muted-foreground">Computer Science</div>
              <div className="text-xs lg:text-sm text-muted-foreground/70">University of Florida</div>
            </div>
            <div className="glass-card p-6 lg:p-8 rounded-2xl shadow-medium space-y-2 hover:scale-105 transition-all cursor-pointer">
              <div className="text-3xl lg:text-5xl font-display font-semibold text-accent">15+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Technologies</div>
              <div className="text-xs lg:text-sm text-muted-foreground/70">Full-stack & ML</div>
            </div>
            <div className="glass-card p-6 lg:p-8 rounded-2xl shadow-medium space-y-2 hover:scale-105 transition-all cursor-pointer">
              <div className="text-3xl lg:text-5xl font-display font-semibold text-accent">3</div>
              <div className="text-sm lg:text-base text-muted-foreground">Industry Roles</div>
              <div className="text-xs lg:text-sm text-muted-foreground/70">Research & Defense</div>
            </div>
            <div className="glass-card p-6 lg:p-8 rounded-2xl shadow-medium space-y-2 hover:scale-105 transition-all cursor-pointer">
              <div className="text-3xl lg:text-5xl font-display font-semibold text-accent">4+</div>
              <div className="text-sm lg:text-base text-muted-foreground">Major Projects</div>
              <div className="text-xs lg:text-sm text-muted-foreground/70">Full-stack & AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
