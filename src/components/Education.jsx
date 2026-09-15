import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { education } from "../data/resumeData";

export default function Education() {
  return (
    <section id="education" className="py-24 relative" style={{ backgroundColor: "var(--c-bg-alt)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00828F] font-mono text-sm uppercase tracking-widest mb-2">Academic Background</p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "var(--c-text1)" }}>
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00828F] to-[#E9B769] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00828F]/60 via-[#E9B769]/30 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex flex-col sm:flex-row gap-6 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div
                  className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 border-2 border-[#00828F] rounded-full items-center justify-center z-10"
                  style={{ backgroundColor: "var(--c-dot)" }}
                >
                  <FaGraduationCap className="text-[#00828F]" size={16} />
                </div>

                <div className={`sm:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "sm:mr-auto sm:pr-6" : "sm:ml-auto sm:pl-6"}`}>
                  <div
                    className="card-hover rounded-2xl p-6 border"
                    style={{
                      backgroundColor: "var(--c-card)",
                      borderColor: "var(--c-border)",
                    }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="sm:hidden w-8 h-8 bg-[#00828F]/15 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaGraduationCap className="text-[#00828F]" size={14} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base sm:text-lg leading-tight" style={{ color: "var(--c-text1)" }}>
                          {edu.institution}
                        </h3>
                        <div className="flex items-center gap-1 mt-1 text-xs" style={{ color: "var(--c-m50)" }}>
                          <FaMapMarkerAlt size={10} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#00828F] text-sm font-medium mb-3">{edu.degree}</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full"
                        style={{ color: "var(--c-m60)", backgroundColor: "var(--c-period)" }}
                      >
                        <FaCalendarAlt size={10} />
                        {edu.period}
                      </span>
                      {edu.score && (
                        <span className="inline-flex items-center text-xs text-[#E9B769] bg-[#E9B769]/10 border border-[#E9B769]/25 px-2.5 py-1 rounded-full font-semibold">
                          {edu.score}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
