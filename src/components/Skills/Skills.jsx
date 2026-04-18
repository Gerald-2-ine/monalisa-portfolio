import "./Skills.css";

const Skills = () => {
  const techSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
    "MySQL",
    "Git",
    "Responsive Design",
    "REST APIs"
  ];

  const professionalSkills = [
    "Problem Solving",
    "Attention to Detail",
    "Time Management",
    "Adaptability",
    "Continuous Learning",
    "Communication",
    "Critical Thinking"
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <h3>Technical Skills</h3>
      <div className="skills-grid">
        {techSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>

      <h3>Professional Skills</h3>
      <div className="skills-grid">
        {professionalSkills.map((skill, index) => (
          <div className="skill-card alt" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;