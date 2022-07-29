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
    <div>  <p><strong>"Change is inevitable. Growth is optional." - John C. Maxwell</strong></p>
    <p>After going from quality control, to sales, and retail jobs, I knew that 
      in order to grow with the changing job market, I had to go back to finish 
      college.</p>
      <p>As horrible as COVID's impact was on the world, it also
         awakened many to making changes that improved their quality of life.</p>
     
      <p>I made a decision to back to school to build career growth instead of 
         trying to apply to tech positions without experience. Industries like 3D printing, 
        the IoT, green industry, and reusable rockets will provide an exciting future.</p>
        <p>So, I started programming in Java at Penn State and self-learning Python.</p>
      <p>I was hooked on development after doing my first debugging. 
        I used my detail-oriented skills to sift thru code and then I get 
        to turn around to use creativity to design a solution to the problem.</p> 
   <p>Prior experience with aerospace quality control has given skills me to find 
         fine details, document any abnormalities, and communicate well within my organization.</p>
      <p>Outside of coding I enjoy fishing, diving, and protesting for the health of our coastal kelp beds 
        around Southern California.  
      </p>
    </div>,
    highlights: {
      bullets: [
        'IntellijIDEA Ultimate, Eclipse, Netbeans',
        'Microsoft Office, Microsoft Teams, Discord, Slack',
        'JIRA, Trello, GitHub, Lucidchart, Microsoft Visio',
        'Raspbian OS, Raspberry Pi Model 4',
        'WordPress and Drupal',
        'Postman and cURL',
        'MySQL, PostgreSQL',
        'Amazon Web Services IAM, Lambda, S3',
        'Windows 10, Linux, MacOSx',
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
