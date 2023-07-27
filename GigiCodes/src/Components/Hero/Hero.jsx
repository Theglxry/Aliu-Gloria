import "./Hero.css";






const Hero = () => {
  return (
    <section className="hero-wrapper">
      {/* <Header /> */}

      <div className="paddings innerWidth flexCenter hero-container">
        {/* avatar */}
        <div className="h-left">
          <div className="flexColStart img-container">
            {/* <img src='./my-img.jpeg' alt='avatar' /> */}
          </div>
          <h1 className="flexCenter">Frontend developer 👋🏼</h1>
        </div>
      



        {/* svg */}
        <div className="flexCenter hero-object">
          <img src="./rrrepeat.svg" alt="svg object" />
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
