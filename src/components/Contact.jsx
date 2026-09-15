import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { personalInfo } from "../data/resumeData";

const contactItems = [
  { icon: FaEnvelope,  label: "Email",    value: personalInfo.email,        href: `mailto:${personalInfo.email}`, accent: "#00828F" },
  { icon: FaPhone,     label: "Phone",    value: personalInfo.phoneDisplay,  href: `tel:${personalInfo.phone}`,    accent: "#00828F" },
  { icon: FaLinkedin,  label: "LinkedIn", value: "linkedin.com/in/dnyaneshwari-gaidhani", href: personalInfo.linkedin, accent: "#00828F" },
  { icon: FaGithub,    label: "GitHub",   value: "github.com/DnyaneshwariGaidhani",       href: personalInfo.github,   accent: "#00828F" },
  { icon: FaXTwitter,  label: "Twitter", value: "x.com/DnyaneshwariG",              href: personalInfo.twitter,  accent: "#00828F" },
  { icon: FaMapMarkerAlt, label: "Location", value: personalInfo.location,  href: null,                           accent: "#E9B769" },
];

const socialLinks = [
  { icon: FaGithub,   href: personalInfo.github,   title: "GitHub",      color: "#00828F" },
  { icon: FaLinkedin, href: personalInfo.linkedin,  title: "LinkedIn",    color: "#00828F" },
  { icon: FaXTwitter, href: personalInfo.twitter,   title: "Twitter", color: "#00828F" },
  { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, title: "Email", color: "#E9B769" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-[#00828F] font-mono text-sm uppercase tracking-widest mb-2">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "var(--c-text1)" }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00828F] to-[#E9B769] mx-auto rounded-full" />
          <p className="mt-6 max-w-lg mx-auto text-sm" style={{ color: "var(--c-m60)" }}>
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          {/* Social quick-links */}
          <div className="flex justify-center gap-4 mt-6">
            {socialLinks.map((s) => (
              <motion.a
                key={s.title} href={s.href} target="_blank" rel="noreferrer" title={s.title}
                whileHover={{ scale: 1.3, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="transition-colors"
                style={{ color: "var(--c-m50)", opacity: 0.55 }}
              >
                <s.icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info List */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-3">
            <h3 className="font-bold text-lg mb-6" style={{ color: "var(--c-text1)" }}>Contact Information</h3>
            {contactItems.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4, boxShadow: "0 0 20px rgba(0,130,143,0.12)" }}
                className="flex items-center gap-4 rounded-xl p-4 border transition-colors"
                style={{ backgroundColor: "var(--c-card)", borderColor: "var(--c-border)" }}
              >
                <div className="w-10 h-10 bg-[#00828F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon style={{ color: item.accent }} size={17} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--c-m50)" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm hover:text-[#00828F] transition-colors break-all"
                      style={{ color: "var(--c-text1)" }}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm" style={{ color: "var(--c-text1)" }}>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl p-7 border" style={{ backgroundColor: "var(--c-card)", borderColor: "var(--c-border)" }}>
              <h3 className="font-bold text-lg mb-6" style={{ color: "var(--c-text1)" }}>Send a Message</h3>
              <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact`; }} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{ label: "Name", type: "text", ph: "Your Name" }, { label: "Email", type: "email", ph: "your@email.com" }].map((f) => (
                    <div key={f.label}>
                      <label className="text-xs mb-1.5 block" style={{ color: "var(--c-m60)" }}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} required
                        className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#00828F] transition-colors"
                        style={{ backgroundColor: "var(--c-input)", borderColor: "var(--c-border)", color: "var(--c-text1)" }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-xs mb-1.5 block" style={{ color: "var(--c-m60)" }}>Subject</label>
                  <input type="text" placeholder="Subject" required
                    className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#00828F] transition-colors"
                    style={{ backgroundColor: "var(--c-input)", borderColor: "var(--c-border)", color: "var(--c-text1)" }} />
                </div>
                <div>
                  <label className="text-xs mb-1.5 block" style={{ color: "var(--c-m60)" }}>Message</label>
                  <textarea rows={5} placeholder="Your message..." required
                    className="w-full border rounded-xl px-4 py-3 text-sm outline-none resize-none focus:border-[#00828F] transition-colors"
                    style={{ backgroundColor: "var(--c-input)", borderColor: "var(--c-border)", color: "var(--c-text1)" }} />
                </div>
                <button type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00828F] to-[#E9B769] hover:opacity-90 text-[#071515] font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#00828F]/20">
                  <FaPaperPlane size={14} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
