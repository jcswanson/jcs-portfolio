import { v4 as uuidv4 } from 'uuid';
import MoodyImg from '.cache/default-development/jcs-portfolio/src/assets/images/moody-logo.png';
import eFinanceImg from '.cache/default-development/jcs-portfolio/src/assets/images/efinance-screencast.gif';
import GreenCtgImg from '.cache/default-development/jcs-portfolio/src/assets/images/greenctg.jpg';
import PSUimg from '.cache/default-development/jcs-portfolio/src/assets/images/psu-adv.png';
import FishForecastImg from '.cache/default-development/jcs-portfolio/src/assets/images/fish-repo-logo.png';

const projects = [{
        id: uuidv4(),
        name: 'eFinance',
        techStack: ['Spring Boot', 'MySQL', 'Bootstrap'],
        source: 'https://github.com/jcswanson/eFinance',
        desc: 'A complex secure web application in which clients apply for different loans and admins then approve or deny the clients.',
        img: eFinanceImg,
    },
    {
        id: uuidv4(),
        name: 'Jcswanson.com Portfolio',
        techStack: ['React.js', 'Node.js', 'AWS'],
        source: 'https://github.com/jcswanson/jcswanson.com',
        desc: 'A personal portfolio single page app (SPA) and you\'re viewing it now. Deployed using AWS Amplify hooked into GitHub to provide CI/CD. Created to display professional details to future employers and build a personal brand.',
        img: GreenCtgImg,
    },
    {
        id: uuidv4(),
        name: '2D PSU Adventure Map Game',
        techStack: ['Java', 'Swing', 'XML'],
        source: 'https://github.com/jcswanson/psu-adventure-game',
        desc: 'Using this app you can track any e coin. Also you will get good advice about investment from the professional',
        img: PSUimg,
    },
    {
        id: uuidv4(),
        name: "Fish Forecaster",
        techStack: ['Spring Boot', 'REST APIs', 'MySQL'],
        source: 'https://github.com/jcswanson/Fish-Forecaster',
        desc: 'A web app built to consume open source REST API data, to track weather conditions and help users log their best locations to catch fish.',
        img: FishForecastImg,
    },
    {
        id: uuidv4(),
        name: 'Moodypedia',
        techStack: ['JavaFXML', 'SceneBuilder'],
        source: 'https://github.com/jcswanson/Moodypedia',
        desc: 'Users record their daily mood using colors and a custom calendar. Uses basic login authentication which stores account and registration details with serialization.        ',
        img: MoodyImg,
    },
];

export default projects;