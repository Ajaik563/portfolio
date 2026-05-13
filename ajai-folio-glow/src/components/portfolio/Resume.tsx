import { motion } from "framer-motion";
import { Download, Award, Briefcase, GraduationCap, FileText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const timeline = [
  {
    Icon: GraduationCap,
    title: "B.E Computer Science Engineering",
    place: "Jerusalem College of Engineering",
    date: "2022 – 2026",
    detail: "CGPA 81%",
  },
  {
    Icon: Briefcase,
    title: "Software Development Intern",
    place: "Internship Experience",
    date: "2024",
    detail: "Built responsive web applications using React and REST APIs.",
  },
];

const certs = [
  "HTML CSS JavaScript – Udemy",
  "Python – GUVI",
];

export function Resume() {
  return (
    <section id="resume" className="relative py-24">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="// resume" title="Experience & Resume" />

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 flex flex-col"
          >
            <div className="p-3 rounded-xl bg-gradient-primary shadow-glow w-fit mb-4">
              <FileText className="text-primary-foreground" size={22} />
            </div>
            <h3 className="text-xl font-bold mb-2">Resume Preview</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Get a complete overview of my background, skills and experience.
            </p>
            <div className="glass rounded-xl p-4 mb-6 flex-1 font-mono text-xs text-muted-foreground space-y-2">
              <div><span className="text-accent">name:</span> Ajai K</div>
              <div><span className="text-accent">role:</span> Software Developer</div>
              <div><span className="text-accent">edu:</span> B.E CSE, JCE</div>
              <div><span className="text-accent">stack:</span> React, JS, Java, Python</div>
              <div><span className="text-accent">email:</span> ajaik2424@gmail.com</div>
            </div>
            <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-5 py-3 rounded-xl shadow-glow transition-smooth hover:scale-[1.02]">
              <Download size={18} /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 glass rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold mb-6">Timeline</h3>
            <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {timeline.map((t) => (
                <div key={t.title} className="relative">
                  <div className="absolute -left-8 top-0 p-1.5 rounded-full bg-gradient-primary shadow-glow">
                    <t.Icon size={14} className="text-primary-foreground" />
                  </div>
                  <div className="text-xs font-mono text-accent">{t.date}</div>
                  <h4 className="font-semibold text-lg mt-1">{t.title}</h4>
                  <p className="text-sm text-muted-foreground">{t.place}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-sm font-mono text-accent mb-4">// certifications</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {certs.map((c) => (
                  <div key={c} className="flex items-center gap-3 glass rounded-xl p-4">
                    <Award className="text-accent shrink-0" size={18} />
                    <span className="text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
