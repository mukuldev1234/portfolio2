import React from "react";
import './styles.css';
import profilePic from "./mk.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Hero Section */}
      <div className="card hero-card">
        <div className="profile-picture">
          <img src={profilePic} alt="Your Profile" />
        </div>
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am a passionate web developer skilled in creating responsive and
          user-friendly websites. Let's explore my work!
        </p>
      </div>

      {/* Experience Section */}
      <div className="card experience-card">
        <h2>Experience</h2>
        <div className="card-content">
          <div className="card-item">
            <h3>Software Developer Intern</h3>
            <p><strong>Kirabiz Technologies</strong> | Feb - May 2024</p>
            <p>
              Developed web applications and optimized internal tools,
              enhancing user experience and efficiency. Worked with front-end
              and back-end technologies including React and Node.js. Created a custom website.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="card education-card">
        <h2>Education</h2>
        <div className="card-content">
          <div className="card-item">
            <h3>Bachelor of Technology (B.Tech)</h3>
            <p><strong>Manav Rachna International Institute of Research And Studies</strong> | 2021 - 2024</p>
            <p>
              Specialized in software development and web technologies, with
              several hands-on projects focusing on front-end and back-end
              development.
            </p>
          </div>
          <div className="card-item">
            <h3>Diploma</h3>
            <p><strong>Ambedkar Institute Of Technology</strong> | 2016 - 2019</p>
            <p>
              Information Technology Enabled Services & Management (ITESM) is a diploma course that teaches how to use information technology to increase an organization's efficiency.
            </p>
          </div>
          <div className="card-item">
            <h3>Certification in Web Development</h3>
            <p><strong>Online Course</strong></p>
            <p>
              Completed an online certification in web development covering
              HTML, CSS, JavaScript, Express, MongoDB, and React.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="card skills-card">
        <h2>Skills</h2>
        <div className="card-content">
          <ul className="skills-list">
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js & Express</li>
            <li>MongoDB</li>
            <li>Git & GitHub</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
