import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { personalInfo } from "../data/resumeData";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const socials = [
    { href: personalInfo.github,   icon: FaGithub,   title: "GitHub" },
    { href: personalInfo.linkedin, icon: FaLinkedin, title: "LinkedIn" },
    { href: personalInfo.twitter,  icon: FaXTwitter, title: "Twitter" },
    { href: `mailto:${personalInfo.email}`, icon: FaEnvelope, title: "Email" },
  ];

  return (
    <>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl bg-[#00828F]/15" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl bg-[#E9B769]/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-[#003F3D]/20" />
        </div>

        {/* Dot-grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #00828F 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="font-mono text-sm sm:text-base mb-4 tracking-widest uppercase text-[#00828F]">
              👋 Hello, I'm
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4">
              <span style={{ color: "#00828F" }}>Dnyaneshwari </span>
              <span style={{ color: "#E9B769" }}>Gaidhani</span>
            </motion.h1>

            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold mb-2" style={{ color: "var(--c-text1)" }}>
              {personalInfo.title}
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base mb-8 max-w-xl mx-auto" style={{ color: "var(--c-m60)" }}>
              {personalInfo.subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-sm mb-10" style={{ color: "var(--c-m50)" }}>
              <FaMapMarkerAlt className="text-[#E9B769]" />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 flex-wrap">
              <Link to="projects" smooth={true} duration={500} offset={-64}
                className="cursor-pointer inline-flex items-center gap-2 px-8 py-3 bg-[#E9B769] hover:bg-[#E9B769]/90 text-[#071515] font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#E9B769]/25">
                View My Work
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-64}
                className="cursor-pointer inline-flex items-center gap-2 px-8 py-3 border border-[#00828F]/50 hover:border-[#00828F] text-[#00828F] font-semibold rounded-full transition-all duration-300 hover:bg-[#00828F]/15">
                Contact Me
              </Link>
              {/* Download Resume (secured) */}
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border"
                style={{
                  borderImage: "linear-gradient(135deg,#00828F,#E9B769) 1",
                  border: "1.5px solid transparent",
                  background: "var(--c-card) padding-box, linear-gradient(135deg,#00828F,#E9B769) border-box",
                  color: "var(--c-text1)",
                }}
              >
                <FaDownload size={13} className="text-[#E9B769]" />
                Download Resume
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center gap-6">
              {socials.map((s) => (
                <motion.a
                  key={s.title}
                  href={s.href} target="_blank" rel="noreferrer" title={s.title}
                  whileHover={{ scale: 1.35, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="hover:text-[#00828F] transition-colors"
                  style={{ color: "var(--c-m50)", opacity: 0.55 }}
                >
                  <s.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--c-m30)" }}>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-8 bg-gradient-to-b from-[#00828F] to-transparent rounded-full" />
        </motion.div>
      </section>
    </>
  );
}
