import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Education", to: "education" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-lg shadow-[#00828F]/5" : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "var(--c-nav)" } : {}}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo with DG image ── */}
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer flex items-center gap-2">
            <img
              src="/dg-logo.png"
              alt="DG"
              className="h-9 w-9 rounded-2xl object-contain border border-[#00828F]/30 bg-white p-0.5 shadow-sm shadow-[#00828F]/20"
            />
            <span className="text-lg font-bold gradient-text hidden sm:block">DG</span>
          </Link>

          {/* ── Desktop Nav — animated pill border ── */}
          <div className="hidden md:block">
            <div className="nav-pill-wrapper">
              {/* Spinning gradient layer — creates the animated border */}
              <div className="nav-pill-spinner" />
              {/* Content layer on top */}
              <div className="nav-pill-inner">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-64}
                    spy={true}
                    activeClass="active-link"
                    className="nav-link-hover group px-4 py-2 text-sm cursor-pointer rounded-full"
                    style={{ color: "var(--c-m70)" }}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[#00828F] to-[#E9B769] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-2">
            {/* Sun / Moon toggle with gradient border on hover */}
            <button
              onClick={toggleTheme}
              title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
              className="theme-toggle-btn w-9 h-9 flex items-center justify-center rounded-full"
              style={{
                color: theme === "dark" ? "#E9B769" : "#00828F",
              }}
            >
              {theme === "dark" ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden transition-colors"
              style={{ color: "var(--c-m70)" }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div
          className="md:hidden backdrop-blur-md border-t"
          style={{ backgroundColor: "var(--c-nav)", borderColor: "var(--c-border)" }}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={() => setMenuOpen(false)}
                className="nav-link-hover group py-2 px-3 rounded-md cursor-pointer text-sm"
                style={{ color: "var(--c-m70)" }}
              >
                {link.label}
                <span className="absolute bottom-1 left-3 h-[2px] w-[calc(100%-1.5rem)] rounded-full bg-gradient-to-r from-[#00828F] to-[#E9B769] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
