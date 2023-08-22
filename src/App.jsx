import "./App.css";
import LeftSide from "./components/LeftSide/LeftSide";
import { useRef } from "react";

export default function App() {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
    btnRef.current.style.setProperty("--x", x + "px");
    btnRef.current.style.setProperty("--y", y + "px");
  };

  return (
    <main className="App" ref={btnRef} onMouseMove={handleMouseMove}>
      <div className="content-container">
        <div className="headers">
          <h1>Nic Doelger</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="left-side">
          <LeftSide />
        </div>
      </div>
    </main>
  );
}

{/* <span className="line"></span>
<span>
  <h2>ABOUT</h2>
</span>
<br />
<span className="line"></span>
<span>
  <h2>EXPERIENCE</h2>
</span>
<br />
<span className="line"></span>
<span>
  <h2>PROJECTS</h2>
</span> */}