
function About() {
  const details = [
    {
      icon: "🎓",
      title: "Education",
      value: "B.Sc. Computer Science",
      desc: "Currently pursuing my graduation in Computer Science."
    },
    {
      icon: "📍",
      title: "Location",
      value: "Nayahat, Puri, Odisha",
      desc: "Based in Odisha, India."
    },
    {
      icon: "💻",
      title: "My Passion",
      value: "Coding & Development",
      desc: "Passionate about coding and exploring new technologies."
    },
    {
      icon: "🚀",
      title: "My Projects",
      value: "3 Projects Built",
      desc: "Created three projects and continuously learning through practice."
    },
    {
      icon: "⚡",
      title: "My Strength",
      value: "Quick Learner",
      desc: "Always excited to learn new skills and solve problems."
    },
    {
      icon: "🎯",
      title: "Career Goal",
      value: "Full Stack Developer",
      desc: "My goal is to build modern and powerful web applications."
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-heading">
        <span>GET TO KNOW ME</span>
        <h2>About <strong>Me</strong></h2>
        <p>My journey, passion and ambition in the world of technology.</p>
      </div>

      <div className="about-intro">
        <h3>Hello, I'm Zawed Khan 👋</h3>
        <p>
          I'm a passionate Computer Science student who loves
          turning creative ideas into digital experiences.
          I enjoy building websites, learning modern technologies
          and improving my development skills every day.
        </p>
      </div>

      <div className="about-grid">
        {details.map((item, index) => (
          <div className="about-card" key={index}>
            <div className="about-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <h4>{item.value}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

