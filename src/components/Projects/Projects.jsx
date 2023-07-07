import React from "react";
import "./projects.css";

const Projects = () => {
  let projects = [
    {
      name: "Project 1",
      image:
        "https://crowdiate.com/wp-content/uploads/2018/02/Project-Thumbnail.png",
      description:
        "I can help you build a website for your business or personal use. I can also help you with the design of your website.",
    },
    {
      name: "Project 2",
      image:
        "https://crowdiate.com/wp-content/uploads/2018/02/Project-Thumbnail.png",
      description:
        "I can help you build a mobile app for your business or personal use. I can also help you with the design of your mobile app.",
    },
    {
      name: "Project 3",
      image:
        "https://crowdiate.com/wp-content/uploads/2018/02/Project-Thumbnail.png",
      description:
        "I can help you design a user interface for your website or mobile app. I can also help you with the user experience of your website or mobile app.",
    },
  ];
  return (
    <div className="projects">
      <h3>
        All creative work from chosen
        <br />
        Projects.
      </h3>
      <p>Here are a few Projects i have worked on.</p>

      <div className="projectsContainer">
        {projects.map((project) => (
          <div className="project">
            <img src={project.image} alt={project.name} />
            <div>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <span>Want to see more?</span>
        <button>
          Visit My Github
          <img
            src="https://img.icons8.com/fluent/48/000000/github.png"
            alt="github
"
          />
        </button>
      </div>
    </div>
  );
};

export default Projects;
