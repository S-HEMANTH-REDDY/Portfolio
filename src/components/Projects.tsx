import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "QuickChat",
    description: "Scalable instant messaging platform with Go backend, React frontend, and Redis Pub/Sub. Supports real-time messaging with <200ms latency.",
    highlights: [
      "Real-time WebSocket communication",
      "Redis integration for 35% faster queries",
      "SSR implementation for improved reliability"
    ],
    tech: ["Go", "React", "Redis", "Spring Boot", "WebSocket"]
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with payment integration. Reduced checkout time by 20% and bounce rates by 18%.",
    highlights: [
      "Stripe/PayPal payment integration",
      "Responsive UI with Material-UI",
      "RESTful API with MongoDB backend"
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Spring Boot"]
  },
  {
    title: "Plant Disease Detector",
    description: "CNN-based plant disease detection system achieving 98% accuracy on 20,000 images with real-time processing.",
    highlights: [
      "98% detection accuracy",
      "30% faster image processing",
      "TensorFlow Serving deployment on GCP"
    ],
    tech: ["TensorFlow", "Python", "FastAPI", "React", "GCP"]
  },
  {
    title: "GeoVision Classifier",
    description: "Deep learning image classifier deployed on Kubernetes with scalable infrastructure on Google Cloud.",
    highlights: [
      "Containerized with Docker",
      "Kubernetes orchestration",
      "Cloud-native deployment"
    ],
    tech: ["Deep Learning", "Docker", "Kubernetes", "GCP"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-16 lg:mb-20 animate-fade-in">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-8 lg:p-10 rounded-3xl shadow-medium hover:shadow-xl transition-all group animate-scale-in hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 lg:space-y-3 pt-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-sm lg:text-base text-muted-foreground">
                      <span className="text-accent">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 lg:gap-3 pt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 lg:px-4 lg:py-2 bg-secondary text-secondary-foreground rounded-full text-xs lg:text-sm font-medium"
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

export default Projects;
