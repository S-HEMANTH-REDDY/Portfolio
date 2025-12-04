const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C/C++", "JavaScript", "Go", "R", "SQL"]
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS", "Bootstrap", "React", "Angular", "Node.js", "Express.js", "Spring Boot"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Redis"]
  },
  {
    title: "ML & AI",
    skills: ["TensorFlow", "PyTorch", "Keras", "NumPy", "Pandas", "YOLO", "NLP"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Git", "Jenkins", "GitHub Actions"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-16 lg:mb-20 animate-fade-in">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-8 lg:p-10 rounded-3xl shadow-medium hover:shadow-xl transition-all animate-scale-in hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-semibold mb-6 lg:mb-8 text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 lg:px-5 lg:py-2.5 bg-secondary text-secondary-foreground rounded-full text-sm lg:text-base font-medium hover:bg-muted transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
