import "../App.css";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Skills from "../Components/Skills/Skills";
// import Bio from "../Components/Bio/Bio";
import AboutMe from '../About/aboutMe'
import ProjectData from "../Components/Liveprojects/ProjectData";
// import Footer from "../Components/Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="App">
      <div>
      <Header />


      </div>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<ProjectData />} />
            {/* <Route path="/footer" element={<Footer />} /> */}
          </Routes>


      {/* <Footer /> */}
      </section>
    </>
  );
}

export default Home;
