import React from "react";
import Ability from "./components/Ability/Ability";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./templates/Footer/Footer";


function App() {
  
  return (
    <>
      <Home />
      <About />
      <Ability />
      <Projects />
      <Footer/>
    </>
  );
}

export default App;
