import React from "react";
import Project from "./Projects";

function FeaturedProjects() {
  const projects = [
    {
      image: "../public/images/project1.jpg",
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      year: "2023",
      role: "Front-end Developer",
      link: "https://github.com/Yaseenkhan112233?tab=repositories",
    },
    {
      image: "../public/images/a.png",
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      year: "2023",
      role: "Front-end Developer",
      link: "https://github.com/Yaseenkhan112233?tab=repositories",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <div className="featured-projects">
        <div>
          <h1>Featured Projects</h1>
        </div>
        <div>
          <p>
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>
      </div>
      {projects.map((data, index) => (
        <Project
          key={index}
          title={data.title}
          description={data.description}
          image={data.image}
          link={data.link}
          year={data.year}
          role={data.role}
        />
      ))}
    </>
  );
}

export default FeaturedProjects;
