import { motion } from "framer-motion";
import { ExternalLink, Github, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import bloodImg from "@/assets/project-bloodconnect.jpg";
import strokeImg from "@/assets/project-stroke.jpg";

const projects = [
  {
    title: "BloodConnect",
    image: bloodImg,
    description:
      "A full-stack blood donor management system developed using React.js and Spring Boot to connect donors and recipients efficiently.",
    features: [
      "Real-time email notifications",
      "Donor search system",
      "Responsive UI",
      "Secure database management",
    ],
    stack: ["React.js", "Spring Boot", "MySQL", "Bootstrap"],
    demo: "#",
    code: "#",
  },
  {
    title: "Brain Stroke Detection with XAI",
    image: strokeImg,
    description:
      "AI-powered brain stroke detection system using EfficientNet and Grad-CAM on CT scan images with Explainable AI visualization.",
    features: [
      "Stroke prediction from CT scans",
      "Grad-CAM heatmap visualization",
      "High accuracy deep learning model",
      "Explainable AI integration",
    ],
    stack: ["Python", "TensorFlow", "EfficientNet", "OpenCV", "Grad-CAM"],
    demo: "#",
    code: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="// featured-work" title="Projects" description="A selection of things I've built recently." />

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-3xl overflow-hidden transition-smooth hover:border-primary/50 hover:shadow-glow"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/15 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.demo} className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm transition-smooth hover:scale-105">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href={p.code} className="inline-flex items-center gap-2 glass font-semibold px-4 py-2 rounded-lg text-sm transition-smooth hover:border-primary/50">
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
