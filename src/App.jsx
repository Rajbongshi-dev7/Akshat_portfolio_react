import React from "react";
import "./App.css";
import HeroArea from "./components/Heroarea/HeroArea";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Navbar from "./components/Navbar/Navbar";
import ProjectsArea from "./components/ProjectsArea/ProjectsArea";
import StatusRibbon from "./components/StatusRibbon/StatusRibbon";
import About from "./components/About/About";
function App() {
  return (
    <>
      <Navbar />
      <HeroArea />
      <About />
      <StatusRibbon />
      <ProjectsArea />
      <MobileMenu />
    </>
  );
}

export default App;
