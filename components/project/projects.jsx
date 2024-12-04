import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "Hotel booking site.",
      link: "https://hotel-boking-pi.vercel.app/",
    },
    {
      title: "Ezzy school calculator",
      description: "A statistical calculator.",
      link: "https://calculator-ezzy-skul.vercel.app/",
    },
    {
      title: "Clothing brand",
      description: "A blogging platform with a RESTful API and dynamic user interface.",
      link: "https://lizziy-store-landing-page.vercel.app",
    },
    {
      title: "Barbing Salon App",
      description: "Onlin barbing store.",
      link: "https://barbershope-delta.vercel.app/",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <div
              className={`project-card ${hoveredIndex === index ? "hovered" : ""}`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
