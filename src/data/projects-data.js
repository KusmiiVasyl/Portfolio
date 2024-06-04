import htmlCSSProjImg from "..//assets/img/projects/HTML5,CSS3.PNG";
import weatherImg from "..//assets/img/projects/Weather.PNG";
import reactAddressesImg from "..//assets/img/projects/ReactAddresses.PNG";
import angularCarsImg from "..//assets/img/projects/AngularCars.PNG";
import javaNotebookService from "..//assets/img/projects/JavaNotebookService.PNG";
import homeOrganaizer from "..//assets/img/projects/HomeOrganaizer.PNG";
import chatMessanger from "..//assets/img/projects/ChatMessanger.PNG";
import victoryna from "..//assets/img/projects/Viktoryna.PNG";
import bookLibrary from "..//assets/img/projects/BookLibrary.PNG";
import snake from "..//assets/img/projects/Snake.png";
import rentLuxuryCar from "..//assets/img/projects/RentLuxuryCar.PNG";

export const projectsData = [
  {
    id: "1",
    image: htmlCSSProjImg,
    name: "Site",
    category: "HTML5/CSS3",
    hrefGit: "https://github.com/KusmiiVasyl/site-1.git",
    description: "Layout of the site according to the template.",
  },
  {
    id: "2",
    image: weatherImg,
    name: "My weather",
    category: "JavaScript",
    hrefGit: "https://github.com/KusmiiVasyl/MyWeather.git",
    description:
      "A small weather forecast project.\n" +
      "Used html, bootstrap5, css, javascript, weather API from openweathermap.",
  },
  {
    id: "3",
    image: reactAddressesImg,
    name: "Addresses",
    category: "React",
    hrefGit: "https://github.com/KusmiiVasyl/AddressDataReact.git",
    description:
      "Address database project using mockApi," +
      " address editing/adding/deleting, routing implemented, axios and redux connected.",
  },
  {
    id: "4",
    image: angularCarsImg,
    name: "Base of cars",
    category: "Angular",
    hrefGit: "https://github.com/KusmiiVasyl/CarsBase.git",
    description:
      "The car base project, angular material is connected, mockapi is used, the ability to " +
      "add, edit, delete and search in google cars is made possible through the appropriate form.",
  },
  {
    id: "5",
    image: javaNotebookService,
    name: "Notebook Service",
    category: "Java/JavaSpring",
    hrefGit: "https://github.com/KusmiiVasyl/NotebookService.git",
    description:
      "Service for the manager who coordinates transportation," +
      " swagger is connected, all CRUD operations are written, the request" +
      " for all objects is transferred to pagination.",
  },
  {
    id: "6",
    image: victoryna,
    name: "Viktoryna",
    category: "C#",
    hrefGit: "https://github.com/KusmiiVasyl/Viktoryna.git",
    description:
      "Console quiz program. It is possible to register a user and log in for an administrator." +
      " The user can choose and take appropriate quizzes, after which he will be added to the leaderboard." +
      " Admin can add, edit, delete quizzes, and view all user information.",
  },
  {
    id: "7",
    image: homeOrganaizer,
    name: "Home Organaizer",
    category: "C#/WPF",
    hrefGit: "https://github.com/KusmiiVasyl/Home-Organaizer.git",
    description:
      "The program is designed to keep notes on utility payments, and there is also a to-do list.",
  },
  {
    id: "8",
    image: chatMessanger,
    name: "Chat Messanger",
    category: "Android/Kotlin",
    hrefGit: "https://github.com/KusmiiVasyl/MainMessanger.git",
    description:
      "The chat project performs user registration and provides" +
      " the possibility of conducting a chat between users, firebase acts as a backend.",
  },
  {
    id: "9",
    image: snake,
    name: "Snake",
    category: "C++",
    hrefGit: "https://github.com/KusmiiVasyl/Snake.git",
    description: "Console popular game snake.",
  },
  {
    id: "10",
    image: bookLibrary,
    name: "Book Library App",
    category: "React",
    hrefGit: "https://github.com/KusmiiVasyl/Book-Library-Redux-.git",
    description:
      "The possibility of adding books to the list in three ways has been developed: " +
      "manually, randomly (from the list of books that are in the program in the json list) and randomly" +
      " from the server (a simple server has been created on node.js). You can also delete a book from" +
      " the added list of books, mark it as a favorite. Made it possible to filter books by title, author" +
      " and favorite. All states are rendered in redux, if an error occurs a message appears in the upper" +
      " right window of the screen.",
  },
  {
    id: "11",
    image: rentLuxuryCar,
    name: "Rent Luxury Car",
    category: "React",
    hrefGit: "https://github.com/KusmiiVasyl/rent-luxury-car",
    description: `This site is intended for renting luxury cars. We can view cars using a slide, list, see car characteristics,
       add (delete) cars to favorites, add (delete) car to the garage. In the slide, you can also watch a video trailer
       about this car. When you click on car rental, the car rental form opens, but only if the user has entered his
       data, if not, then a corresponding message will be displayed from which we can immediately proceed to registration.
       In the user data entry form, you need to enter the relevant data and you can add a photo. When the car rental
       form is filled out and sent, the lessor receives an email with all the information and then we can contact the lessee.
       In this project I used:bootstrap, bootstrap-icons;react-icons;axios;@emailjs/browser;react-datepicker;react-hook-form;
       react-router-dom;react-spinners;react-toastify;swiper;zustand;`,
  },
];

export const projectNav = [
  { name: "all" },
  { name: "HTML5/CSS3" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Angular" },
  { name: "Java/JavaSpring" },
  { name: "C#/WPF" },
  { name: "C#" },
  { name: "Android/Kotlin" },
  { name: "C++" },
];
