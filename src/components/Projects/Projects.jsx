import "./Projects.css";
import img1 from "../../assets/images/project1.jpg";
import img2 from "../../assets/images/project2.jpg";
import img3 from "../../assets/images/project3.jpg";
import img4 from "../../assets/images/project4.jpg";
import img5 from "../../assets/images/project5.jpg";
import img6 from "../../assets/images/project6.jpg";
import img7 from "../../assets/images/project7.jpg";
import img8 from "../../assets/images/project8.jpg";
import img9 from "../../assets/images/project9.jpg";
import img10 from "../../assets/images/project10.jpg";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(sectionRef.current);
  }, []);
  const projects = [
    {
      title: "Project 1",
      description: "Modern web application with responsive UI",
      tech: "TypeScript, JavaScript, CSS",
      image: img1,
      github: "https://github.com/Gerald-2-ine/audiophile-store",
      live: "https://audiophile-store-2zru-44kkzxg6j-geraldine-ugonabos-projects.vercel.app/",
    },
    {
      title: "Project 2",
      description: "Dynamic frontend project",
      tech: "JavaScript, API",
      image: img2,
      github: "#",
      live: "#",
    },
    {
      title: "Project 3",
      description: "Interactive user experience design",
      tech: "HTML, CSS, JavaScript",
      image: img3,
      github: "https://github.com/Gerald-2-ine/profile-card",
      live: "https://gerald-2-ine.github.io/profile-card/",
    },
    {
      title: "Project 4",
      description: "Ticket Application",
      tech: "React JS, CSS",
      image: img4,
      github: "https://github.com/Gerald-2-ine/hng-ticket-app-react",
      live: "https://gerald-2-ine.github.io/hng-ticket-app-react/",
    },
    {
      title: "Project 5",
      description: "Ticket Application",
      tech: "JavaScript, Vue",
      image: img5,
      github: "https://github.com/Gerald-2-ine/hng-ticket-app-vue",
      live: "https://hng-tickets-app-vue.netlify.app/",
    },
    {
      title: "Project 6",
      description: "Ticket Application",
      tech: "PHP, Twig, CSS, javascript",
      image: img6,
      github: "https://github.com/Gerald-2-ine/hng-ticket-app-twig",
      live: "https://hng-ticket-app-twig-production.up.railway.app",
    },
    {
      title: "Project 7",
      description: "Creative Mini-AboutMe project",
      tech: "CSS, html, javascript",
      image: img7,
      github: "https://github.com/Gerald-2-ine/my-profile",
      live: "https://gerald-2-ine.github.io/my-profile",
    },
    {
      title: "Project 8",
      description: "Fullstack project",
      tech: "PHP, MySQL",
      image: img8,
      github: "https://github.com/Gerald-2-ine/inventory-system",
      // live: "#",
    },
    {
      title: "Project 9",
      description: "Portfolio feature project",
      tech: "html, css, javascript",
      image: img9,
      github: "https://github.com/Gerald-2-ine/portfolio",
      live: "https://portfolio-six-eta-bbi7gz4o9c.vercel.app/",
    },
    {
      title: "Project 10",
      description: "Advanced UI system",
      tech: "Html, CSS",
      image: img10,
      github: "https://github.com/Gerald-2-ine/NetflixClone",
      live: "https://gerald-2-ine.github.io/NetflixClone/",
    },
  ];

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>

            <div className="project-links">
              <a href={project.github}>GitHub</a>
              <a href={project.live}>Live</a>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <span>{selectedProject.tech}</span>

            <div className="modal-links">
              <a href={selectedProject.github}>GitHub</a>
              <a href={selectedProject.live}>Live</a>
            </div>

            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
