import { motion } from "framer-motion";
import { FaCertificate, FaCalendarAlt } from "react-icons/fa";
import { certifications } from "../data/resumeData";

const issuerConfig = {
  "TCS ION":  { border: "border-[#00828F]/30", text: "text-[#00828F]",  iconBg: "bg-[#00828F]/10" },
  Deloitte:   { border: "border-[#E9B769]/30", text: "text-[#E9B769]",  iconBg: "bg-[#E9B769]/10" },
  TATA:       { border: "border-[#00828F]/25", text: "text-[#00828F]",  iconBg: "bg-[#00828F]/08" },
  Coursera:   { border: "border-[#E9B769]/25", text: "text-[#E9B769]",  iconBg: "bg-[#E9B769]/08" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24" style={{ backgroundColor: "var(--c-bg-alt)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00828F] font-mono text-sm uppercase tracking-widest mb-2">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "var(--c-text1)" }}>
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00828F] to-[#E9B769] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => {
            const cfg = issuerConfig[cert.issuer] || { border: "border-[#00828F]/20", text: "text-[#00828F]", iconBg: "bg-[#00828F]/10" };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`card-hover rounded-2xl p-6 flex gap-4 items-start border ${cfg.border}`}
                style={{ backgroundColor: "var(--c-card)" }}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${cfg.iconBg}`}>
                  <FaCertificate className={cfg.text} size={18} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${cfg.text}`}>{cert.issuer}</p>
                  <h3 className="font-semibold text-sm leading-snug mb-2" style={{ color: "var(--c-text1)" }}>
                    {cert.title}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full"
                    style={{ color: "var(--c-m50)", backgroundColor: "var(--c-period)" }}
                  >
                    <FaCalendarAlt size={9} />
                    {cert.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
