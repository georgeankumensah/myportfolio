import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "Website development",
      image: "https://img.icons8.com/color/96/000000/web-design.png",
      description:
        "I can help you build a website for your business or personal use. I can also help you with the design of your website.",
    },
    {
      name: "Mobile App development",
      image: "https://img.icons8.com/color/96/000000/mobile-development.png",
      description:
        "I can help you build a mobile app for your business or personal use. I can also help you with the design of your mobile app.",
    },
    {
      name: "UI/UX design",
      image: "https://img.icons8.com/color/96/000000/ui-ux-design.png",
      description:
        "I can help you design a user interface for your website or mobile app. I can also help you with the user experience of your website or mobile app.",
    },
  ];
  return (
    <div className="skills">
      <h3>What I can help you with</h3>
      <div className="skillsContainer">
        {skills.map((skill) => (
          <div className="skill">
            <img src={skill.image} alt={skill.name} />
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
