import React from "react";
import "../../App.css"
import  "./Hero.css";
import homeImage from "../../assets/home/homeImage.png";
import { useTypewriter,Cursor } from "react-simple-typewriter";

     const Hero = () => {
        const [text] = useTypewriter({
            words: ['Frontend Development', 'Dynamic Devs'],
            loop: {},
            typeSpeed: 120,
            deleteSpeed: 80,
          });
      return (
        <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <h1 style={{margin:'50px'}} className="hero--section--title">
                Hi, we are {' '}
              <span style={{fontWeight: 'bold',color: 'plum'}} className="hero--section-title--color">
                {text}</span>
                <span style={{ color: 'purple' }}>
                  <Cursor cursorStyle='|' />
                   </span>
            </h1>
            <p className="hero--section-description">
            "Hello everyone! We are the 'Dynamic Devs' group, a team dedicated to<br/>
             exploring and developing React technology. Our journey begins today,<br/>
              and we are ready to learn and create together. Collaboration and innovation <br/>
              are at the core of our mission. Thank you for joining us, and we look<br/>
               forward to building a bright future together!"
            </p>
          </div>
           <a href="mailto:myemail@email.com" className="btn btn-primary"> Get In Touch</a>
        </div>
        <div className="hero--section--img">
          <img src={homeImage} alt="Hero Section" />
        </div>
      </section>
      );
    };
    export default Hero;
