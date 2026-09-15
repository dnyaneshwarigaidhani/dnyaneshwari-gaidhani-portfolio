import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload, FaEnvelope, FaLock } from "react-icons/fa";
import { personalInfo } from "../data/resumeData";

export default function ResumeModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRequest = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Resume Request from ${name}`);
    const body = encodeURIComponent(
      `Hi Dnyaneshwari,\n\nName: ${name}\nEmail: ${email}\nReason: ${reason}\n\nPlease share your resume.\n\nThank you!`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setName(""); setEmail(""); setReason("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="resume-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
        >
          <motion.div
            key="resume-modal-box"
            initial={{ scale: 0.85, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 12 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl p-7 relative border"
            style={{ backgroundColor: "var(--c-card)", borderColor: "var(--c-border)" }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 hover:text-[#00828F] transition-colors"
              style={{ color: "var(--c-m40)" }}
            >
              <FaTimes size={17} />
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="relative w-14 h-14 mx-auto mb-3">
                    <div className="w-14 h-14 bg-[#00828F]/10 rounded-full flex items-center justify-center">
                      <FaDownload className="text-[#00828F]" size={20} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#E9B769]/20 border border-[#E9B769]/40 rounded-full flex items-center justify-center">
                      <FaLock className="text-[#E9B769]" size={9} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--c-text1)" }}>
                    Request My Resume
                  </h3>
                  <p className="text-sm mt-1.5 max-w-xs mx-auto" style={{ color: "var(--c-m60)" }}>
                    Please fill in your details — I'll get back to you with my resume shortly.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleRequest} className="space-y-4">
                  {[
                    { label: "Your Name *", type: "text", val: name, set: setName, ph: "Enter your name" },
                    { label: "Your Email *", type: "email", val: email, set: setEmail, ph: "your@email.com" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="text-xs mb-1.5 block" style={{ color: "var(--c-m60)" }}>{f.label}</label>
                      <input
                        type={f.type} required value={f.val}
                        onChange={(e) => f.set(e.target.value)}
                        placeholder={f.ph}
                        className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-[#00828F] transition-colors"
                        style={{ backgroundColor: "var(--c-input)", borderColor: "var(--c-border)", color: "var(--c-text1)" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs mb-1.5 block" style={{ color: "var(--c-m60)" }}>Purpose / Reason</label>
                    <textarea
                      rows={3} value={reason} onChange={(e) => setReason(e.target.value)}
                      placeholder="e.g. Job opportunity, hiring, collaboration..."
                      className="w-full border rounded-xl px-4 py-3 text-sm outline-none resize-none focus:border-[#00828F] transition-colors"
                      style={{ backgroundColor: "var(--c-input)", borderColor: "var(--c-border)", color: "var(--c-text1)" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00828F] to-[#E9B769] text-[#071515] font-bold rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-[#00828F]/20"
                  >
                    <FaEnvelope size={14} />
                    Send Request
                  </button>
                </form>
              </>
            ) : (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  className="text-5xl mb-4"
                >✅</motion.div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--c-text1)" }}>Request Sent!</h3>
                <p className="text-sm" style={{ color: "var(--c-m60)" }}>
                  Thank you, {name}! I'll review your request and share my resume shortly.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 px-6 py-2 border border-[#00828F]/40 text-[#00828F] rounded-full text-sm hover:bg-[#00828F]/10 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
