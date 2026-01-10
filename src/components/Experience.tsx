import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Research Assistant",
    organization: "University of Florida, IFAS",
    location: "Gainesville, FL",
    period: "January 2025 – December 2025",
    highlights: [
      "Built modular backend pipelines in Python and Java (Spring Boot) with PyTorch, Docker, and SQL to ingest and preprocess time-series image and sensor data; optimized storage enabling CNN + ConvLSTM inference and a 15% accuracy gain",
      "Designed and implemented a full-stack monitoring dashboard with Flask (REST API), React, SQL and a Java (Spring Boot) service for data aggregation, featuring interactive graphs for daily/weekly insights",
      "Configured CI/CD pipelines with Jenkins and GitHub Actions for Python and Java services, reducing pipeline runtime 30% and ensuring reproducible deployments across environments"
    ],
    tech: ["Python", "Java", "PyTorch", "CUDA", "CNN", "ConvLSTM", "Flask", "SQL", "Docker", "Raspberry Pi", "Git", "JavaScript"]
  },

];

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-16 lg:mb-20 animate-fade-in">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-8 md:p-10 lg:p-12 rounded-3xl shadow-medium hover:shadow-xl transition-all animate-scale-in hover-lift cursor-pointer border-l-4 border-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6 lg:space-y-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold mb-2 text-foreground">
                      {exp.title}
                    </h3>
                    <div className="text-base sm:text-lg lg:text-xl text-accent font-semibold">
                      {exp.organization}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-sm lg:text-base text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 pt-2">
                  {exp.highlights.map((highlight, i) => (
                    <div 
                      key={i} 
                      className="p-4 lg:p-5 bg-secondary/30 rounded-xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed hover:bg-secondary/50 transition-colors"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 lg:gap-3 pt-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 lg:px-5 lg:py-2.5 bg-accent/10 text-accent rounded-full text-sm lg:text-base font-semibold border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
