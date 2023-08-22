import Skills from "../Skills/Skills";
import Experiece from "../Experience/Experience";
import Projects from "../Projects/Projects";
import "./LeftSide.css";

export default function LeftSide() {
  return (
    <div>
      <h2>About</h2>

      <p>
        Imagine if software had a personality – that's what I bring to the
        table. A mix of innovation, aesthetics, and a dash of breaking the mold.
        I see coding as my paintbrush, and technology as my canvas to create
        digital art that matters. Solving problems? That's just the warm-up. I'm
        all about turning challenges into opportunities, and writing code that
        doesn't just work, but wows.
      </p>
      <Skills />
      <Experiece />
      <Projects />
    </div>
  );
}
