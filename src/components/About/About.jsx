import React from "react";

import "./About.css";
import placeholder from "../../assets/placeholder.png";

const About = () => {
  const aboutText =
    "I am a full stack web developer with a passion for building beautiful and functional user interfaces. I am a self-taught developer with a background in UI/UX design and a passion for learning new technologies. I am currently looking for a full-time position as a front-end developer.";
  const experience = [
    {
      title: "years of experience",
      value: 2,
    },
    {
      title: "projects completed",
      value: 10,
    },
  ];
  return (
    <div className="about">
      <div className="imageClass">
        <img src={placeholder} alt="profileImage" className="profileImage" />
        <div className="profileImageShadow"></div>
      </div>
      <div className="aboutText">
        <h3>A bit more about me</h3>
        <p>{aboutText}</p>
        <div className="experience">
          {experience.map((exp) => (
            <div className="experienceItem">
              <h4>{exp.value}</h4>
              <p>{exp.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
