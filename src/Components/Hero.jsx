import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero-main">
      <div className="hero-left">
        <div className="hero-left-text">
          <h1 className="animated-text">HI, I AM YASIN ALI</h1>
        </div>
        <div className="hero-p-b-a">
          <p>
            A Sydney-based front-end developer passionate about building
            accessible and user-friendly websites.
          </p>
          <div className="btn-icon">
            <button type="button" className="btn btn-primary">
              Contact
            </button>
            <a className="linkedin" href="">
              <FaLinkedinIn />
            </a>
            <a className="github" href="">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="img"></div>
    </div>
  );
}

export default Hero;
