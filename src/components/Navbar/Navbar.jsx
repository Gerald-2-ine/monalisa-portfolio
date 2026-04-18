import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop - 100;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Monalisa Logo" className="logo-img" />
        <span className="logo-text">onalisa</span>
      </div>

      {/* Right Side */}
      <div className="nav-right">


      {/* Menu */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>

        <a
          href="#about"
          className={active === "about" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#skills"
          className={active === "skills" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={active === "projects" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

      </div>
       {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;