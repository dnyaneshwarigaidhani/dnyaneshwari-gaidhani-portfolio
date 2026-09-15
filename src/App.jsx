import { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function PortfolioApp() {
  const { theme } = useTheme();
  // Show splash screen once per session
  const [splashDone, setSplashDone] = useState(
    () => sessionStorage.getItem("dg-splash") === "done"
  );

  const handleSplashComplete = () => {
    sessionStorage.setItem("dg-splash", "done");
    setSplashDone(true);
  };

  return (
    <>
      {/* Splash screen — only shown on first visit per session */}
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      <div className={`theme-${theme} min-h-screen bg-[var(--c-bg)] text-[var(--c-text1)]`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

export default App;
