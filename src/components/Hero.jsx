
import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h3>Hello, I'm</h3>

        <h1>Zawed khan</h1>

        <h2> Full Stack Developer</h2>

        <p>
          I create modern, responsive and beautiful
          websites using React, JavaScript and Tailwind CSS.
        </p>

        <div className="hero-buttons">
          <button>Hire Me</button>
          <button>My Projects</button>
        </div>

      </div>

      <div className="hero-image">
  <img
    src="/profile.png.jpeg"
    alt="Zawed Khan"
    className="profile-3d"
  />
</div>

    </section>
  );
}



export default Hero;
