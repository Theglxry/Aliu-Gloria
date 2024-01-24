import "./Hero.css";
import Bio from "../Bio/Bio";

const Hero = () => {
  return (
    <section id="hero-section" className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexCenter hero-object">
          <img src="./rrrepeat.svg" alt="svg object" />
        </div>
      </div>

      <section>
        <Bio />
      </section>


      automatic slides of technologies icon
      
    </section>
  );
};

export default Hero;
