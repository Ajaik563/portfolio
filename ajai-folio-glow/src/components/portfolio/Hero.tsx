import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react";
import profile from "@/assets/ajai-profile.jpg";

const ROLES = ["Software Developer", "React Developer", "Full Stack Learner"];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const role = ROLES[i % ROLES.length];
    const t = setTimeout(() => {
      if (!del) {
        setText(role.slice(0, text.length + 1));
        if (text.length + 1 === role.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(role.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i) => i + 1);
        }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const typed = useTyping();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium mb-6">
            <Sparkles size={14} className="text-accent" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Ajai</span> <span className="inline-block animate-float">👋</span>
          </h1>

          <div className="mt-5 h-9 text-xl md:text-2xl font-mono text-muted-foreground">
            <span className="text-accent">&gt;</span> {typed}
            <span className="inline-block w-[2px] h-6 bg-primary ml-1 align-middle animate-blink" />
          </div>

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Aspiring Software Developer passionate about building responsive and modern web
            applications using <span className="text-foreground font-medium">React.js</span>,{" "}
            <span className="text-foreground font-medium">JavaScript</span>, and backend technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => go("projects")}
              className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-glow transition-smooth hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 glass font-semibold px-6 py-3 rounded-xl transition-smooth hover:border-primary/50"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:ajaik2424@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="p-3 glass rounded-xl hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-smooth"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-40 rounded-full" />
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-60 blur-xl" />
            <div className="relative glass rounded-3xl p-2 shadow-elegant">
              <img
                src={profile}
                alt="Ajai K"
                width={520}
                height={520}
                className="rounded-2xl w-full max-w-md aspect-square object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 text-sm font-mono"
            >
              <span className="text-accent">{"<"}</span> React <span className="text-accent">{"/>"}</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2 text-sm font-mono"
            >
              <span className="text-primary">{}</span> Code
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
