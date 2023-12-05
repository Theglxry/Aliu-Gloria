import "./Hero.css";
import Bio from "../Bio/Bio";

const Hero = () => {
  return (
    <section id="hero-section" className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* avatar */}
        {/* <div className="h-left"> */}
        {/* <div className="flexColStart img-container"></div> */}
        {/* <h1 className="flexCenter">Frontend developer 👋🏼</h1> */}
        {/* </div> */}
        {/* svg */}
        <div className="flexCenter hero-object">
          <img src="./rrrepeat.svg" alt="svg object" />
        </div>
      </div>

      <section>
        <Bio />
      </section>
    </section>
  );
};

export default Hero;
