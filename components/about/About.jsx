import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`about ${isVisible ? "fade-in" : ""}`} id="about">
      <div className="container">
        <h2>
          About <span>me</span>
        </h2>
        <p className="about-text">
          Hi, I'm Richycandeveloper, a passionate web developer dedicated to crafting seamless and functional web applications.
          I specialize in front-end development with expertise in React, HTML, CSS, and JavaScript, and I'm also exploring backend
          technologies to deliver full-stack solutions.
        </p>
        <div className="skills">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>React.js</li>
            <li>HTML & CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>Node.js & Express.js</li>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
