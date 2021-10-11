import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="back">
        <div className="back3">
          <img src="images/FB_IMG_1624736522797.jpg" alt="" />
        </div>
        <div className="back2">
          <p className="greet">Hello, I am</p>
          <h1>EDON-UWE </h1>
          <h1>OGHENEKEVWE</h1>
          <p className="skill"> Front-End Developer</p>

          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/oghenekevwe-edon-uwe-406652129"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/oghenekevwe27"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
