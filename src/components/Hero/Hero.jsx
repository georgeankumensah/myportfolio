import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.css";
import me from "../../assets/me.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText">
         
         
          <span className="name">Hi, I'm<br/>George Anku-Mensah</span>
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Mobile App Developer",
                "UI/UX Designer",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "wrapper",
              cursorClassName: "cursor",
            }}
          />
          <div className="actions">
            <button className="hire">Hire Me</button>
            <button>View More</button>
          </div>
      </div>
      <img src={me} alt="George Anku-Mensah" className="heroImage" />
    </div>
  );
};

export default Hero;
