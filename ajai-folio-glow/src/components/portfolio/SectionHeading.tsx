import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto mb-14"
    >
      <div className="inline-block glass rounded-full px-3 py-1 text-xs font-mono text-accent mb-4">
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </motion.div>
  );
}
