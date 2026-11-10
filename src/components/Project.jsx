
function Project() {
  const projects = [
    {
      title: "Personal Portfolio",
      category: "Frontend Development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900",
      description: "A modern portfolio website to showcase my skills, profile and work.",
      tech: ["React", "CSS", "JavaScript"]
    },
    {
      title: "3D Pizza Website",
      category: "Creative Web Design",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
      description: "An attractive food website with a creative 3D-inspired design.",
      tech: ["HTML", "Tailwind", "JavaScript"]
    },
    {
      title: "Student Registration",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900",
      description: "A student registration form with validation and local storage.",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "E-Commerce Website",
      category: "Online Shopping",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
      description: "A modern online shopping interface with product cards and cart design.",
      tech: ["React", "CSS", "JavaScript"]
    },
    {
      title: "Weather Dashboard",
      category: "Weather Application",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=900",
      description: "A weather dashboard concept for displaying weather information.",
      tech: ["JavaScript", "API", "CSS"]
    },
    {
      title: "Task Management App",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900",
      description: "A clean task management interface for organizing daily work.",
      tech: ["React", "CSS", "JavaScript"]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <span>MY CREATIVE WORK</span>
        <h2>Featured Projects</h2>
        <p>Some of my work, experiments and development ideas.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <span>0{index + 1}</span>
            </div>

            <div className="project-info">
              <small>{project.category}</small>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a href="#contact">Discuss Project ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
