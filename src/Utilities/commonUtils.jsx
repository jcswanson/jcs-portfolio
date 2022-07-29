import Home from ".cache/default-development/jcs-portfolio/src/PortfolioContainer/Home/Home";
import AboutMe from ".cache/default-development/jcs-portfolio/src/PortfolioContainer/AboutMe/AboutMe";
import Resume from ".cache/default-development/jcs-portfolio/src/PortfolioContainer/Resume/Resume";
import Projects from "../PortfolioContainer/Projects/Projects";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "home",
    component: Home,
  },
  {
    screen_name: "about",
    component: AboutMe,
  },
  {
    screen_name: "resume",
    component: Resume,
  },
  {
    screen_name: "projects",
    component: Projects,
  },
  {
    screen_name: "testimonials",
    component: Testimonial,
  },
  {
    screen_name: "contact",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};