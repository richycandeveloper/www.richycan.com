import React, { useState, useEffect } from "react";
import myImage from "../../assets/Richard.jpg"; 

import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const typewriterText = "Welcome to my Portfolio, i'm passionate web developer";

  useEffect(() => {
    if (index < typewriterText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + typewriterText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="home">
      <div className="home-container">
        <div className="home-content">
          <h1>
            <span className="typewriter">{text}</span>
          </h1>
          <p>
            I'm a passionate web developer dedicated to building interactive and functional web solutions.
            Explore my journey, projects, and skills as we embark on a digital adventure together!
          </p>
          <a href="#projects" className="btn-primary">Explore My Work</a>
        </div>
        <div className="home-image">
        <img src={myImage} alt="Richycandeveloper" />
        </div>
      </div>
    </section>
  );
};

export default Home;
