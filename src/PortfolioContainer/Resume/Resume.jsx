import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            {/* <div className="heading-bullet"></div> */}
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
            ) : (
                <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    {
      title: "Education",
      icon: <FaIcons.FaUserGraduate />,
    },
    {
      title: "Work History",
      icon: <FaIcons.FaBusinessTime />,
    },
    {
      title: "Soft Skills",
      icon: <FaIcons.FaUsersCog />,
    },
    {
      title: "Tech Skills",
      icon: <FaIcons.FaFileCode/>,
    },
    {
      title: "Interests",
      icon: <FaIcons.FaSpaceShuttle />,
    },
  ];

  // ESTABLISH LEVEL FOR PROGAMMING LANG SKILL PERCENT
  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 80 },
    { skill: "Spring Boot", ratingPercentage: 70 },
    { skill: "HTML/CSS", ratingPercentage: 70 },
    { skill: "ArcGIS Online", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 60 },
    { skill: "JavaScript", ratingPercentage: 50 },
    { skill: "ReactJS", ratingPercentage: 40 },
    { skill: "SQL", ratingPercentage: 40 },
  ];
  const employment = [
   {
      business: "Federal Geographic Data Committee",
      duration: { fromDate: "2022", toDate: "Current" },
      description:
          "As a program manager, I oversaw a Fire Science team of 34 interns and developed a framework to bring together partners, mobilize data, technical infrastructure, and modeling capacities to develop innovative products and services that responded to the Open Geospatial Consortium's 2023 Disaster Pilot Initiative.",
      jobTitle: "Program Manager",
    },
    {
      business: "UBER / LYFT",
      duration: { fromDate: "2018", toDate: "Current" },
      description:
          "Communicating with a diverse range of customers to deliver welcoming service during 40+ weekly rides to ensure customer comfortability.",
      jobTitle: "Rideshare Driver",
    },
    {
      business: "PACIFIC COAST HOBBIES",
      duration: { fromDate: "2016", toDate: "2018" },
      description:
          "Earned 2 Top Monthly Sales awards by demonstrating excellent customer service. Programmed customers' drone flight controllers.",
      jobTitle: "Aircraft/Drone Sales",
    },
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
          heading={"PENN STATE UNIVERSITY"}
          subHeading={
            "B.S. Information Sciences & Technology: Information Systems Development"
          }
          fromDate={"2018"}
          toDate={"2023"}
          description={
            "GPA: 3.56 | HONORS: Dean’s List and Academic Grant Recipient (2020-Present). For a detailed look at my coursework visit my LinkedIn profile's Education section."
          }
      />
      <ResumeHeading
          heading={"PENN STATE UNIVERSITY"}
          subHeading={"UG Certificate Security & Risk Analysis"}
          fromDate={"2021"}
          toDate={"2023"}
          description={
            "GPA: 3.56 | COURSES: Cybersecurity, Identity & Access Management, Data Governance"
          }
      />
      <ResumeHeading
          heading={"WEST TORRANCE HS"}
          subHeading={"High School Diploma"}
          fromDate={"2000"}
          toDate={"2004"}
          description={
            "GPA: 3.0 | ACTIVITIES: Varsity Baseball (2002-2004), Freshman Football (2000)."
          }
      />
    </div>,
    /* Employment */
    <div className="resume-screen-container" key="employment">
      {employment.map((employment, index) => (
          <ResumeHeading
              key={index}
              heading={employment.business}
              subHeading={employment.jobTitle}
              description={employment.description}
              fromDate={employment.duration.fromDate}
              toDate={employment.duration.toDate}
          />
      ))}
    </div>,
    /* SOFT SKILLS */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
            subHeading={"LEADERSHIP & TEAMWORK"}
            description={
              "Works well in groups and can rise to lead if there is an absence of leadership."
            }
        />
        <ResumeHeading
            subHeading={"RESEARCH & DEVELOPMENT"}
            description={
              "Can sort through information and only extract the important concepts. Able to take that research and solve the issue at hand."
            }
        />
        <ResumeHeading
            subHeading={"DETAIL-ORIENTED & RESULTS-DRIVEN"}
            description={
              "Can spot areas that need improvement quickly while not getting hung up on unimportant details when short on time."
            }
        />
        <ResumeHeading
            subHeading={"CRITICAL THINKING"}
            description={
              "Approaches problems from various angles with a well-rounded brain because of the variety of past jobs and problems solved."
            }
        />
        <ResumeHeading
            subHeading={"VERBAL & WRITTEN COMMUNICATION"}
            description={
              "3 years of technical writing at DASCO Engineering. Developed verbal communiction skills from 10+ years in sales and rideshare."
            }
        />
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
              >
             <span className="percentage-bar-text">
               {skill.ratingPercentage}%
             </span>
              </div>
            </div>
          </div>
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
          subHeading="ASTRONOMY"
          description="As a kid growing up I dreamed of being an astronaut and had my own telescope, which I used to draw maps of the moon's craters. Nowadays, I have my own professional CMOS astronomical imaging camera that I use to image galaxies and nebulae."
      />
      <ResumeHeading
          subHeading="FREE DIVING"
          description="Holding my breath while diving to 80 feet in a magical kelp forest is exhilirating and the closest you can get to being on another planet. It is so quiet and serene without scuba tanks. I also clean trash floating in the kelp and occasionally spearfish when giant white sea bass are around."
      />
      <ResumeHeading
          subHeading="HOCKEY & BASEBALL"
          description="I have played organized team sports all my life. Hockey and Baseball are my favorite sports because of the team work involved. I love how a mediocre team can beat a talented team as long as they are a cohesive team working together. My favorite teams are the Los Angeles Kings and Dodgers."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
        <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
        >
          {/* change icon color when bullet is selected */}
          <IconContext.Provider
              value={
                index === selectedBulletIndex
                    ? { color: "var(--peach)" }
                    : { color: "var(--light-tan)" }
              }
          >
            <div className="bullet-logo">{bullet.icon}</div>
          </IconContext.Provider>
          <span
              style={
                index === selectedBulletIndex
                    ? { color: "var(--peach)" }
                    : { color: "var(--charcoal)" }
              }
              className="bullet-label"
          >
          {bullet.title}
        </span>
        </div>
    ));
  };

  const getResumeScreens = () => {
    return (
        <div
            style={carousalOffsetStyle.style}
            className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
      <div
          className="resume-container screen-container fade-in"
          id={props.id || ""}
      >
        <div className="resume-content">
          <ScreenHeading
              title={"Resume"}
              subHeading={"Important highlights of my skills/experience"}
          />
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>

            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>
  );
};

export default Resume;
