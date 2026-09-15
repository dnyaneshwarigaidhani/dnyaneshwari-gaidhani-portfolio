import { motion } from "framer-motion";
import { FaUser, FaGraduationCap, FaCode } from "react-icons/fa";
import { personalInfo } from "../data/resumeData";

const highlights = [
  { icon: FaGraduationCap, label: "CGPA", value: "8.41 / 10" },
  { icon: FaCode,          label: "Internships", value: "2 Completed" },
  { icon: FaUser,          label: "Projects", value: "2 Built" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-[#00828F] font-mono text-sm uppercase tracking-widest mb-2">Get To Know Me</p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "var(--c-text1)" }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00828F] to-[#E9B769] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Objective card with hover glow */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.div
              whileHover={{
                scale: 1.015,
                boxShadow: "0 0 50px rgba(0,130,143,0.22), 0 0 100px rgba(233,183,105,0.08)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00828F]/20 to-[#E9B769]/10 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl p-8 border" style={{ backgroundColor: "var(--c-card)", borderColor: "var(--c-border)" }}>
                <p className="leading-relaxed text-base" style={{ color: "var(--c-text2)" }}>
                  {personalInfo.objective}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: stats + info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2 }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 28px rgba(0,130,143,0.35), 0 0 60px rgba(0,130,143,0.12)",
                    borderColor: "rgba(0,130,143,0.55)",
                  }}
                  style={{ backgroundColor: "var(--c-card)", borderColor: "var(--c-border)" }}
                  className="rounded-xl p-4 text-center border cursor-default"
                >
                  <motion.div
                    className="flex justify-center mb-2"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="text-[#00828F]" size={20} />
                  </motion.div>
                  <div className="font-bold text-lg" style={{ color: "var(--c-text1)" }}>{item.value}</div>
                  <div className="text-xs" style={{ color: "var(--c-m50)" }}>{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quick info card */}
            <motion.div
              whileHover={{ boxShadow: "0 0 30px rgba(0,130,143,0.18)", borderColor: "rgba(0,130,143,0.45)" }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-6 space-y-3 border"
              style={{ backgroundColor: "var(--c-card)", borderColor: "var(--c-border)" }}
            >
              {[
                { label: "Name", value: personalInfo.name },
                { label: "Location", value: personalInfo.location },
                { label: "Email", value: personalInfo.email },
                { label: "Availability", value: "Open to Opportunities ✅" },
              ].map((info, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex gap-4"
                >
                  <span className="text-[#00828F] font-semibold min-w-[100px] text-sm">{info.label}:</span>
                  <span className="text-sm break-all" style={{ color: "var(--c-text2)" }}>{info.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
