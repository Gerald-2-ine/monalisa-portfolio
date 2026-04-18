import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    console.log("Dark mode is now:", !darkMode);
  };
  return (
    <>
      <div className={darkMode ? "app dark" : "app light"}>
        <div
          className="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;
