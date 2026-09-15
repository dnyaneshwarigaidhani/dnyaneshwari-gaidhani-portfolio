import { motion } from "framer-motion";
import { skills } from "../data/resumeData";

const categoryConfig = {
  "Programming Languages":  { pill: "bg-[#00828F]/10 text-[#00828F] border-[#00828F]/25",   icon: "💻" },
  "Frameworks & Libraries": { pill: "bg-[#E9B769]/10 text-[#E9B769] border-[#E9B769]/25",   icon: "⚙️" },
  Databases:                { pill: "bg-[#00828F]/08 text-[#00828F] border-[#00828F]/20",    icon: "🗄️" },
  "Tools & Platforms":      { pill: "bg-[#E9B769]/10 text-[#E9B769] border-[#E9B769]/20",   icon: "🛠️" },
  "Soft Skills":            { pill: "bg-[#00828F]/08 text-[#00828F] border-[#00828F]/18",    icon: "🤝" },
  Languages:                { pill: "bg-[#E9B769]/08 text-[#E9B769] border-[#E9B769]/18",    icon: "🌐" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00828F] font-mono text-sm uppercase tracking-widest mb-2">What I Know</p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "var(--c-text1)" }}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00828F] to-[#E9B769] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => {
            const cfg = categoryConfig[category] || { pill: "bg-[#00828F]/10 text-[#00828F] border-[#00828F]/20", icon: "🔹" };
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover rounded-2xl p-6 border"
                style={{ backgroundColor: "var(--c-card)", borderColor: "var(--c-border)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cfg.icon}</span>
                  <h3 className="font-semibold text-sm" style={{ color: "var(--c-text1)" }}>{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.05 + j * 0.04 }}
                      className={`text-xs border px-3 py-1.5 rounded-full font-medium ${cfg.pill}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
