import "./Skills.css";

const Skills = () => {
  return (
    <section className="s-wrapper">
      {/* <h1>My skills</h1> */}



      <div className="paddings innerWidth flexCenter s-container">    

      <div className="skills"> 
      <img src="./reactjs.png" alt="react" width={'100%'} />
      </div> 

      <div className="skills"> 
        <img src="./js.png" alt="javaScript"  width={'100%'} />
        </div> 


        <div className="skills"> 
        <img src="./css-3.png" alt="css3"  width={'100%'} />
        </div> 


        <div className="skills"> 
        <img src="./html.png" alt="html" width={'100%'}  />
        </div> 



        <div className="skills"> 
        <img src="./bootstrap.png" alt="bootstrap"  width={'100%'} />
        </div> 
        {/* <img src="./js.png" alt="" /> */}
      </div>


    </section>
  );
};

export default Skills;
