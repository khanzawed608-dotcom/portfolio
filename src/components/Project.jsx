function Project() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio with modern design.",
      tech: "React • CSS • JavaScript",
      icon: "💻",
    },
    {
      title: "Pizza Website",
      description: "Creative pizza website with 3D effects.",
      tech: "HTML • Tailwind • JavaScript",
      icon: "🍕",
    },
    {
      title: "Registration Form",
      description: "Student registration with form validation.",
      tech: "HTML • CSS • JavaScript",
      icon: "📝",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Creative Projects</h2>
      <p className="project-subtitle">Some things I've built</p>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
            <a href="#contact">Let's Connect →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
