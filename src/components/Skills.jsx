function Skills() {
  const skills = [
    {
      name: "HTML",
      logo: "html",
      category: "Frontend",
      description: "Building structured and semantic web pages.",
      level: "Learning & Practicing"
    },
    {
      name: "CSS",
      logo: "css",
      category: "Frontend",
      description: "Creating beautiful and responsive designs.",
      level: "Learning & Practicing"
    },
    {
      name: "JavaScript",
      logo: "js",
      category: "Programming",
      description: "Adding interactive features to websites.",
      level: "Learning & Practicing"
    },
    {
      name: "React",
      logo: "react",
      category: "Frontend",
      description: "Building modern component-based interfaces.",
      level: "Learning & Practicing"
    },
    {
      name: "Tailwind CSS",
      logo: "tailwind",
      category: "Styling",
      description: "Designing responsive layouts quickly.",
      level: "Learning & Practicing"
    },
    {
      name: "Node.js",
      logo: "nodejs",
      category: "Backend",
      description: "Exploring server-side JavaScript development.",
      level: "Learning & Practicing"
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-heading">
        <span>MY TECH STACK</span>
        <h2>Skills & Technologies</h2>
        <p>
          Technologies I use to learn, create and build
          modern web experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-number">
              0{index + 1}
            </span>

            <img
              src={`https://skillicons.dev/icons?i=${skill.logo}`}
              alt={skill.name}
            />

            <span className="skill-category">
              {skill.category}
            </span>

            <h3>{skill.name}</h3>

            <p>{skill.description}</p>

            <div className="skill-level">
              {skill.level}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
