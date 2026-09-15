import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Diamonds evenly placed around a circle using rotate+translateX
const DiamondRing = () => {
  const count = 18;
  const radius = 500; // px from center — just outside the amber circle ring

  return (
    <>
      {/* ── Scale-in wrapper (fades / scales the whole ring in) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
      >
        {/* ── Infinite clockwise rotation ── */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", width: 0, height: 0 }}
        >
          {Array.from({ length: count }).map((_, i) => {
            const angle = (i / count) * 360;
            // Alternate three sizes for rhythm
            const size = i % 3 === 0 ? 14 : i % 3 === 1 ? 10 : 7;
            const half = size / 2;
            const opacity = i % 3 === 0 ? 1 : i % 3 === 1 ? 0.75 : 0.45;
            const glow = size * 1.2;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: size,
                  height: size,
                  marginLeft: -half,
                  marginTop: -half,
                  /* rotate to position on circle → move outward → rotate 45° = diamond ◆ */
                  transform: `rotate(${angle}deg) translateX(${radius}px) rotate(45deg)`,
                  background: "linear-gradient(135deg, #FFE066 0%, #E9B769 50%, #C8892A 100%)",
                  borderRadius: 2,
                  opacity,
                  boxShadow: `0 0 ${glow}px rgba(233,183,105,0.85), 0 0 ${glow * 2}px rgba(233,183,105,0.35)`,
                }}
              />
            );
          })}
        </motion.div>

        {/* ── Second ring: counter-clockwise, slightly smaller radius, slower ── */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", width: 0, height: 0 }}
        >
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i / 10) * 360 + 18; // offset so they interleave
            const size = 6;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: size,
                  height: size,
                  marginLeft: -size / 2,
                  marginTop: -size / 2,
                  transform: `rotate(${angle}deg) translateX(${radius + 22}px) rotate(45deg)`,
                  background: "linear-gradient(135deg, #E9B769, #FFD700)",
                  borderRadius: 1,
                  opacity: 0.35,
                  boxShadow: "0 0 8px rgba(233,183,105,0.6)",
                }}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default function SplashScreen({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => setShow(false), 6000);
    const doneTimer = setTimeout(() => onComplete(), 6900);
    return () => { clearTimeout(hideTimer); clearTimeout(doneTimer); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#000" }}
        >
          {/* ── Ambient glow ── */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.8, opacity: 0.18 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: 480,
              height: 480,
              borderRadius: "50%",
              background: "radial-gradient(circle, #00828F 0%, #E9B769 55%, transparent 80%)",
              filter: "blur(70px)",
              pointerEvents: "none",
            }}
          />

          {/* ── Amber circle ring (existing) ── */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0, rotate: 0 }}
            animate={{ scale: 1.6, opacity: 0.35, rotate: 360 }}
            transition={{ duration: 3, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: 600,
              height: 600,
              borderRadius: "50%",
              border: "1.5px solid #E9B769",
              boxShadow: "0 0 30px rgba(233,183,105,0.18), inset 0 0 30px rgba(233,183,105,0.06)",
              pointerEvents: "none",
            }}
          />

          {/* ── Diamond ring ◆ (NEW — infinite rotation) ── */}
          <DiamondRing />

          {/* ── Hello! text ── */}
          <div className="relative flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.4, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(6rem, 18vw, 13rem)",
                background: "linear-gradient(135deg, #00828F 0%, #E9B769 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                filter: "drop-shadow(0 0 40px rgba(0,130,143,0.4))",
              }}
            >
              Hello!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.55, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{
                color: "#CBDFD9",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginTop: "0.5rem",
              }}
            >
              Welcome to my portfolio
            </motion.p>
          </div>

          {/* ── Progress bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              position: "absolute",
              bottom: "3.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              width: 120,
              height: 2,
              borderRadius: 9999,
              backgroundColor: "rgba(203,223,217,0.15)",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.6, delay: 0.5, ease: "easeInOut" }}
              style={{
                height: "100%",
                borderRadius: 9999,
                background: "linear-gradient(90deg, #00828F, #E9B769)",
              }}
            />
          </motion.div>

          {/* ── Skip ── */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.5 }}
            whileHover={{ opacity: 0.85 }}
            onClick={() => { setShow(false); setTimeout(onComplete, 900); }}
            style={{
              position: "absolute",
              bottom: "1.2rem",
              right: "1.5rem",
              color: "#CBDFD9",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Skip ›
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
