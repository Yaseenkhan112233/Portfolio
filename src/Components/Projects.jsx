import React from "react";
import { FaGithub } from "react-icons/fa";

function Project({ title, description, image, link, year, role }) {
  if (!title || !description || !image || !link || !year || !role) {
    console.error("Project props are missing. Please check your data.");
  }

  return (
    <>
      <div className="main-Projects-div">
        <div className="Image-div">
          <img
            className="image1"
            src={image}
            // src="../public/images/project1.jpg"
            alt={title}
          />
        </div>
        <div className="about-project">
          <div className="inner-about-project">
            <div className="inner-about-project-h2">
              <h2>{title}</h2>
            </div>
            <div className="inner-about-project-p">
              <p>{description}</p>
            </div>
            <div className="info bottomline">
              <p>Project Info</p>
            </div>
            <div className="year bottomline">
              <div>
                <p>Year</p>
              </div>
              <div>
                <p>{year}</p>
              </div>
            </div>
            <div className="Role bottomline">
              <div>
                <p>Role</p>
              </div>
              <div>
                <p>{role}</p>
              </div>
            </div>
            <div className="see-on-github">
              <a href={link}>See On Github</a>
              <p>
                <FaGithub />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
