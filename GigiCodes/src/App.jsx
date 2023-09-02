// import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Bio from "./Components/Bio/Bio";
import ProjectData from "./Components/Liveprojects/ProjectData";
import Footer from "./Components/Footer/Footer";








function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Bio />
      <ProjectData />
      <Footer />


      {/* animation */}
      {/* <div className="area">
        <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>       */}
    </div>
  );
}

export default App;
