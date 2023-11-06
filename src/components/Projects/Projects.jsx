import Portfolio from "../../projects/Screenshot 2023-08-02 at 11.16.37 AM.jpg";
import NicEats from "../../projects/Nic-Eats.png";
import Spotify from "../../projects/Spotify.jpg";
import BeanEnsemble from "../../projects/bean-ensemble-online.preview-domain.com_.png";
import PromptSwap from "../../projects/prompt-swap-ifkt86xmx-nic-doelgers-projects.vercel.app_.png";
import Kndrd from "../../projects/www.kndrd.com_.png";
import Seried from "../../projects/theseriesny.com_.png";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div id="projects" className="project-container">
        <h2 className="title">Projects</h2>

        <a href="https://theseriesny.com/" target="_blank" rel="noreferrer">
          <div className="project">
            <img src={Seried} alt="" />
            <div className="project-column">
              <h1>THE SERIES NY</h1>
              <p>
                THE SERIES is a New York based brand of ethically made clothing
                and accessories.
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
              <span>
                <h2>PostgreSQL</h2>
              </span>
              <span>
                <h2>REST API</h2>
              </span>
            </div>
          </div>
        </a>
        <a href="https://www.kndrd.com/" target="_blank" rel="noreferrer">
          <div className="project">
            <img src={Kndrd} alt="" />
            <div className="project-column">
              <h1>Kndrd</h1>
              <p>
                Kndrd is friendshipping through shared experiences. Explore you
                city, explore your circle, explore connections.
              </p>
              <span>
                <h2>React</h2>
              </span>
              <span>
                <h2>Node</h2>
              </span>
              <span>
                <h2>Tailwind CSS</h2>
              </span>
              <span>
                <h2>jQuery</h2>
              </span>
              <span>
                <h2>API</h2>
              </span>
              <span>
                <h2>SQL</h2>
              </span>
            </div>
          </div>
        </a>
        <a
          href="https://prompt-swap.vercel.app/"
          target="_blank"
          rel="noreferrer">
          <div className="project">
            <img src={PromptSwap} alt="" />
            <div className="project-column">
              <h1>Prompt Swap</h1>
              <p>
                Discover and share AI-Powered prompts to ignite engaging
                conversations, inspire creativity, and foster collaborative
                thinking.
              </p>
              <span>
                <h2>Next.js</h2>
              </span>
              <span>
                <h2>NextAuth</h2>
              </span>
              <span>
                <h2>React</h2>
              </span>
              <span>
                <h2>Redux</h2>
              </span>
              <span>
                <h2>Node</h2>
              </span>
              <span>
                <h2>Tailwind CSS</h2>
              </span>
            </div>
          </div>
        </a>
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
                database. NOTE: This app is currently in demo; please contact
                doelgern@gmail.com for API access.
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
          href="https://nic-eats-f19d8b609888.herokuapp.com/"
          target="_blank"
          rel="noreferrer">
          <div className="project">
            <img src={NicEats} alt="" />
            <div className="project-column">
              <h1>Nic Eats</h1>
              <p>
                A familiar food delivery service to make unique orders and
                access order history. Register and remember your orders with the
                ability to CRUD JSON objects using API routes/services, MVC
                architecture, and JWT for user authentication and linking user
                data.
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
        <a href="https://bean-ensemble.online" target="_blank" rel="noreferrer">
          <div className="project">
            <img src={BeanEnsemble} alt="" />
            <div className="project-column">
              <h1>BeanEnsemble</h1>
              <p>
                A landing page for a coffee subscription service with user
                interaction and compelling styling.
              </p>
              <span>
                <h2>React</h2>
              </span>
              <span>
                <h2>Tailwind CSS</h2>
              </span>
              <span>
                <h2>Node.js</h2>
              </span>
              <span>
                <h2>JavaScript</h2>
              </span>
            </div>
          </div>
        </a>
        <a href="https://www.nicdoelger.work/" target="_blank" rel="noreferrer">
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
