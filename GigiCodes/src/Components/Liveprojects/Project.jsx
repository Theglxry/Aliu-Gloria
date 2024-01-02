// GALLERY DATA

import PropTypes from 'prop-types';

const Project = ({ title, description, imageUrl, techStack, githubLink, liveDemoLink }) => {
 
  
  
    return (
    <div className="project" >
      <div className="img-holder">
            <div className="project-img" style={{ backgroundImage: `url(${imageUrl})`}}>
            </div>
      </div>







      <div className="glass-bg project-details">
        <h3 className="p-title">{title}</h3>
        <p className="p-description">{description}</p>
        <div className="used-stack">
          {techStack.map((tech, index) => (
            <p className='btn-br' key={index} style={{ display: 'inline-block'}}>{tech}</p>
          ))}
        </div>


        <div className="links">
          <a className='btn-bg button' href={githubLink} target="_blank" rel="noopener noreferrer">
              Code 

            <i className="fa-brands fa-github"></i>
          </a>
          
          <a className='btn-bg button' href={liveDemoLink} target="_blank" rel="noopener noreferrer">
           Live Demo  

           <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
          </a>
        </div>


      </div>

      
    </div>
  );
};

// PropTypes validation
Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  liveDemoLink: PropTypes.string.isRequired,
};

export default Project;

 
