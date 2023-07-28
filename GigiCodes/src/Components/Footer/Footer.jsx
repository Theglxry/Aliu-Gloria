import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer-section" >
    <div className="glass-bg footer-wrapper">
      <div className="f-container">
        <h1 id="title">
          GET IN TOUCH
        </h1>

        <div className="contact-icons">
         


                   {/* mail */}
          <div className="contact-icon-box">
            <span>
               <a  href="mailto:glorysamuel75@gmail.com"> <i className="fa-solid fa-envelope-open-text"></i></a>
            </span>
          </div>


                    {/* github */}
          <div className="contact-icon-box">
            <span>
            <a href="https://github.com/Theglxry"> 
            <i className="fa-brands fa-github"></i>
            </a>
            </span>
          </div>


                     {/* linkedin */}
           <div className="contact-icon-box">
            <span>
            <a href="https://www.linkedin.com/in/gloria-aliu-aa43871aa/">
            <i className="fa-brands fa-linkedin"></i>
            </a>
            </span>
          </div>

                   {/* twitter */}
          <div className="contact-icon-box">

            <span>
            <a href="https://twitter.com/theglxry/">
            <i className="fa-brands fa-twitter"></i>
            </a>
            </span>
          </div>






        </div>

      </div>


</div>
      <div className="copyright"> Copyright © 2023. </div>

    </section>
  );
};

export default Footer;
