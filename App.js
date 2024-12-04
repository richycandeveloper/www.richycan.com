import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Projects from "./components/project/projects";
import Contact from "./components/contacts/Contact";
import Socialmedia from "./components/socialmedia/Socialmedia";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <About/>
      <Projects/>
      <Contact></Contact>
      <Socialmedia></Socialmedia>
      <Footer></Footer>
    </div>
  );
}

export default App; // Ensure this line exists
