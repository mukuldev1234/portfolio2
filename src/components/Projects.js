import React from "react";
import './styles.css';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Developed a real-time school management system where users can add school names and manage their coordinates for efficient school management.",
      //image: "/assets/project1.jpg",  // Update the path to your image
      link: "https://github.com/mukuldev1234/School-Management",
    },
    {
      title: "Chatapp",
      description: "Developed a real-time chat application. The goal was to create a web-based chat platform where users can join chat rooms, exchange messages in real-time, and have a smooth and interactive chat experience using HTML, CSS, and JavaScript.",
      //image: "/assets/chatapp.jpg",  // Update the path to your image
      link: "https://github.com/mukuldev1234/Chatapp",
    },
    // Add more projects here
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
           
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
