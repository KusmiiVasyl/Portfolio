import htmlCSSProjImg from '..//assets/img/projects/HTML5,CSS3.PNG'
import weatherImg from '..//assets/img/projects/Weather.PNG'
import reactAddressesImg from '..//assets/img/projects/ReactAddresses.PNG'
import angularCarsImg from '..//assets/img/projects/AngularCars.PNG'
import javaNotebookService from '..//assets/img/projects/JavaNotebookService.PNG'
import homeOrganaizer from '..//assets/img/projects/HomeOrganaizer.PNG'
import chatMessanger from '..//assets/img/projects/ChatMessanger.PNG'
import victoryna from '..//assets/img/projects/Viktoryna.PNG'
import snake from '..//assets/img/projects/Snake.png'


export const projectsData = [
  {
    id: '1',
    image: htmlCSSProjImg,
    name: 'Site',
    category: 'HTML5/CSS3',
    hrefGit:'https://github.com/KusmiiVasyl/site-1.git',
    description:'Layout of the site according to the template.'
  },
  {
    id: '2',
    image: weatherImg,
    name: 'My weather',
    category: 'JavaScript',
    hrefGit:'https://github.com/KusmiiVasyl/MyWeather.git',
    description:'A small weather forecast project.\n' +
      'Used html, bootstrap5, css, javascript, weather API from openweathermap.'
  },
  {
    id: '3',
    image: reactAddressesImg,
    name: 'Addresses',
    category: 'React',
    hrefGit:'https://github.com/KusmiiVasyl/AddressDataReact.git',
    description:'Address database project using mockApi,' +
      ' address editing/adding/deleting, routing implemented, axios and redux connected.'
  },
  {
    id: '4',
    image: angularCarsImg,
    name: 'Base of cars',
    category: 'Angular',
    hrefGit:'https://github.com/KusmiiVasyl/CarsBase.git',
    description:'The car base project, angular material is connected, mockapi is used, the ability to ' +
      'add, edit, delete and search in google cars is made possible through the appropriate form.'
  },
  {
    id: '5',
    image: javaNotebookService,
    name: 'Notebook Service',
    category: 'Java/JavaSpring',
    hrefGit:'https://github.com/KusmiiVasyl/NotebookService.git',
    description:'Service for the manager who coordinates transportation,' +
      ' swagger is connected, all CRUD operations are written, the request' +
      ' for all objects is transferred to pagination.'
  },
  ,
  {
    id: '6',
    image: victoryna,
    name: 'Viktoryna',
    category: 'C#',
    hrefGit:'https://github.com/KusmiiVasyl/Viktoryna.git',
    description:'Console quiz program. It is possible to register a user and log in for an administrator.' +
      ' The user can choose and take appropriate quizzes, after which he will be added to the leaderboard.' +
      ' Admin can add, edit, delete quizzes, and view all user information.'
  },
  {
    id: '7',
    image: homeOrganaizer,
    name: 'Home Organaizer',
    category: 'C#/WPF',
    hrefGit:'https://github.com/KusmiiVasyl/Home-Organaizer.git',
    description:'The program is designed to keep notes on utility payments, and there is also a to-do list.'
  },
  {
    id: '8',
    image: chatMessanger,
    name: 'Chat Messanger',
    category: 'Android/Kotlin',
    hrefGit:'https://github.com/KusmiiVasyl/MainMessanger.git',
    description:'The chat project performs user registration and provides' +
      ' the possibility of conducting a chat between users, firebase acts as a backend.'
  },
  {
    id: '9',
    image: snake,
    name: 'Snake',
    category: 'C++',
    hrefGit:'https://github.com/KusmiiVasyl/Snake.git',
    description:'Console popular game snake.'
  }
];

export const projectNav = [
  {name: 'all'},
  {name: 'HTML5/CSS3'},
  {name: 'JavaScript'},
  {name: 'React'},
  {name: 'Angular'},
  {name: 'Java/JavaSpring'},
  {name: 'C#/WPF'},
  {name: 'C#'},
  {name: 'Android/Kotlin'},
  {name: 'C++'}
]

