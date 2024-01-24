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
          imageUrl="./fsp4.webp"
          techStack={["React", "CSS"]}
          githubLink="https://github.com/Theglxry/photography-website"
          liveDemoLink="https://photography-website-lac.vercel.app/"
        />

        <Project
          title="An electric car website"
          description="Sustainable electric mobility, showcasing innovation and eco-friendly driving experiences. Explore our vision! "
          imageUrl="./chargecars.webp"
          techStack={["React", "Tailwind"]}
          githubLink="https://github.com/Theglxry/"
          liveDemoLink="https://charge-cars.vercel.app/"
        />

        <Project
          title="Rock Paper Scissors Game"
          description="A fun and interactive implementation of the classic game 'Rock Paper Scissors.' The game is built using JS and provides an engaging user experience"
          imageUrl="./r-p-s-game.png"
          techStack={["Vanilla JS", "CSS"]}
          githubLink="#"
          liveDemoLink="https://rock-paper-scissors-djs.netlify.app/"
        />

        <Project
          title="Movie box app"
          description="A movie app that fetches real time data. "
          imageUrl="./movie-box.webp"
          techStack={["vanilla js", "CSS"]}
          githubLink="https://#"
          liveDemoLink="https://movie-box-blond.vercel.app/"
        />

        <Project
          title="Personal portfolio"
          description=" Personal porfolio showcasing my technical skills and projects "
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
