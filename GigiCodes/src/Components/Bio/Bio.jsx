import "./Bio.css";

const Bio = () => {
  return (
    <section id="bio-section" className="about-wrapper">
      <div className="about-container">
        <h1> About Me : </h1>
        <p>
          {/* Hi there, I&apos;m Gloria, a growing web developer with a passion for
          all things technology. I&apos;m excited about the endless
          possibilities that the industry offers, and I&apos;m eager to learn as
          much as I can. My goal is to become a successful web developer and
          contribute to the ever-growing digital landscape. I&apos;m constantly
          seeking new challenges and opportunities to expand my skills. So feel
          free to reach out and connect with me! */}
          Hi there, I&apos;m Gloria , an enthusiastic and dedicated aspiring web developer passionate about
          leveraging cutting-edge technologies to craft immersive and user-
          centric digital experiences. Proficient in front-end development, with
          a keen interest in React JS and JavaScript, aiming to contribute
          innovative solutions to the ever-evolving landscape of web
          technologies with the passion for continuous learning
        </p>

        <div className="btn-wrapper">
          <button className="button btn-bg">
            <a href="">Get in touch </a>{" "}
          </button>
          <button className="button btn-br"> Download CV </button>
        </div>
      </div>
    </section>
  );
};

export default Bio;
