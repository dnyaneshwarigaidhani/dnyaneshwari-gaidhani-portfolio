import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { personalInfo } from "../data/resumeData";

const socials = [
  { icon: FaGithub,   href: personalInfo.github,            title: "GitHub" },
  { icon: FaLinkedin, href: personalInfo.linkedin,           title: "LinkedIn" },
  { icon: FaXTwitter, href: personalInfo.twitter,            title: "X / Twitter" },
  { icon: FaEnvelope, href: `mailto:${personalInfo.email}`,  title: "Email" },
];

export default function Footer() {
  return (
    <footer className="py-8 border-t" style={{ backgroundColor: "var(--c-bg-alt)", borderColor: "var(--c-border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Made with love */}
          <p className="text-sm flex items-center gap-1.5" style={{ color: "var(--c-m50)" }}>
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="inline-block"
            >
              <FaHeart className="text-red-500" size={13} />
            </motion.span>{" "}
            by <span className="font-semibold" style={{ color: "var(--c-text1)" }}>{personalInfo.name}</span>
          </p>

          {/* All social icons */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.title}
                href={s.href} target="_blank" rel="noreferrer" title={s.title}
                whileHover={{ scale: 1.35, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="hover:text-[#00828F] transition-colors"
                style={{ color: "var(--c-m40)", opacity: 0.5 }}
              >
                <s.icon size={19} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "var(--c-m30)" }}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
