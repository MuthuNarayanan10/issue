import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import twitter from "../assests/twitter.svg";
import linkedin from "../assests/linkedin.svg";
import facebook from "../assests/facebook.svg";
import mail from "../assests/mail.png";
import call from "../assests/call.png";
import icon from "../assests/icon.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    console.log("This");
    this.setState((prevState) => ({
      isToggle: !prevState.isToggle,
    })); /*  */
  }
  render() {
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
        <nav class="navbar navbar-expand-lg p-0">
          <div className="container-fluid p-0">
            <Link to="/" className="nav-link navbar-brand">
              <img src={logo} className="log" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.toggle}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class={
                "collapse navbar-collapse " +
                (this.state.isToggle ? "show" : " ")
              }
              id="navbarNav"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/course" className="nav-link">
                    Courses
                  </Link>
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
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

<nav class="navbar navbar-expand-lg p-0">
  <div className="container-fluid p-0">
    <Link to="/" className="nav-link navbar-brand">
      <img src={logo} className="log" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      onClick={this.toggle}
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class={"collapse navbar-collapse " + (this.state.isToggle ? "show" : " ")}
      id="navbarNav"
    >
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/aboutus" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/course" className="nav-link">
            Courses
          </Link>
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
    </div>
  </div>
</nav>;
