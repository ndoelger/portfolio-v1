import HTML from "../../logos/HTML.png";
import adobe from "../../logos/adobe.png";
import CSS from "../../logos/CSS.png";
import django from "../../logos/django.png";
import express from "../../logos/express.png";
import Figma from "../../logos/Figma.png";
import GitHub from "../../logos/GitHub.png";
import javascript from "../../logos/javascript.png";
import Mongo from "../../logos/Mongo.png";
import node from "../../logos/node.png";
import Python from "../../logos/Python.png";
import React from "../../logos/React.png";
import C from "../../logos/C.png"
import SQL from "../../logos/SQL.png";
import Java from "../../logos/Java.png";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skill-container">
    <div className="skill">
      <div className="logo">
        <img src={HTML} alt="" />
      </div>
      <h1>HTML</h1>
    </div>
    <div className="skill">
      <div className="logo">
        <img src={CSS} alt="" />
      </div>
      <h1>CSS</h1>
    </div>
    <div className="skill">
      <div className="logo">
        <img src={javascript} alt="" />
      </div>
      <h1>JavaScript</h1>
    </div>
    {/* <div className="skill">
      <div className="logo">
        <img src={C} alt="" />
      </div>
      <h1>C#</h1>
    </div> */}
    {/* <div className="skill">
      <div className="logo">
        <img src={Java} alt="" />
      </div>
      <h1>Java</h1>
    </div> */}
    <div className="skill">
      <div className="logo">
        <img src={Python} alt="" />
      </div>
      <h1>Python</h1>
    </div>
    <div className="skill">
      <div className="logo">
        <img src={SQL} alt="" />
      </div>
      <h1>SQL</h1>
    </div>
    <div className="skill">
      <div className="logo">
        <img src={React} alt="" />
      </div>
      <h1>React</h1>
    </div>
    <div className="skill">
      <div className="logo">
        <img src={Mongo} alt="" />
      </div>
      <h1>MongoDB</h1>
    </div>
    <div className="skill">
      <div className="logo">
        <img src={django} alt="" />
      </div>
      <h1>Django</h1>
    </div>
    <div className="skill">
      <div className="logo">
        <img src={node} alt="" />
      </div>
      <h1>Node.js</h1>
    </div>
    <div className="skill">
      <div className="logo">
        <img src={express} alt="" />
      </div>
      <h1>Express</h1>
    </div>
    {/* <div className="skill">
      <div className="logo">
        <img src={GitHub} alt="" />
      </div>
      <h1>GitHub</h1>
    </div> */}
    <div className="skill">
      <div className="logo">
        <img src={adobe} alt="" />
      </div>
      <h1>Adobe Suite</h1>
    </div>
    <div className="skill">
      <div className="logo">
        <img src={Figma} alt="" />
      </div>
      <h1>Figma</h1>
    </div>
    </div>
  );
}
