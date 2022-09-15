import React from "react";
import { TOTAL_SCREENS } from "../../../Utilities/commonUtils";
import "./Profile.css";

export default function Profile() {
  const scrollToContactMe = () => {
    let screenComponent = document.getElementById(TOTAL_SCREENS[5].screen_name);
    if (!screenComponent) return;
    screenComponent.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="cols-icon">
                <a href="https://www.facebook.com/john.swanson2" alt="facebook link" target="_blank"rel="noopener" >
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/johncswanson/"alt="linkedin link" target="_blank"rel="noopener">
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="https://www.instagram.com/johncswanson/"alt="instagram link" target="_blank"rel="noopener">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://twitter.com/the_jcswanson/"alt="twitter link" target="_blank" rel="noopener">
                  <i className="fa fa-twitter-square"></i>
                </a>
                <a href="https://github.com/jcswanson"alt="github link" target="_blank" rel="noopener">
                  <i className="fa fa-github-square"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi I'm{" "}
              <span className="highlighted-text text-shadow-pop-tr">John</span>
              <h4 className="profile-job-title">Software Developer</h4>
            </span>
            </div>
            <div className="profile-details-role">
            <span className="profile-role-text">
              I build applications addressing important problems surrounding users in everyday life. I love coding with Java, Spring Boot, and Python.
            </span>
            </div>
            <div className="profile-options">
              <button
                  onClick={() => scrollToContactMe()}
                  className="btn primary-btn">
                Hire Me
              </button>
              <a href="https://drive.google.com/file/d/1SSeVXdLuiVrwTG6KyVRWCsEzObrqmcZB/view?usp=sharing" target="_blank" rel="noreferrer" alt="jcswanson resume link">
                <button className="btn highlighted-btn">My Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
  );
}
