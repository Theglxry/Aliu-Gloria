// import React from 'react';
//GALLERY TO BE RENDERED

// import { useState } from "react";
import Project from "./Project";
// import project from "./Project";

import "./Project.css";



const Projects = () => {
// const [items, setItems] = useState(project)

  return (
    <section id="project-section" className="project-wrapper">
      {/* <h1>PROJECTS</h1> */}


      {/* project 1 */}
      <div className="project-container">
        <Project
          title="Photography Website"
          description="A simple yet exquisite website for a photography company that showcases the artistry of the photographer. "
          // imageUrl='./fsp.png'
          imageUrl="./fsp4.webp"
          techStack={["React", "CSS"]}
          githubLink="https://github.com/Theglxry/photography-website"
          liveDemoLink="https://photography-website-lac.vercel.app/"
        />

        <Project
          title="Language Translator App"
          description="A translator app that automatically detects the language input and translates it to a language of choice"
          imageUrl="./trans-web.png"
          techStack={["React", "Tailwind"]}
          githubLink="https://github.com/Theglxry/"
          liveDemoLink="https://multilingo.vercel.app/"
        />

        <Project
          title="Rock Paper Scissors Game"
          description="A fun and interactive implementation of the classic game 'Rock Paper Scissors.' The game is built using JS and provides an engaging user experience"
          imageUrl="./r-p-s-game.png"
          techStack={["Vanilla JS", "CSS"]}
          githubLink="https://github.com/Theglxry/r.p.s-game"
          liveDemoLink="https://rock-paper-scissors-djs.netlify.app/"
        />

        {/* <Project
          title="Uber Eats vendor clone"
          description=" Recreated uber eats vendor's landing page. "
          imageUrl="./ubereats.webp"
          techStack={["vanilla js", "CSS"]}
          githubLink="https://#"
          liveDemoLink="https://#"
        /> */}

        <Project
          title="Personal portfolio"
          description=" Personal porfolio showcasing my technical skills and projects "
          // imageUrl='./pp.png'
          imageUrl="./pp.webp"
          techStack={["React", "CSS"]}
          githubLink="https://#"
          liveDemoLink="https://https://theglxry.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
