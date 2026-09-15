import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";
import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ backgroundColor: "var(--c-bg-alt)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#00828F] font-mono text-sm uppercase tracking-widest mb-2">What I've Built</p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "var(--c-text1)" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00828F] to-[#E9B769] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-hover group rounded-2xl overflow-hidden flex flex-col border"
              style={{ backgroundColor: "var(--c-card)", borderColor: "var(--c-border)" }}
            >
              {/* Accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#00828F] to-[#E9B769]" />

              <div className="p-7 flex flex-col flex-1">
                {/* Header */}
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div>
                    <h3
                      className="font-bold text-xl leading-tight group-hover:text-[#00828F] transition-colors"
                      style={{ color: "var(--c-text1)" }}
                    >
                      {project.name}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--c-m50)" }}>{project.tagline}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.demo && (
                      <a
                        href={project.demo} target="_blank" rel="noreferrer" title="Live Demo"
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#00828F]/20 hover:border-[#00828F]/50 hover:text-[#00828F] transition-all"
                        style={{ backgroundColor: "var(--c-period)", color: "var(--c-m50)" }}
                      >
                        <FaExternalLinkAlt size={13} />
                      </a>
                    )}
                    <a
                      href={project.github} target="_blank" rel="noreferrer" title="GitHub"
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#00828F]/20 hover:border-[#00828F]/50 hover:text-[#00828F] transition-all"
                      style={{ backgroundColor: "var(--c-period)", color: "var(--c-m50)" }}
                    >
                      <FaGithub size={14} />
                    </a>
                  </div>
                </div>

                {/* Role & Period */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-[#E9B769] bg-[#E9B769]/10 border border-[#E9B769]/25 px-2.5 py-1 rounded-full">
                    {project.role}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full"
                    style={{ color: "var(--c-m50)", backgroundColor: "var(--c-period)" }}
                  >
                    <FaCalendarAlt size={9} /> {project.period}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--c-text2)" }}>
                  {project.description}
                </p>

                <ul className="space-y-2 mb-5 flex-1">
                  {project.points.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--c-m60)" }}>
                      <span className="text-[#00828F] mt-1 flex-shrink-0 text-xs">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t" style={{ borderColor: "var(--c-border-th)" }}>
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: "var(--c-tech)", color: "var(--c-text2)" }}
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
    </section>
  );
}
