import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00828F] font-mono text-sm uppercase tracking-widest mb-2">Where I've Worked</p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "var(--c-text1)" }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00828F] to-[#E9B769] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00828F]/60 via-[#E9B769]/30 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div
                  className="absolute left-3 top-6 w-7 h-7 border-2 border-[#00828F] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--c-dot)" }}
                >
                  <FaBriefcase className="text-[#00828F]" size={12} />
                </div>

                <div
                  className="card-hover rounded-2xl p-6 border"
                  style={{ backgroundColor: "var(--c-card)", borderColor: "var(--c-border)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: "var(--c-text1)" }}>{exp.role}</h3>
                      <p className="text-[#E9B769] font-semibold text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span
                        className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full"
                        style={{ color: "var(--c-m60)", backgroundColor: "var(--c-period)" }}
                      >
                        <FaCalendarAlt size={10} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs" style={{ color: "var(--c-m40)" }}>
                        <FaMapMarkerAlt size={10} />
                        {exp.type} · {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--c-text2)" }}>
                        <span className="text-[#00828F] mt-1.5 flex-shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-xs text-[#00828F] border border-[#00828F]/25 px-3 py-1 rounded-full font-medium bg-[#00828F]/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
