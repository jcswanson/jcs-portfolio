import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons';
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
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " - " + props.toDate}
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
      title: 'Education',
      icon: <FaIcons.FaUserGraduate />,
    },
    {
      title: 'Programming Skills',
      icon: <FaIcons.FaLaptopCode   />,
    },
    {
      title: 'Soft Skills',
      icon: < FaIcons.FaRegChartBar/>,
    },
    {
      title: 'Work History',
      icon: <FaIcons.FaSitemap/> ,
    },
    {
      title: 'Interests',
      icon: <FaIcons.FaUserAstronaut />,
    },
  ];

  // ESTABLISH LEVEL FOR PROGAMMING LANG SKILL PERCENT
  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 80 },
    { skill: "Spring Boot", ratingPercentage: 70 },
    { skill: "HTML/CSS", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 60 },
    { skill: "JavaScript", ratingPercentage: 50 },
    { skill: "ReactJS", ratingPercentage: 40 },
    { skill: "SQL", ratingPercentage: 40 },

  ];
  const employment = [
    {
      business: "UBER / LYFT",
      duration: { fromDate: "MAR 2018", toDate: "CURRENT" },
      description:
        "Drive tourists through the Palm Springs area, communicating with a diverse range of customers. Deliver welcoming service during 40+ weekly rides to ensure customer satisfaction and receive five-star ratings.",
      jobTitle: "Rideshare Driver",
    },
    {
        business: "PACIFIC COAST HOBBIES",
      duration: { fromDate: "JAN 2016", toDate: "JAN 2018" },
      description:
        "Earned 2 Top Monthly Sales awards by demonstrating excellent customer service when addressing customer questions and concerns, programmed customer flight controllers, and repaired drone damage resulting in 6+ five-star online ratings.",
        jobTitle:
        "Aircraft/Drone Sales",
    },
    {
        business: "DASCO ENGINEERING CORPORATION",
      duration: { fromDate: "AUG 2012", toDate: "JUL 2014" },
      description:       
       "Completed 120+ manufacturing reports and equipped 50+ planes by inspecting landing gear assembly of Boeing 787s and logging part measurements to confirm quality. Streamlined client audit process by restructuring and maintaining the FAI report's database.",
        jobTitle:
        "Quality Control Technician",
    },
  ];
 

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"PENNSYLVANIA STATE UNIVERSITY"}
        subHeading={"B.S. Information Science & Technology: Information Systems Development"}
        fromDate={"AUG 2018"}
        toDate={"DEC 2022"}
        description={"GPA: 3.56 | HONORS: Dean’s List and Academic Grant Recipient (2020-Present). For a detailed look at my coursework visit my LinkedIn profile's Education section."}
      />
      <ResumeHeading
        heading={"EL CAMINO COLLEGE"}
        subHeading={"65 Credits in Mechanical Engineering"}
        fromDate={"SEP 2004"}
        toDate={"JUN 2008"}
        description={"GPA: 3.33 | ACTIVITY: Baseball (Summer 2005), Attended on and off, in between jobs and caretaking of my grandmother."}
      />
      <ResumeHeading
        heading={"WEST TORRANCE HIGH SCHOOL"}
        subHeading={"High School Diploma, General Studies"}
        fromDate={"SEP 2000"}
        toDate={"JUN 2004"}
        description={"GPA: 3.0 | ACTIVITY: Varsity Baseball (2002-2004), Freshman Football (2000)."}
      />

    </div>,
/* PROGRAMMING SKILLS */
<div
className="resume-screen-container programming-skills-container"
key="programming-skills"
>
{programmingSkillsDetails.map((skill, index) => (
  <div className="skill-parent" key={index}>
    <div className="heading-bullet"></div>
    <span>{skill.skill}</span>
    <div className="skill-percentage">
      <div
        style={{ width: skill.ratingPercentage + "%" }}
        className="active-percentage-bar"
      ><span className="percentage-bar-text">{skill.ratingPercentage} %</span></div>
    </div>
  </div>
))}
</div>,
    /* SOFT SKILLS */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"LEADERSHIP & TEAMWORK"}
          subHeading={"Works well in groups and can rise to lead if there is an absence of leadership."}
      
        />
        <ResumeHeading
          heading={"PRE-DEVELOPMENT RESEARCHER"}
          subHeading={"Can sort through information and only extract the important concepts. Able to take that research and solve the issue at hand."}
      
        />
        <ResumeHeading
          heading={"DETAIL-ORIENTED & RESULTS-DRIVEN"}
          subHeading={"Can spot areas that need improvement quickly while not getting hung up on unimportant details when short on time."}
      
        />
        <ResumeHeading
          heading={"CRITICAL THINKING"}
          subHeading={"Approaches problems from various angles with a well-rounded brain because of the variety of past jobs and problems solved."}
      
        />
        <ResumeHeading
          heading={"VERBAL & WRITTEN COMMUNICATION"}
          subHeading={"Experienced in technical writing and have developed verbal skills from a decade in sales."}
      
        />
        </div>
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

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="ASTRONOMY"
        description="As a kid growing up I dreamed of being an astronaut and had my own telescope, which I used to draw maps of the moon's craters. Nowadays, I have my own professional CMOS astronomical imaging camera that I use to image galaxies and nebulae."
      />
      <ResumeHeading
        heading="FREE DIVING"
        description="Holding my breath while diving to 80 feet in a magical kelp forest is exhilirating and the closest you can get to being on another planet. It is so quiet and serene without scuba tanks. I also clean trash floating in the kelp and occasionally spearfish when giant white sea bass are around."
      />
      <ResumeHeading
        heading="HOCKEY & BASEBALL"
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
        <IconContext.Provider value={index === selectedBulletIndex ? 
          {color: 'var(--orange)'} : {color: 'var(--blue-white)'}}>
        <div className='bullet-logo'>{bullet.icon}</div>
        </IconContext.Provider>
        <span className="bullet-label">{bullet.title}</span>
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
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"RESUME"} subHeading={"My Interactive Resume"} />
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