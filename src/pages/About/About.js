import "./About.css"
import "../../App.css"
import usImage from "../../assets/about/usImage.png"
import { Link } from "react-router-dom";

 function AboutMe() {
  return (
    <section id="aboutUs" className="about--section">
      <div className="about--section--img">
        <img src={usImage} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Us</h1>
          <p className="hero--section-description">
          Dynamic Devs is a group of enthusiastic and creative developers determined
           to make their mark in the world of technology. Combining youthful energy 
           with a great passion for coding, we create innovative and exciting projects
            that reflect our dedication and teamwork. Each member of the team brings
             unique skills and ideas, contributing to the collective success of the group...
          </p>
          <div>
          <button className="btn btn-primary" >
            <Link  to="/aboutus" className="no-underline">
            See more
            </Link>
            </button>
        </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
