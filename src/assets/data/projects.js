import { v4 as uuidv4 } from 'uuid';
import MoodyImg from '../images/Projects/moody-logo.png';
import eFinanceImg from '../images/Projects/efinance-screencast.gif';
import GreenCtgImg from '../images/Projects/greenctg.jpg';
import PSUimg from '../images/Projects/psu-adv.png';
import FishForecastImg from '../images/Projects/fish-repo-logo.png';

const projects = [{
        id: uuidv4(),
        name: 'eFinance',
        techStack: ['Spring Boot', 'MySQL', 'Bootstrap'],
        source: 'https://github.com/jcswanson/eFinance',
        desc: 'A secure web application in which clients apply for loans and administrators then review the applications to approve or deny the clients. Developed with basic Spring Security authentication and BCrypt password encryption.',
        img: eFinanceImg,
    },
    {
        id: uuidv4(),
        name: 'Jcswanson.com Portfolio',
        techStack: ['React.js', 'CSS', 'AWS'],
        source: 'https://github.com/jcswanson/jcswanson.com',
        desc: 'A personal portfolio single page app (SPA) and you\'re viewing it now. Deployed using AWS Amplify hooked into GitHub to provide CI/CD. Created to display professional details to future employers and build a personal brand.',
        img: GreenCtgImg,
    },
    {
        id: uuidv4(),
        name: '2D PSU Adventure Map Game',
        techStack: ['Java', 'Swing', 'XML'],
        source: 'https://github.com/jcswanson/psu-adventure-game',
        desc: 'Role-playing Java game with a bird\'s eye view world map and character movement between castles where the user plays mini games to conquer the map. Graphics built with Photoshop and Java Swing for GUI and XML documents for storing game data. Three different themes and characters demonstrates good SOLID and OOP principles. Developed by my teammates and I in PSU Class IST 240. ',
        img: PSUimg,
    },
    {
        id: uuidv4(),
        name: "Fish Forecaster",
        techStack: ['Spring Boot', 'Open APIs', 'MySQL'],
        source: 'https://github.com/jcswanson/Fish-Forecaster',
        desc: 'A web app built to consume open source REST API data, to track weather conditions and help users log their best locations to catch fish.',
        img: FishForecastImg,
    },
    {
        id: uuidv4(),
        name: 'Moodypedia',
        techStack: ['JavaFXML', 'SceneBuilder'],
        source: 'https://github.com/jcswanson/moodypedia',
        desc: 'Users record their daily mood using colors and a custom calendar. Uses basic login authentication which stores account and registration details with serialization.        ',
        img: MoodyImg,
    },
];

export default projects;