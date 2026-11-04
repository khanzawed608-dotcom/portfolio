import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
 <div className="premium-background">
  <div className="glow-orb orb-one"></div>
  <div className="glow-orb orb-two"></div>
  <div className="glow-orb orb-three"></div>
  <div className="mouse-light"></div>
</div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
