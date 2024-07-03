import React from "react";
import "./Projects.scss";
import { useState } from "react";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/data";

const Projects = () => {
  const [toggle, setToggle] = useState("ALL");

  const handleToggle = (category) => {
    setToggle(category);
  };

  return (
    <div className="projectContainer">
      <div className="projectWrapper">
        <div className="projectMainTitle">Projects</div>
        <div className="projectMainDesc">
          Explore from React web apps and TypeScript to APIs, UI/UX designs,
          IoT, and networking solutions.
        </div>
        <div className="toggleGroup">
          {["ALL", "WEB APP", "UI/UX", "IN DEVELOPMENT", "OTHERS"].map(
            (category) => (
              <>
                <div
                  className={`projToggleButton ${
                    toggle === category ? "activeButton" : ""
                  }`}
                  onClick={() => handleToggle(category)}
                >
                  {category}
                </div>
                <div className="divider"></div>
              </>
            )
          )}
        </div>
        <div className="projCardContainer">
          {toggle === "ALL" &&
            projects.map((project, num) => (
              <ProjectCard project={project} key={num} />
            ))}
          {projects
            .filter((item) => item.category.includes(toggle))
            .map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
