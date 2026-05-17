import { motion } from "framer-motion";
import { GraduationCap, Briefcase, FolderGit2, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { Icon: GraduationCap, label: "Education", value: "B.E CSE" },
  { Icon: Briefcase, label: "Internship", value: "1+" },
  { Icon: FolderGit2, label: "Projects", value: "5+" },
  { Icon: Cpu, label: "Technologies", value: "10+" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="// about-me" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-10"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a <span className="text-foreground font-semibold">Computer Science Engineering</span> student
              passionate about web development, problem-solving, and building real-world applications. I enjoy
              learning modern technologies and creating responsive user-friendly applications.
            </p>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-sm font-mono text-accent mb-4">// education</h3>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-primary shadow-glow shrink-0">
                  <GraduationCap className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">B.E Computer Science Engineering</h4>
                  <p className="text-muted-foreground">Jerusalem College of Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    2022 – 2026 · <span className="text-accent font-semibold">CGPA 81%</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map(({ Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 transition-smooth hover:border-primary/50 hover:shadow-glow"
              >
                <Icon className="text-accent mb-3" size={22} />
                <div className="text-3xl font-bold text-gradient">{value}</div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
