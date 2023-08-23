import "./App.css";
import LeftSide from "./components/LeftSide/LeftSide";
import { useRef, useState } from "react";
import GitHub from "./logos/GitHub2.png";
import LinkedIn from "./logos/174857.png";

export default function App() {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
    btnRef.current.style.setProperty("--x", x + "px");
    btnRef.current.style.setProperty("--y", y + "px");
  };

  const [aboutClick, setAboutClick] = useState(true);
  const [experienceClick, setExperienceClick] = useState(false);
  const [projectsClick, setProjectsClick] = useState(false);

  function handleAboutClick() {
    setAboutClick(true);
    setExperienceClick(false);
    setProjectsClick(false);
  }

  function handleExperienceClick() {
    setAboutClick(false);
    setExperienceClick(true);
    setProjectsClick(false);
  }
  function handleProjectsClick() {
    setAboutClick(false);
    setExperienceClick(false);
    setProjectsClick(true);
  }

  const activeAbout = {
    width: aboutClick ? "100px" : "20px",
    opacity: aboutClick ? "1" : ".6",
  };
  const activeExperience = {
    width: experienceClick ? "100px" : "20px",
    opacity: experienceClick ? "1" : ".6",
  };
  const activeProjects = {
    width: projectsClick ? "100px" : "20px",
    opacity: projectsClick ? "1" : ".6",
  };

  return (
    <main className="App" ref={btnRef} onMouseMove={handleMouseMove}>
      <div className="content-container">
        <div className="headers">
          <h1>Nic Doelger</h1>
          <h2>Software Engineer</h2>
          <div className="nav-links">
            <a href="#about" onClick={handleAboutClick}>
              <span style={activeAbout} className="line"></span>
              <h2 style={{ opacity: aboutClick ? "1" : ".6" }}>ABOUT</h2>
            </a>
            <br />
            <a href="#experience" onClick={handleExperienceClick}>
              <span style={activeExperience} className="line"></span>
              <span>
                <h2 style={{ opacity: experienceClick ? "1" : ".6" }}>
                  EXPERIENCE
                </h2>
              </span>
            </a>
            <br />
            <a href="#projects" onClick={handleProjectsClick}>
              <span style={activeProjects} className="line"></span>
              <span>
                <h2 style={{ opacity: projectsClick ? "1" : ".6" }}>
                  PROJECTS
                </h2>
              </span>
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/ndoelger"
              target="_blank"
              rel="noreferrer">
              <img src={GitHub} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicdoelger/"
              target="_blank"
              rel="noreferrer">
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
        <div className="left-side">
          <LeftSide />
        </div>
      </div>
    </main>
  );
}
