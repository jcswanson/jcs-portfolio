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
          </p>{" "}
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
          This opened my eyes to the unlimited potential use cases. I now am finishing my degree in Information Sceience & Tech with the Information Systems Development option at Penn State University.{" "}
        </p>{" "}
        <p>
          Since enrollment, I have become proficient in several programming
          languages, developed 5 portfolio projects, utilized GitHub
          version control, and successfully integrated Amazon Web Services into some of my projects.{" "}
        </p>
        <p>
          In the near future, my goals are: contribute to open-source projects,
          collaborate with other developers, and continue to improve my DSA skills through LeetCode and HackerRank.{" "}
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
              "Team Building and Time Management",
              "Eye for Detail and Quality Inspection",
              "Topic Research and Technical Writing",
              "Critical Thinking and Problem Solving",
              "Adapting to Fast Evolving Environments",
              "Quick to Learn New Subjects",
          ],
          heading: "Intrinsic Work Qualifications",
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
                    subHeading={"Why I became a developer?"}
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
                                Click below to see my problem solving practice in action 👇
                            </p>
                            <div className="cta-links">
                                <a href="https://hackerrank.com/jcswanson" alt="HackerRank Link" target="_blank" rel="noreferrer">
                                    <img
                                        className="code-social hr"
                                        src={HackerRank}
                                        alt="HackerRank Logo"
                                    />
                                </a>
                                <a href="https://leetcode.com/jcswanson" alt="LeetCode Link" target="_blank" rel="noreferrer">
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
