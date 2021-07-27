import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import twitter from "../assests/twitter.svg";
import linkedin from "../assests/linkedin.svg";
import facebook from "../assests/facebook.svg";
import mail from "../assests/mail.png";
import call from "../assests/call.png";
import icon from "../assests/icon.png";
import { Navbar, Nav, Container } from "react-bootstrap";
export const isMobileOrWeb = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (width > 767) {
    return false;
  } else {
    return true;
  }
};
export default function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="NavContainer">
    <div className="topnav">
      <ul className="social">
        <li>
          <a href="">
            <img src={twitter} className="logohead" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/develearn-technologies">
            <img src={linkedin} className="logohead" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/develearntechnologies">
            <img src={facebook} className="logohead" />
          </a>
        </li>
        <li>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@develearn.in&su=SUBJECT&body=BODY&bcc=contact@develearn.in">
            <img src={mail} className="logohead" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={call} className="logohead" />
            <span className="mobile">
              <span>+91 9967118298</span>
              <span>Give us a call</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <Navbar expand="lg" className="navbar p-0">
      <Container className="container-fluid p-0">
        <Navbar.Brand href="/" className="nav-link navbar-brand">
          {" "}
          <img src={logo} className="log" />
        </Navbar.Brand>
  
        {isMobileOrWeb() &&      
        <>    <div className="hamburger">     
     <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
      </div>
        <div className="mobile-menu">
      <Navbar.Collapse
          id="basic-navbar-nav"
          className="collapse navbar-collapse"
        >
          <Nav className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item drop-down-menu">
                <Link to="/course" className="nav-link">
                  Courses
                </Link>
                <ul>
                  <li>1</li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/xr-learning" className="nav-link">
                  xr learning
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
     
      </div>
      </>}
  
    {!isMobileOrWeb() &&    <Navbar.Collapse
          id="basic-navbar-nav"
          className="collapse navbar-collapse"
        >
          <Nav className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item drop-down-menu">
                <Link to="/course" className="nav-link">
                  Courses
                </Link>
                <ul>
                  <li>1</li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/xr-learning" className="nav-link">
                  xr learning
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
     } </Container>
    </Navbar>
  </div>

  )
}
