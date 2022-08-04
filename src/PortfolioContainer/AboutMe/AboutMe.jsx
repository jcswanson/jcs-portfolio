import React, { useEffect } from 'react';
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import Leetcode from '../../assets/images/AboutMe/leetcode-logo.png';
import HackerRank from '../../assets/images/AboutMe/hackerrank-logo.png';
import './AboutMe.css';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
    <div> 
       {/* <p><strong>"Change is inevitable. Growth is optional." - John C. Maxwell</strong></p> */}

    <p>Growing up I was a science nerd. If it included astronomy or spaceflight I was watching or 
      reading it. My dream was to be an astronaut but after high school, my eyesight was horrible and in 2004 all astronauts had to be pilots. </p>

      <p>Instead, I had jobs ranging from flooring salesman to aerospace quality control, to retail sales, 
        and rideshare driver. I was unhappy and looking for change. </p>
     
      <p>My programming journey started by watching SpaceX land their reusable Falcon 9 rockets on barges 
        in the ocean. Since rockets involve spaceflight, I needed to know more about 
        how these landings were even possible. </p>

        <p>I researched it and read about the rocket flight control software. It allowed them to be steered by grid fins
           and thus able to land. </p>

      <p>Intrigued, I bought an Arduino flight controller and wrote some basic code to command a drone to
         fly between two waypoints and land. That drone did exactly what I told it to and I was amazed. </p> 

   <p>I could see now that programming had unlimited potential. However, I knew how challenging the job market is in the tech industry, 
    so I began attending at Penn State University. </p>
    
    <p>In the years since enrollment, I have learnt several new languages and built a portfolio of projects, 
      much of which is in the projects section.</p>

   <p>In the future, I will be contributing to open-source projects, collaborating with others, and expanding my portfolio. </p>

      <p>Outside of coding I enjoy fishing, diving, and protesting for the health of our coastal kelp beds 
        around Southern California.  
      </p>
    </div>,
    highlights: {
      bullets: [
        'IntellijIDEA Ultimate, VSCode, Eclipse, Netbeans',
        'Microsoft Office, Teams, Discord, Slack',
        'JIRA, Trello, GitHub, Lucidchart, Visio',
        'Google Apps, WordPress, Postman',
        'MySQL, PostgreSQL',
        'Amazon Web Services Lambda, IAM, and S3',
        'Windows 10, MacOSx',
      ],
      heading: 'Software Skills',
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'> </div> <span> {value} </span>
      </div>
    ));
  };

  return (
    <div
      className='about-me-container  screen-container fade-in'
      id={props.id || ''}>
      <div className='about-me-parent'>
        <ScreenHeading title={'ABOUT ME'} subHeading={'How I Got Into Software'} />
        <div className='about-me-card'>
          <div className='about-me-profile'> </div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              
              {SCREEN_CONSTANTS.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span> {SCREEN_CONSTANTS.highlights.heading} </span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
             <p> <strong>DSA Problem Solving Abilities  ▼</strong></p>
             <a href='https://hackerrank.com/jcswanson' alt='HackerRank Link'> 
             <img  className='code-social' src={HackerRank} alt="HackerRank Logo" /></a>
             <a href='https://leetcode.com/jcswanson' alt='LeetCode Link'> 
              <img  className='code-social' src={Leetcode} alt="LeetCode link"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
