// import React from 'react';
import Project from './Project';
import './Project.css';

const Projects = () => {
  return (
    <section id='project-section' className="project-wrapper">
      <h1>PROJECTS</h1>


           {/* project 1 */}
      <div className="project-container">
        <Project
          title="Photography Website"
          description="A simple yet exquisite website for a photography company that showcases the artistry of the photographer. "
          // imageUrl='./fsp.png'
          imageUrl='./fsp2.webp'

          techStack={['React', 'CSS']}
          githubLink="https://#"
          liveDemoLink="https://#"
        />



         <Project
          title="Rock Paper Scissors Game"
          description="A fun and interactive implementation of the classic game 'Rock Paper Scissors.' The game is built using JS and provides an engaging user experience"
          imageUrl='./r-p-s-game.png'
          techStack={['Vanilla JS', 'CSS']}
          githubLink="https://#"
          liveDemoLink="https://#"
        />


           <Project
          title="Uber Eats vendor clone"
          description=" Recreated uber eats vendor's landing page. "
          // imageUrl='./ubereats.png'
          imageUrl='./ubereats.webp'

          techStack={['vanilla js', 'CSS']}
          githubLink="https://#"
          liveDemoLink="https://#"
        />


           <Project
          title="Personal portfolio"
          description=" Personal porfolio showcasing my technical skills and projects "
          // imageUrl='./pp.png'
          imageUrl='./pp.webp'

          techStack={['React', 'CSS']}
          githubLink="https://#"
          liveDemoLink="https://https://theglxry.vercel.app/"
        />


      </div>
    </section>
  );
};

export default Projects;




