import "./Footer.css";

const Footer = () => {
  return (
    <section >
    <div className="glass-bg footer-wrapper">
      <div className="f-container">
        <h1 id="title">
          GET IN TOUCH
        </h1>

        <div className="contact-icons">
         


                   {/* mail */}
          <div className="contact-icon-box">
            <span>
               <a  href="mailto:glorysamuel75@gmail.com"> <i className="fa-solid fa-envelope-open-text"></i>   </a>
            </span>
          </div>


                    {/* github */}
          <div className="contact-icon-box">
            <span>
            <i className="fa-brands fa-github"></i>
            </span>
          </div>


                     {/* linkedin */}
           <div className="contact-icon-box">
            <span>
            <i className="fa-brands fa-linkedin"></i>
            </span>
          </div>

                   {/* twitter */}
          <div className="contact-icon-box">
            <span>
            <i className="fa-brands fa-twitter"></i>
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
