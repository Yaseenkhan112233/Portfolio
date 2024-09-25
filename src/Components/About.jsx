import React from "react";

function About() {
  return (
    <div className="about-Main-div">
      <div className="aboutme-text">
        <h1>About Me</h1>
      </div>
      <div className="aboutme-paragrapgh">
        <div className="about-large-text">
          <h4 className="about-large-text">
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.{" "}
          </h4>
        </div>
        <div className="about-para">
          <p>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
          </p>

          <a href="">More About Me</a>
        </div>
      </div>
    </div>
  );
}

export default About;
