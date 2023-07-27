import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className='glass-bg'>
      <div className='logo-container'> 
        <a href='index.html'>
          <h1 className='logo'> ALIU <br/> GLORIA </h1>
        </a>
        </div>

        

        <div className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul id='navbar'>
            <li><a className='active' href='index.html'> HOME </a></li>
            <li><a href='index.html'> About </a></li>
            <li><a href='index.html'> Projects </a></li>
            <li><a href='index.html'> Get in touch </a></li>
            {/* <li><a href='index.html'> CONTACT </a></li> */}
          </ul>
        </div>

        <div id='mobile' onClick={handleMobileMenuClick}>
          {/* Toggle mobile menu icon */}
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} id='bar'></i>
        </div>
      </nav>
    </>
  );
};

export default Header;
