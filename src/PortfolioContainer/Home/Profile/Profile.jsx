import React from "react";
import resume from '../../../assets/data/swanson-resume.pdf';
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.facebook.com/john.swanson2">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/johncswanson/">
                <i className="fa fa-linkedin-square"></i> 
              </a>
              <a href="https://www.instagram.com/johncswanson/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/jcswanson">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi I'm <span className="highlighted-text text-shadow-pop-tr">John
              </span>
             
               <h4 className="profile-job-title">a Software Developer</h4>
              
            </span> 
          </div>
          <div className="profile-details-role">
              <span className="profile-role-text">
                I build full stack applications using popular programming languages and frameworks. Learn about my capabilities below.         
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Contact Me</button>
            <a href={resume} download="swanson-resume.pdf">
              <button className="btn highlighted-btn">Resume</button>
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
