import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import Leetcode from "../../assets/images/AboutMe/leetcode-logo.png";
import HackerRank from "../../assets/images/AboutMe/hackerrank-logo.png";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: (
      <div>
        <div className="about-me-quote">
          <p>
            ❝ The only way to do great work is to love what you do. If you
            haven't found it yet, keep looking. Don't settle. ❞ <br />
            - Steve Jobs 
          </p>
        </div>
        <p>
          My 7 word self-description: Team-builder, communicator, quick learner, and
          practicing problem solver.{" "}
        </p>
        <p>
         After years in quality control, sales, and customer service I found my passion in software.{" "}
        </p>
        <p>
          My tech journey began when I started watching SpaceX land their
          rockets on ocean barges. As a space and physics guy, I needed to know more.{" "}
        </p>
        <p>
          I learned how the flight control software enables
          the rocket to be directed with grid fins towards a GPS target to land.{" "}
        </p>
        <p>
          Intrigued, I bought an Arduino board to put on a drone and programmed it with basic Python code to fly between two waypoints and land. The drone executed my program and I became a passionate coder.{" "}
        </p>
        <p>
          This opened my eyes to the unlimited potential use cases. I decided to finish my degree in Information Systems at Penn State University.{" "}
        </p>
        <p>
          Since enrollment, I have learned several programming
          languages, built 5 portfolio projects, used GitHub
          version control, utilized Amazon Web Services.
        </p>
        <p>
          In the future, my goals are to contribute to open-source projects,
          collaborate with other developers, and add projects to my GitHub
          directory.{" "}
        </p>
        <p>
          Outside of coding I enjoy fishing, free diving, and fighting for the
          health of coastal kelp beds around Southern California.
        </p>
      </div>
    ),
    highlights: {
      bullets: [
        "Verbal and Written Communication",
        "Team Leadership and Time Management",
        "Detail and Quality Oriented",
        "Research, Development and Technical Writing",
        "Logic & Creative Problem Solving",
        "Comfortable in Fast-paced Corporate Environments",
        "Last Individual to Leave Every Day",
      ],
      heading: "What Qualities I Bring to a Company?",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"> </div> <span> {value} </span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container  screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading
          title={"About Me"}
          subHeading={"How and why I became a developer"}
        />
        <div className="about-me-card">
          <div className="about-me-profile"> </div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span> {SCREEN_CONSTANTS.highlights.heading} </span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <p>
                {" "}
                <strong> Click below to see my problem solving practice in action ⬇</strong>
              </p>
              <div className="cta-links">
              <a href="https://hackerrank.com/jcswanson" alt="HackerRank Link">
                <img
                  className="code-social hr"
                  src={HackerRank}
                  alt="HackerRank Logo"
                />
              </a>
              <a href="https://leetcode.com/jcswanson" alt="LeetCode Link">
                <img
                  className="code-social lc"
                  src={Leetcode}
                  alt="LeetCode link"
                />
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
