import { v4 as uuidv4 } from "uuid";
import MoodyImg from "../images/Projects/moody-logo.png";
import eFinanceImg from "../images/Projects/efinance-screencast.gif";
import RegistryImg from "../images/Projects/OGCRegistryD100.gif";
import PortfolioImg from "../images/Projects/jcswanson-screenshot.png";
import PSUImg from "../images/Projects/psu-adv.png";
import FishForecastImg from "../images/Projects/fish-repo-logo.png";
import StoryMapsImg from "../images/Projects/storymap-arcgis.png";

const projects = [
  {
    id: uuidv4(),
    name: "eFinance",
    techStack: ["Spring Boot", "MySQL", "Bootstrap"],
    source: "https://github.com/jcswanson/eFinance",
    desc: "A secure web application in which clients apply for loans and administrators then review the applications to approve or deny the clients. Developed with basic Spring Security authentication and BCrypt password encryption.",
    img: eFinanceImg,
  },
  {
    id: uuidv4(),
    name: "OGC Disaster Pilot Data Registry",
    techStack: ["ArcGIS Online", "ArcGIS Hub", "APIs", "HTML/CSS"],
    source: "https://ogc2023pilots-geoplatform.hub.arcgis.com/",
    desc: "As Project Manager my team and I built a data registry to satisfy the requirements of the 2023 OGC Disaster Pilot that required supporting near-real-time registration, search, and discovery of ARD data sources, DRI workflows, and DRI-focused applications. Still in development so you need an ArcGIS account to view link.",
    img: RegistryImg,
  },
  {
    id: uuidv4(),
    name: "React Portfolio",
    techStack: ["React.js", "CSS", "AWS"],
    source: "https://github.com/jcswanson/jcswanson.com",
    desc: "A personal portfolio single page app (SPA) and you're viewing it now. Deployed using AWS Amplify hooked into GitHub to provide CI/CD. Created to display professional details to future employers and build a personal brand.",
    img: PortfolioImg,
  },
  {
    id: uuidv4(),
    name: "Penn State RPG Game",
    techStack: ["Java", "Swing", "XML"],
    source: "https://github.com/jcswanson/psu-adventure-game",
    desc: "RPG Java game with a 2D world built using the MVC design pattern. Front-end built using Java Swing and XML to store game data. Three game themes used to demonstrate OOP principles.",
    img: PSUImg,
  },
  {
    id: uuidv4(),
    name: "Fish Forecaster",
    techStack: ["Spring Boot", "Open APIs", "MySQL"],
    source: "https://github.com/jcswanson/Fish-Forecaster",
    desc: "A web app built to consume open source REST API data, to track weather conditions and help users log their best locations to catch fish.",
    img: FishForecastImg,
  },
  {
    id: uuidv4(),
    name: "Moodypedia",
    techStack: ["JavaFXML", "SceneBuilder"],
    source: "https://github.com/jcswanson/moodypedia",
    desc: "Users record their daily mood using colors and a custom calendar. Uses basic login authentication which stores account and registration details with serialization.        ",
    img: MoodyImg,
  },
  {
    id: uuidv4(),
    name: "ArcGIS Online Portfolio",
    techStack: ["ESRI", "ArcGIS StoryMaps", "AGOL"],
    source: "https://storymaps.arcgis.com/stories/e5aa3e50227d4c47b3320d4b4e1a5006/",
    desc: "My version of this website built using ArcGIS StoryMaps during my internship with the USGS Federal Geographic Data Committee and demonstrating my knowledge of ArcGIS Online SaaS.",
    img: StoryMapsImg,
  },
];

export default projects;
