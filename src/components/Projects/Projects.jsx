import Portfolio from "../../projects/Screenshot 2023-08-02 at 11.16.37 AM.jpg";
import Inventory from "../../projects/Screenshot 2023-08-02 at 11.17.15 AM.jpg";
import Spotify from "../../projects/Spotify.jpg";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div id="projects" className="project-container">
        <h2 className="title">Projects</h2>
        <a
          href="https://yourspotifystats-039c385e1540.herokuapp.com/"
          target="_blank"
          rel="noreferrer">
          <div className="project">
            <img src={Spotify} alt="" />
            <div className="project-column">
              <h1>Your Spotify Stats</h1>
              <p>
                Authorize your Spotify account to provide instant access to your
                playlists, top tracks, and favorite artists from Spotify's API
                database.
              </p>
              <span>
                <h2>React</h2>
              </span>
              <span>
                <h2>Express</h2>
              </span>
              <span>
                <h2>Axios</h2>
              </span>
              <span>
                <h2>Node.js</h2>
              </span>
              <span>
                <h2>Spotify API</h2>
              </span>
              <span>
                <h2>Styled Components</h2>
              </span>
            </div>
          </div>
        </a>
        <a
          href="https://sei-inventory-manager-c8b2fde1ac37.herokuapp.com/"
          target="_blank"
          rel="noreferrer">
          <div className="project">
            <img src={Inventory} alt="" />
            <div className="project-column">
              <h1>Inventory Manager</h1>
              <p>
                Register and remember your store items with the ability to CRUD
                JSON objects using API routes/services, MVC architecture, and
                JWT for user authentication and linking user data with
                many-to-one relationships.
              </p>
              <span>
                <h2>MongoDB</h2>
              </span>
              <span>
                <h2>Express</h2>
              </span>
              <span>
                <h2>React</h2>
              </span>
              <span>
                <h2>Node</h2>
              </span>
            </div>
          </div>
        </a>
        <a
          href="https://nic-doelger.netlify.app/"
          target="_blank"
          rel="noreferrer">
          <div className="project">
            <img src={Portfolio} alt="" />
            <div className="project-column">
              <h1>Portfolio .5</h1>
              <p>
                My interactive portfolio that showcases my previous work in
                design with vibrant animations and cohesive colors. I organized
                my various projects with HTML tags and CSS Flexbox while
                incorporating dynamic animations and user interaction with
                JavaScript and JQuery.
              </p>
              <span>
                <h2>HTML</h2>
              </span>
              <span>
                <h2>CSS</h2>
              </span>
              <span>
                <h2>JavaScript</h2>
              </span>
              <span>
                <h2>JQuery</h2>
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
