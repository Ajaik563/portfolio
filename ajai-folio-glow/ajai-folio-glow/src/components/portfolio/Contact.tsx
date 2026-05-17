import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="// get-in-touch" title="Let's Connect" description="Have a project, role or idea? I'd love to hear from you." />

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass rounded-3xl p-8 flex flex-col gap-5"
          >
            <h3 className="text-xl font-bold">Contact Info</h3>
            {[
              { Icon: Mail, label: "Email", value: "ajaik2424@gmail.com", href: "mailto:ajaik2424@gmail.com" },
              { Icon: Phone, label: "Phone", value: "+91 7200154450", href: "tel:+917200154450" },
              { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ajai-k", href: "https://linkedin.com" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 glass rounded-2xl p-4 transition-smooth hover:border-primary/50 hover:-translate-y-0.5"
              >
                <div className="p-2.5 rounded-xl bg-gradient-primary shadow-glow shrink-0">
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="font-medium truncate group-hover:text-primary transition-colors">{value}</div>
                </div>
              </a>
            ))}
            <div className="mt-auto flex gap-3 pt-4">
              {[Github, Linkedin, Mail].map((I, i) => (
                <a key={i} href="#" className="p-3 glass rounded-xl hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-smooth">
                  <I size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 glass rounded-3xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" id="name" placeholder="Your name" />
              <Field label="Email" id="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="msg" className="text-xs font-mono text-accent">// message</label>
              <textarea
                id="msg"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="mt-2 w-full bg-input/50 rounded-xl px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none transition-smooth"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-glow transition-smooth hover:scale-[1.02]"
            >
              <Send size={16} />
              {sent ? "Message Sent ✓" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-mono text-accent">// {label.toLowerCase()}</label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full bg-input/50 rounded-xl px-4 py-3 text-sm border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth"
      />
    </div>
  );
}
