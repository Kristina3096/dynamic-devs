import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css";

function NavigationBar() {
  const [activeLink, setActiveLink] = useState("/");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <Navbar className="navbar-custom" expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand href="#">
          <div className="d-flex align-items-center ml-auto">
            <img
              src="./img/logo.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Dynamic Devs Logo"
            />
            <div className="ml-2">Dynamic Devs</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto">
            <Nav.Link>
              <Link
                to="heroSection"
                smooth={true}
                duration={500}
                className={
                  activeLink === "heroSection"
                    ? "active-link  nav-link"
                    : "nav-link"
                }
                onSetActive={handleSetActive}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="aboutUs"
                smooth={true}
                duration={500}
                className={
                  activeLink === "aboutUs"
                    ? "active-link  nav-link"
                    : "nav-link"
                }
                onSetActive={handleSetActive}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="mySkills"
                smooth={true}
                duration={500}
                className={
                  activeLink === "mySkills"
                    ? "active-link  nav-link"
                    : "nav-link"
                }
                onSetActive={handleSetActive}
              >
                Experience
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="project"
                smooth={true}
                duration={500}
                className={
                  activeLink === "project"
                    ? "active-link  nav-link"
                    : "nav-link"
                }
                onSetActive={handleSetActive}
              >
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={
                  activeLink === "contact"
                    ? "active-link  nav-link"
                    : "nav-link"
                }
                onSetActive={handleSetActive}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
