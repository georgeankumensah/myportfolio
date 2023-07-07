import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const socilaMediaLinks = [
    {
      name: "Github",
      link: "github.com",
      image: "https://img.icons8.com/fluent/48/000000/github.png",
    },
    {
      name: "Linkedin",
      link: "linkedin.com",
      image: "https://img.icons8.com/fluent/48/000000/linkedin.png",

    },
    {
      name: "Twitter",
      link: "twitter.com",
      image: "https://img.icons8.com/fluent/48/000000/twitter.png",
    },
  ];
  return (
    <nav>
      <span className="logo">Crawler</span>
      <div className="links">
        <button>Download Resume</button>
        <span>|</span>
        {socilaMediaLinks.map((link) => (
          <a href={link.link} target="_blank">
            <img src={link.image} alt={link.name} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
