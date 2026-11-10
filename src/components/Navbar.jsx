function Navbar() {
  return (
    <header className="navbar">
<h2 className="nav-logo">
  <span>Zawed</span> <span>Khan</span>
</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <a href="#contact" className="nav-btn">
        Hire Me ↗
      </a>
    </header>
  );
}

export default Navbar;
