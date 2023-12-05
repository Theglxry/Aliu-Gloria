// import { Link } from 'react-scroll';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import './Header.css';
// import Bio from '../Bio/Bio';
// import Hero from '../Hero/Hero';





const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  

  return (
    <>



    
        <nav  className= "glass-bg">
        <div className='logo-container'>
          <Link to="/" smooth={true} duration={500} offset={-70}>
            <h1 className='logo'> ALIU <br/> GLORIA </h1>
          </Link>
        </div>

        
        <div className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul id='navbar'>
            <li> 
            <Link to="/" smooth={true} duration={500} offset={-70}>
            HOME
            </Link>

            </li>



            <li>
            <Link to="/about" smooth={true} duration={500} offset={-70}>
                About
              </Link>
            </li>



            <li>
            <Link to="/projects" smooth={true} duration={500} offset={-70}   className='active'>           
            Projects           
            </Link>           
            </li>

            <li>
               <Link to="footer-section" smooth={true} duration={500} offset={-70}>
               Get in touch 
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul id='navbar'>
            <li> 
            <Link to="hero-section" smooth={true} duration={500} offset={-70}>
            HOME
            </Link>

            </li>



            <li>
            <Link to="bio-section" smooth={true} duration={500} offset={-70}>
                About
              </Link>
            </li>



            <li>
            <Link to="project-section" smooth={true} duration={500} offset={-70}   className='active'>           
            Projects           
            </Link>           
            </li>

            <li>
               <Link to="footer-section" smooth={true} duration={500} offset={-70}>
               Get in touch 
              </Link>
            </li>
          </ul>
        </div> */}


        <div id='mobile' onClick={handleMobileMenuClick}>
          {/* Toggle mobile menu icon */}
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} id='bar'></i>
        </div>
      </nav>




     {/* <Bio /> */}
     {/* <Hero /> */}
    </>
  );
};

export default Header;
