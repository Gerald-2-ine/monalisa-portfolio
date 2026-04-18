import "./Hero.css";
import profile from "../../assets/images/profile.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        <div className="hero-content">
          <h1>
            Hi, I’m <span className="highlight">Monalisa</span>
          </h1>

          <h2 className="typing">Frontend Developer</h2>

          <p>
            I design and build modern, responsive, and user-focused web
            experiences that feel as good as they look.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Monalisa" />
        </div>

      </div>
    </section>
  );
};

export default Hero;