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
        <h1 className="projectMainTitle">Projects</h1>
        <span className="projectMainDesc">
          Dive into 2 years of diverse web projects—React apps, Tailwind CSS,
          TypeScript, APIs, as well as UI/UX Designs.
        </span>
        <div className="toggleGroup">
          {toggle === "ALL" ? (
            <div className="projToggleButton activeButton">ALL</div>
          ) : (
            <div
              className="projToggleButton"
              onClick={() => handleToggle("ALL")}
            >
              ALL
            </div>
          )}

          <div className="divider"></div>

          <div
            className={`projToggleButton ${
              toggle === "API FETCHING" ? "activeButton" : ""
            }`}
            onClick={() => handleToggle("API FETCHING")}
          >
            API FETCHING
          </div>
          <div className="divider"></div>

          <div
            className={`projToggleButton ${
              toggle === "BUSINESS WEB" ? "activeButton" : ""
            }`}
            onClick={() => handleToggle("BUSINESS WEB")}
          >
            BUSINESS WEB
          </div>
          <div className="divider"></div>

          <div
            className={`projToggleButton ${
              toggle === "IN DEVELOPMENT" ? "activeButton" : ""
            }`}
            onClick={() => handleToggle("IN DEVELOPMENT")}
          >
            IN DEVELOPMENT
          </div>
        </div>
        <div className="projCardContainer">
          {toggle === "ALL" &&
            projects.map((project, num) => (
              <ProjectCard project={project} key={num} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
