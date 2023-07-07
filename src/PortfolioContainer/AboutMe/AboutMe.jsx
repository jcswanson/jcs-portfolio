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
            ❝ GIS is waking up the world to the power of geography, this 
            science of integration, and has the framework for creating a 
            better future. ❞ <br />
            - Jack Dangermond
          </p>{" "}
        </div>
        <p>
        A recent graduate of Penn State University in Information Science and Technology,
        I embarked on a career transition from Quality Control in aerospace to the dynamic
        field of IT. With a passion for space sciences, satellites, and
        geography, my journey into the tech world was sparked by witnessing SpaceX's
        groundbreaking rocket landings in 2016. This groundbreaking event made me realize
        the potential of cheaper transportation on future remote sensing satellites and technologies{" "}
        </p>
        <p>
        I made the decision to return to school at Penn State. In May 2023, I successfully 
        graduated with a focus on Information Systems Development and earned an 
        Undergraduate Certificate in Security and Risk Analysis.{" "}
        </p>
        <p>
        Currently, I am working as an intern Project Manager for the USGS FGDC 
        GeoPathways program, where I oversee a team of 30+ interns
        participating in the Open Geospatial Consortium's 2023 Disaster Pilot Initiative. In this role
        I've worked closely with our sponsors ESRI, Amazon, Microsoft, Voyager Search and 
        partnered with various other federal agencies.{" "}
        </p>
       
        <p>
        Beyond my academic pursuits, I find immense joy in engaging in various activities. 
        Free diving, baseball, ice hockey, and spearfishing in the captivating kelp beds 
        off the coast of South Los Angeles are among my favorite pastimes.{" "}      
        </p>
        <p>
        It is through these experiences, particularly my encounters with the mesmerizing beauty 
        of the kelp beds, that my desire to utilize GIS and software to support private industry 
        and governmental efforts in conserving our oceans and their precious ecosystems has been ignited.{" "}        
        </p>
        <p>
        As I continue to develop my skills and gain valuable experience, I am eagerly seeking 
        full-time employment opportunities that align with my passion for GIS/software 
        development, and making a positive impact on our global environment.{" "}
        </p>
        <p>
        With a solid educational foundation, a drive to excel, and a fervent commitment to the 
        conservation of our natural resources, I am poised to contribute my expertise and 
        dedication to organizations that share my vision of a data-driven sustainable future.{" "}
        </p>
      
      </div>
    ),
      highlights: {
          bullets: [
              "Verbal and Written Communication",
              "Team Leadership & Collaboration",
              "Detail-Oriented Decision Making",
              "Group Motivation",
              "Conflict Management",
              "Adaptation to Changing Requirements",
              "Time Management",
              "Critical Thinking & Problem Solving"
          ],
          heading: "Top Soft Skills",
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
                    subHeading={"How I got here"}
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
                      {/*   <div className="about-me-options">
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
                        </div>  */}
                    </div>
                </div>
            </div>
        </div>
    );
}
