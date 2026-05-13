import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  Code2, Database, Server, Wrench, Languages, Sparkles,
  Github, FileCode, Braces, Boxes, Terminal, Brain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Skill = { name: string; icon: LucideIcon; color: string };
type Category = { title: string; icon: LucideIcon; skills: Skill[] };

const categories: Category[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML", icon: FileCode, color: "text-orange-400" },
      { name: "CSS", icon: Braces, color: "text-blue-400" },
      { name: "React.js", icon: Boxes, color: "text-cyan-400" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server, color: "text-green-400" },
      { name: "Express.js", icon: Server, color: "text-foreground" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: Database, color: "text-emerald-400" },
      { name: "MySQL", icon: Database, color: "text-sky-400" },
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: [
      { name: "Python", icon: Code2, color: "text-yellow-300" },
      { name: "JavaScript", icon: Braces, color: "text-yellow-400" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: Github, color: "text-orange-400" },
      { name: "GitHub", icon: Github, color: "text-foreground" },
      { name: "Postman", icon: Terminal, color: "text-orange-400" },
    ],
  },
  {
    title: "AI Tools",
    icon: Brain,
    skills: [
      { name: "ChatGPT", icon: Sparkles, color: "text-emerald-400" },
      { name: "Claude AI", icon: Sparkles, color: "text-amber-400" },
      { name: "Prompt Engineering", icon: Brain, color: "text-violet-400" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="// my-stack"
          title="Skills & Technologies"
          description="The technologies I use to design, build, and scale modern applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, i) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group glass rounded-2xl p-6 transition-smooth hover:border-primary/50 hover:shadow-glow"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <CatIcon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {cat.skills.length} {cat.skills.length === 1 ? "skill" : "skills"}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, j) => {
                    const Icon = s.icon;
                    return (
                      <motion.div
                        key={s.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + j * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-border/60 hover:border-primary/40 transition-smooth"
                      >
                        <Icon className={`w-3.5 h-3.5 ${s.color}`} />
                        <span className="text-sm font-medium">{s.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
