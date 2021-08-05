import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import clima from '../images/clima.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'PharmaGo+',
    desc:
      'Automate delivery operations for pharma company. Features: authentication, Api handling, redux thunk, nested nav, more...',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Climbing Loc',
    desc:
      'Helps people to find the most suitable climbing spot. Features: Gps, Navigation, Authentication, Global State, maps, more...',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: '+Movil Comisiones',
    desc:
      'Helps to handle sells on mobile simcards. Features: code bar scanner, users roles, UI bar chart, RN Cli. ',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Contacts App',
    desc:
      'My first app y ever made. It utilices phone contacts API. Features: make calls, add, edit and delete contacts from your phone. UI native base.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Personal Portfolio',
    desc:
      'Edited existing proyect made in ReatJs, with styled components, added some features like email sending in contact page.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'More...',
    desc:
      'Lots of minors proyects like, classical ToDosApp, Wheather App, Some Native Android Works(kioskModeFeature) and on.',
    img: clima,
  },
];

export default projects;
